import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 🔥 DATA 20 SOAL
const baseSoal = {
  materi: "Latihan SQL dasar",
  hint: "Gunakan SELECT dan WHERE",
  tabelSkema: [
    { nama_produk: "Solar Panel", kategori: "Energi", harga: 5000000, stok: 10 },
    { nama_produk: "Baterai", kategori: "Energi", harga: 2000000, stok: 50 },
    { nama_produk: "Mesin", kategori: "Manufaktur", harga: 8000000, stok: 5 },
  ]
};

const soalData = Array.from({ length: 20 }, (_, i) => ({
  ...baseSoal,
  id: i + 1,
  judul: `Soal ${i + 1}`,
  instruksi: i % 2 === 0
    ? "Tampilkan produk dengan stok < 20"
    : "Tampilkan nama_produk dan harga kategori Energi",

  expectedQuery: i % 2 === 0
    ? "select * from produk where stok < 20"
    : "select nama_produk, harga from produk where kategori = 'energi'",

  getExpectedResult: (data) =>
    i % 2 === 0
      ? data.filter(item => item.stok < 20)
      : data
          .filter(item => item.kategori === "Energi")
          .map(({ nama_produk, harga }) => ({ nama_produk, harga }))
}));

export default function PraktikumLayout() {
  const [selectedSoal, setSelectedSoal] = useState(soalData[0]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  const normalize = (text) => text.toLowerCase().trim();

  const handleRun = () => {
    if (!query) {
      setStatus("error");
      setResult("Query tidak boleh kosong!");
      return;
    }

    if (normalize(query) !== normalize(selectedSoal.expectedQuery)) {
      setStatus("salah");
      setResult("❌ Query salah! Coba lagi.");
      return;
    }

    const hasil = selectedSoal.getExpectedResult(selectedSoal.tabelSkema);
    setStatus("benar");
    setResult(hasil);
  };

  return (
    <div style={{ backgroundColor: "#F3F4F6", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <nav className="navbar shadow-sm px-4" style={{ backgroundColor: "#1e293b" }}>
        <span className="navbar-brand fw-bold text-white">
          <span style={{ color: "#38bdf8" }}>SQL</span> Challenge
        </span>
      </nav>

      <div className="container-fluid py-4 px-4">
        <div className="row g-4">

          {/* LEFT */}
          <div className="col-lg-5">

            {/* GRID SOAL */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div
                className="card-body d-grid"
                style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}
              >
                {soalData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSoal(s);
                      setQuery("");
                      setResult(null);
                      setStatus("");
                    }}
                    className={`btn fw-bold ${
                      selectedSoal.id === s.id
                        ? "btn-primary"
                        : "btn-light text-muted"
                    }`}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
            </div>

            {/* TABEL */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body">
                <h6 className="fw-bold mb-3">Tabel Produk</h6>
                <table className="table table-sm">
                  <thead>
                    <tr>
                      {Object.keys(selectedSoal.tabelSkema[0]).map(k => (
                        <th key={k}>{k}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSoal.tabelSkema.map((row, i) => (
                      <tr key={i}>
                        {Object.values(row).map((v, j) => (
                          <td key={j}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DESKRIPSI */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold">{selectedSoal.judul}</h5>
                <p className="text-muted">{selectedSoal.materi}</p>

                <div className="alert alert-primary">
                  <b>Tugas:</b> {selectedSoal.instruksi}
                </div>

                <small className="text-muted">💡 {selectedSoal.hint}</small>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7">

            {/* EDITOR */}
            <div className="card shadow rounded-4 mb-4">
              <div className="card-header bg-dark text-white">
                SQL Editor
              </div>

              <textarea
                className="form-control border-0"
                style={{ height: "250px", fontFamily: "monospace" }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tulis query di sini..."
              />

              <div className="card-footer text-end">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setQuery("")}
                >
                  Clear
                </button>
                <button
                  className="btn btn-dark"
                  onClick={handleRun}
                >
                  Run Query
                </button>
              </div>
            </div>

            {/* OUTPUT */}
            <div className="card shadow rounded-4">
              <div className="card-header">
                Output
              </div>

              <div className="card-body">
                {!result && (
                  <div className="text-muted text-center">
                    Belum ada output
                  </div>
                )}

                {typeof result === "string" && (
                  <div className={`alert ${
                    status === "salah" ? "alert-danger" : "alert-warning"
                  }`}>
                    {result}
                  </div>
                )}

                {status === "benar" && Array.isArray(result) && (
                  <table className="table">
                    <thead>
                      <tr>
                        {Object.keys(result[0]).map(k => (
                          <th key={k}>{k}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {result.map((row, i) => (
                        <tr key={i}>
                          {Object.values(row).map((v, j) => (
                            <td key={j}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}