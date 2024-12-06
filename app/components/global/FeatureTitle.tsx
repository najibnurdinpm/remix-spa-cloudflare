import React from "react";
import { Description } from "../typography";

type IFeatureTitle = {
  number: string;
  title: any;
  subtitle: any;
};

export default function FeatureTitle({
  number,
  title,
  subtitle,
}: IFeatureTitle) {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left gap-4 md:gap-[43px] lg:gap-[57px]">
      <div
        className="font-inter text-[64px] lg:text-[140px] leading-[77px] lg:leading-[168px] font-bold text-transparent h-[77xp] md:h-[84px] lg:h-[168px]"
        style={{
          background:
            "linear-gradient(180deg, #676767 13.99%, rgba(103, 103, 103, 0) 73.21%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextStroke: "2px",
          WebkitTextStrokeColor: "transparent",
          color: "#151515",
        }}
      >
        {number}
      </div>
      <div className="mt-0 lg:mt-6">
        <div className="text-[24px] lg:text-[48px] leading-[29px] lg:leading-[57px]">
          {title}
        </div>
        <div className="mt-2 md:mt-3 lg:mt-4">
          <Description>{subtitle}</Description>
        </div>
      </div>
    </div>
  );
}
