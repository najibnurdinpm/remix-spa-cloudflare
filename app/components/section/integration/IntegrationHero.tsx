import { AnimatePresence, motion } from "framer-motion";
import { InstallNowBtn } from "~/components/button";
import { Description, GradientText } from "~/components/typography";
import { useLocation } from "@remix-run/react";

type IIntegrationHero = {
  heroImage: string;
  integrationType: "Webflow" | "Hydrogen" | "Liquid" | "Next.js";
  integrationDescription: string;
};

export default function IntegrationHero({
  heroImage,
  integrationType,
  integrationDescription,
}: IIntegrationHero) {
  const { pathname } = useLocation();

  return (
    <AnimatePresence initial={false}>
      <div className="lg:max-w-[1440px] bg-dark2 overflow-hidden relative m-auto lg:pt-[66px] md:pb-10 lg:pb-[72px] px-5 md:px-[45px] lg:px-20 xl:px-0">
        <div className="max-w-[1290px] m-auto xl:px-0 text-center md:text-left">
          <div className="md:max-w-[275px] lg:max-w-full">
            <motion.h1
              className="text-[32px] md:text-[40px] leading-[48px] lg:text-[64px] lg:leading-[76.8px] font-medium"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            >
              Shopify apps for <br className="hidden md:block" />
              <GradientText
                deg="97.17deg"
                className=" from-[#43C6AC] to-[#F8FFAE]"
              >
                {integrationType}
              </GradientText>
            </motion.h1>

            <motion.div
              className="mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0 } }}
            >
              <Description className="">
                <span
                  className="text-[#677487]"
                  dangerouslySetInnerHTML={{ __html: integrationDescription }}
                ></span>
              </Description>
              <InstallNowBtn
                variant="gradientBackground"
                buttonPosition="start"
                className="mt-8 md:mt-10 mx-auto md:mx-0 z-10 w-fit"
                source={`tech-stacks-${pathname.replace("/tech-stacks/", "")}`}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="-mb-10 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
        >
          <img
            className="md:absolute -mt-4 right-0 md:px-0 md:top-4 lg:bottom-0 mr-0 md:-mr-[31%] lg:-mr-[1%] md:max-w-[640px] lg:max-w-[45vw] xl:max-w-[750px] lg:mt-[50px]"
            src={heroImage}
            alt="integration hero"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
