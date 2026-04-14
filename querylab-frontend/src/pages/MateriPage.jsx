import { useParams } from "react-router-dom";
import materiData from "../data/materi";
import MateriLayout from "../components/MateriLayout";

export default function MateriPage() {
  const { id } = useParams();

  // Kita filter semua materi yang termasuk dalam modulId ini
  const filteredMateri = materiData.filter(
    (materi) => Number(materi.modulId) === Number(id)
  );

  return <MateriLayout materiData={filteredMateri} />;
}