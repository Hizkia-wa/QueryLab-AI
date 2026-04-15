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

  const currentIndex = materiData.findIndex(m => m.id === selectedMateri.id);

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <nav className="navbar bg-white border-bottom sticky-top py-3">
        <div className="container">
          <Link to="/materi" className="btn btn-link text-dark d-flex align-items-center gap-2">
            <ChevronLeft size={20} /> <span className="fw-bold">Kembali</span>
          </Link>
          <span className="badge bg-dark rounded-pill">Modul {id}</span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row">
          
          {/* SIDEBAR */}
          <div className="col-lg-3 mb-4">
            <label className="text-muted small fw-bold text-uppercase mb-3 d-block">Daftar Isi</label>
            <div className="list-group rounded-4 shadow-sm overflow-hidden">
              {materiData.map((m, index) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMateri(m)}
                  className={`list-group-item border-0 p-3 ${
                    selectedMateri.id === m.id ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  <span className="small opacity-50 me-2">{index + 1}.</span>
                  {m.title}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">

              <div className="d-flex align-items-center gap-2 text-primary mb-3">
                <BookOpen size={20} />
                <span className="fw-bold small text-uppercase">Pembelajaran</span>
              </div>

              <h1 className="fw-bold mb-4">{selectedMateri.title}</h1>

              {/* ISI */}
              <div className="mb-4 text-secondary" style={{ lineHeight: "1.8" }}>
                {selectedMateri.content}
              </div>

              {/* PENJELASAN */}
              {selectedMateri.penjelasan && (
                <div className="mb-4 p-4 bg-light rounded-4 border">
                  <h6 className="fw-bold">📘 Penjelasan</h6>
                  <p className="mb-0">{selectedMateri.penjelasan}</p>
                </div>
              )}

              {/* SINTAKS */}
              {selectedMateri.sintaks && (
                <div className="mb-4 p-4 bg-dark text-white rounded-4 position-relative">
                  <h6 className="text-info">SQL Syntax</h6>
                  <pre><code>{selectedMateri.sintaks}</code></pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(selectedMateri.sintaks)}
                    className="btn btn-sm btn-light position-absolute top-0 end-0 m-3"
                  >
                    Copy
                  </button>
                </div>
              )}

              {/* CONTOH */}
              {selectedMateri.contoh && (
                <div className="mb-4 p-4 bg-dark text-white rounded-4 position-relative">
                  <h6 className="text-success">SQL Example</h6>
                  <pre><code>{selectedMateri.contoh}</code></pre>
                  <button
                    onClick={() => navigator.clipboard.writeText(selectedMateri.contoh)}
                    className="btn btn-sm btn-light position-absolute top-0 end-0 m-3"
                  >
                    Copy
                  </button>
                </div>
              )}

              {/* CATATAN */}
              {selectedMateri.catatan && (
                <div className="mb-4 p-4 bg-warning bg-opacity-10 border-start border-4 border-warning rounded-4">
                  <h6>📝 Catatan</h6>
                  <p className="mb-0">{selectedMateri.catatan}</p>
                </div>
              )}

              {/* NAV BUTTON */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-outline-secondary rounded-pill"
                  disabled={currentIndex === 0}
                  onClick={() => setSelectedMateri(materiData[currentIndex - 1])}
                >
                  ⬅ Sebelumnya
                </button>

                <button
                  className="btn btn-primary rounded-pill"
                  disabled={currentIndex === materiData.length - 1}
                  onClick={() => setSelectedMateri(materiData[currentIndex + 1])}
                >
                  Selanjutnya ➡
                </button>
              </div>

              {/* ACTION FOOTER (FINAL) */}
              <div className="border-top pt-5 mt-5 d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-bold mb-1">Sudah paham materi ini?</p>
                  <small className="text-muted">Uji pemahaman kamu dengan quiz interaktif</small>
                </div>

                <Link 
                  to={`/quiz/${id}`} 
                  className="btn btn-primary rounded-pill px-5 py-3 fw-bold d-flex align-items-center gap-2"
                >
                  Mulai Quiz <ArrowRight size={20} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 