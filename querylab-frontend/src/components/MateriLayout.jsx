import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, BookOpen } from "lucide-react";

export default function MateriLayout({ materiData }) {
  const { id } = useParams();
  const [selectedMateri, setSelectedMateri] = useState(null);

  useEffect(() => {
    if (materiData.length > 0) {
      setSelectedMateri(materiData[0]);
    }
  }, [id, materiData]);

  if (!selectedMateri) return <div className="p-5 text-center">Memuat Materi...</div>;

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* HEADER NAV */}
      <nav className="navbar navbar-white bg-white border-bottom sticky-top py-3">
        <div className="container">
          <Link to="/materi" className="btn btn-link text-decoration-none text-dark p-0 d-flex align-items-center gap-2">
            <ChevronLeft size={20} /> <span className="fw-bold">Kembali</span>
          </Link>
          <span className="badge bg-dark rounded-pill">Modul {id}</span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row">
          {/* SIDEBAR DAFTAR ISI */}
          <div className="col-lg-3 mb-4">
            <label className="text-muted small fw-bold text-uppercase mb-3 d-block">Daftar Isi</label>
            <div className="list-group list-group-flush rounded-4 shadow-sm border-0 overflow-hidden">
              {materiData.map((m, index) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMateri(m)}
                  className={`list-group-item list-group-item-action border-0 p-3 ${
                    selectedMateri.id === m.id ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span className="small opacity-50">{index + 1}.</span>
                    <span className="fw-medium">{m.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* KONTEN UTAMA */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <div className="d-flex align-items-center gap-2 text-primary mb-3">
                <BookOpen size={20} />
                <span className="fw-bold small text-uppercase">Pembelajaran Dasar</span>
              </div>
              
              <h1 className="fw-black text-dark mb-4">{selectedMateri.title}</h1>
              
              <div className="materi-content text-secondary leading-relaxed mb-5" style={{ fontSize: "1.1rem" }}>
                {selectedMateri.content}
              </div>

              {selectedMateri.example && (
                <div className="bg-dark rounded-4 p-4 mb-5 shadow-lg">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-info small fw-mono">SQL EXAMPLE</span>
                  </div>
                  <pre className="text-white mb-0" style={{ fontFamily: "'Fira Code', monospace" }}>
                    <code>{selectedMateri.example}</code>
                  </pre>
                </div>
              )}

              {/* ACTION FOOTER */}
              <div className="border-top pt-4 d-flex justify-content-between align-items-center">
                <p className="text-muted small mb-0">Sudah paham? Mari uji kemampuanmu.</p>
                <Link to={`/modul/${id}`} className="btn btn-primary rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
                  Mulai Praktikum <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
