import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "~/components/global";
import { CardGradient } from "~/components/card";
import { GradientText } from "~/components/typography";

export default function CurrencyConverterContent({
  animation,
  variant = "1",
  className = "h-[75px] lg:h-[211px] mb-[41px] w-full relative",
}: any) {
  const defaultLine = [
    {
      content: <CurrencyLine variant={variant} />,
    },
  ];

  const defaultChart = [
    {
      id: 1,
      delay: 0,
      text: "USA",
      className: `${
        variant == 1
          ? "ml-[-120px] mt-[20px] md:ml-[-320px] md:mt-[40px]"
          : "ml-[-120px] mt-[20px] md:ml-[-120px] md:mt-[-20px]"
      }`,
      toolTipsClass: `${
        variant == 1
          ? "lg:left-[20px] lg:top-[40px] z-50"
          : "lg:left-[20px] lg:top-[40px] z-50"
      } `,
      isOpenToolTips: false,
    },
    {
      id: 2,
      delay: 0.4,
      text: "EURO",
      className: `${
        variant == 1
          ? "mr-[10px] mt-[80px] md:mr-[-35px] md:mt-[130px]"
          : "mr-[10px] mt-[80px] md:mr-[-35px] md:mt-[90px]"
      }`,
      toolTipsClass: `${
        variant == 1
          ? "lg:left-[190px] lg:top-[130px] z-50"
          : "lg:left-[190px] lg:top-[130px] z-50"
      }`,
      isOpenToolTips: false,
    },
    {
      id: 3,
      delay: 1,
      text: "YUAN",
      className: `${
        variant == 1
          ? "ml-[10px] md:ml-[25px]"
          : "ml-[0px] md:ml-[-40px] lg:ml-[-100px] mt-[100px] md:mt-[140px] lg:mt-[210px]"
      }`,
      toolTipsClass: `${
        variant == 1
          ? "lg:left-[190px] lg:top-0 z-50"
          : "lg:left-[120px] lg:top-[120px] z-50"
      }`,
      isOpenToolTips: false,
    },
  ];

  const [line, setLine] = useState(defaultLine);
  const [chart, setChart] = useState([...defaultChart].reverse());

  function handleHover(index: number, condition: "in" | "out") {
    let items = [...chart];
    let item = {
      ...items[index],
    };
    item.isOpenToolTips = condition === "in" ? true : false;
    items[index] = item;
    setChart(items);
  }

  useEffect(() => {
    if (animation) {
      setLine([]);
      setChart([]);
      setTimeout(() => {
        setChart([...defaultChart].reverse());
      }, 100);
      setTimeout(() => setLine(defaultLine), 120);
    } else {
      clearTimeout;
      setChart([...defaultChart].reverse());
    }
  }, [animation]);

  return (
    <div className={className}>
      <div className={"h-full w-full absolute flex justify-end"}>
        <AnimatePresence initial={false}>
          {[...chart].map((item, index) => {
            return (
              <motion.div
                className={`w-[calc(100%/3)] relative flex justify-center`}
                key={index}
                initial={{ opacity: 0, y: -50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: item.delay,
                }}
              >
                <div className={`w-fit h-fit ${item.className}`}>
                  <Badge
                    onMouseEnter={() => handleHover(index, "in")}
                    onMouseLeave={() => handleHover(index, "out")}
                    type="bubble"
                    pX="px-[14px]"
                    pY="py-[8px]"
                    height="h-auto"
                    gradient={
                      "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
                    }
                    as={"button"}
                    rounded={"rounded-[6px]"}
                    className={`mx-auto badge-currency relative`}
                    color="text-white"
                  >
                    {item.text}
                  </Badge>
                  <AnimatePresence>
                    {item.isOpenToolTips && (
                      <motion.div
                        onMouseEnter={() => handleHover(index, "in")}
                        onMouseLeave={() => handleHover(index, "out")}
                        className={`absolute text-center ${item.toolTipsClass}`}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        exit={{
                          opacity: 0,
                          x: -50,
                        }}
                      >
                        <CardGradient
                          contentPosition={"start"}
                          gradient={
                            "linear-gradient(220.92deg, #676767 46.56%, rgba(103, 103, 103, 0) 49.4%)"
                          }
                          rounded={"rounded-[12px]"}
                          className={"h-fit min-w-[120px]"}
                        >
                          <div className="flex flex-col w-full py-[12.8px]">
                            <div className="mb-[12px]">
                              <GradientText
                                deg="137.65deg"
                                className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16] max-w-[60px] block m-auto"
                              >
                                <span className="text-[10px] leading-[14px] font-[700] block">
                                  Convert EURO to USD
                                </span>
                              </GradientText>
                            </div>
                            <div className="mb-[10px] text-left ml-[14px]">
                              <p className="text-[8px] leading-[8.8px] text-gray-1 font-[700] mb-[4px]">
                                EURO
                              </p>
                              <p className="text-[14px] leading-[15.4px] font-[700]">
                                €415.33
                              </p>
                            </div>
                            <div className="text-left ml-[14px]">
                              <p className="text-[8px] leading-[8.8px] text-gray-1 font-[700] mb-[4px]">
                                USD
                              </p>
                              <p className="text-[14px] leading-[15.4px] font-[700]">
                                $453.00
                              </p>
                            </div>
                          </div>
                        </CardGradient>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {line.map((item, index) => {
        return <div key={index}>{item.content}</div>;
      })}
    </div>
  );
}

function CurrencyLine({ variant }: any) {
  return (
    <>
      {variant === "1" && (
        <svg
          viewBox="0 0 850 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M850 143.147C821.616 146.299 737.818 229.817 645.57 97.4491C580.301 3.7949 495.2 116.359 401.938 190.422C327.329 249.672 254.274 153.128 227.072 97.449C122.153 -117.311 67.9189 97.449 4.41074e-05 97.449"
            stroke="url(#paint0_linear_1_418)"
            strokeWidth="3"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1, transition: { duration: 2 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7 },
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_418"
              x1="716"
              y1="143.5"
              x2="59"
              y2="146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#43C6AC" />
              <stop offset="0.697328" stopColor="#F8FFAE" />
              <stop offset="1" stopColor="#151515" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {variant === "2" && (
        <svg
          viewBox="0 0 851 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M851.001,170.336C732.364,170.336 637.632,-204.795 454.364,170.336C406.851,267.592 279.242,436.231 148.919,332.735C-13.9857,203.366 -162.636,6.74606 -276.643,170.336C-437.777,401.549 -584.151,255.664 -633.73,250.159"
            stroke="url(#paint0_linear_2358_6360)"
            strokeWidth="5.24023"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: { duration: 2 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7 },
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_2358_6360"
              x1="-399.667"
              y1="250.775"
              x2="747.943"
              y2="255.142"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#43C6AC" />
              <stop offset="0.697328" stopColor="#F8FFAE" />
              <stop offset={1} stopColor="#151515" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
}
