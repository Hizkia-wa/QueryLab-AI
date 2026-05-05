import QuizPage from "../../pages/QuizPage";

export default function QuizRoute({ params }) {
  return <QuizPage id={params.id} />;
}
