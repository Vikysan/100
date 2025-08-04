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
import { HandRaisedIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
// const options = data[0].options;

const Example = () => {
  const params = useParams();
  const span = params.span.split("-");
  const [inputData] = useState(data.slice(+span[0], +span[1]+1));
  const [counter, setCounter] = useState(0);
  const [selected, setSelected] = useState(0);
  const [answers, setAnswers] = useState([]);

  const maxCounter = inputData.length - 1;
  const isLast = +counter >= +maxCounter; 
  const addAnswerHandler = () => {
    setAnswers((prevState) => [
      ...prevState,
      {
        task:inputData[counter].task,
        options: 
          inputData[counter].options.map((option) =>
            option == selected ? { ...option, select: true } : option
        ),
      }
    ]);
    if (isLast)return
    setCounter((prev) => {
          return prev + 1;
        })
  setSelected(0)
  };

  return (
    <Fieldset className="w-full p-2 *:select-none h-svh flex flex-col justify-center gap-10">
      <Legend className="w-full text-center text-xl">{inputData[counter].task}</Legend>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
        className="flex flex-col gap-2 my-3"

      >
        {inputData[counter].options.map((option) => (
            <Radio  value={option} key={option.text} className="group cursor-pointer">
              {({ checked, disabled }) => (
                <div 
                // className="flex   bg-red-400 group-data-checked:bg-amber-200 w-full"
                className="rounded-lg px-4 py-2 border-2 
                
                border-gray-300 text-gray-700 
                bg-gray-100
                group-data-checked:border-blue-500
                group-data-checked:bg-blue-600 group-data-checked:text-blue-100 
                hover:bg-blue-600 
                hover:text-blue-100 duration-300"
                >
              
                 
                 <p className="inline">
                   {option.text}
                  </p> 
             
                </div>
              )}
            </Radio>
       
        ))}
      </RadioGroup>
      <button  disabled={selected===0} className="absolute bottom-2 right-2 rounded-lg px-4 py-2 border-2  border-blue-500 text-blue-500 disabled:opacity-30 duration-300" onClick={addAnswerHandler}>{isLast? "Výsledky" : "Dalši"}</button >
    </Fieldset>
  );
};

export default Example;
