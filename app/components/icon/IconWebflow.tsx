type IIconWebflow = {
  active?: boolean;
  size?: "auto" | string;
};

export default function IconWebflow({ active, size }: IIconWebflow) {
  return active ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
    >
      <g clipPath="url(#clip0_2999_6086)">
        <path fill="#000" d="M8.741 16a8 8 0 100-16 8 8 0 000 16z"></path>
        <path
          fill="#fff"
          d="M11.091 7.05l-.725 2.285c0-.175-.5-3.965-.5-3.965-1.15 0-1.76.815-2.08 1.68l-.885 2.29c0-.165-.125-2.27-.125-2.27a1.87 1.87 0 00-1.815-1.695l.94 5.74c1.2 0 1.85-.815 2.185-1.68l.75-1.95c0 .08.5 3.63.5 3.63a2.31 2.31 0 002.2-1.615l1.7-4.13c-1.2 0-1.83.815-2.15 1.68h.005z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2999_6086">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(.741)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
    >
      <g clipPath="url(#clip0_3008_11800)">
        <path fill="#677487" d="M8.509 16a8 8 0 100-16 8 8 0 000 16z"></path>
        <path
          fill="#111"
          d="M10.858 7.05l-.725 2.285c0-.175-.5-3.965-.5-3.965-1.15 0-1.76.815-2.08 1.68L6.67 9.34c0-.165-.125-2.27-.125-2.27a1.87 1.87 0 00-1.815-1.695l.94 5.74c1.2 0 1.85-.815 2.185-1.68l.75-1.95c0 .08.5 3.63.5 3.63a2.31 2.31 0 002.2-1.615l1.7-4.13c-1.2 0-1.83.815-2.15 1.68h.005z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3008_11800">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(.509)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}
