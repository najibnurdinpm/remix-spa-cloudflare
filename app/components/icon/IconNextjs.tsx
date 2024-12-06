type IIconNextjs = {
  active?: boolean;
  size?: "auto" | string;
};

export default function IconNextjs({ active, size }: IIconNextjs) {
  return active ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 17 16"
      className={size === "auto" ? "w-[14px] h-[14px] lg:w-4 lg:h-4" : ""}
    >
      <path
        fill="#000"
        d="M8.75 16c4.423 0 8.008-3.582 8.008-8S13.173 0 8.75 0C4.327 0 .74 3.582.74 8s3.586 8 8.009 8z"
      ></path>
      <path
        fill="url(#paint0_linear_2999_6093)"
        d="M14.045 14.002L6.895 4.8H5.545v6.397h1.078v-5.03l6.575 8.486c.296-.199.58-.416.846-.651z"
      ></path>
      <path
        fill="url(#paint1_linear_2999_6093)"
        d="M12.043 4.8h-1.068v6.4h1.068V4.8z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_2999_6093"
          x1="9.044"
          x2="11.879"
          y1="11.348"
          y2="14.865"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2999_6093"
          x1="11.508"
          x2="11.489"
          y1="4.798"
          y2="9.498"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
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
      <path
        fill="#677487"
        d="M8.5 16c4.423 0 8.008-3.582 8.008-8S12.923 0 8.5 0C4.077 0 .49 3.582.49 8s3.586 8 8.009 8z"
      ></path>
      <path
        fill="url(#paint0_linear_3008_11793)"
        d="M13.795 14.002L6.645 4.8H5.297v6.397h1.078v-5.03l6.574 8.486c.297-.199.58-.416.846-.651z"
      ></path>
      <path
        fill="url(#paint1_linear_3008_11793)"
        d="M11.793 4.8h-1.068v6.4h1.068V4.8z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3008_11793"
          x1="8.795"
          x2="11.63"
          y1="11.348"
          y2="14.865"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#111"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3008_11793"
          x1="11.258"
          x2="11.239"
          y1="4.798"
          y2="9.498"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#111"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
