import { CardGradient } from "~/components/card";
import { Section } from "~/components/layout";
import { GradientText } from "~/components/typography";
import { Button } from "~/components/button";
import { Badge } from "../global";
import { ICardGradient } from "~/components/card/CardGradient";
import { useEffect, useState } from "react";

interface ICardApp extends ICardGradient {
  titlePosition?: "top" | "bottom";
  titleGradient?: boolean;
  title: string | JSX.Element | JSX.Element[];
  subTitle?: string | JSX.Element | JSX.Element[];
  bigText?: string;
  badgeText?: string;
  px?: string;
  buttonText?: string;
  buttonActive?: boolean;
  onMouseEnter?: any;
  onMouseLeave?: any;
  fullContent?: boolean;
  keepFullContentOnMobile?: boolean;
  py?: string;
  spaceY?: string;
  animationOnCard?: boolean;
  to?: string;
  titleClass?: string;
}

type ICardAppFull = ICardApp;

export default function CardApp({
  children,
  titlePosition = "bottom",
  className = "",
  titleGradient = false,
  title,
  subTitle,
  bigText = "",
  badgeText = "",
  gradient = "linear-gradient(180deg, #43C6AC 48%, #F8FFAE 50%, #151515 51.6%)",
  px = "px-[32px] lg:px-[40px]",
  buttonText = "",
  onMouseEnter,
  onMouseLeave,
  fullContent = false,
  keepFullContentOnMobile = false,
  py = "py-[32px]",
  spaceY = "space-y-[17px]",
  animation = false,
  to,
  height = "w-fit",
  titleClass = "",
  isGradientHover = false,
  deg = "132.8deg",
  ...props
}: ICardAppFull) {
  let titlePositionClass =
    titlePosition === "top" ? "flex-col lg:flex-col-reverse" : "flex-col";

  if (fullContent)
    titlePositionClass =
      titlePosition !== "top"
        ? keepFullContentOnMobile
          ? "flex-col-reverse"
          : "flex-col lg:flex-col-reverse"
        : "flex-col";

  const classes = `flex ${
    fullContent ? "" : px + " " + py
  } ${spaceY} w-full ${titlePositionClass}`;

  const [titleGradientState, setTitleGradientState] = useState(false);
  const [isHovering, setHover] = useState(false);

  useEffect(() => {
    if (isHovering) {
      setTitleGradientState(true);
    } else {
      setTitleGradientState(false);
    }
  }, [isHovering]);

  return (
    <div
      className={`${className}`}
      onMouseEnter={() => {
        if (onMouseEnter) onMouseEnter();
        setHover(true);
      }}
      onMouseLeave={() => {
        if (onMouseLeave) onMouseLeave();
        setHover(false);
      }}
      {...props}
    >
      <CardGradient
        contentPosition="start"
        gradient={gradient}
        rounded={"rounded-[30px]"}
        delay={"8s"}
        to={to}
        height={height}
        isGradientHover={isGradientHover}
        deg={deg}
      >
        <div className={`${classes} h-full`}>
          {!fullContent ? (
            children
          ) : (
            <div className="m-[1px] mb-2">{children}</div>
          )}
          {(!!title || !!subTitle || !!buttonText) && (
            <div
              className={
                fullContent
                  ? keepFullContentOnMobile
                    ? `absolute ${px} py-8 ${titleClass}`
                    : `lg:absolute ${px} py-8 ${titleClass}`
                  : `h-fit justify-end bg-dark ${
                      titlePosition === "bottom"
                        ? "!mt-auto pt-[30px] md:pt-[15px]"
                        : ""
                    } ${titleClass}`
              }
            >
              <Section
                position="start"
                titleSize="xSmall"
                titleBold="bold"
                isInlineCard={true}
                titleClass={"h-fit justify-end"}
                title={
                  <div className="flex gap-[12px] items-center flex-wrap">
                    {!titleGradientState ? (
                      title
                    ) : (
                      <GradientText
                        deg="93.63deg"
                        className="from-[#43C6AC]/[19.79] to-[#F8FFAE]/[52.98]"
                      >
                        {title}
                      </GradientText>
                    )}
                    {badgeText && <Badge>{badgeText}</Badge>}
                  </div>
                }
                subtitle={subTitle}
              >
                {buttonText && (
                  <Button animationOnCard={animation} variant="arrow">
                    {buttonText}
                  </Button>
                )}
              </Section>
            </div>
          )}
        </div>
        <>
          <div className="absolute font-[700] text-[#1E1E1E] top-[50px] -z-10 left-[260px] leading-[50px] md:leading-[88px] w-[320px] md:w-[740px] text-[42px] md:text-[80px]">
            <span>{bigText}</span>
          </div>
        </>
      </CardGradient>
    </div>
  );
}
