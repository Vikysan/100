"use client";
import {
  Field,
  Label,
  Radio,
  RadioGroup,
  Legend,
  Fieldset,
} from "@headlessui/react";
// import clsx from 'clsx'
import { Fragment, useState } from "react";
import { data } from "@/data/100";

// const plans = [
//   { name: "Startup", available: true },
//   { name: "Business", available: true },
//   { name: "Enterprise", available: false },
// ];
const options = data[0].answers;

const Example = () => {
  let [selected, setSelected] = useState();

  return (
    <Fieldset>
      <Legend>{data[0].task}</Legend>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
      >
        {options.map((option) => (
          <Field
            key={option.answer}
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
                </span>
              )}
            </Radio>
            <Label as={Fragment}>
              {({ disabled }) => (
                <label className={disabled && "opacity-50"}>
                  {option.answer}
                </label>
              )}
            </Label>
          </Field>
        ))}
      </RadioGroup>
      <button onClick={()=>{console.log(options.map(option=>option==selected? {...option, "select":true}:option))}}>cvak</button>
    </Fieldset>
  );
};

export default Example;
