import QuizPage from "../../pages/QuizPage";

export default async function QuizRoute(props) {

  const params = await props.params;
  const id = params.id;

  console.log("QUIZ ID:", id);

  return <QuizPage id={id} />;
}