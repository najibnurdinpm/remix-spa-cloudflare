import { motion, AnimatePresence } from "framer-motion";
import { Button } from "~/components/button";
import { CardGradient } from "~/components/card";
import { IconCookie } from "~/components/icon";

export default function CookieConsentContent({
  animation,
  className = "h-[150px] lg:!h-[240px] mb-[23.8px]",
  textClass = "text-[12px] leading-[16.8px]",
  iconClass = {
    parent: "w-[18px] lg:w-[40px] h-[18px] lg:h-[40px] mb-[16px]",
    children: "",
  },
  buttonProps = {
    py: "py-[8px]",
    px: "px-[16px]",
    className: "h-[33px] max-w-fit",
    svgClass: "",
  },
  description = (
    <p className={`${textClass} text-gray-1 max-w-[220px] lg:max-w-full`}>
      <>
        We use third-party cookies in order to personalize
        <br className="hidden lg:block" />
        your site experience
      </>
    </p>
  ),
}: any) {
  return (
    <motion.div
      initial={false}
      animate={{ scale: animation ? 1.05 : 1, transition: { duration: 0.4 } }}
    >
      <CardGradient
        contentPosition="center"
        gradient={`linear-gradient(180deg, rgb(67 198 172 / 0.4) 20%, rgba(248, 255, 174, 0) 63.08%)`}
        borderAnimation={false}
        rounded={"rounded-[30px]"}
        delay={"8s"}
        bgColor={"bg-[#1A1A1A]"}
        className={`${className}`}
      >
        <div className="flex flex-col justify-center items-center text-center py-3 lg:py-0">
          <div
            className={`bg-[#151515] flex justify-center items-center rounded-[360px] ${iconClass.parent}`}
          >
            <IconCookie className={iconClass.children} />
          </div>
          <div className="mb-[24px]">{description}</div>
          <div className="flex gap-[8px]">
            <AnimatePresence mode="wait">
              <motion.div
                initial={false}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.2 }}
                layout
              >
                <Button
                  borderColor="border-[#272727]"
                  bgColor="bg-[#272727]"
                  variant={"gradientBackground"}
                  textClass={`font-medium ${textClass}`}
                  py={buttonProps.py}
                  px={buttonProps.px}
                  className={buttonProps.className}
                >
                  <>
                    {!animation && "Allow"}
                    {animation && (
                      <svg
                        className={buttonProps.svgClass}
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={24} height={24} rx={12} fill="#007656" />
                        <path
                          d="M10.9062 16.1562L7.40625 12.6562L8.07812 11.9844L10.9062 14.8125L16.9062 8.8125L17.5781 9.48438L10.9062 16.1562Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </>
                </Button>
              </motion.div>
            </AnimatePresence>
            {/* <AnimatePresence mode="wait"> */}
            {!animation && (
              <Button
                borderColor="border-[#272727]"
                variant={"gradientBackground"}
                textClass={`font-medium ${textClass}`}
                py={buttonProps.py}
                px={buttonProps.px}
                className={buttonProps.className}
              >
                Decline
              </Button>
            )}
            {/* </AnimatePresence> */}
          </div>
        </div>
      </CardGradient>
    </motion.div>
  );
}
