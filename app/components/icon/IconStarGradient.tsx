import React from "react";

type IIconStarGradient = {
  className: string;
};
export default function IconStarGradient({ className }: IIconStarGradient) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      fill="none"
      viewBox="0 0 25 26"
    >
      <path
        fill="url(#paint0_linear_1226_2755)"
        fillRule="evenodd"
        d="M5.708 15.826L.748 11.72c-.937-.748-.526-2.254.662-2.423l7.035-.314 3.004-7.532a1.232 1.232 0 012.204 0l3.004 7.532 7.035.314c1.188.17 1.598 1.675.662 2.423l-4.96 4.106 1.354 8.017c.156 1.093-.98 1.912-1.967 1.418l-6.23-3.96-6.23 3.958c-.988.494-2.123-.324-1.967-1.418l1.354-8.015z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1226_2755"
          x1="12.551"
          x2="12.551"
          y1="0.771"
          y2="25.408"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43C6AC"></stop>
          <stop offset="1" stopColor="#F8FFAE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
