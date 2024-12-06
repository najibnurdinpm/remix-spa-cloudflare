type IButtonLiquid = {
  width?: string;
  height?: string;
  className?: string;
  [key: string]: any;
};

export default function ButtonLiquid({
  width = "20",
  height = "20",
  className = "",
  ...props
}: IButtonLiquid) {
  return (
    <img
      src="/assets/images/ButtonLiquid.png"
      width={width}
      height={height}
      className={className}
      alt=""
      {...props}
    />
  );
}
