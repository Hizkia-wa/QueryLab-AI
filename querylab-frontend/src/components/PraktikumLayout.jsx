import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import soalData from "../data/soal";

export default function PraktikumLayout() {
  const { id } = useParams();
  const currentModulId = Number(id);

  // Mengambil soal berdasarkan ID modul
  const filteredSoal = soalData
    .filter((s) => s.modulId === currentModulId)
    .sort((a, b) => a.id - b.id);

  const [selectedSoal, setSelectedSoal] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (filteredSoal.length > 0) {
      // Pastikan memilih soal pertama dari modul yang aktif saat ID berubah
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
        // Logika ekstraksi kolom yang lebih aman
        try {
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
        } catch (e) {
          setResult(dataSource); // Fallback ke data asli jika parser gagal
        }
      }
    } else {
      setStatus("salah");
      setResult("❌ Query salah atau tidak sesuai instruksi. Coba periksa lagi!");
    }
  };

  // --- PERBAIKAN UTAMA: RENDER TABLE DENGAN GUARD CLAUSE ---
  const RenderTable = ({ data, label, color }) => {
    // Cek apakah data valid dan memiliki isi
    const isValid = data && Array.isArray(data) && data.length > 0;

    return (
      <div className="mb-4">
        <h6 className={`small fw-bold text-${color} mb-3 d-flex align-items-center`}>
          <span className={`badge bg-${color} bg-opacity-10 text-${color} me-2 px-3 py-2 rounded-pill`}>
            {label}
          </span>
        </h6>
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white p-2">
          <div className="table-responsive">
            {isValid ? (
              <table className="table table-hover mb-0 align-middle" style={{ fontSize: "12px" }}>
                <thead className="bg-light">
                  <tr className="text-secondary">
                    {/* Object.keys hanya dipanggil jika data[0] dipastikan ada */}
                    {Object.keys(data[0]).map((k) => (
                      <th key={k} className="border-0 px-3 py-2">{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  {data.map((r, i) => (
                    <tr key={i}>
                      {Object.values(r).map((v, j) => (
                        <td key={j} className="px-3 py-2 border-bottom-light">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-3 text-center text-muted italic">Data tidak tersedia</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (!selectedSoal) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* NAVBAR */}
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
            <section className="mb-4">
               <label className="fw-bold text-muted small text-uppercase mb-3 d-block">Tantangan</label>
               <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
                  <div className="d-flex flex-wrap gap-2">
                    {filteredSoal.map((s, index) => (
                      <button
                        key={s.id}
                        onClick={() => { setSelectedSoal(s); resetState(); }}
                        className={`btn border-0 rounded-3 p-0 d-flex align-items-center justify-content-center ${
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

            <section className="mb-4">
               <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-dark mb-3">{selectedSoal.judul}</h4>
                    <p className="text-muted mb-4">{selectedSoal.materi}</p>
                    <div className="bg-primary bg-opacity-10 p-4 rounded-4 border-start border-primary border-5">
                      <h6 className="fw-bold text-primary mb-2">Tugas Utama:</h6>
                      <p className="mb-0 text-dark fw-medium">{selectedSoal.instruksi}</p>
                    </div>
                  </div>
               </div>
            </section>

            <section>
               <label className="fw-bold text-muted small text-uppercase mb-3 d-block">Database Schema</label>
               {selectedSoal.tabelSkema.tabelKiri ? (
                 <>
                   <RenderTable data={selectedSoal.tabelSkema.tabelKiri} label="Table A" color="primary" />
                   <RenderTable data={selectedSoal.tabelSkema.tabelKanan} label="Table B" color="success" />
                 </>
               ) : (
                 <RenderTable data={selectedSoal.tabelSkema} label="Tabel Aktif" color="primary" />
               )}
            </section>
          </div>

          {/* PANEL KANAN */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5">
              <div className="card-header bg-dark px-4 py-3 d-flex justify-content-between">
                <span className="text-white-50 small fw-medium">Query Console</span>
                <div className="d-flex gap-2">
                   <div className="rounded-circle" style={{width: '10px', height: '10px', backgroundColor: '#FF5F56'}}></div>
                   <div className="rounded-circle" style={{width: '10px', height: '10px', backgroundColor: '#27C93F'}}></div>
                </div>
              </div>
              <textarea
                className="form-control border-0 bg-dark text-info p-4"
                style={{ height: "250px", fontFamily: "'Fira Code', monospace", fontSize: "16px", resize: "none" }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="-- Tulis SQL di sini..."
              />
              <div className="card-footer bg-dark border-top border-white border-opacity-10 d-flex justify-content-end p-3">
                <button className="btn btn-link text-white text-decoration-none me-3" onClick={resetState}>Reset</button>
                <button className="btn btn-primary rounded-pill px-4 fw-bold" onClick={handleRun}>Run Query</button>
              </div>
            </div>

            {/* HASIL QUERY */}
            <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
              <div className="card-body p-4">
                {!result && <p className="text-center text-muted py-4">Hasil query akan tampil di sini.</p>}
                
                {(status === "salah" || status === "error") && (
                  <div className="alert alert-danger border-0 rounded-4">{result}</div>
                )}

                {status === "benar" && (
                  <div className="animate__animated animate__fadeIn">
                    <div className="alert alert-success border-0 rounded-4 mb-4">
                      <strong>✨ Query Berhasil!</strong>
                    </div>
                    {/* Render hasil query menggunakan RenderTable yang sudah aman */}
                    <RenderTable data={result} label="Query Output" color="dark" />
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