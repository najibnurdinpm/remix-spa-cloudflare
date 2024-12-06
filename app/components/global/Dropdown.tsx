import { CardGradient } from "~/components/card";
import { Button } from "../button";
import React from "react";
import { Arrow } from "../icon";
import Badge from "./Badge";

type IOption = { label: string; image: string; value: string };
type IDropdown = {
  options: IOption[];
  selected: IOption;
  setSelected: React.Dispatch<React.SetStateAction<IOption>>;
};

export default function Dropdown({
  options = [],
  selected,
  setSelected,
}: IDropdown) {
  return (
    <div
      aria-current="page"
      className="relative group text-sm lg:text-base font-medium leading-[18px] tracking-[0.02em] hover:text-yellow-1 transition-all duration-200 z-10"
    >
      <Button
        className="group border-none text-sm lg:text-base text-white"
        variant="gradientBackground"
        px="px-0"
        py="py-0"
      >
        <div className="bg-[#202020] px-4 py-2 rounded-[30px] flex gap-2 items-center">
          <span className="">{selected?.label}</span>
          <span className="group-hover:rotate-180 transition-all duration-75">
            <Arrow />
          </span>
        </div>
      </Button>

      {!!options.length && (
        <div className="pt-[12px] m-auto">
          <CardGradient
            contentPosition={"start"}
            gradient="linear-gradient(40.68deg, #676767 49.16%, #676767 49.16%, rgba(103, 103, 103, 0) 51.4%)"
            className="hidden group-hover:block !w-auto !whitespace-nowrap !h-auto !absolute min-w-[140px]"
          >
            <div className="flex flex-col py-5 cursor-default">
              {options.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={`text-white hover:text-yellow-1 ${
                      selected.value === v.value && "text-yellow-1"
                    } group flex items-center px-4 py-2 text-sm cursor-pointer`}
                    tabIndex={-1}
                    onClick={() => setSelected(v)}
                  >
                    {v.label}
                  </div>
                );
              })}
            </div>
          </CardGradient>
        </div>
      )}
    </div>
  );
}
