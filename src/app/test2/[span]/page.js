"use client";

import {
  Field,
  Label,
  Radio,
  RadioGroup,
  Legend,
  Fieldset,
} from "@headlessui/react";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { Fragment, useState, useEffect } from "react";
import { data } from "@/data/100";
import {
  HandRaisedIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

const options = data[0].options;

const Example = () => {
  const router = useRouter();
  const params = useParams();
  const span = params.span.split("-").map((n) => +n - 1);
  const [selected, setSelected] = useState();
  const [inputData, setInputData] = useState(data.slice(span[0], span[1]));
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);

  const maxCounter = inputData.length - 1;

  const addAnswerHandler = () => {
    setAnswers((prevState) => [
      ...prevState,
      {
        task: inputData[counter].task,
        options: options.map((option) =>
          JSON.stringify(option) == JSON.stringify(selected) ? { ...option, select: true } : option
        ),
      },
    ]);
    counter < maxCounter
      ? setCounter((prev) => {
          return prev + 1;
        })
      : showResultHandler();
  };

  const showResultHandler = () => {
    localStorage.setItem("result", JSON.stringify(answers));
    router.push("/result");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        {/* <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg">
              <CodeBracketIcon className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">TechAssessment</h1>
          </div>
          <p className="text-gray-600">Technický test znalostí</p>
        </div> */}

        {/* Progress */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Fieldset className="p-0">
            {/* Question Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-100 rounded-lg flex-shrink-0 mt-1">
                  <HandRaisedIcon className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <Legend className=" font-semibold text-slate-800 mb-2 leading-relaxed">
                    {inputData[counter].task}
                  </Legend>
                  <p className="text-gray-600 text-sm">
                    Vyberte nejlepší odpověď ze tří možností
                  </p>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="p-8">
              <RadioGroup
                value={selected}
                onChange={setSelected}
                aria-label="Quiz options"
                className="space-y-3 mb-8"
              >
                {inputData[counter].options.map((option, index) => (
                  <Field
                    key={option.text}
                    className="w-full  text-left rounded-lg border transition-all duration-200 cursor-pointer group hover:border-gray-300 hover:bg-gray-50"
                  >
                    <Radio as={Fragment} value={option}>
                      {({ checked }) => (
                        <div
                          className={`w-full flex  items-center p-5 justify-between b ${
                            checked
                              ? "bg-slate-800 text-white border-emerald-500 rounded-lg"
                              : ""
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-4 transition-colors ${
                                checked
                                  ? "bg-emerald-500 text-white"
                                  : "bg-gray-100 group-hover:bg-gray-200 text-gray-600"
                              }`}
                            >
                              {String.fromCharCode(65 + index)}
                            </div>
                            <Label className="text-base leading-relaxed cursor-pointer">
                              {option.text}
                            </Label>
                          </div>
                          <div
                            className={`group flex size-6 items-center justify-center rounded-full border-2 transition-all ${
                              checked
                                ? "border-emerald-400 bg-emerald-400"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            <CheckCircleIcon
                              className={`size-4 transition-opacity ${
                                checked
                                  ? "text-white opacity-100"
                                  : "text-gray-400 opacity-0"
                              }`}
                            />
                          </div>
                        </div>
                      )}
                    </Radio>
                  </Field>
                ))}
              </RadioGroup>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-gray-100">
                <button
                  onClick={addAnswerHandler}
                  disabled={!selected}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    selected
                      ? "bg-slate-800 text-white hover:bg-slate-700 shadow-sm"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {counter < maxCounter ? "Další otázka" : "Dokončit test"}
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
          </Fieldset>
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

export default Example;
