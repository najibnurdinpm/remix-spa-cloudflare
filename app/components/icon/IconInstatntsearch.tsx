type IIconInstatntsearch = {
  className?: string;
  width?: string;
  height?: string;
};

export default function IconInstatntsearch({
  className,
  width = "20",
  height = "20",
}: IIconInstatntsearch) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.783 1.667c4.475 0 8.115 3.64 8.115 8.115 0 2.111-.81 4.037-2.136 5.482l2.609 2.604a.624.624 0 11-.884.885l-2.64-2.634a8.076 8.076 0 01-5.064 1.779c-4.475 0-8.116-3.641-8.116-8.116s3.641-8.115 8.116-8.115zm0 1.25a6.873 6.873 0 00-6.866 6.865 6.874 6.874 0 006.866 6.866 6.873 6.873 0 006.865-6.866 6.873 6.873 0 00-6.865-6.865z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
