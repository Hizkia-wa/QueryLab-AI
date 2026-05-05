"use client";

import materiData from "../data/materi";
import MateriLayout from "../components/MateriLayout";

export default function MateriPage({ id }) {

  // Kita filter semua materi yang termasuk dalam modulId ini
  const filteredMateri = materiData.filter(
    (materi) => Number(materi.modulId) === Number(id)
  );

  return <MateriLayout id={id} materiData={filteredMateri} />;
}