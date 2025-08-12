"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircleIcon,
  XCircleIcon,
  TrophyIcon,
  ArrowLeftIcon,
  CodeBracketIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const ResultPage = () => {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    // Načtení výsledků z localStorage
    const savedResults = localStorage.getItem("result");
    if (savedResults) {
      const parsedResults = JSON.parse(savedResults);
      setResults(parsedResults);
      setTotalQuestions(parsedResults.length);
      
      // Výpočet skóre - pokud existují správné odpovědi
      const correctAnswers = parsedResults.reduce((acc, result) => {
        const selectedOption = result.options.find(opt => opt.select);
        return selectedOption && selectedOption.isTrue ? acc + 1 : acc;
      }, 0);
      
      setScore(correctAnswers);
    }
    setLoading(false);
  }, []);

  // Kontrola zda máme informace o správných odpovědích
  const hasCorrectAnswers = results.length > 0 && results.some(result => 
    result.options.some(opt => opt.isTrue !== undefined)
  );

  const getScorePercentage = () => {
    return totalQuestions > 0 && hasCorrectAnswers ? Math.round((score / totalQuestions) * 100) : 0;
  };

  const getScoreColor = () => {
    if (!hasCorrectAnswers) return "text-slate-600 bg-slate-50";
    const percentage = getScorePercentage();
    if (percentage >= 80) return "text-emerald-600 bg-emerald-50";
    if (percentage >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getScoreMessage = () => {
    if (!hasCorrectAnswers) return "Test dokončen";
    const percentage = getScorePercentage();
    if (percentage >= 80) return "Výborné výsledky!";
    if (percentage >= 60) return "Dobré výsledky";
    return "Prostor pro zlepšení";
  };

  const handleRetakeTest = () => {
    localStorage.removeItem("result");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Načítání výsledků...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg">
              <TrophyIcon className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Výsledky testu</h1>
          </div>
          <p className="text-gray-600">Shrnutí vašeho výkonu</p>
        </div>

        {/* Score Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="text-center">
            {hasCorrectAnswers ? (
              <>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreColor()} mb-4`}>
                  <span className="text-2xl font-bold">
                    {getScorePercentage()}%
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {getScoreMessage()}
                </h2>
                <p className="text-gray-600 mb-6">
                  Odpověděli jste správně na <strong>{score}</strong> z <strong>{totalQuestions}</strong> otázek
                </p>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${getScorePercentage()}%` }}
                  />
                </div>
                
                <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                    <span>Správně: {score}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircleIcon className="w-5 h-5 text-red-500" />
                    <span>Špatně: {totalQuestions - score}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreColor()} mb-4`}>
                  <CheckCircleIcon className="w-10 h-10 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Test dokončen
                </h2>
                <p className="text-gray-600 mb-6">
                  Odpověděli jste na <strong>{totalQuestions}</strong> otázek
                </p>
              </>
            )}
          </div>
        </div>

        {/* Detailed Results */}
        <div className="space-y-6 mb-8">
          <h3 className="text-xl font-semibold text-slate-800">
            {hasCorrectAnswers ? "Detailní přehled odpovědí" : "Vaše odpovědi"}
          </h3>
          
          {results.map((result, questionIndex) => {
            const selectedOption = result.options.find(opt => opt.select);
            const correctOption = result.options.find(opt => opt.isTrue);
            const isCorrect = selectedOption && selectedOption.isTrue;
            
            return (
              <div key={questionIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`p-6 ${hasCorrectAnswers ? 
                  `border-l-4 ${isCorrect ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50'}` : 
                  'border-l-4 border-slate-500 bg-slate-50'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${
                      hasCorrectAnswers ? 
                        (isCorrect ? 'bg-emerald-100' : 'bg-red-100') : 
                        'bg-slate-100'
                    }`}>
                      {hasCorrectAnswers ? (
                        isCorrect ? (
                          <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                        ) : (
                          <XCircleIcon className="w-6 h-6 text-red-600" />
                        )
                      ) : (
                        <CodeBracketIcon className="w-6 h-6 text-slate-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-gray-500">
                          Otázka {questionIndex + 1}
                        </span>
                        {hasCorrectAnswers && (
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            isCorrect 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {isCorrect ? 'Správně' : 'Špatně'}
                          </span>
                        )}
                      </div>
                      
                      <h4 className="font-semibold text-slate-800 mb-4 leading-relaxed">
                        {result.task}
                      </h4>
                      
                      <div className="space-y-3">
                        {result.options.map((option, optionIndex) => {
                          const isSelected = option.select;
                          const isCorrectOption = hasCorrectAnswers && option.isTrue;
                          
                          return (
                            <div
                              key={optionIndex}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                hasCorrectAnswers ? (
                                  isCorrectOption
                                    ? 'border-emerald-200 bg-emerald-50'
                                    : isSelected && !isCorrectOption
                                    ? 'border-red-200 bg-red-50'
                                    : 'border-gray-100 bg-gray-50'
                                ) : (
                                  isSelected
                                    ? 'border-slate-300 bg-slate-100'
                                    : 'border-gray-100 bg-gray-50'
                                )
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    hasCorrectAnswers ? (
                                      isCorrectOption
                                        ? 'bg-emerald-500 text-white'
                                        : isSelected && !isCorrectOption
                                        ? 'bg-red-500 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                    ) : (
                                      isSelected
                                        ? 'bg-slate-600 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                    )
                                  }`}>
                                    {String.fromCharCode(65 + optionIndex)}
                                  </div>
                                  <span className={`text-sm ${
                                    (hasCorrectAnswers && (isCorrectOption || (isSelected && !isCorrectOption))) || 
                                    (!hasCorrectAnswers && isSelected)
                                      ? 'font-medium'
                                      : 'text-gray-600'
                                  }`}>
                                    {option.text}
                                  </span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  {isSelected && (
                                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                      Vaše volba
                                    </span>
                                  )}
                                  {hasCorrectAnswers && isCorrectOption && (
                                    <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleRetakeTest}
            className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Opakovat test
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Systém pro hodnocení technických znalostí
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;