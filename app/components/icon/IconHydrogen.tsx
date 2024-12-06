type IIconHydrogen = {
  active?: boolean;
  size?: "auto" | string;
};

export default function IconHydrogen({ active, size }: IIconHydrogen) {
  return active ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 17 16"
      className={size === "auto" ? "w-[14px] h-[14px] lg:w-4 lg:h-4" : ""}
    >
      <g fill="#000" clipPath="url(#clip0_2999_5952)">
        <path d="M4.686 1.156l2.602 1.35L5.13 3.649 2.351 2.284 0 3.496l7.066 3.523 2.292-1.212L6.77 4.512 9.048 3.37l2.586 1.35L14 3.483 7.066 0l-2.38 1.156z"></path>
        <path d="M4.686 8.137l2.602 1.35L5.13 10.63 2.351 9.265 0 10.477 7.066 14l2.292-1.21-2.588-1.296 2.278-1.142 2.586 1.35L14 10.463l-6.934-3.48-2.38 1.155z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2999_5952">
          <path fill="#fff" d="M0 0H14V14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 17 16"
      className={size === "auto" ? "w-[14px] h-[14px] lg:w-4 lg:h-4" : ""}
    >
      <clipPath id="a">
        <path d="M.491 0h16v16h-16z"></path>
      </clipPath>
      <g fill="#677487" clipPath="url(#a)">
        <path d="M5.847 1.321L8.82 2.865 6.354 4.17 3.178 2.61.491 3.995l8.075 4.026 2.62-1.384-2.957-1.48L10.83 3.85l2.956 1.544 2.704-1.416L8.566 0z"></path>
        <path d="M5.847 9.3l2.974 1.543-2.467 1.306-3.176-1.56-2.687 1.385L8.566 16l2.62-1.384-2.957-1.48 2.602-1.305 2.956 1.543 2.704-1.416-7.925-3.979z"></path>
      </g>
    </svg>
  );
}
