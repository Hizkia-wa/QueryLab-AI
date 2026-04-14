import { useParams, Link } from "react-router-dom";
import materiData from "../data/materi";
import modulData from "../data/modul"; // Opsional jika ingin link balik

function MateriPage() {
  const { id } = useParams();

  // 1. Cari data materi yang sedang aktif berdasarkan ID UNIK (id, bukan modulId)
  const materiAktif = materiData.find((m) => m.id === Number(id));

  // 2. Ambil semua materi yang memiliki modulId yang sama untuk ditampilkan di SIDEBAR
  // Contoh: Jika sedang buka materi ID 2 (Modul 1), sidebar akan tampilkan semua materi Modul 1
  const daftarSubBab = materiData.filter((m) => m.modulId === materiAktif?.modulId);

  if (!materiAktif) {
    return (
      <div className="p-5 text-center">
        <h3>Materi tidak ditemukan</h3>
        <Link to="/materi" className="btn btn-secondary mt-3">Kembali ke Daftar Modul</Link>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div className="row">

        {/* SIDEBAR - Menampilkan Sub-Bab dari Modul yang sama */}
        <div className="col-md-3 border-end p-4 bg-white min-vh-100 shadow-sm" style={{ position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>
          <div className="mb-4">
            <Link to="/materi" className="text-indigo-600 text-decoration-none small fw-bold">
               ← Kembali ke Semua Modul
            </Link>
            <h5 className="fw-bold mt-3">📖 Daftar Sub-Bab</h5>
          </div>

          <div className="d-flex flex-column gap-3">
            {daftarSubBab.map((sub) => (
              <Link
                key={sub.id}
                to={`/materi/${sub.id}`}
                className={`d-flex flex-column justify-content-center text-decoration-none rounded-4 p-3 shadow-sm ${
                  sub.id === Number(id)
                    ? "bg-primary text-white"
                    : "bg-light text-dark hover-shadow"
                }`}
                style={{
                  minHeight: "70px",
                  transition: "all 0.3s ease",
                  border: sub.id === Number(id) ? "none" : "1px solid #e2e8f0"
                }}
              >
                <div className="fw-semibold" style={{ fontSize: "0.85rem" }}>{sub.title}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* KONTEN UTAMA */}
        <div className="col-md-9 p-5">
          {/* HEADER */}
          <div className="mb-5">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2 rounded-pill">
              Modul {materiAktif.modulId}
            </span>
            <h1 className="fw-bold display-6">{materiAktif.title}</h1>
            <p className="text-muted fs-5 mt-2">{materiAktif.deskripsi}</p>
          </div>

          {/* Bagian Penjelasan, Sintaks, Contoh, Catatan tetap sama ... */}
          <div className="card border-0 shadow-sm rounded-4 mb-4 p-4">
             <h5 className="fw-bold mb-3">📖 Penjelasan</h5>
             <p className="text-secondary leading-relaxed">{materiAktif.penjelasan}</p>
          </div>

          {materiAktif.sintaks && (
            <div className="card border-0 shadow-sm rounded-4 mb-4 bg-dark p-4">
               <h5 className="fw-bold mb-3 text-white">🧠 Sintaks Dasar</h5>
               <pre className="text-info m-0">{materiAktif.sintaks}</pre>
            </div>
          )}

          <div className="card border-0 shadow-sm rounded-4 mb-4 p-4">
             <h5 className="fw-bold mb-3">💻 Contoh Query</h5>
             <pre className="p-3 rounded-3 m-0" style={{ background: "#0f172a", color: "#38bdf8" }}>
               {materiAktif.contoh}
             </pre>
          </div>

          {/* Tombol ke Praktikum */}
          <div className="mt-5 pt-4 border-top">
            <Link
              to={`/praktikum/${materiAktif.modulId}`}
              className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow"
            >
              🚀 Mulai Latihan Praktikum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MateriPage;