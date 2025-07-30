"use client"
import React, { useState } from 'react';

const QuestionRangeSelector = () => {
  const [fromQuestion, setFromQuestion] = useState(1);
  const [toQuestion, setToQuestion] = useState(10);
  const [randomOrder, setRandomOrder] = useState(false);
  
  // Předpokládám, že máš 100 otázek celkem
  const totalQuestions = 100;
  const selectedCount = toQuestion - fromQuestion + 1;
  const estimatedTime = Math.ceil(selectedCount * 1.5); // 1.5 minuty na otázku

  const handleStartQuiz = () => {
    // Simulace přesměrování
    const orderText = randomOrder ? " v náhodném pořadí" : "";
    alert(`Spouští se test s otázkami ${fromQuestion}-${toQuestion}${orderText}`);
  };

  const handleRangeChange = (type, value) => {
    const numValue = parseInt(value);
    
    if (type === 'from') {
      setFromQuestion(numValue);
      // Automaticky upravit 'to' pokud je menší než 'from'
      if (numValue > toQuestion) {
        setToQuestion(numValue);
      }
    } else {
      setToQuestion(numValue);
      // Automaticky upravit 'from' pokud je větší než 'to'
      if (numValue < fromQuestion) {
        setFromQuestion(numValue);
      }
    }
  };

  const presetRanges = [
    { label: "První desítka", from: 1, to: 10 },
    { label: "Základy (1-25)", from: 1, to: 25 },
    { label: "Pokročilé (26-50)", from: 26, to: 50 },
    { label: "Expert (51-75)", from: 51, to: 75 },
    { label: "Všechno (1-100)", from: 1, to: 100 },
  ];

  const applyPreset = (preset) => {
    setFromQuestion(preset.from);
    setToQuestion(preset.to);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-800">TechAssessment</h1>
          </div>
          <p className="text-gray-600 text-lg">Vyberte rozsah otázek pro váš test</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Card Header */}
          <div className="p-8 border-b border-gray-100 bg-slate-50">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              <h2 className="text-xl font-semibold text-slate-800">
                Konfigurace testu
              </h2>
            </div>
            <p className="text-gray-600">
              Celkem je k dispozici {totalQuestions} otázek. Vyberte si rozsah podle vaší úrovně.
            </p>
          </div>

          <div className="p-8">
            {/* Quick Presets */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Rychlý výběr</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {presetRanges.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => applyPreset(preset)}
                    className={`p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 ${
                      fromQuestion === preset.from && toQuestion === preset.to
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                        : 'border-gray-200 bg-white text-gray-700'
                    }`}
                  >
                    <div className="font-medium">{preset.label}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Otázky {preset.from}-{preset.to} ({preset.to - preset.from + 1} otázek)
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Range */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Vlastní rozsah</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Od otázky
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={totalQuestions}
                    value={fromQuestion}
                    onChange={(e) => handleRangeChange('from', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do otázky
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={totalQuestions}
                    value={toQuestion}
                    onChange={(e) => handleRangeChange('to', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>
              
              {/* Random Order Checkbox */}
              <div className="mt-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={randomOrder}
                      onChange={(e) => setRandomOrder(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                      randomOrder 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}>
                      {randomOrder && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Náhodné pořadí otázek</span>
                    <p className="text-xs text-gray-500 mt-1">Otázky budou zobrazeny v náhodném pořadí</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-slate-800 mb-4">Souhrn testu</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Počet otázek</div>
                    <div className="font-semibold text-slate-800">{selectedCount}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Odhadovaný čas</div>
                    <div className="font-semibold text-slate-800">{estimatedTime} min</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Rozsah</div>
                    <div className="font-semibold text-slate-800">{fromQuestion}-{toQuestion}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <button
                onClick={handleStartQuiz}
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors shadow-sm flex items-center gap-3 text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v1" />
                </svg>
                Spustit test
              </button>
              
              <div className="text-sm text-gray-500">
                Rozsah: otázky {fromQuestion} až {toQuestion}{randomOrder ? ' • Náhodné pořadí' : ''}
              </div>
            </div>
          </div>
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

export default QuestionRangeSelector;