import React from "react";
type IVerticalLayout = {
  rotate?: boolean;
};
export default function VerticalLayout({ rotate }: IVerticalLayout) {
  return (
    <svg
      className={rotate ? "rotate-90" : ""}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 48 48"
    >
      <rect width="20" height="48" fill="#222" rx="4"></rect>
      <rect width="20" height="48" x="28" fill="#222" rx="4"></rect>
    </svg>
  );
}
