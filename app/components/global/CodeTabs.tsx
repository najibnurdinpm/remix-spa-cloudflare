import { useState } from "react";
import { CodePreview } from "~/components/global";
import { Button } from "~/components/button";
import {
  ButtonHydrogen,
  ButtonLiquid,
  ButtonWebflow,
  ButtonNextJs,
} from "~/components/icon";

type ICodeTabs = {
  codes: {
    Webflow: any;
    Liquid: any;
    "Next.js": any;
    Hydrogen: any;
  };
  selectedPreviewPage: any;
};
type ILanguage = "liquid" | "html" | "javascript";
type ICode = "Hydrogen" | "Next.js" | "Liquid" | "Webflow";
type IButtons = {
  name: ICode;
  image: any;
};

export default function CodeTabs({ codes, selectedPreviewPage }: ICodeTabs) {
  const [active, setActive] = useState<ICode>("Hydrogen");

  const buttons: IButtons[] = [
    {
      name: "Hydrogen",
      image: (
        <ButtonHydrogen
          style={{
            filter: `${
              "Hydrogen" === active &&
              "invert(0%) sepia(140%) saturate(130%) hue-rotate(29deg) brightness(155%) contrast(132%)"
            }`,
          }}
          type="svg"
          className="w-[19.49px] h-[19.49px]"
        />
      ),
    },
    {
      name: "Next.js",
      image: (
        <ButtonNextJs
          type="svg"
          style={{
            filter: `${
              "Next.js" === active &&
              "invert(0%) sepia(140%) saturate(130%) hue-rotate(29deg) brightness(155%) contrast(132%)"
            }`,
          }}
        />
      ),
    },
    {
      name: "Liquid",
      image: (
        <ButtonLiquid
          style={{
            filter: `${
              "Liquid" === active
                ? "invert(0%) sepia(53%) saturate(1567%) hue-rotate(33deg) brightness(115%) contrast(132%)"
                : "invert(23%) sepia(22%) saturate(355%) hue-rotate(176deg) brightness(99%) contrast(91%)"
            }`,
          }}
        />
      ),
    },
    {
      name: "Webflow",
      image: (
        <ButtonWebflow
          type="svg"
          style={{
            filter: `${
              "Webflow" === active
                ? "invert(0%) sepia(53%) saturate(1567%) hue-rotate(33deg) brightness(115%) contrast(132%)"
                : "invert(23%) sepia(22%) saturate(355%) hue-rotate(176deg) brightness(65%) contrast(91%)"
            }`,
          }}
        />
      ),
    },
  ];

  let language: ILanguage = "liquid";
  if (active === "Webflow") language = "html";
  if (active === "Hydrogen" || active === "Next.js") language = "javascript";

  return (
    <div className="flex gap-8 flex-col md:flex-row lg:flex-col max-w-full">
      <div className="flex md:flex-col lg:flex-row gap-2 [overflow:scroll] no-scrollbar">
        {buttons.map((v) => (
          <Button
            rounded="rounded-lg"
            px="px-4"
            py="py-2"
            onClick={() => setActive(v.name)}
            key={v.name}
            variant={
              v.name === active ? "borderAnimation" : "gradientBackground"
            }
            className=" border-[#1D1D1D] w-full lg:w-max"
          >
            <span className="flex gap-2 rounded-lg leading-[15px] lg:leading-[20px] text-sm lg:text-base">
              <div className="my-auto w-full h-full">{v.image}</div>
              <div className="my-auto">{v.name}</div>
            </span>
          </Button>
        ))}
      </div>
      <div className="overflow-hidden">
        <CodePreview
          code={codes[active][selectedPreviewPage]}
          language={language}
        />
      </div>
    </div>
  );
}
