"use client";

import {
  Field,
  Legend,
  Fieldset,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState,Fragment } from "react";
import { data } from "@/data/100";

const options = data[0].answers;

const Example = () => {
  let [selected, setSelected] = useState(options[0]);

  return (
    // <div className="flex justify-center items-center h-dvh">
    <Fieldset>
      <Legend>{data[0].task}</Legend>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
      >
        {options.map((option) => (
          <Field key={option.answer} className="flex items-center gap-2 m-3 border-2">
            {/* {({ checked, disabled }) => ( */}

            <Radio
              // as={Fragment}
              disabled={false}
              value={option}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-blue-400 border-2"
            >
            {/* {({ checked, disabled }) => ( */}
                {/* <span>{}</span> */}
                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-checked:opacity-100" />
            </Radio>
              {/* )} */}
            {/* )} */}
            <Label>{option.answer}</Label>
          </Field>
        ))}
      </RadioGroup>
      <button></button>
    </Fieldset>
    // </div>
  );
};

export default Example;
