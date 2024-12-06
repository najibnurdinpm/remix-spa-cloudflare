import { Section } from "~/components/layout";
import { CardGradient } from "~/components/card";
import { Badge } from "~/components/global";
import { FadeInWhenVisible } from "~/components/animation";
import { IData } from "./type";

export default function ContentComponent({ hero, content }: IData) {
  return (
    <div className="relative flex justify-center flex-col h-auto my-[0] mx-auto pt-2 lg:pt-12">
      <FadeInWhenVisible
        variant={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        duration={3}
      >
        <RectangleBackground />
      </FadeInWhenVisible>
      <Section
        pt="pt-[32px]"
        px="px-0 lg:px-20 xl:px-0"
        animation={false}
        title={hero.title}
        subtitle={hero.subTitle}
      >
        <FadeInWhenVisible
          variant={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          duration={0.2}
        >
          <CardGradient
            className="h-auto w-full mt-[56px] lg:mt-[72px]"
            contentPosition="start"
            mockup={"window"}
            windowColor={false}
            gradient="linear-gradient(40.68deg, #676767 49.16%, #676767 49.16%, rgba(103, 103, 103, 0) 51.4%)"
          >
            <div className="flex flex-col px-[20px] lg:px-[218px] pt-[calc(55.79px+46px)] pb-[33px] lg:pb-[98px] mx-auto">
              <FadeInWhenVisible
                variant={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                <Badge
                  height="h-full"
                  pY="py-[8px]"
                  pX="px-[16px]"
                  color="text-gray-1"
                  size="text-[12px]"
                  checkedColor="text-white"
                  textTransform={"capitalize"}
                  className="mr-auto lg:ml-auto lg:mr-0 mb-[24px] lg:mb-[12px] w-fit"
                  rounded="rounded-[24px]"
                  gradient={
                    "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
                  }
                >
                  <span className="font-inter font-medium text-[14px] leading-[22.4px] tracking-[-0.28px] text-[#677487]">
                    Last Update {hero.lastUpdate}
                  </span>
                </Badge>
              </FadeInWhenVisible>
              {content.map((item, index) => {
                return (
                  <FadeInWhenVisible
                    key={index}
                    variant={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 50 },
                    }}
                    className="mb-[16px] lg:mb-[32px]"
                  >
                    <div className="mb-[16px] lg:mb-[32px] first-of-type:mt-[0px] mt-[32px] lg:mt-[64px] font-medium text-[24px] lg:text-[40px] leading-[33.6px] lg:leading-[56px] tracking-[-0.48px] lg:tracking-[-0.8px]">
                      {item.title}
                    </div>
                    <div className="font-inter font-medium text-[14px] lg:text-[16px] leading-[22.4px] lg:leading-[25.6px] tracking-[-0.28px] lg:tracking-[-0.32px] text-gray-3">
                      {item.description}
                    </div>
                  </FadeInWhenVisible>
                );
              })}
            </div>
          </CardGradient>
        </FadeInWhenVisible>
      </Section>
    </div>
  );
}

function RectangleBackground() {
  return (
    <div className="inline-block overflow-hidden">
      <svg
        className="hidden sm:block absolute -z-10 max-w-full top-[100px] lg:top-[78px] scale-[1] lg:scale-[1] h-auto"
        width={1440}
        height={365}
        viewBox="0 0 1440 365"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.24" filter="url(#filter0_f_1_6721)">
          <path
            d="M-64 24H1504L1342 341H96L-64 24Z"
            fill="url(#paint0_linear_1_6721)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_6721"
            x={-88}
            y={0}
            width={1616}
            height={365}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={12}
              result="effect1_foregroundBlur_1_6721"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_6721"
            x1={720}
            y1={124}
            x2={720}
            y2={341}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#43C6AC" stopOpacity={0} />
            <stop offset={1} stopColor="#43C6AC" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="block sm:hidden absolute w-full -z-10 max-w-full top-[50px] h-auto"
        width={428}
        height={235}
        viewBox="0 0 428 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.24" filter="url(#filter0_f_955_13698)">
          <path
            d="M-245 24H674L579.052 211H-151.224L-245 24Z"
            fill="url(#paint0_linear_955_13698)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_955_13698"
            x={-269}
            y={0}
            width={967}
            height={235}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={12}
              result="effect1_foregroundBlur_955_13698"
            />
          </filter>
          <linearGradient
            id="paint0_linear_955_13698"
            x1="214.5"
            y1="82.9905"
            x2="214.5"
            y2={211}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#43C6AC" stopOpacity={0} />
            <stop offset={1} stopColor="#43C6AC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
