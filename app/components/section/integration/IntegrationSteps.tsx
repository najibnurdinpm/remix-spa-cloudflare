import { useState } from "react";
import { Badge, CodePreview,NotificationBubble } from "~/components/global";
import {
  IconCopy,
  IconShopifyIntegration,
  ButtonWebflow,
  ButtonNextJs,
  ButtonLiquid,
  ButtonHydrogen,
} from "~/components/icon";
import { Description, GradientText } from "~/components/typography";
import BorderStep from "./BorderStep";

type IImages =
  | [{ size: "sm"; url: string }, { size: "lg"; url: string }]
  | [{ size: "lg"; url: string }, { size: "sm"; url: string }];
type ISteps =
  | {
      type: "text" | "description";
      value: string | HTMLElement | Element | any;
    }
  | {
      type: "code";
      value: string;
      language?: "html" | "javascript" | "liquid" | "shellscript";
    }
  | { type: "image"; value: string }
  | { type: "images"; value: IImages };
type IIntegrationSteps = {
  integrationType: "Webflow" | "Hydrogen" | "Liquid" | "Next.js";
  steps: ISteps[][];
};

export default function IntegrationSteps({
  integrationType,
  steps,
}: IIntegrationSteps) {
  const [copiedActive, setCopiedActive] = useState("");

  const copy = (stepID: string, code: string) => {
    setCopiedActive(stepID);
    setTimeout(() => setCopiedActive(""), 3000);

    // copy function
    navigator.clipboard.writeText(code);
  };

  const IntegrationIcon = () => {
    if (integrationType === "Liquid") {
      return (
        <ButtonLiquid
          style={{
            filter:
              "invert(65%) sepia(19%) saturate(0%) hue-rotate(175deg) brightness(200%) contrast(89%)",
          }}
          width="32"
          height="32"
        />
      );
    } else if (integrationType === "Next.js") {
      return (
        <ButtonNextJs
          style={{
            filter:
              "invert(10%) sepia(0%) saturate(0%) hue-rotate(175deg) brightness(80%) contrast(100%)",
          }}
          width="44"
          height="27"
        />
      );
    } else if (integrationType === "Hydrogen") {
      return (
        <ButtonHydrogen
          style={{
            filter:
              "invert(65%) sepia(19%) saturate(0%) hue-rotate(175deg) brightness(200%) contrast(89%)",
          }}
          width="32"
          height="32"
        />
      );
    } else if (integrationType === "Webflow") {
      return (
        <ButtonWebflow
          style={{
            filter: "brightness(70%)",
          }}
          width="41.043"
          height="41.043"
        />
      );
    } else {
      return <ButtonHydrogen />;
    }
  };

  const BubbleNotification = () => {
    if(integrationType === "Next.js" || integrationType === "Hydrogen"){
      return <div className="w-full md:order-3 md:min-w-[514px] md:max-w-[514px] md:m-[0_auto] lg:absolute lg:right-0 lg:top-[12rem] lg:w-[511px]">
        <NotificationBubble title="Server Side Fetch" description="Sledge supports fetching API data through the server, see documentation for the walkthrough." />
      </div>
    }
  }

  return (
    <>
      <div className="pt-[52px] lg:pt-[72px] bg-[#111111]">
        <div className="max-w-[1290px] mx-auto px-5 md:px-[45px] lg:px-20 xl:px-0 relative">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center mb-0 md:items-start md:flex-wrap md:justify-between lg:mb-[60px]">
            <div className="flex gap-4 md:gap-8 grow md:max-w-[64%]">
              <div>
                <IntegrationBadge
                  roundedFull={false}
                  icon={<IntegrationIcon></IntegrationIcon>}
                />
              </div>

              <div className="relative grow">
                <h2 className="text-[24px] lg:text-[48px] font-medium leading-[28px] lg:leading-[57.6px]">
                  Sledge + {integrationType} : {" "}
                  <GradientText
                    deg="95.86deg"
                    className="from-[#43C6AC] to-[#F8FFAE]"
                  >
                    Rapid development
                  </GradientText>
                </h2>
                <div>
                  <div className="relative mt-2">
                    <Description>
                      <span className="text-[#677487]">
                        See how rapid integrating Sledge features into your store.{" "}
                        <br className="hidden lg:block" />
                        With few simple steps, product filter is ready to use in your {integrationType} store.
                      </span>
                    </Description>
                  </div>
                </div>
              </div>
            </div>

            {BubbleNotification()}

            <div className="flex gap-4 items-center">
              <IntegrationBadge roundedFull icon={<IconShopifyIntegration />} />
              <div className="font-inter text-[10px] text-[#677487] flex flex-col gap-1">
                <div className="">Shopify</div>
                <div className="w-[72px] relative border-b-[1px] border-[#393D4E] after:rounded-lg after:h-[6px] after:w-[6px] after:bg-[#393D4E] after:absolute after:right-0 after:-top-[2.5px]"></div>
                <div className="">{integrationType}</div>
              </div>
              <IntegrationBadge
                roundedFull
                icon={<IntegrationIcon></IntegrationIcon>}
              />
            </div>
          </div>

          <div className="-mb-[300px]">
            {steps.map((v, i) => (
              <div key={i}>
                {i !== 0 && (
                  <>
                    <BorderStep />
                  </>
                )}
                <div>
                  <div className="max-w-[1100px] m-auto flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-[68px] relative">
                    <div className="pt-12 md:pt-10 lg:pt-16 lg:pb-20 relative">
                      <IntegrationBadge
                        roundedFull
                        icon={
                          <div className="font-inter text-2xl">{i + 1}</div>
                        }
                        size="sm"
                      />
                      {i + 1 !== steps.length && (
                        <div className="hidden lg:flex absolute w-full h-full mx-auto">
                          <div className='mx-auto h-full bg-[url("/assets/images/integration-step-border.png")] bg-repeat w-[1px]'></div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full max-w-full md:overflow-auto gap-8 pt-4 md:pt-10 lg:pt-16 pb-16 md:pb-10 lg:pb-20">
                      {v.map((s, sI) => {
                        let step: any = "";

                        switch (s.type) {
                          case "text":
                            step = (
                              <div className="text-2xl mt-3 lg:pr-[72px] text-center md:text-left">
                                {s.value}
                              </div>
                            );
                            break;

                          case "description":
                            step = (
                              <div className="-mt-6">
                                <Description className="lg:pr-[72px]">
                                  <span className="leading-[25.6px] text-center md:text-left">
                                    {s.value}
                                  </span>
                                </Description>
                              </div>
                            );
                            break;

                          case "image":
                            step = (
                              <div className="lg:pr-[72px]">
                                <img
                                  className="w-full rounded-lg"
                                  src={s.value}
                                  alt={`step ${i + 1}.${sI + 1}`}
                                />
                              </div>
                            );
                            break;

                          case "images":
                            step = (
                              <div className="flex lg:pr-[72px] gap-[2%]">
                                {s.value.map((img, imgI) => (
                                  <img
                                    className={`${
                                      img.size === "lg" ? "w-[72%]" : "w-[26%]"
                                    } h-full rounded-lg`}
                                    key={imgI}
                                    src={img.url}
                                    alt={`step ${i + 1}.${sI + 1}.${imgI + 1}`}
                                  />
                                ))}
                              </div>
                            );
                            break;

                          case "code":
                            step = (
                              <div className="flex gap-6 relative">
                                <CodePreview
                                  withWindow
                                  code={s.value}
                                  language={s.language || "javascript"}
                                  showLineNumber={false}
                                />

                                <div
                                  className="w-12 absolute right-6 -bottom-6 md:bottom-0 md:right-0 md:relative z-10"
                                  onClick={() =>
                                    copy(`step.${i + 1}.${sI + 1}`, s.value)
                                  }
                                >
                                  <IntegrationBadge
                                    roundedFull={false}
                                    icon={<IconCopy />}
                                    size="xs"
                                    pointerEvent={true}
                                  />
                                  {copiedActive ===
                                    `step.${i + 1}.${sI + 1}` && (
                                    <div className="absolute">copied</div>
                                  )}
                                </div>
                              </div>
                            );

                            break;
                        }
                        return <div key={sI}>{step}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[300px] bg-dark"></div>
    </>
  );
}

const IntegrationBadge = ({
  icon,
  roundedFull = true,
  size,
  pointerEvent = false,
}: any) => {
  let height = "h-[64px] md:h-[56px] lg:h-[64px]";
  let width = "w-[64px] md:w-[56px] lg:w-[64px]";
  let pY = "py-4 md:py-[14px] lg:py-4";
  let pX = "px-4 md:px-[14px] lg:px-4";
  if (roundedFull) {
    height = "h-[72px] md:h-[48px] lg:h-[72px]";
    width = "w-[72px] md:w-[48px] lg:w-[72px]";
    pY = "py-5 md:py-[13px] lg:py-5";
    pX = "px-5 md:px-[13px] lg:px-5";
  }
  if (size === "sm") {
    height = "h-[56px]";
    width = "w-[56px]";
    pY = "py-5";
    pX = "px-5";
  }
  if (size === "xs") {
    height = "h-[48px]";
    width = "w-[48px]";
    pY = "py-3";
    pX = "px-3";
  }
  return (
    <Badge
      gradient="bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
      as="span"
      pY={pY}
      pX={pX}
      height={height}
      rounded={roundedFull ? "rounded-full" : "rounded-[10px]"}
      className={`mx-auto ${width} ${
        !pointerEvent ? "pointer-events-none" : ""
      }`}
    >
      {icon}
    </Badge>
  );
};
