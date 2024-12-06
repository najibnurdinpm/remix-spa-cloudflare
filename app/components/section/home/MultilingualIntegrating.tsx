import { useEffect, useState } from "react";
import { CardApp } from "~/components/card";
import {
  ButtonWebflow,
  ButtonHydrogen,
  ButtonLiquidLarge,
  ButtonNextJs,
} from "~/components/icon";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type IData = {
  id: number;
  icon: any;
  title: string | JSX.Element | JSX.Element[];
  subTitle: string | JSX.Element | JSX.Element[];
  gradient?: string;
  deg?: string;
  animationActive?: any;
  to?: string;
};

const data: IData[] = [
  {
    id: 1,
    icon: (
      <ButtonHydrogen
        width="72"
        height="72"
        className={"mb-[48px] lg:mb-[28px]"}
      />
    ),
    title: "Hydrogen",
    deg: "45.19deg",
    subTitle: (
      <div className="tracking-[-0.32px]">
        Shopify's best framework for headless commerce, runs on top of Remix.
        Sledge support Hydrogen by default.
      </div>
    ),
    animationActive: false,
    to: "/tech-stacks/hydrogen",
  },
  {
    id: 2,
    icon: (
      <ButtonNextJs
        className={"mb-[55px] lg:mb-[35px]"}
        width={"64.04"}
        height={"63.98"}
      />
    ),
    title: "Next.js",
    deg: "45.19deg",
    subTitle: (
      <div className="tracking-[-0.32px]">
        One of popular React framework. Sledge support building your headless
        Shopify store with Next.js Commerce.
      </div>
    ),
    animationActive: false,
    to: "/tech-stacks/next",
  },
  {
    id: 3,
    icon: <ButtonLiquidLarge className={"mb-[39px] lg:mb-[20px]"} />,
    title: "Liquid",
    deg: "45.19deg",
    subTitle: (
      <div className="tracking-[-0.32px]">
        Not building headless store & prefer using Shopify theme? No worries,
        Sledge runs on your Liquid theme gracefully.
      </div>
    ),
    animationActive: false,
    to: "/tech-stacks/shopify",
  },
  {
    id: 4,
    icon: (
      <ButtonWebflow
        width="72"
        height="72"
        className={"mb-[39px] lg:mb-[20px]"}
      />
    ),
    title: "Webflow",
    deg: "45.19deg",
    subTitle: (
      <div className="tracking-[-0.32px]">
        One of popular no-code tools, Sledge also can run on your Webflow sites,
        integrating it is also pretty straight-forward.
      </div>
    ),
    animationActive: false,
    to: "/tech-stacks/webflow",
  },
];

export default function MultilingualIntegrating() {
  const [isSlider, setSlider] = useState(false);

  const sliderSettings: any = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: "unslick",
      },
    ],
  };

  const [cards, setCard] = useState(data);

  function handleHover(index: number, condition: "in" | "out") {
    let items: IData[] = [...cards];
    let item = { ...items[index] };
    item.animationActive = condition === "in" ? true : false;
    if (condition === "out")
      items.map((v, i) => {
        v.animationActive = false;
      });
    items[index] = item;
    setCard(items);
  }

  const customBreakpoint = 1025;
  const minCustomBreakpoint = 500;

  const handleResize = () => {
    if (
      window.innerWidth < customBreakpoint &&
      window.innerWidth > minCustomBreakpoint
    ) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Slider
      {...sliderSettings}
      className={`gap-[16px] md:gap-[30px] mt-[32px] lg:mt-[48px] ${
        !isSlider ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4" : "flex"
      }`}
    >
      {!cards.length
        ? null
        : cards.map((item, index) => {
            return (
              <CardApp
                onMouseEnter={() => handleHover(index, "in")}
                onMouseLeave={() => handleHover(index, "out")}
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                className={`max-w-full md:max-w-full h-full ${
                  isSlider ? "px-[10px]" : ""
                }`}
                px={"px-[30px]"}
                height={"h-full"}
                buttonText={"View tech stack"}
                isGradientHover
                deg={item.deg}
                animation={item.animationActive}
                to={item.to}
              >
                {item.icon}
              </CardApp>
            );
          })}
    </Slider>
  );
}
