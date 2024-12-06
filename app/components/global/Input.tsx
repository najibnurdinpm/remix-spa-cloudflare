import { useState } from "react";

type IInput = {
  colSpan?: string;
  element?: React.ElementType;
  labelText?: string;
  placeholder?: string;
  type?: string;
  name?: string;
};

export default function Input({
  colSpan = "col-span-1",
  element = "input",
  labelText = "",
  placeholder = "",
  type = "text",
  name = "",
}: IInput) {
  return (
    <div className={`mt-[25px] lg:mt-[48px] w-full col-span-2 lg:${colSpan}`}>
      <label
        htmlFor={name}
        className="block cursor-pointer font-inter font-medium text-[14px] leading-[22.4px] tracking-[-0.28px] text-gray-1 mb-[14px]"
      >
        {labelText}
      </label>
      <div className="block">
        <div className="rounded-[8px] bg-[linear-gradient(148.6deg,_#676767_-26.04%,_rgba(103,103,103,0)_81.05%)] p-[1px]">
          <div
            className="flex h-full min-w-full w-full items-center justify-center rounded-[8px]"
            style={{
              background:
                "linear-gradient(110.69deg, #1F1F1F 25.4%, rgba(31, 31, 31, 0) 55.26%)",
            }}
          >
            <div className="relative flex flex-grow items-stretch focus-within:z-10 text-[#D9D9D9] font-sledge-font-family-1 text-[16px] leading-[18px] tracking-[-0.02em]">
              {element === "input" && (
                <input
                  type={type}
                  name={name}
                  id={name}
                  className="border-0 block w-full focus:outline-none pl-[16px] p-[12.03px] bg-transparent placeholder:text-[#D9D9D9] placeholder:text-[16px] placeholder:leading-[25.6px placeholder:tracking-[-0.32px] focus:border-none focus:box-shadow-none focus:border-0 focus:ring-0"
                  placeholder={placeholder}
                />
              )}
              {element === "textarea" && (
                <textarea
                  className="border-0 block w-full focus:outline-none pl-[16px] p-[12.03px] bg-transparent placeholder:text-[#D9D9D9] placeholder:text-[16px] placeholder:leading-[25.6px placeholder:tracking-[-0.32px] focus:border-none focus:box-shadow-none focus:border-0 focus:ring-0"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  cols={30}
                  rows={8}
                ></textarea>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
