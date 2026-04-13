import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const soalData = [
  {
    id: 1,
    judul: "Analisis Penjualan Gadget",
    materi: "Sebagai analis data di perusahaan manufaktur, Anda diminta untuk menarik data produk yang memiliki stok di bawah ambang batas untuk keperluan restock energi dan logistik.",
    instruksi: "Tampilkan semua kolom dari tabel produk yang memiliki stok kurang dari 20.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
      { id: 3, nama_produk: "Kabel Tembaga", kategori: "Manufaktur", stok: 10, harga: 75000 },
    ],
    hint: "Gunakan klausa WHERE untuk memfilter kolom stok.",
  },
  {
    id: 2,
    judul: "Filter Kategori Spesifik",
    materi: "Manajemen ingin fokus pada efisiensi sektor Energi. Kita perlu memisahkan data berdasarkan kategori agar laporan lebih terstruktur.",
    instruksi: "Tampilkan kolom `nama_produk` dan `harga` yang kategorinya adalah 'Energi'.",
    tabelSkema: [
      { id: 1, nama_produk: "Baterai Lithium", kategori: "Energi", stok: 15, harga: 500000 },
      { id: 2, nama_produk: "Panel Surya 100W", kategori: "Energi", stok: 45, harga: 1200000 },
    ],
    hint: "Sebutkan nama kolom secara spesifik setelah perintah SELECT.",
  }
];

export default function PraktikumPremium() {
  const [selectedSoal, setSelectedSoal] = useState(soalData[0]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleRun = () => {
    // Simulasi filter sederhana untuk demo
    setResult(selectedSoal.tabelSkema.filter(item => item.stok < 20));
  };

  return (
    <div style={{ backgroundColor: "#F3F4F6", minHeight: "100vh", fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg shadow-sm px-4" style={{ backgroundColor: "#1e293b" }}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold text-white">
            <span style={{ color: "#38bdf8" }}>SQL</span> Challenge <small className="fw-light opacity-50 ms-2">| Manufaktur & Energi</small>
          </span>
          <div className="d-flex gap-2">
             <button className="btn btn-sm btn-outline-light rounded-pill px-3">Dashboard</button>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-4 px-4">
        <div className="row g-4">
          
          {/* KOLOM KIRI: REFERENSI & INSTRUKSI */}
          <div className="col-lg-5">
            {/* Navigasi Soal Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-3 d-flex gap-2">
                {soalData.map((s, i) => (
                  <button 
                    key={s.id}
                    onClick={() => { setSelectedSoal(s); setResult(null); setQuery(""); }}
                    className={`btn flex-fill rounded-3 py-2 fw-bold transition-all ${selectedSoal.id === s.id ? 'btn-primary shadow' : 'btn-light text-muted'}`}
                  >
                    Soal {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Tabel Referensi Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
              <div className="card-header bg-white border-0 pt-4 px-4">
                <h6 className="fw-bold text-uppercase text-muted small mb-0">Tabel Referensi: <span className="text-primary text-lowercase">Produk</span></h6>
              </div>
              <div className="card-body px-4 pb-4">
                <div className="table-responsive rounded-3 border">
                  <table className="table table-sm table-hover mb-0" style={{ fontSize: "13px" }}>
                    <thead className="bg-light">
                      <tr>
                        {Object.keys(selectedSoal.tabelSkema[0]).map(key => <th key={key} className="p-2">{key}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedSoal.tabelSkema.map((row, i) => (
                        <tr key={i}>
                          {Object.values(row).map((val, j) => <td key={j} className="p-2 text-secondary">{val}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Deskripsi & Instruksi */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">{selectedSoal.judul}</h4>
                <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>{selectedSoal.materi}</p>
                
                <div style={{ backgroundColor: "#eff6ff", borderLeft: "4px solid #3b82f6" }} className="p-3 rounded-e-3 mb-3">
                  <h6 className="fw-bold text-primary">Tugas Anda:</h6>
                  <p className="mb-0 text-dark fw-medium">{selectedSoal.instruksi}</p>
                </div>

                <div className="d-flex align-items-center text-muted small">
                  <span className="me-2">💡</span> <em>{selectedSoal.hint}</em>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: EDITOR & RESULT */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4" style={{ minHeight: "400px" }}>
              <div className="card-header d-flex justify-content-between align-items-center px-4 py-3" style={{ backgroundColor: "#0f172a" }}>
                <span className="text-white-50 small fw-bold mt-1">EDITOR QUERY</span>
                <span className="badge bg-success">Status: Connected</span>
              </div>
              <textarea
                className="form-control border-0 p-4 font-monospace"
                style={{ 
                  backgroundColor: "#1e293b", 
                  color: "#94a3b8", 
                  fontSize: "16px",
                  height: "300px",
                  resize: "none",
                  outline: "none"
                }}
                spellCheck="false"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="-- Ketik SQL di sini...&#10;SELECT * FROM produk WHERE..."
              />
              <div className="card-footer bg-white p-3 d-flex justify-content-end gap-3">
                <button className="btn btn-light border px-4 fw-bold" onClick={() => setQuery("")}>Clear</button>
                <button className="btn btn-dark px-5 fw-bold" onClick={handleRun}>Run Query</button>
              </div>
            </div>

            {/* Result Section */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-header bg-white px-4 py-3 border-bottom">
                <h6 className="mb-0 fw-bold">Output Console</h6>
              </div>
              <div className="card-body p-0" style={{ backgroundColor: "#ffffff", minHeight: "150px" }}>
                {!result ? (
                  <div className="p-5 text-center text-muted">
                    <p className="mb-0">Hasil query akan muncul di sini setelah Anda menekan tombol Run.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          {Object.keys(result[0]).map(k => <th key={k} className="px-4 py-3 small text-uppercase text-muted">{k}</th>)}
                        </tr>
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
                )}
              </div>
              {result && (
                <div className="card-footer bg-primary-subtle border-0 p-3 text-center">
                  <button className="btn btn-primary px-5 fw-bold shadow">KIRIM JAWABAN SEKARANG</button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}