import PraktikumPage from "../../pages/PraktikumPage";

export default async function PraktikumRoute({ params }) {
  const { id } = await params;

  return <PraktikumPage id={id} />;
}