"use client"
import React, { useState } from 'react';

const TestResultsPage = () => {
  // Ukázková data výsledků testu
  const testResults = {
    totalQuestions: 10,
    correctAnswers: 7,
    timeSpent: 12, // minuty
    completedAt: new Date().toLocaleString('cs-CZ'),
    questionRange: '1-10',
    randomOrder: false,
    questions: [
      {
        id: 1,
        question: "Jaký je základní princip fungování REST API?",
        userAnswer: "Bezstavová komunikace pomocí HTTP metod",
        correctAnswer: "Bezstavová komunikace pomocí HTTP metod",
        isCorrect: true,
        options: [
          "Stavová komunikace s dlouhodobými připojeními",
          "Bezstavová komunikace pomocí HTTP metod",
          "Binární protokol pro rychlý přenos dat"
        ]
      },
      {
        id: 2,
        question: "Co je to Docker container?",
        userAnswer: "Virtuální stroj s kompletním OS",
        correctAnswer: "Izolované prostředí pro běh aplikací",
        isCorrect: false,
        options: [
          "Virtuální stroj s kompletním OS",
          "Cloudové úložiště pro aplikace",
          "Izolované prostředí pro běh aplikací"
        ]
      },
      {
        id: 3,
        question: "Které z následujících je výhodou mikroservis architektury?",
        userAnswer: "Nezávislé nasazování jednotlivých služeb",
        correctAnswer: "Nezávislé nasazování jednotlivých služeb",
        isCorrect: true,
        options: [
          "Nezávislé nasazování jednotlivých služeb",
          "Jednodušší debugging celé aplikace",
          "Menší režie na síťovou komunikaci"
        ]
      },
      {
        id: 4,
        question: "Jaká je hlavní výhoda použití TypeScriptu oproti JavaScriptu?",
        userAnswer: "Rychlejší běh aplikace",
        correctAnswer: "Statická typová kontrola",
        isCorrect: false,
        options: [
          "Rychlejší běh aplikace",
          "Statická typová kontrola",
          "Menší velikost výsledného kódu"
        ]
      },
      {
        id: 5,
        question: "Co znamená zkratka API?",
        userAnswer: "Application Programming Interface",
        correctAnswer: "Application Programming Interface",
        isCorrect: true,
        options: [
          "Application Programming Interface",
          "Automated Program Integration",
          "Advanced Programming Instructions"
        ]
      },
      {
        id: 6,
        question: "Který HTTP status kód označuje úspěšnou operaci?",
        userAnswer: "200",
        correctAnswer: "200",
        isCorrect: true,
        options: ["200", "404", "500"]
      },
      {
        id: 7,
        question: "Co je to SQL injection?",
        userAnswer: "Typ bezpečnostní zranitelnosti",
        correctAnswer: "Typ bezpečnostní zranitelnosti",
        isCorrect: true,
        options: [
          "Typ bezpečnostní zranitelnosti",
          "Metoda optimalizace databáze",
          "Způsob připojení k databázi"
        ]
      },
      {
        id: 8,
        question: "Jaký je rozdíl mezi GET a POST HTTP metodami?",
        userAnswer: "GET je pro načítání dat, POST pro odesílání",
        correctAnswer: "GET je pro načítání dat, POST pro odesílání",
        isCorrect: true,
        options: [
          "GET je pro načítání dat, POST pro odesílání",
          "GET je rychlejší než POST",
          "POST je bezpečnější než GET"
        ]
      },
      {
        id: 9,
        question: "Co je to NoSQL databáze?",
        userAnswer: "Databáze bez SQL dotazů",
        correctAnswer: "Ne-relační databáze",
        isCorrect: false,
        options: [
          "Databáze bez SQL dotazů",
          "Ne-relační databáze",
          "Nová verze SQL"
        ]
      },
      {
        id: 10,
        question: "Jaký je účel CSS frameworku Bootstrap?",
        userAnswer: "Rychlé vytváření responzivních webů",
        correctAnswer: "Rychlé vytváření responzivních webů",
        isCorrect: true,
        options: [
          "Rychlé vytváření responzivních webů",
          "Optimalizace výkonu webu",
          "Správa databází"
        ]
      }
    ]
  };

  const [showDetails, setShowDetails] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const scorePercentage = Math.round((testResults.correctAnswers / testResults.totalQuestions) * 100);
  const incorrectAnswers = testResults.totalQuestions - testResults.correctAnswers;

  const getScoreColor = () => {
    if (scorePercentage >= 80) return 'text-green-600';
    if (scorePercentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = () => {
    if (scorePercentage >= 80) return 'bg-green-50 border-green-200';
    if (scorePercentage >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Výsledky testu</h1>
          </div>
          <p className="text-gray-600">TechAssessment - Technický test znalostí</p>
        </div>

        {/* Overall Score */}
        <div className={`rounded-xl border-2 p-8 mb-8 ${getScoreBgColor()}`}>
          <div className="text-center">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
              {scorePercentage}%
            </div>
            <div className="text-xl text-gray-700 mb-4">
              {testResults.correctAnswers} z {testResults.totalQuestions} správných odpovědí
            </div>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Čas: {testResults.timeSpent} min</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <span>Rozsah: {testResults.questionRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0a2 2 0 00-2 2v2m0 0a2 2 0 002 2h12a2 2 0 002-2v-2m0 0a2 2 0 00-2-2H8z" />
                </svg>
                <span>{testResults.completedAt}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{testResults.correctAnswers}</div>
                <div className="text-sm text-gray-600">Správné odpovědi</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-100 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{incorrectAnswers}</div>
                <div className="text-sm text-gray-600">Nesprávné odpovědi</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{Math.round(testResults.timeSpent / testResults.totalQuestions * 10) / 10}</div>
                <div className="text-sm text-gray-600">Min/otázka</div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Details */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <svg className={`w-5 h-5 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showDetails ? 'Skrýt detaily' : 'Zobrazit detaily odpovědí'}
          </button>
        </div>

        {/* Detailed Results */}
        {showDetails && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Detailní přehled odpovědí</h2>
            
            {testResults.questions.map((question, index) => (
              <div key={question.id} className={`bg-white rounded-lg border-l-4 shadow-sm ${
                question.isCorrect ? 'border-l-green-500' : 'border-l-red-500'
              }`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-500">Otázka {index + 1}</span>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          question.isCorrect 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {question.isCorrect ? 'Správně' : 'Špatně'}
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-slate-800 mb-3">
                        {question.question}
                      </h3>
                    </div>
                    
                    <div className={`p-2 rounded-full ${
                      question.isCorrect ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {question.isCorrect ? (
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600">Vaše odpověď:</span>
                      <span className={`text-sm ${question.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {question.userAnswer}
                      </span>
                    </div>
                    
                    {!question.isCorrect && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">Správná odpověď:</span>
                        <span className="text-sm text-green-700 font-medium">
                          {question.correctAnswer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            Opakovat test
          </button>
          <button className="px-8 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
            Nový test
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Stáhnout výsledky
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestResultsPage;