type ButtonLiquidLarge = {
  className?: string;
};

export default function ButtonLiquidLarge({
  className = "",
}: ButtonLiquidLarge) {
  return (
    <img
      className={`w-[72px] h-[72px] ${className}`}
      src="/assets/images/liquid-large.png"
      alt=""
    />
  );
}
