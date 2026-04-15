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
    return (
      <div className="text-center p-5 bg-white rounded-4 shadow-sm">
        Kuis belum tersedia untuk modul ini.
      </div>
    );
  }

  const q = filteredQuiz[step];

  const handleAnswer = (opt) => {
    if (isAnswered) return;
    setSelected(opt);
    setIsAnswered(true);
    if (opt === q.answer) setScore(score + 1);
  };

  if (finished) {
    return (
      <div className="bg-white rounded-4 p-5 text-center shadow-sm">
        <Trophy size={60} className="text-yellow-500 mx-auto mb-3" />
        <h2 className="fw-bold">Modul Selesai!</h2>
        <h1 className="display-3 fw-black text-primary my-4">
          {Math.round((score / filteredQuiz.length) * 100)}
        </h1>
        <button
          className="btn btn-dark rounded-pill px-5"
          onClick={() => window.location.reload()}
        >
          Ulangi Kuis
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-4 p-4 shadow-sm">

      {/* Progress */}
      <div className="mb-4">
        <div className="d-flex justify-content-between mb-2">
          <span className="small text-muted">Progress</span>
          <span className="small fw-bold">{step + 1}/{filteredQuiz.length}</span>
        </div>

        <div style={{ height: "6px", background: "#eee", borderRadius: "10px" }}>
          <div
            style={{
              width: `${((step + 1) / filteredQuiz.length) * 100}%`,
              height: "100%",
              background: "#4f46e5",
              borderRadius: "10px",
              transition: "0.4s"
            }}
          />
        </div>
      </div>

      {/* Question */}
      <h5 className="fw-bold mb-4" style={{ lineHeight: "1.5" }}>
        {q.question}
      </h5>

      {/* Options */}
      <div className="d-flex flex-column gap-3 mb-4">
        {q.options.map((opt) => {
          const isCorrect = opt === q.answer;
          const isSelected = opt === selected;

          let style = {
            padding: "14px",
            borderRadius: "14px",
            border: "1.5px solid #e5e7eb",
            background: "#fff",
            cursor: "pointer",
            fontWeight: "500",
            transition: "all 0.2s ease",
            transform: "scale(1)"
          };

          if (!isAnswered) {
            style = {
              ...style,
              ":hover": {},
            };
          }

          if (isAnswered) {
            if (isCorrect) {
              style = {
                ...style,
                background: "#ecfdf5",
                border: "1.5px solid #22c55e",
                color: "#166534"
              };
            } else if (isSelected) {
              style = {
                ...style,
                background: "#fef2f2",
                border: "1.5px solid #ef4444",
                color: "#991b1b"
              };
            } else {
              style = {
                ...style,
                opacity: 0.5
              };
            }
          }

          return (
            <div
              key={opt}
              onClick={() => handleAnswer(opt)}
              style={style}
              onMouseEnter={(e) => {
                if (!isAnswered) e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                {opt}
                {isAnswered && isCorrect && (
                  <CheckCircle2 size={18} color="#22c55e" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle size={18} color="#ef4444" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanation */}
      {isAnswered && (
        <div
          style={{
            background: "#eef2ff",
            padding: "14px",
            borderRadius: "12px",
            marginBottom: "16px"
          }}
        >
          <strong>
            {selected === q.answer ? "✅ Jawaban Benar!" : "❌ Jawaban Salah!"}
          </strong>
          <p className="mb-0 small mt-1">{q.explanation}</p>
        </div>
      )}

      {/* Button */}
      <button
        disabled={!isAnswered}
        onClick={() =>
          step < filteredQuiz.length - 1
            ? (setStep(step + 1), setIsAnswered(false), setSelected(null))
            : setFinished(true)
        }
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "999px",
          background: isAnswered ? "#4f46e5" : "#c7d2fe",
          color: "white",
          border: "none",
          fontWeight: "bold",
          cursor: isAnswered ? "pointer" : "not-allowed",
          transition: "0.2s"
        }}
      >
        {step === filteredQuiz.length - 1 ? "Lihat Skor" : "Lanjut Soal"}{" "}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}