import { useParams } from "react-router-dom";
import soalData from "../data/soal";
import PraktikumLayout from "../components/PraktikumLayout";

export default function PraktikumPage() {
  const { id } = useParams();

  // Filter soal berdasarkan modulId
  const filteredSoal = soalData.filter(
    (soal) => Number(soal.modulId) === Number(id)
  );

  return <PraktikumLayout soalData={filteredSoal} />;
}