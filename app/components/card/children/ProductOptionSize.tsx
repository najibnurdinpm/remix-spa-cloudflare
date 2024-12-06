import React from "react";
import { Badge } from "~/components/global";

type IProductOptionSize = {
  size?: string;
  checked?: string;
  handleChange?: any;
  index?: number;
};

export default function ProductOptionSize({
  size,
  checked,
  handleChange,
  index,
}: IProductOptionSize) {
  return (
    <div className="w-fit" key={index}>
      <input
        type="radio"
        id={`${size}`}
        name="Size"
        className="peer hidden"
        checked={checked === size}
        onChange={handleChange}
      />
      <Badge
        height="h-[15px] lg:h-[23px]"
        pY="py-[2px]"
        pX="px-[9px] lg:px-[14px]"
        color="text-gray-1"
        size="text-[9px] lg:text-[12px]"
        checkedColor="text-white"
        checked={checked}
        value={size}
        as={"label"}
        htmlFor={`${size}`}
      >
        {size}
      </Badge>
    </div>
  );
}
