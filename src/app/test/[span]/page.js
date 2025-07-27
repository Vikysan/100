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

const options = data[0].options;

const Example = () => {
  const params = useParams();
  const span = params.span.split("-").map(n=>+n-1)
  const [selected, setSelected] = useState();
  const [inputData, setInputData] = useState(data.slice(span[0],span[1]));
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);

  const maxCounter = inputData.length - 1;

  const addAnswerHandler = () => {
    setAnswers((prevState) => [
      ...prevState,
      options.map((option) =>
        option == selected ? { ...option, select: true } : option
      ),
    ]);
    counter < maxCounter ? setCounter((prev) => {return prev+1}) : "";
  };

  



  return (
    <Fieldset>
      <Legend>{inputData[counter].task}</Legend>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
      >
        {inputData[counter].options.map((option) => (
          <Field
            key={option.text}
            //   disabled={!plan.available}
            className="flex items-center gap-2"
          >
            <Radio as={Fragment} value={option}>
              {({ checked, disabled }) => (
                <span
                  className={`group flex size-5 items-center justify-center rounded-full border
                    ${checked ? "bg-blue-400" : "bg-white"}  ${
                    disabled && "bg-gray-100"
                  }`}
                >
                  {checked && <span className="size-2 rounded-full bg-white" />}
                   {/* <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-checked:opacity-100" /> */}
                </span>
                
              )}
            </Radio>
            <Label as={Fragment}>
              {({ disabled }) => (
                <label className={disabled && "opacity-50"}>
                  {option.text}
                </label>
              )}
            </Label>
          </Field>
        ))}
      </RadioGroup>
      <button
        onClick={addAnswerHandler}
      >
        Dalši
      </button>
    </Fieldset>
  );
};

export default Example;
