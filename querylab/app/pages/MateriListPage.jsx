"use client";

import { useRouter } from "next/navigation";
import modulData from "../data/modul";
import { Book, ChevronRight } from "lucide-react";

export default function MateriListPage() {
  const router = useRouter();

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center gap-3 mb-5">
        <div className="bg-primary p-3 rounded-4 shadow-sm">
          <Book color="white" size={32} />
        </div>
        <h2 className="fw-bold mb-0">Modul Pembelajaran SQL</h2>
      </div>

      <div className="row">
        {modulData.map((modul) => (
          <div key={modul.modulId} className="col-md-6 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden hover-shadow transition-all">
              <div className="card-body p-4">
                <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 rounded-pill">
                  {modul.level}
                </span>
                <h4 className="fw-bold text-dark mb-3">{modul.title}</h4>
                <p className="text-muted small mb-4">{modul.description}</p>
                
                <button
                  className="btn btn-dark w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
                  onClick={() => router.push(`/materi/${modul.modulId}`)}
                >
                  Mulai Belajar <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}