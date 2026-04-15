import { useNavigate } from "react-router-dom";
import modulData from "../data/modul";

export default function ModulPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Pilih Modul SQL</h2>
      <div className="row">
        {modulData.map((modul) => (
          <div key={modul.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 border-0 rounded-4">
              <div className="card-body p-4">
                <h5 className="fw-bold">{modul.title}</h5>
                <p className="text-muted small">{modul.description}</p>
                <span className="badge bg-primary bg-opacity-10 text-primary mb-3">{modul.level}</span>
                <br />
                <button
                  className="btn btn-dark w-100 rounded-pill"
                  onClick={() => navigate(`/praktikum/${modul.modulId}`)}
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