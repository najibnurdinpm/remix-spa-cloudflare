import React from "react";

type IChecked = {
  label: string;
  checked: boolean;
  setChecked: any;
};

export default function Checkbox({ label, checked, setChecked }: IChecked) {
  return (
    <form className="flex items-center mr-4 mb-2">
      <input
        type="checkbox"
        name="A3-confirmation"
        checked={checked}
        onChange={(v) => setChecked(v.target.value)}
        className="opacity-0 absolute h-5 w-5 text-transparent"
        id={label}
      />
      <div
        style={
          checked
            ? { background: "linear-gradient(180deg, #43C6AC, #F8FFAE)" }
            : { background: "transparent" }
        }
        className={`${
          checked ? "border-none" : "border-2 border-[#677487]"
        } rounded-md  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2`}
      >
        <svg
          className="fill-tranparent hidden w-3 h-3 pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor" fillRule={"evenodd"}>
            <g transform="translate(-9 -11)" fill="#151515" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
      <label htmlFor={label} className="select-none">
        {label}
      </label>
    </form>
  );
}
