// src/pages/MateriListPage.jsx

import { Link } from "react-router-dom";
import modulData from "../data/modul";

function MateriListPage() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">📘 Daftar Materi SQL</h2>

      <div className="row">
        {modulData.map((modul) => (
          <div key={modul.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{modul.title}</h5>
                <p className="card-text">{modul.description}</p>
                <span className="badge bg-secondary mb-3">
                  {modul.level}
                </span>
                <br />
                <Link
                  to={`/materi/${modul.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Buka Materi →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MateriListPage;