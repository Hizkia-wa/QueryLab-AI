import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Trophy,
  ArrowRight,
  HelpCircle,
  RefreshCcw
} from "lucide-react";

import { quizData } from "../data/quiz";

export default function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ FILTER SESUAI MATERI
  const filteredQuiz = quizData.filter(
    (q) => Number(q.materiId) === Number(id)
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // ❗ DATA KOSONG
  if (filteredQuiz.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold text-gray-500">
          Soal belum tersedia untuk materi ini
        </h2>
      </div>
    );
  }

  const currentQuestion = filteredQuiz[currentStep];

  const handleNext = () => {
    if (currentStep < filteredQuiz.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  // ================= RESULT =================
  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center w-[400px]">

          <Trophy size={50} className="mx-auto text-yellow-500 mb-4" />

          <h2 className="text-2xl font-bold mb-2">Quiz Selesai</h2>
          <p className="text-gray-500 mb-6">Materi {id}</p>

          <h1 className="text-5xl font-bold text-indigo-600 mb-6">
            {Math.round((score / filteredQuiz.length) * 100)}
          </h1>

          <button
            onClick={() => navigate("/materi")}
            className="w-full bg-black text-white py-3 rounded-xl mb-3"
          >
            Kembali
          </button>

          <button
            onClick={() => window.location.reload()}
            className="w-full border py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <RefreshCcw size={16} /> Ulangi
          </button>
        </div>
      </div>
    );
  }

  // ================= QUIZ =================
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-lg">

        {/* Progress */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-600 rounded-full"
              style={{
                width: `${((currentStep + 1) / filteredQuiz.length) * 100}%`
              }}
            />
          </div>
          <p className="text-sm mt-2 text-gray-400">
            {currentStep + 1} / {filteredQuiz.length}
          </p>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <HelpCircle size={18} />
            <span className="text-xs font-bold">QUESTION</span>
          </div>

          <h2 className="text-xl font-bold">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-4">
          {currentQuestion.options.map((option) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedOption;

            return (
              <button
                key={option}
                disabled={isAnswered}
                onClick={() => {
                  setSelectedOption(option);
                  setIsAnswered(true);

                  // ✅ hanya dihitung sekali
                  if (option === currentQuestion.answer) {
                    setScore(score + 1);
                  }
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all
                  ${
                    isAnswered
                      ? isCorrect
                        ? "bg-green-100 border-green-500"
                        : isSelected
                        ? "bg-red-100 border-red-500"
                        : "bg-white"
                      : isSelected
                      ? "bg-indigo-100 border-indigo-500"
                      : "hover:bg-gray-50"
                  }
                `}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isAnswered && (
          <div className="mb-4 p-4 rounded-xl bg-gray-50 border">
            <p className="fw-bold mb-1">
              {selectedOption === currentQuestion.answer
                ? "✅ Jawaban Benar!"
                : "❌ Jawaban Salah"}
            </p>
            <p className="text-muted mb-0">
              {currentQuestion.explanation || "Pelajari kembali materi terkait."}
            </p>
          </div>
        )}

        {/* Button */}
        <button
          disabled={!isAnswered}
          onClick={handleNext}
          className={`w-full py-3 rounded-xl font-bold flex justify-center items-center gap-2 ${
            isAnswered
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          {currentStep === filteredQuiz.length - 1 ? "Finish" : "Next"}
          <ArrowRight size={16} />
        </button>

      </div>
    </div>
  );
}