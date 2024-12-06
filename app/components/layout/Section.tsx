import { Description, SectionTitle } from "~/components/typography";
import { Badge } from "~/components/global";
import { AnimatePresence, motion } from "framer-motion";

type ISection = {
  children: string | JSX.Element | JSX.Element[] | any;
  icon?: any;
  titleStack?: "vertical" | "horizontal";
  title: string | JSX.Element | JSX.Element[];
  subtitle?: string | JSX.Element | JSX.Element[];
  titleSize?: "xSmall" | "small" | "normal";
  titleBold?: "light" | "bold";
  position?: "start" | "center";
  isInlineCard?: boolean;
  image?: string;
  pt?: string;
  pb?: string;
  px?: string;
  maxW?: string;
  animation?: boolean;
  titleClass?: string;
  itemsCenter?: boolean;
  flexWidth?:string
};

export default function Section({
  children,
  icon,
  titleStack = "vertical",
  title,
  subtitle,
  titleSize,
  titleBold,
  position = "center",
  isInlineCard = false,
  image,
  pt = "pt-10 lg:pt-12",
  pb = "pb-[72px]",
  px = "px-5 md:px-10 lg:px-20 xl:px-0",
  maxW = "max-w-[1290px]",
  animation = false,
  itemsCenter = false,
  titleClass = "",
  flexWidth
}: ISection) {
  let horizontalClass = "";
  let positionClass = "";

  if (titleStack === "horizontal") {
    horizontalClass = "lg:text-left lg:flex-row";
    flexWidth = "lg:w-1/2";
  }

  if (position === "start") positionClass = "text-start";
  if (position === "center") positionClass = "text-center";

  const TitleSubtitle = () => (
    <div
      className={`flex gap-[12px] h-full justify-end ${
        itemsCenter ? "items-center" : ""
      } ${positionClass} flex-col ${horizontalClass}`}
    >
      <div className={`${flexWidth}`}>
        <SectionTitle
          xSmall={titleSize === "xSmall"}
          small={titleSize === "small"}
          bold={titleBold === "bold"}
        >
          {title}
        </SectionTitle>
      </div>

      <div className={`${flexWidth}`}>
        {!!subtitle && <Description>{subtitle}</Description>}
      </div>
    </div>
  );

  const Icon = (
    <Badge
      gradient={
        "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
      }
      as={"button"}
      pY={"py-[10px]"}
      pX={"px-[10px]"}
      height={"h-[42px]"}
      rounded={"rounded-[10px]"}
      className={"mx-auto w-[42px] mb-6 lg:mb-[30px] pointer-events-none"}
    >
      {icon}
    </Badge>
  );

  return (
    <div
      className={`${position === "start" ? "" : "m-auto"} ${
        isInlineCard ? "" : `${maxW} ${pt} ${pb} ${px}`
      } ${titleClass}`}
    >
      {!!icon && (
        <>
          {animation ? (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 2 },
                }}
              >
                {Icon}
              </motion.div>
            </AnimatePresence>
          ) : (
            Icon
          )}
        </>
      )}

      {animation ? (
        <div className={`${positionClass}`}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5 },
              }}
            >
              <TitleSubtitle />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <TitleSubtitle />
      )}

      {!!image &&
        (animation ? (
          <AnimatePresence>
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 2, delay: 0.5 },
              }}
            >
              <img className="lg:max-w-[1070px]" src={image} alt="Hero" />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="mt-10 flex justify-center lg:max-w-[1070px] mx-auto">
            <img className="w-full" src={image} alt="Hero" />
          </div>
        ))}
      {children}
    </div>
  );
}
