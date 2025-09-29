"use client";

import { useState, useMemo } from "react";
import { 
  MagnifyingGlassIcon, 
  CheckCircleIcon,
  DocumentTextIcon 
} from "@heroicons/react/24/outline";
import { data } from "@/data/100";
import { useRouter } from "next/navigation";
// Import dat z vašeho souboru
const questionsData = data

const SearchPage = () => {
    const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrování otázek na základě vyhledávacího dotazu
  const filteredQuestions = useMemo(() => {
  if (!searchQuery.trim()) {
    return [];
  }

  // Funkce pro odstranění diakritiky
  const removeDiacritics = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const query = removeDiacritics(searchQuery.toLowerCase().trim());
  
  return questionsData.filter(question => 
    removeDiacritics(question.task.toLowerCase()).includes(query)
  );
}, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg" onClick={()=>router.push("/")}>
              <DocumentTextIcon className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">
              Vyhledávání otázek
            </h1>
          </div>
          <p className="text-gray-600">Najděte otázku a správnou odpověď</p>
        </div>

        {/* Vyhledávací pole */}
        <div className="mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Začněte psát část otázky..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-slate-800 focus:outline-none transition-all"
            />
          </div>
          
          {searchQuery && (
            <p className="mt-3 text-sm text-gray-600">
              Nalezeno výsledků: <strong>{filteredQuestions.length}</strong>
            </p>
          )}
        </div>

        {/* Výsledky vyhledávání */}
        <div className="space-y-6">
          {!searchQuery.trim() && (
            <div className="text-center py-12">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Začněte psát do vyhledávacího pole
              </p>
            </div>
          )}

          {searchQuery.trim() && filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Žádné výsledky nenalezeny
              </p>
            </div>
          )}

          {filteredQuestions.map((question, index) => {
            const correctAnswer = question.options.find(opt => opt.isTrue);
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 border-l-4 border-emerald-500">
                  {/* Otázka */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-3">
                      Otázka #{index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-800 leading-relaxed">
                      {question.task}
                    </h3>
                  </div>

                  {/* Správná odpověď */}
                  <div className="bg-emerald-50 rounded-lg p-4 border-2 border-emerald-200">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-emerald-800 mb-1">
                          Správná odpověď:
                        </p>
                        <p className="text-slate-700">
                          {correctAnswer?.text || "Odpověď nebyla nalezena"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Všechny možnosti (volitelné) */}
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800 font-medium">
                      Zobrazit všechny možnosti
                    </summary>
                    <div className="mt-3 space-y-2">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-lg border ${
                            option.isTrue
                              ? "bg-emerald-50 border-emerald-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {option.isTrue && (
                              <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                            )}
                            <span className={option.isTrue ? "font-medium" : ""}>
                              {option.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Systém pro vyhledávání testovacích otázek
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;