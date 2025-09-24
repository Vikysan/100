"use client";
import Loading from "@/app/loading";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { data } from "@/data/100";
import {
  HandRaisedIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const Example = () => {
  const router = useRouter();
  const params = useParams();
  const query = useSearchParams();

  const preparationInputData = () => {
    const span = params.span.split("-").map((n) => +n);
    const inputDataSpan = data.slice(span[0] - 1, span[1]);
    console.log("shuffle");
    for (let input of inputDataSpan) {
      input.options = input.options.sort(() => Math.random() - 0.5);
    }

    if (query.get("r") == "true") {
      return inputDataSpan.sort(() => Math.random() - 0.5);
    }
    console.log(inputDataSpan);
    return inputDataSpan;
  };
  // console.log(!!query.get("r"))
  // console.log(params)
  const span = params.span.split("-").map((n) => +n);
  const [selected, setSelected] = useState(null);
  const inputData = useMemo(preparationInputData, [params.span, query]);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);

  const maxCounter = inputData.length;
  const addAnswerHandler = () => {
    setShowCorrect(true);
    setTimeout(() => {
      setShowCorrect(false);
      setAnswers((prevState) => [
        ...prevState,
        {
          task: inputData[counter].task,
          options: inputData[counter].options.map((option) =>
            option.text === selected.text ? { ...option, select: true } : option
          ),
        },
      ]);
      setSelected(null);
      if (counter < maxCounter) {
        setCounter((prev) => prev + 1);
      }
    }, 2000);
  };

  useEffect(() => {
    if (counter === maxCounter && answers.length > 0) {
      localStorage.setItem("result", JSON.stringify(answers));
      router.push("/result");
    }
  }, [answers, counter, maxCounter, router]);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  if (!inputData.length) {
    return <div className="text-center p-8">Žádné otázky k zobrazení.</div>;
  }

  if (counter >= maxCounter) {
    return <Loading />;
  }

  return (
    <div className="h-dvh bg-gray-50 flex justify-between md:items-center md:justify-center md:p-6">
      <div className="w-full max-w-4xl">
        {/* Progress */}
        {/* Progres bar s popisy – jen pro md a větší */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hidden md:block">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-600">
              Otázka {counter + 1} / {inputData.length}
            </span>
            <span className="text-sm font-medium text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
              {Math.round(((counter + 1) / inputData.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((counter + 1) / inputData.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Tenká zelená čára – jen pro malé displeje */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 md:hidden z-50">
          <div
            className="bg-emerald-500 h-1 transition-all duration-300"
            style={{ width: `${((counter + 1) / inputData.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white  h-dvh flex flex-col relative md:h-auto md:rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* <div className="p-0"> */}
          {/* Question Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-start gap-4">
              {/* <div className="p-2 bg-slate-100 rounded-lg flex-shrink-0 mt-1">
                  <HandRaisedIcon className="w-5 h-5 text-slate-600" />
                </div> */}
              <div>
                <h2 className="font-semibold text-slate-800 mb-2 leading-relaxed">
                  {inputData[counter]?.task}
                </h2>
                <p className="text-gray-600 text-sm">
                  Vyberte nejlepší odpověď ze tří možností
                </p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-8 h-100 md:h-max flex-1 overflow-auto">
            <div
              className="space-y-3 mb-8 flex flex-col h-100 md:h-max  flex-1"
              role="radiogroup"
              aria-label="Quiz options"
            >
              {inputData[counter]?.options?.map((option, index) => {
                const isSelected = selected && selected.text === option.text;
                const isCorrect = option.isTrue; // předpokládám, že správná odpověď má isTrue === true

                return (
                  <div
                    key={option.text}
                    className={`w-full text-left rounded-lg border transition-all duration-200 cursor-pointer group hover:border-gray-300 hover:bg-gray-50
        ${showCorrect && isCorrect ? "border-emerald-500 bg-emerald-50" : ""}
      `}
                    onClick={() => handleOptionClick(option)}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOptionClick(option);
                      }
                    }}
                  >
                    <div
                      className={`w-full flex items-center p-5 justify-between ${
                        isSelected
                          ? "bg-slate-800 text-white border-emerald-500 rounded-lg"
                          : ""
                      }`}
                    >
                      <div className="flex items-between">
                        {/* <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-4 transition-colors ${isSelected
                              ? "bg-emerald-500 text-white"
                              : "bg-gray-100 group-hover:bg-gray-200 text-gray-600"
                              }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </div> */}
                        <span className="text-base leading-relaxed cursor-pointer ">
                          {option.text}
                        </span>
                      </div>
                      <div
                        className={`flex w-6 h-6 items-center justify-center rounded-full border-2 transition-all shrink-0  ${
                          isSelected
                            ? "border-emerald-400 bg-emerald-400"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        <CheckCircleIcon
                          className={`w-4 h-4 transition-opacity ${
                            isSelected
                              ? "text-white opacity-100"
                              : "text-gray-400 opacity-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Action Button */}
          <div className="flex  flex-col sm:flex-row-reverse gap-4 p-4 justify-between items-center pt-6 border-t border-gray-100">
            <button
              onClick={addAnswerHandler}
              disabled={!selected}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selected
                  ? "bg-slate-800 text-white hover:bg-slate-700 shadow-sm"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {counter < maxCounter - 1 ? "Další otázka" : "Dokončit test"}
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <div className="text-sm text-gray-500">
              {selected ? (
                <span className="text-slate-600 font-medium">
                  Připraveno k odeslání
                </span>
              ) : (
                <span>Vyberte odpověď</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Systém pro hodnocení technických znalostí
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Example;
