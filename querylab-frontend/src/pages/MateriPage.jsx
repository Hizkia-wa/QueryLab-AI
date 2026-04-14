import { useParams, Link } from "react-router-dom";
import materiData from "../data/materi1";
import modulData from "../data/modul";

function MateriPage() {
  const { id } = useParams();

  const materi = materiData.find(m => m.modulId === Number(id));

  if (!materi) {
    return <div className="p-5 text-center">Materi tidak ditemukan</div>;
  }

  return (
    <div className="container-fluid" style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div className="row">

        {/* SIDEBAR */}
        <div className="col-md-3 border-end p-4 bg-white min-vh-100">
          <h5 className="fw-bold mb-4">📚 Daftar Modul</h5>

          <div className="d-flex flex-column gap-3">
            {modulData.map(modul => (
              <Link
                key={modul.id}
                to={`/materi/${modul.id}`}
                className={`d-flex flex-column justify-content-between text-decoration-none rounded-4 p-3 shadow-sm ${
                  modul.id === Number(id)
                    ? "bg-primary text-white"
                    : "bg-light text-dark"
                }`}
                style={{
                  height: "90px",
                  transition: "0.2s"
                }}
              >
                <div className="fw-semibold">{modul.title}</div>

                <div className="d-flex justify-content-between small opacity-75">
                  <span>{modul.level}</span>
                  <span>{modul.estimasi || ""}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* KONTEN */}
        <div className="col-md-9 p-5">

          {/* HEADER */}
          <div className="mb-5">
            <h2 className="fw-bold">{materi.title}</h2>
            <p className="text-muted fs-5">{materi.deskripsi}</p>
          </div>

          {/* PENJELASAN */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-3">📖 Penjelasan</h5>
              <p className="text-muted">{materi.penjelasan}</p>
            </div>
          </div>

          {/* SINTAKS */}
          {materi.sintaks && (
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">🧠 Sintaks Dasar</h5>

                <pre className="bg-dark text-info p-3 rounded-3">
{materi.sintaks}
                </pre>
              </div>
            </div>
          )}

          {/* CONTOH */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-3">💻 Contoh Query</h5>

              <pre
                className="p-3 rounded-3"
                style={{
                  background: "#0f172a",
                  color: "#38bdf8",
                  fontFamily: "monospace"
                }}
              >
{materi.contoh}
              </pre>
            </div>
          </div>

          {/* CATATAN */}
          {materi.catatan && (
            <div className="alert alert-warning rounded-3">
              💡 {materi.catatan}
            </div>
          )}

          {/* KESALAHAN UMUM */}
          {materi.kesalahanUmum && (
            <div className="alert alert-danger rounded-3">
              ⚠️ {materi.kesalahanUmum}
            </div>
          )}

          {/* BUTTON */}
          <div className="mt-4">
            <Link
              to={`/praktikum/${materi.modulId}`}
              className="btn btn-primary px-4 py-3 fw-bold rounded-3"
            >
              🚀 Mulai Latihan
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MateriPage;