// src/pages/MateriPage.jsx

import { useParams, Link } from "react-router-dom";
import materiData from "../data/materi";
import modulData from "../data/modul";

function MateriPage() {
  const { id } = useParams();
  const materi = materiData.find(m => m.modulId === Number(id));

  if (!materi) return <div className="p-5">Materi tidak ditemukan</div>;

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 bg-light vh-100 p-3 border-end">
          <h5>Daftar Modul</h5>
          {modulData.map(modul => (
            <div key={modul.id} className="mb-2">
              <Link 
                to={`/materi/${modul.id}`} 
                className="text-decoration-none"
              >
                {modul.title}
              </Link>
            </div>
          ))}
        </div>

        {/* Konten Materi */}
        <div className="col-md-9 p-4">
          <h2>{materi.title}</h2>
          <p className="text-muted">{materi.deskripsi}</p>
          <p>{materi.penjelasan}</p>

          <div className="bg-dark text-light p-3 rounded">
            <pre>{materi.contoh}</pre>
          </div>

          <Link 
            to={`/modul/${materi.modulId}`} 
            className="btn btn-success mt-3"
          >
            Mulai Latihan →
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MateriPage;