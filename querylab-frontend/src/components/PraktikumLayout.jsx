import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import soalData from "../data/soal";

export default function PraktikumLayout() {
  const { id } = useParams();
  const currentModulId = Number(id);

  const filteredSoal = soalData
    .filter((s) => s.modulId === currentModulId)
    .sort((a, b) => a.id - b.id);

  const [selectedSoal, setSelectedSoal] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (filteredSoal.length > 0) {
      setSelectedSoal(filteredSoal[0]);
      resetState();
    }
  }, [id]);

  const resetState = () => {
    setQuery("");
    setResult(null);
    setStatus("");
  };

  const normalize = (text) => text.toLowerCase().trim().replace(/\s+/g, " ");

  const handleRun = () => {
    if (!query || !selectedSoal) {
      setStatus("error");
      setResult("Query tidak boleh kosong!");
      return;
    }

    const userQuery = normalize(query);
    const correctQuery = normalize(selectedSoal.expectedQuery || "");

    if (userQuery === correctQuery) {
      setStatus("benar");
      const dataSource = selectedSoal.tabelSkema.tabelKiri || selectedSoal.tabelSkema;

      if (userQuery.includes("select *")) {
        setResult(dataSource);
      } else {
        const columns = selectedSoal.expectedQuery
          .toLowerCase()
          .replace("select", "")
          .split("from")[0]
          .split(",")
          .map((c) => c.trim().split(".").pop());

        const filteredData = dataSource.map((item) => {
          let row = {};
          columns.forEach((col) => {
            if (item[col] !== undefined) row[col] = item[col];
          });
          return row;
        });
        setResult(filteredData);
      }
    } else {
      setStatus("salah");
      setResult("❌ Query salah atau tidak sesuai instruksi. Coba periksa lagi!");
    }
  };

  if (!selectedSoal) return <div className="p-5 text-center">Loading...</div>;

  // Helper untuk Render Tabel agar terlihat "Mewah"
  const RenderTable = ({ data, label, color }) => (
    <div className="mb-4">
      <h6 className={`small fw-bold text-${color} mb-3 d-flex align-items-center`}>
        <span className={`badge bg-${color} bg-opacity-10 text-${color} me-2 px-3 py-2 rounded-pill`}>
          {label}
        </span>
      </h6>
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white p-2">
         <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle" style={{ fontSize: "12px" }}>
              <thead className="bg-light">
                <tr className="text-secondary">
                  {Object.keys(data[0]).map(k => <th key={k} className="border-0 px-3 py-2">{k}</th>)}
                </tr>
              </thead>
              <tbody className="border-top-0">
                {data.map((r, i) => (
                  <tr key={i}>
                    {Object.values(r).map((v, j) => <td key={j} className="px-3 py-2 border-bottom-light">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* NAVBAR MODERN */}
      <nav className="navbar navbar-expand-lg border-bottom bg-white px-4 sticky-top shadow-sm py-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold fs-4 text-dark d-flex align-items-center">
            <div className="bg-primary rounded-3 p-1 me-2 shadow-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 17v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M4 7l8 4 8-4M4 17l8-4 8 4"/></svg>
            </div>
            <span><span className="text-primary">SQL</span>Lab AI</span>
          </Link>
          <div className="ms-auto d-flex align-items-center gap-3">
            <div className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-pill fw-bold small">Modul {currentModulId}</div>
            <Link to="/" className="btn btn-dark btn-sm rounded-pill px-4 fw-medium shadow-sm">Keluar</Link>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-5 px-lg-5">
        <div className="row g-5">
          
          {/* PANEL KIRI */}
          <div className="col-lg-4">
            
            {/* 1. TANTANGAN (NAVIGASI) */}
            <section className="mb-4">
               <label className="fw-bold text-muted small text-uppercase mb-3 d-block letter-spacing-1">Tantangan</label>
               <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
                  <div className="d-flex flex-wrap gap-2">
                    {filteredSoal.map((s, index) => (
                      <button
                        key={s.id}
                        onClick={() => { setSelectedSoal(s); resetState(); }}
                        className={`btn transition-all border-0 rounded-3 p-0 d-flex align-items-center justify-content-center ${
                          selectedSoal.id === s.id ? "btn-primary shadow-lg" : "btn-light text-secondary"
                        }`}
                        style={{ width: "42px", height: "42px", fontWeight: "700" }}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
               </div>
            </section>

            {/* 2. DETAIL SOAL */}
            <section className="mb-4">
               <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-dark mb-3">{selectedSoal.judul}</h4>
                    <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>{selectedSoal.materi}</p>
                    
                    <div className="bg-primary bg-opacity-10 p-4 rounded-4 border-start border-primary border-5">
                      <h6 className="fw-bold text-primary mb-2">Tugas Utama:</h6>
                      <p className="mb-0 text-dark fw-medium fs-6">{selectedSoal.instruksi}</p>
                    </div>
                  </div>
                  {selectedSoal.hint && (
                    <div className="card-footer bg-light border-0 px-4 py-3">
                      <small className="text-muted d-flex align-items-start">
                        <span className="me-2 text-warning fs-5">💡</span>
                        <span><strong>Tip:</strong> {selectedSoal.hint}</span>
                      </small>
                    </div>
                  )}
               </div>
            </section>

            {/* 3. REFERENSI TABEL (DENGAN EFEK CARD DI BELAKANG) */}
            <section>
               <label className="fw-bold text-muted small text-uppercase mb-3 d-block letter-spacing-1">Database Schema</label>
               {selectedSoal.tabelSkema.tabelKiri ? (
                 <>
                   <RenderTable data={selectedSoal.tabelSkema.tabelKiri} label="Table A: Data Master" color="primary" />
                   <RenderTable data={selectedSoal.tabelSkema.tabelKanan} label="Table B: Data Relasi" color="success" />
                 </>
               ) : (
                 <RenderTable data={selectedSoal.tabelSkema} label="Tabel Aktif" color="primary" />
               )}
            </section>
          </div>

          {/* PANEL KANAN */}
          <div className="col-lg-8">
            {/* EDITOR AREA */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5">
              <div className="card-header bg-dark d-flex justify-content-between align-items-center px-4 py-3">
                <div className="d-flex align-items-center">
                   <div className="bg-secondary bg-opacity-25 p-2 rounded-2 me-2">
                      <code className="text-info small fw-bold">SQL</code>
                   </div>
                   <span className="text-white-50 small fw-medium">Query Console</span>
                </div>
                <div className="d-flex gap-2">
                   <div className="rounded-circle" style={{width: '10px', height: '10px', backgroundColor: '#FF5F56'}}></div>
                   <div className="rounded-circle" style={{width: '10px', height: '10px', backgroundColor: '#FFBD2E'}}></div>
                   <div className="rounded-circle" style={{width: '10px', height: '10px', backgroundColor: '#27C93F'}}></div>
                </div>
              </div>
              <textarea
                className="form-control border-0 bg-dark text-info p-4"
                style={{ 
                  height: "320px", 
                  fontFamily: "'Fira Code', monospace", 
                  fontSize: "18px", 
                  lineHeight: "1.5",
                  outline: "none", 
                  resize: "none",
                  letterSpacing: "0.5px"
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="-- Tulis perintah SQL di sini..."
              />
              <div className="card-footer bg-dark border-top border-white border-opacity-10 d-flex justify-content-between align-items-center p-4">
                <span className="text-muted small italic">Pastikan akhiran query sudah benar.</span>
                <div>
                   <button className="btn btn-link text-white text-decoration-none me-4 fw-medium" onClick={resetState}>Reset</button>
                   <button className="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow" onClick={handleRun}>Run Query</button>
                </div>
              </div>
            </div>

            {/* OUTPUT AREA */}
            <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
              <div className="card-header bg-white border-0 pt-4 px-4">
                <h6 className="fw-bold text-muted text-uppercase small letter-spacing-1">Query Result</h6>
              </div>
              <div className="card-body p-4">
                {!result && (
                  <div className="text-center py-5">
                    <div className="opacity-25 mb-3 text-primary">
                        <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M12.354 4.354a.5.5 0 0 0-.708-.708L8 7.293 4.354 3.646a.5.5 0 1 0-.708.708L7.293 8l-3.647 3.646a.5.5 0 0 0 .708.708L8 8.707l3.646 3.647a.5.5 0 0 0 .708-.708L8.707 8l3.647-3.646z"/></svg>
                    </div>
                    <p className="text-muted">Siap untuk eksekusi. Hasil query akan tampil di sini.</p>
                  </div>
                )}
                
                {status === "salah" && <div className="alert alert-danger rounded-4 border-0 p-3 shadow-sm animate__animated animate__shakeX">{result}</div>}
                {status === "error" && <div className="alert alert-warning rounded-4 border-0 p-3 shadow-sm">{result}</div>}

                {status === "benar" && Array.isArray(result) && result.length > 0 && (
                  <div className="animate__animated animate__fadeInUp">
                    <div className="alert alert-success border-0 rounded-4 p-3 shadow-sm mb-4 d-flex align-items-center">
                      <span className="fs-4 me-3">✨</span>
                      <div>
                        <strong className="d-block text-success">Query Berhasil!</strong>
                        <small>Data berhasil ditarik dari database simulasi.</small>
                      </div>
                    </div>
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <thead className="table-dark border-0">
                            <tr>{Object.keys(result[0]).map(k => <th key={k} className="px-4 py-3">{k}</th>)}</tr>
                          </thead>
                          <tbody>
                            {result.map((row, i) => (
                              <tr key={i}>
                                {Object.values(row).map((v, j) => <td key={j} className="px-4 py-3">{v}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}