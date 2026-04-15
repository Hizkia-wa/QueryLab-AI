import { useState } from "react";
import { quizData } from "../data/quiz";
import { CheckCircle2, XCircle, Trophy, ArrowRight } from "lucide-react";

export default function QuizComponent({ modulId }) {
  const filteredQuiz = quizData.filter(q => Number(q.modulId) === Number(modulId));
  
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (filteredQuiz.length === 0) {
    return <div className="text-center p-5 bg-white rounded-4 shadow-sm">Kuis belum tersedia untuk modul ini.</div>;
  }

  const q = filteredQuiz[step];

  const handleAnswer = (opt) => {
    setSelected(opt);
    setIsAnswered(true);
    if (opt === q.answer) setScore(score + 1);
  };

  if (finished) {
    return (
      <div className="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
        <Trophy size={60} className="text-yellow-500 mx-auto mb-3" />
        <h2 className="fw-bold">Modul Selesai!</h2>
        <h1 className="display-3 fw-black text-primary my-4">{Math.round((score/filteredQuiz.length)*100)}</h1>
        <button className="btn btn-dark rounded-pill px-5" onClick={() => window.location.reload()}>Ulangi Kuis</button>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
      <div className="d-flex justify-content-between mb-4">
        <span className="badge bg-light text-dark rounded-pill px-3 py-2">Soal {step + 1} / {filteredQuiz.length}</span>
      </div>
      
      <h4 className="fw-bold mb-4">{q.question}</h4>

      <div className="d-grid gap-3 mb-4">
        {q.options.map(opt => (
          <button 
            key={opt}
            disabled={isAnswered}
            onClick={() => handleAnswer(opt)}
            className={`btn text-start p-3 rounded-4 border-2 transition-all ${
              isAnswered 
                ? opt === q.answer ? 'btn-success border-success bg-opacity-10' : opt === selected ? 'btn-danger border-danger bg-opacity-10' : 'btn-light border-light opacity-50'
                : 'btn-outline-light text-dark border-gray-100 hover-blue'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`alert ${selected === q.answer ? 'alert-success' : 'alert-danger'} border-0 rounded-4 p-3 mb-4`}>
          <strong>{selected === q.answer ? "✅ Benar!" : "❌ Salah!"}</strong>
          <p className="small mb-0 mt-1">{q.explanation}</p>
        </div>
      )}

      <button 
        disabled={!isAnswered}
        className="btn btn-primary w-100 py-3 rounded-pill fw-bold"
        onClick={() => step < filteredQuiz.length - 1 ? (setStep(step+1), setIsAnswered(false), setSelected(null)) : setFinished(true)}
      >
        {step === filteredQuiz.length - 1 ? "Lihat Skor" : "Lanjut Soal"} <ArrowRight size={18} />
      </button>
    </div>
  );
}