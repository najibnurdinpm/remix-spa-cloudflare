import { useState } from "react";
import { IconArrowRightWithState } from "../icon";
import { GradientText } from "~/components/typography";
import { CardGradient } from "~/components/card";
import { AnimatePresence, motion } from "framer-motion";
import { FadeInWhenVisible } from "~/components/animation";

type IAccordion = {
  question?: "string";
  answer?: "string";
  isHighlighted?: boolean;
  show?: any;
  setShow?: any;
  handleHover?: any;
  className?: string;
  [key: string]: any;
};

const Accordion = ({
  question,
  answer,
  isHighlighted = false,
  handleHover,
  className = "",
  ...props
}: IAccordion) => {
  const [show, setShow] = useState(false);

  return (
    <FadeInWhenVisible>
      <div className={className} {...props}>
        {/* question section */}

        {!isHighlighted && (
          <div className="max-h-[100px]">
            <Question question={question} show={show} setShow={setShow} />
          </div>
        )}

        {isHighlighted && (
          <div className={`max-h-[102px]`}>
            {/* <motion.div className={`max-h-[82px] ${show ? "mb-[20px]" : ""}`}> */}
            <CardGradient
              contentPosition={"start"}
              inset={"inset-[-1000%]"}
              gradient={
                "linear-gradient(370.92deg, #676767 46.56%, rgba(103, 103, 103, 0) 50.4%)"
              }
              className={"!h-fit"}
            >
              <Question
                p={"p-[23px]"}
                question={question}
                show={show}
                setShow={setShow}
              />
            </CardGradient>
          </div>
        )}

        {/* answer section */}

        <AnimatePresence initial={false}>
          {show && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto", marginTop: 20 },
                collapsed: { opacity: 0, height: 0, marginTop: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div
                className={`overflow-clip transition-opacity duration-200 h-full`}
              >
                <p className="font-inter font-medium text-[14px] lg:text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#828282] pl-[97px]">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeInWhenVisible>
  );
};

function Question({ question, show, setShow, p = "p-[24px]" }: IAccordion) {
  return (
    <div
      onClick={() => setShow(!show)}
      className={`flex gap-x-[40px] ${p} items-center cursor-pointer transition-all duration-300`}
    >
      <IconArrowRightWithState
        className={`${
          show ? "rotate-[270deg]" : "rotate-[90deg]"
        } transition-all duration-200`}
        isActive={show}
      />

      {show ? (
        <GradientText deg="97.91deg" className=" from-[#43C6AC] to-[#F8FFAE]">
          <h1 className="font-inter font-medium  text-[18px] lg:text-[24px] leading-[28.8px] tracking-[-0.48px]">
            {question}
          </h1>
        </GradientText>
      ) : (
        <h1 className="font-inter font-medium text-[18px] lg:text-[24px] leading-[28.8px] tracking-[-0.48px]">
          {question}
        </h1>
      )}
    </div>
  );
}

export default Accordion;
