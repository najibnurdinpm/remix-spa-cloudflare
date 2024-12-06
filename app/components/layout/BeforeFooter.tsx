import { CardGradient } from "~/components/card";
import { Section } from "~/components/layout";
import { InstallNowBtn } from "~/components/button";
import { GradientText } from "~/components/typography";

export default function BeforeFooter() {
  return (
    <div className="pb-[48px] m-auto max-w-[1290px] pt-12 px-5 lg:px-20 xl:px-0">
      <CardGradient
        parentPosition="center"
        contentPosition="start"
        isGradientHover
        mockup="window"
        deg="180deg"
        gradient={
          "linear-gradient(180deg, #43C6AC 48%, #F8FFAE 50%, #151515 51.6%)"
        }
        delay={"8s"}
      >
        <Section
          titleStack="vertical"
          pt="pt-[87px]"
          title={
            <div className="flex justify-center">
              <div className="relative w-[92px] hidden lg:block">
                <img
                  className="absolute top-[30px]"
                  src={"/assets/images/people-1.png"}
                  alt="people-1"
                  width={56}
                  height={56}
                />
                <img
                  className="absolute top-[90px] right-[60px]"
                  src={"/assets/images/click-1.png"}
                  alt="click-1"
                  width={65}
                  height={65}
                />
              </div>
              <div>
                Start your <br />
                <GradientText
                  deg="96.7deg"
                  className="bg-gradient-97 from-[#43C6AC]/[50.6] to-[#F8FFAE]/[98.29]"
                >
                  14 days free trial
                </GradientText>
              </div>
              <div className="relative w-[92px] hidden lg:block">
                <img
                  className="absolute left-[40px] top-[60px]"
                  src={"/assets/images/people-2.png"}
                  alt="people-2"
                  width={32}
                  height={32}
                />
                <img
                  className="absolute left-[90px] top-[100px]"
                  src={"/assets/images/people-3.png"}
                  alt="people-3"
                  width={40}
                  height={65}
                />
                <img
                  className="absolute left-[20px] top-[130px]"
                  src={"/assets/images/click-2.png"}
                  alt="click-2"
                  width={49}
                  height={49}
                />
              </div>
            </div>
          }
          subtitle={
            <>
              Still not sure about Sledge? Don't worry, we provide 14 days free
              trial.
              <br className="hidden sm:block" />
              Our free trial gives you access to all Sledge apps features for
              free.
            </>
          }
        >
          <InstallNowBtn
            variant="gradientBackground"
            buttonPosition={"center"}
            className={"mt-[48px] w-fit"}
            source={"Footer"}
          />
        </Section>
      </CardGradient>
    </div>
  );
}
