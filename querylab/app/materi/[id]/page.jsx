import materiData from "../../data/materi";
import MateriLayout from "../../components/MateriLayout";

export default async function Page(props) {

  const params = await props.params;
  const id = params.id;

  console.log("ID:", id);

  const filteredMateri = materiData.filter(
    (item) => String(item.modulId) === String(id)
  );

  console.log("FILTER:", filteredMateri);

  return (
    <MateriLayout
      id={id}
      materiData={filteredMateri}
    />
  );
}