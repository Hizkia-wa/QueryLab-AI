import { useParams } from "react-router-dom";
import soalData from "../data/soal";
import PraktikumLayout from "../components/PraktikumLayout";

export default function PraktikumPage() {
  const { id } = useParams();

  const filteredSoal = soalData.filter(
    (soal) => soal.modulId === parseInt(id)
  );

  return <PraktikumLayout soalData={filteredSoal} />;
}