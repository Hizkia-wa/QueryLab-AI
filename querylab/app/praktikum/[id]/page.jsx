import PraktikumPage from "../../pages/PraktikumPage";

export default function PraktikumRoute({ params }) {
  return <PraktikumPage id={params.id} />;
}
