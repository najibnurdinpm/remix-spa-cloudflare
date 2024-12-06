import { useState, useRef, useEffect } from "react";
import { IconEllipse } from "~/components/icon";
import { Link } from "@remix-run/react";
import { useInView } from "react-intersection-observer";

export interface ICardGradient {
  gradient?: any;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  [key: string]: any;
  contentPosition?: "start" | "center" | "end";
  mockup?: "window" | "default";
  windowColor?: boolean;
  delay?: string;
  parentPosition?: "start" | "center" | "end";
  rounded?: string;
  bgColor?: string;
  height?: string;
  as?: React.ElementType;
  borderAnimation?: boolean;
  isGradientHover?: boolean;
  deg?: string;
  inset?: string;
}

type ICardGradientFull = ICardGradient;

export default function CardGradient({
  gradient = "linear-gradient(132.8deg, rgb(67 198 172 / 80%) 48.42%, rgb(248 255 174 / 60%) 49.86%, rgb(21 21 21 / 0%) 50.6%)",
  className = "",
  children,
  contentPosition = "center",
  mockup = "default",
  delay = "4s",
  parentPosition = "start",
  rounded = "rounded-[24px]",
  bgColor = "bg-dark",
  windowColor = true,
  as = "div",
  height = "w-fit",
  borderAnimation = true,
  isGradientHover = false,
  deg = "132.8deg",
  inset = "inset-[-100%]",
  ...props
}: ICardGradientFull) {
  const divRef = useRef<HTMLDivElement>(null);

  const [animation, setAnimation] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [defaultGradientHover, setDefaultGradientHover] = useState("unset");

  const [gradientRef, inView] = useInView();

  const gradientWhileHover = `linear-gradient(${deg}, rgba(67, 198, 172, 1) 35.38%, rgba(248, 255, 174, 1) 44.06%, rgba(122, 122, 122, 0) 49.19%)`;

  useEffect(() => {
    if (inView) {
      setDefaultGradientHover(
        `linear-gradient(${deg}, rgba(67, 198, 172, 0.5) 20.38%, rgba(248, 255, 174, 0.25) 31.06%, rgba(122, 122, 122, 0) 61.19%)`
      );
    } else {
      setDefaultGradientHover("unset");
    }
  }, [inView]);

  const handleMouseEnter = () => {
    if (borderAnimation) {
      setAnimation(true);
    }
    setOpacity(0.4);
  };

  const handleMouseLeave = () => {
    setAnimation(false);
    setOpacity(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.4);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  let gradientStyle = "unset";

  if (gradient !== "") {
    gradientStyle = gradient;
  } else {
    gradientStyle = "unset";
  }

  if (gradient !== "" && isGradientHover) {
    gradientStyle = !animation ? defaultGradientHover : gradientWhileHover;
  }

  const animationStyle = {
    backgroundImage: gradientStyle,
    animation: `spin ${delay} linear infinite`,
    animationPlayState: "paused",
  };

  animationStyle.animationPlayState = !animation ? "paused" : "";

  const contentPositionClass =
    contentPosition === "start"
      ? "items-start justify-start"
      : contentPosition === "center"
      ? "items-center justify-center"
      : contentPosition === "end"
      ? "items-end justify-end"
      : "items-center justify-center";

  const parentPositionClass =
    parentPosition === "start"
      ? "mr-auto"
      : parentPosition === "center"
      ? "mx-auto"
      : parentPosition === "end"
      ? "ml-auto"
      : "mr-auto";

  const Component = props?.to ? Link : as;
  const prefetchIntent = props?.to ? { prefetch: "intent" } : {};

  return (
    <Component
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={gradientRef}
      {...prefetchIntent}
      className={`${className} ${parentPositionClass} ${
        mockup === "window" ? "!border-0" : ""
      } group block relative ${height} w-full max-w-[1290px] overflow-hidden ${rounded} p-[1px] backdrop-filter-custom`}
      {...props}
    >
      <span
        style={animationStyle}
        className={`absolute ${inset} animate-[spin_2s_linear_infinite]`}
      />
      <div
        className={`${
          mockup === "window"
            ? "border border-b-0 border-solid border-gray-2"
            : ""
        } inline-flex h-full w-full ${bgColor} ${rounded} backdrop-filter-custom`}
      >
        {mockup === "window" && (
          <div
            className={`${
              !windowColor ? "bg-[#222] rounded-t-[20px]" : ""
            } flex absolute items-center pl-[28px] h-[46.21px] gap-[6.03px] w-full border-b border-solid border-gray-2 -z-10`}
          >
            <IconEllipse fill={`${windowColor ? "#E8695E" : "black"}`} />
            <IconEllipse fill={`${windowColor ? "#F1BE4F" : "black"}`} />
            <IconEllipse fill={`${windowColor ? "#61C554" : "black"}`} />
          </div>
        )}
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative flex h-full w-full overflow-hidden"
        >
          <div
            className={`${contentPositionClass} pointer-events-none absolute -inset-px opacity-0 transition duration-300`}
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgb(248, 255, 174, 0.1), transparent 40%)`,
            }}
          />
          <div className={`flex ${contentPositionClass} w-full h-full`}>
            {children}
          </div>
        </div>
      </div>
    </Component>
  );
}
