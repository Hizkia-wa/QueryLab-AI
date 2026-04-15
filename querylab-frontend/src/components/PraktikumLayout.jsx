import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PraktikumLayout({ soalData }) {
  const { id } = useParams();
  const currentModulId = Number(id);

  const [selectedSoal, setSelectedSoal] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  // Mengatur soal default saat modul dimuat atau berganti
  useEffect(() => {
    if (soalData && soalData.length > 0) {
      setSelectedSoal(soalData[0]);
      resetState();
    }
  }, [id, soalData]);

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
      
      // PERBAIKAN: Selalu ambil dari tabelKiri sesuai struktur datamu
      const dataSource = selectedSoal.tabelSkema.tabelKiri;

      if (userQuery.includes("select *")) {
        setResult(dataSource);
      } else {
        try {
          // Ekstraksi kolom dari expectedQuery (misal: nama_karyawan, jabatan)
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
          setResult(dataSource);
        }
      }
    } else {
      setStatus("salah");
      setResult("❌ Query salah atau tidak sesuai instruksi.");
    }
  };

  const RenderTable = ({ data, label, color }) => {
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
              <table className="table table-hover mb-0" style={{ fontSize: "12px" }}>
                <thead className="bg-light">
                  <tr className="text-secondary">
                    {Object.keys(data[0]).map((k) => (
                      <th key={k} className="border-0 px-3 py-2">{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((r, i) => (
                    <tr key={i}>
                      {Object.values(r).map((v, j) => (
                        <td key={j} className="px-3 py-2">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-3 text-center text-muted small">Data tidak tersedia</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (!selectedSoal) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <nav className="navbar border-bottom bg-white px-4 sticky-top shadow-sm py-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold text-primary">
            SQL<span>Lab AI</span>
          </Link>
          <div className="ms-auto d-flex align-items-center gap-3">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
              Modul {currentModulId}
            </span>
            <Link to="/modul" className="btn btn-outline-dark btn-sm rounded-pill px-3">Keluar</Link>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-5 px-lg-5">
        <div className="row g-4">
          
          {/* PANEL KIRI: INSTRUKSI & SKEMA */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-white">
              <label className="fw-bold text-muted small text-uppercase mb-3">Tantangan</label>
              <div className="d-flex flex-wrap gap-2">
                {soalData.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedSoal(s); resetState(); }}
                    className={`btn rounded-3 ${selectedSoal.id === s.id ? "btn-primary shadow" : "btn-light text-secondary"}`}
                    style={{ width: "40px", height: "40px", fontWeight: "bold" }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
              <h4 className="fw-bold text-dark">{selectedSoal.judul}</h4>
              <p className="text-muted small">{selectedSoal.materi}</p>
              <div className="bg-primary bg-opacity-10 p-3 rounded-3 border-start border-primary border-4">
                <p className="mb-0 fw-medium small">{selectedSoal.instruksi}</p>
              </div>
            </div>

            <label className="fw-bold text-muted small text-uppercase mb-2">Database Schema</label>
            <RenderTable data={selectedSoal.tabelSkema.tabelKiri} label="Tabel Aktif" color="primary" />
          </div>

          {/* PANEL KANAN: EDITOR & HASIL */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4 bg-dark">
              <div className="px-4 py-2 d-flex justify-content-between align-items-center">
                <span className="text-white-50 x-small">SQL Console</span>
                <div className="d-flex gap-1">
                  <div className="bg-danger rounded-circle" style={{width: '8px', height: '8px'}}></div>
                  <div className="bg-success rounded-circle" style={{width: '8px', height: '8px'}}></div>
                </div>
              </div>
              <textarea
                className="form-control border-0 bg-dark text-info p-4"
                style={{ height: "220px", fontFamily: "'Fira Code', monospace", fontSize: "15px" }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="-- Tulis SQL di sini..."
              />
              <div className="p-3 d-flex justify-content-end gap-2 bg-dark">
                <button className="btn btn-link text-white-50 text-decoration-none" onClick={resetState}>Reset</button>
                <button className="btn btn-primary px-4 fw-bold rounded-pill" onClick={handleRun}>Run Query</button>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 bg-white p-4">
              {!result && <p className="text-center text-muted m-0">Hasil query akan muncul di sini.</p>}
              
              {status === "salah" && (
                <div>
                  <div className="alert alert-danger border-0 rounded-3 small">{result}</div>
                  <div className="alert alert-warning border-0 rounded-3 small">
                    <strong>Hint:</strong> {selectedSoal.hint}
                  </div>
                </div>
              )}

              {status === "benar" && (
                <div>
                  <div className="alert alert-success border-0 rounded-3 fw-bold mb-3">✨ Query Berhasil!</div>
                  <RenderTable data={result} label="Query Output" color="dark" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}