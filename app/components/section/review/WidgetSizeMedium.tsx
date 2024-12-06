import React from "react";
import { Badge } from "~/components/global";
import { IconStarGradient } from "~/components/icon";

export default function WidgetSizeMedium() {
  return (
    <div className="-mb-[8px] relative">
      <div className="absolute top-4 lg:top-8 xl:top-10 left-6 lg:left-8 xl:left-10">
        <Badge
          height="auto"
          pX="px-2 lg:px-4 xl:px-6"
          pY="py-1 lg:py-2 xl:py-3"
          rounded="rounded-xl"
          gradient="bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
        >
          <div className="flex items-center gap-[14px] text-[#9C9C9C]">
            <span className="font-extrabold font-inter text-[20px] lg:text-[25px] xl:text-[41px] leading-[49px]">
              4.6
            </span>
            <span className="flex gap-[7px] items-center">
              {[...Array(5)].map((v, i) => (
                <IconStarGradient
                  className=" w-[16px] lg:w-[20px] xl:w-[25px]"
                  key={i}
                />
              ))}
              <span className=" text-[14px]">(321)</span>
            </span>
          </div>
        </Badge>
      </div>
      <img src="/assets/images/review-widget-md.png" alt="Widget Size Medium" />
    </div>
  );
}
