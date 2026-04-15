import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../data/quiz";
import { Trophy, ArrowRight, CheckCircle2, XCircle, RefreshCcw, ChevronLeft } from "lucide-react";

export default function QuizPage() {
  const { id } = useParams(); // Mengambil ID dari URL (contoh: /quiz/7)
  const navigate = useNavigate();

  // FILTER: Hanya ambil soal yang modulId-nya sama dengan ID di URL
  const filteredQuiz = quizData.filter((q) => Number(q.modulId) === Number(id));

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Jika ID di URL tidak ada soalnya di quizData
  if (filteredQuiz.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
        <h2 className="text-xl font-bold text-slate-400">Belum ada kuis untuk Modul {id}</h2>
        <button onClick={() => navigate(-1)} className="mt-4 btn btn-primary rounded-pill px-4">Kembali</button>
      </div>
    );
  }

  const currentQuestion = filteredQuiz[currentStep];

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentStep < filteredQuiz.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center max-w-sm w-full border border-gray-100">
          <Trophy size={60} className="text-yellow-500 mx-auto mb-4" />
          <h2 className="fw-bold mb-1">Kuis Selesai!</h2>
          <p className="text-muted small mb-4">Modul {id}</p>
          <div className="bg-primary bg-opacity-10 py-4 rounded-4 mb-4">
             <h1 className="display-4 fw-black text-primary">
                {Math.round((score / filteredQuiz.length) * 100)}
             </h1>
          </div>
          <button onClick={() => navigate(-1)} className="btn btn-dark w-100 py-3 rounded-4 fw-bold mb-2">Selesai</button>
          <button onClick={() => window.location.reload()} className="btn btn-link text-muted w-100 text-decoration-none small">Ulangi Kuis</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
        
        {/* Progress */}
        <div className="d-flex justify-content-between align-items-center mb-5">
            <button onClick={() => navigate(-1)} className="btn btn-light rounded-circle p-2"><ChevronLeft size={20}/></button>
            <span className="badge bg-light text-dark rounded-pill px-3">Soal {currentStep + 1} / {filteredQuiz.length}</span>
        </div>

        <h3 className="fw-bold text-slate-800 mb-5">{currentQuestion.question}</h3>

        {/* Options */}
        <div className="d-grid gap-3 mb-5">
          {currentQuestion.options.map((option) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedOption;

            let btnClass = "btn btn-outline-light text-dark text-start p-4 rounded-4 border-2 fw-bold transition-all";
            if (isAnswered) {
              if (isCorrect) btnClass = "btn btn-success text-start p-4 rounded-4 border-2 border-success bg-opacity-10 fw-bold";
              else if (isSelected) btnClass = "btn btn-danger text-start p-4 rounded-4 border-2 border-danger bg-opacity-10 fw-bold text-danger";
              else btnClass = "btn btn-light text-start p-4 rounded-4 border-2 opacity-50 fw-bold";
            }

            return (
              <button key={option} disabled={isAnswered} onClick={() => handleOptionClick(option)} className={btnClass}>
                <div className="d-flex justify-content-between align-items-center">
                    {option}
                    {isAnswered && isCorrect && <CheckCircle2 size={20} className="text-success" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle size={20} className="text-danger" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Penjelasan */}
        {isAnswered && (
          <div className="alert alert-primary border-0 rounded-4 p-4 mb-4 animate__animated animate__fadeIn">
            <h6 className="fw-bold mb-1">💡 Penjelasan:</h6>
            <p className="small mb-0 opacity-75">{currentQuestion.explanation}</p>
          </div>
        )}

        <button 
          disabled={!isAnswered} 
          onClick={handleNext} 
          className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm"
        >
          {currentStep === filteredQuiz.length - 1 ? "Lihat Hasil Akhir" : "Lanjut ke Soal Berikutnya"} <ArrowRight size={18}/>
        </button>
      </div>
    </div>
  );
}