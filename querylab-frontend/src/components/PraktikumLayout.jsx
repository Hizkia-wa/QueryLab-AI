import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Tambah useNavigate
import { CheckCircle, Play, RotateCcw, ArrowRight, Database, Layout } from "lucide-react"; // Ikon tambahan
import "bootstrap/dist/css/bootstrap.min.css";

export default function PraktikumLayout({ soalData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentModulId = Number(id);

  const [selectedSoal, setSelectedSoal] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

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
      const dataSource = selectedSoal.tabelSkema.tabelKiri;

      if (userQuery.includes("select *")) {
        setResult(dataSource);
      } else {
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
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
          <div className="table-responsive">
            {isValid ? (
              <table className="table table-hover mb-0" style={{ fontSize: "13px" }}>
                <thead className="bg-light">
                  <tr className="text-secondary">
                    {Object.keys(data[0]).map((k) => (
                      <th key={k} className="border-0 px-3 py-3 text-uppercase">{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((r, i) => (
                    <tr key={i}>
                      {Object.values(r).map((v, j) => (
                        <td key={j} className="px-3 py-3 font-monospace">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-4 text-center text-muted small">Data tidak tersedia</div>
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
          <Link to="/" className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2">
            <Database size={24} /> SQL<span>Lab Intelligence</span>
          </Link>
          <div className="ms-auto d-flex align-items-center gap-3">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold">
              Modul {currentModulId}
            </span>
            <Link to="/modul" className="btn btn-outline-dark btn-sm rounded-pill px-3">Keluar</Link>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-5 px-lg-5">
        <div className="row g-4">
          
          {/* PANEL KIRI */}
          <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-white">
            <label className="fw-bold text-muted mb-3 d-flex align-items-center gap-2" style={{ fontSize: "11px", letterSpacing: "1px" }}>
              <Layout size={14} /> TANTANGAN
            </label>
            
            {/* GRID PENOMORAN YANG LEBIH KECIL & RAPI */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(6, 1fr)", // Dibuat 6 kolom agar lebih kompak
              gap: "8px" 
            }}>
              {soalData.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => { setSelectedSoal(s); resetState(); }}
                  className={`btn p-0 d-flex align-items-center justify-content-center rounded-2 transition-all ${
                    selectedSoal.id === s.id 
                    ? "btn-primary shadow-sm" 
                    : "btn-light text-secondary border border-light"
                  }`}
                  style={{ 
                    aspectRatio: "1/1", 
                    fontWeight: "700",
                    fontSize: "12px", // Ukuran teks diperkecil
                    width: "100%",
                    maxWidth: "32px", // Batas maksimal lebar kotak
                    margin: "0 auto"
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white border-start border-primary border-4">
              <h4 className="fw-black text-dark mb-2">{selectedSoal.judul}</h4>
              <p className="text-muted small mb-4">{selectedSoal.materi}</p>
              <div className="bg-light p-3 rounded-4 border border-light">
                <p className="mb-0 fw-medium small text-dark leading-relaxed">
                  <span className="badge bg-dark me-2">MISI</span>
                  {selectedSoal.instruksi}
                </p>
              </div>
            </div>

            <label className="fw-bold text-muted small text-uppercase mb-2">Skema Database</label>
            <RenderTable data={selectedSoal.tabelSkema.tabelKiri} label="Tabel Aktif" color="primary" />
          </div>

          {/* PANEL KANAN */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4 bg-dark">
              <div className="px-4 py-3 d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-25">
                <span className="text-white-50 small font-monospace">query_editor.sql</span>
                <div className="d-flex gap-2">
                  <div className="bg-danger rounded-circle" style={{width: '10px', height: '10px'}}></div>
                  <div className="bg-warning rounded-circle" style={{width: '10px', height: '10px'}}></div>
                  <div className="bg-success rounded-circle" style={{width: '10px', height: '10px'}}></div>
                </div>
              </div>
              <textarea
                className="form-control border-0 bg-dark text-info p-4"
                style={{ 
                  height: "260px", 
                  fontFamily: "'Fira Code', 'Courier New', monospace", 
                  fontSize: "16px",
                  lineHeight: "1.6",
                  outline: "none",
                  boxShadow: "none"
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="-- Tulis perintah SQL di sini...&#10;-- Contoh: SELECT * FROM tabel"
              />
              <div className="p-4 d-flex justify-content-end gap-3 bg-dark border-top border-secondary border-opacity-10">
                <button className="btn btn-link text-white-50 text-decoration-none d-flex align-items-center gap-2" onClick={resetState}>
                  <RotateCcw size={16} /> Reset
                </button>
                <button className="btn btn-primary px-5 py-2 fw-black rounded-pill d-flex align-items-center gap-2 shadow-primary" onClick={handleRun}>
                  <Play size={16} fill="white" /> Run Query
                </button>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 bg-white p-4">
              {!result && (
                <div className="text-center py-5">
                  <Database size={48} className="text-light mb-3" />
                  <p className="text-muted m-0">Silakan jalankan query untuk melihat hasil.</p>
                </div>
              )}
              
              {status === "salah" && (
                <div className="animate-in fade-in slide-in-from-top-2">
                  <div className="alert alert-danger border-0 rounded-4 p-3 d-flex align-items-center gap-3">
                    <span className="fs-4">⚠️</span>
                    <div>
                      <div className="fw-bold">Gagal!</div>
                      <div className="small">{result}</div>
                    </div>
                  </div>
                  <div className="bg-warning bg-opacity-10 p-4 rounded-4 border border-warning border-opacity-20 mt-3">
                    <strong className="text-warning-emphasis d-block mb-1 small uppercase font-black">Petunjuk Pembantu:</strong>
                    <p className="m-0 small text-dark italic">"{selectedSoal.hint}"</p>
                  </div>
                </div>
              )}

              {status === "benar" && (
                <div className="animate-in zoom-in duration-300">
                  <div className="alert alert-success border-0 rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <CheckCircle size={32} />
                      <div>
                        <div className="fw-black fs-5">Luar Biasa!</div>
                        <div className="small opacity-75">Query kamu berhasil mengeksekusi data dengan tepat.</div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/quiz/${currentModulId}`)}
                      className="btn btn-success rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2"
                    >
                      Lanjut ke Quiz <ArrowRight size={18} />
                    </button>
                  </div>
                  <RenderTable data={result} label="Hasil Eksekusi" color="dark" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}