type ISectionSubtitle = {
  children: string | JSX.Element | JSX.Element[] | any;
  className?: string;
};

export default function SectionSubtitle({
  children,
  className = "",
}: ISectionSubtitle) {
  return (
    <div
      className={`${className} font-inter text-[#828282] text-sm lg:text-base leading-[25.6px] tracking-[-2%]`}
    >
      {children}
    </div>
  );
}
