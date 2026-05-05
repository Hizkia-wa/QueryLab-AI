"use client";

import soalData from "../data/soal";
import PraktikumLayout from "../components/PraktikumLayout";

export default function PraktikumPage({ id }) {

  // Filter soal berdasarkan modulId
  const filteredSoal = soalData.filter(
    (soal) => Number(soal.modulId) === Number(id)
  );

  return <PraktikumLayout id={id} soalData={filteredSoal} />;
}