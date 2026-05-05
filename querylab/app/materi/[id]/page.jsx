import MateriPage from "../../pages/MateriPage";

export default function MateriDetailRoute({ params }) {
  return <MateriPage id={params.id} />;
}
