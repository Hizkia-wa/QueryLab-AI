import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PraktikumLayout({ soalData }) {
  const [selectedSoal, setSelectedSoal] = useState(soalData[0]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleRun = () => {
    if (selectedSoal.id === 1) {
      setResult(selectedSoal.tabelSkema.filter(item => item.stok < 20));
    } else if (selectedSoal.id === 2) {
      setResult(
        selectedSoal.tabelSkema
          .filter(item => item.kategori === "Energi")
          .map(({ nama_produk, harga }) => ({ nama_produk, harga }))
      );
    }
  };

  return (
    <div style={{ backgroundColor: "#F3F4F6", minHeight: "100vh", fontFamily: "'Segoe UI', Roboto, sans-serif" }}>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg shadow-sm px-4" style={{ backgroundColor: "#1e293b" }}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold text-white">
            <span style={{ color: "#38bdf8" }}>SQL</span> Challenge
            <small className="fw-light opacity-50 ms-2">| Manufaktur & Energi</small>
          </span>
        </div>
      </nav>

      <div className="container-fluid py-4 px-4">
        <div className="row g-4">

          {/* KOLOM KIRI */}
          <div className="col-lg-5">

            {/* Navigasi Soal */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-3 d-flex gap-2">
                {soalData.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSoal(s);
                      setResult(null);
                      setQuery("");
                    }}
                    className={`btn flex-fill rounded-3 py-2 fw-bold ${
                      selectedSoal.id === s.id ? "btn-primary shadow" : "btn-light text-muted"
                    }`}
                  >
                    Soal {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Tabel Referensi */}
            <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
              <div className="card-header bg-white border-0 pt-4 px-4">
                <h6 className="fw-bold text-uppercase text-muted small mb-0">
                  Tabel Referensi:
                  <span className="text-primary text-lowercase"> Produk</span>
                </h6>
              </div>
              <div className="card-body px-4 pb-4">
                <div className="table-responsive rounded-3 border">
                  <table className="table table-sm table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        {Object.keys(selectedSoal.tabelSkema[0]).map(key => (
                          <th key={key} className="p-2">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedSoal.tabelSkema.map((row, i) => (
                        <tr key={i}>
                          {Object.values(row).map((val, j) => (
                            <td key={j} className="p-2 text-secondary">{val}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">{selectedSoal.judul}</h4>
                <p className="text-muted mb-4">{selectedSoal.materi}</p>

                <div style={{ backgroundColor: "#eff6ff", borderLeft: "4px solid #3b82f6" }} className="p-3 rounded-e-3 mb-3">
                  <h6 className="fw-bold text-primary">Tugas Anda:</h6>
                  <p className="mb-0 fw-medium">{selectedSoal.instruksi}</p>
                </div>

                <div className="text-muted small">
                  💡 <em>{selectedSoal.hint}</em>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
              <div className="card-header px-4 py-3" style={{ backgroundColor: "#0f172a" }}>
                <span className="text-white-50 small fw-bold">EDITOR QUERY</span>
              </div>

              <textarea
                className="form-control border-0 p-4 font-monospace"
                style={{
                  backgroundColor: "#1e293b",
                  color: "#94a3b8",
                  height: "300px",
                  resize: "none"
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SELECT * FROM produk WHERE ..."
              />

              <div className="card-footer bg-white p-3 d-flex justify-content-end gap-3">
                <button className="btn btn-light border px-4 fw-bold" onClick={() => setQuery("")}>
                  Clear
                </button>
                <button className="btn btn-dark px-5 fw-bold" onClick={handleRun}>
                  Run Query
                </button>
              </div>
            </div>

            {/* RESULT */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-header bg-white px-4 py-3">
                <h6 className="mb-0 fw-bold">Output Console</h6>
              </div>

              <div className="card-body p-0" style={{ minHeight: "150px" }}>
                {!result ? (
                  <div className="p-5 text-center text-muted">
                    Hasil query akan muncul di sini.
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          {Object.keys(result[0]).map(k => (
                            <th key={k} className="px-4 py-3 small text-uppercase text-muted">{k}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {result.map((row, i) => (
                          <tr key={i}>
                            {Object.values(row).map((v, j) => (
                              <td key={j} className="px-4 py-3">{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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