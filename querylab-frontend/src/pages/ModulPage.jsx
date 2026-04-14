import { useNavigate } from "react-router-dom";
import modulData from "../data/modul";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ModulPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Pilih Modul SQL</h2>

      <div className="row">
        {modulData.map((modul) => (
          <div key={modul.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">{modul.title}</h5>
                <p className="text-muted">{modul.description}</p>
                <span className="badge bg-primary mb-3">{modul.level}</span>
                <br />
                <button
                  className="btn btn-dark"
                  onClick={() => navigate(`/modul/${modul.modulId}`)} // Ganti .id jadi .modulId
                >
                  Masuk Modul
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}