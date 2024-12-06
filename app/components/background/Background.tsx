type IBackground = {
  className?: string;
  roleDesc?: string;
  position?: "left" | "center" | "right";
  variant?: "default" | "rectangle";
};

export default function Background({
  position = "right",
  roleDesc = `${position}-gradient`,
  className = "",
  variant = "default",
}: IBackground) {
  let positionClass = "";
  let positionImage = "";
  let width = "";
  let height = "";

  if (position === "right") {
    positionClass = "ml-auto";
    positionImage = "/assets/images/bg-1-right-frame.png";
    width = "600";
    height = "300";
  }

  if (position === "center") {
    positionClass = "mx-auto h-[200px]";
    positionImage = "/assets/images/background-center.png";
    width = "1077";
    height = "1709";
  }

  if (position === "left") {
    positionClass = "mr-auto";
    positionImage = "/assets/images/background-2-left.png";
    width = "1077";
    height = "1709";
  }

  return (
    <>
      {variant === "default" && (
        <div className="relative pointer-events-none">
          <div
            className={`${className} ${
              position === "center" ? "w-fit h-[200px]" : "w-full"
            } ${positionClass} absolute`}
            aria-roledescription={roleDesc}
          >
            <img
              className={positionClass}
              src={positionImage}
              width={width}
              height={height}
              alt={roleDesc}
            />
          </div>
        </div>
      )}
      {variant === "rectangle" && (
        <div className="absolute pointer-events-none -z-10 top-[110px] md:top-0 h-auto left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:flex lg:justify-center max-w-[1440px]">
          <img src="/assets/images/bg-rectangle.png" alt="" />
        </div>
      )}
    </>
  );
}
