import { useEffect, useState } from "react";
import { Button } from "../button";
import { GradientText } from "../typography";
import { CardGradient } from "../card";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow } from "~/components/icon";
import {
  HYDROGEN_DEMO_STORE_URL,
  NEXTJS_DEMO_STORE_URL,
  LIQUID_DEMO_STORE_URL,
  ASSET_URL,
} from "~/utils/const";
import * as gtag from "~/utils/gtags.client";

const pagePreviews = [
  {
    number: "01",
    label: "Wishlist",
    image: "/assets/images/AIO-1.png",
    sideImage: "/assets/images/AIO-1-mini.png",
  },
  {
    number: "02",
    label: "Product Review",
    image: "/assets/images/home-hero1.png",
    sideImage: "/assets/images/AIO-2-mini.png",
  },
  {
    number: "03",
    label: "Instant Search",
    image: "/assets/images/AIO-2.png",
    sideImage: "/assets/images/AIO-3-mini.png",
  },
  {
    number: "04",
    label: "Product Filters",
    image: "/assets/images/AIO-3.png",
    sideImage: "/assets/images/home-hero2-side.png",
  },
  {
    number: "+",
    label: "tons of upcoming apps!",
    image: "/assets/images/hero-test.png",
    sideImage: "/assets/images/home-hero1-side.png",
  },
];

function ImagesComponent({ image }: any) {
  return (
    <>
      {pagePreviews.map((v: any, i: number) => {
        const animate =
          image === v.image
            ? {
                opacity: 1,
                transition: { duration: 0.7, ease: "easeInOut" },
                display: "block",
              }
            : { display: "none", opacity: 0 };
        const exit = { opacity: 0, transition: { duration: 3 } };
        const initial = { display: "none", opacity: 0 };
        const animateMini: any = JSON.parse(JSON.stringify({ ...animate }));

        return (
          <div
            key={"-img-" + i}
            className={`flex lg:h-[588.79px] ${
              image !== v.image ? "hidden" : "w-full"
            }`}
          >
            <motion.div
              initial={initial}
              animate={animate}
              exit={exit}
              className={`max-w-[386.34px] md:max-w-[588.79px] lg:max-w-[992px] w-full m-auto`}
            >
              <img src={v.image} alt="home hero" />
            </motion.div>

            <motion.div
              initial={initial}
              animate={animateMini}
              exit={exit}
              className={`!hidden lg:max-w-[257px] lg:!block absolute top-[50%]`}
            >
              <img src={v.sideImage} alt="home hero mini" />
            </motion.div>
          </div>
        );
      })}
    </>
  );
}

function ButtonDropdown({
  selectedPagePreview,
  pagePreviews,
  pagePreviewUpdate,
}: any) {
  return (
    <div className="flex md:hidden flex-col lg:flex-row gap-3 items-center lg:items-start pt-[40px]">
      <div className="lg:mt-1 mx-auto lg:mx-0">
        <div className=" font-inter text-[#828282] text-sm lg:text-base leading-[25.6px] tracking-[-2%]">
          Batteries included:{" "}
        </div>
      </div>
      <div className="mx-auto lg:mx-0 z-50">
        <div
          aria-current="page"
          className="relative group text-sm lg:text-base font-medium leading-[18px] tracking-[0.02em] hover:text-yellow-1 transition-all duration-200 z-10"
        >
          <button className="bg-dark text-white relative transition ease-in-out flex items-center justify-center rounded-[360px] px-0 py-0 duration-500 font-sans font-[700] text-[16px] leading-[17.6px] tracking-[-2%] group text-sm lg:text-base">
            <div
              className="pointer-events-none absolute rounded-[360px] -inset-px opacity-0 transition duration-300"
              style={{
                opacity: 0,
                background:
                  "radial-gradient(60px at 170.967px 24.0833px, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.06))",
              }}
            />
            <div className="bg-[#202020] px-4 py-2 rounded-[30px] flex gap-2 items-center">
              <span>{selectedPagePreview.label}</span>
              <span className="group-hover:rotate-180 transition-all duration-75">
                <Arrow />
              </span>
            </div>
          </button>
          <div className="pt-[12px] m-auto">
            <div className="hidden group-hover:block !w-auto !whitespace-nowrap !h-auto !absolute min-w-[140px] mr-auto  group max-w-[1290px] overflow-hidden rounded-[24px] p-[1px] backdrop-filter-custom">
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(40.68deg, rgb(103, 103, 103) 49.16%, rgb(103, 103, 103) 49.16%, rgba(103, 103, 103, 0) 51.4%)",
                  animation: "4s linear 0s infinite normal none paused spin",
                }}
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
              />
              <div className=" inline-flex h-full w-full bg-dark rounded-[24px] backdrop-filter-custom">
                <div className="relative flex h-full w-full overflow-hidden">
                  <div
                    className="items-start justify-start pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                      opacity: 0,
                      background:
                        "radial-gradient(600px at 133.967px 40.0833px, rgba(248, 255, 174, 0.1), transparent 40%)",
                    }}
                  />
                  <div className="flex items-start justify-start w-full h-full">
                    <div className="flex flex-col py-5 cursor-default">
                      {pagePreviews.map((v: any, i: number) => (
                        <div
                          key={v.label + "-page-" + i}
                          className={`${
                            selectedPagePreview.label === v.label
                              ? "text-yellow-1"
                              : "text-white"
                          }  hover:text-yellow-1 group flex items-center px-4 py-2 text-sm cursor-pointer`}
                          tabIndex={-1}
                        >
                          <span className="mr-1">{v.number}</span>
                          <button onClick={() => pagePreviewUpdate(i)}>
                            {v.label}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIOFeature() {
  const buttons = [
    {
      title: "Hydrogen",
      url: HYDROGEN_DEMO_STORE_URL,
      icon: ASSET_URL + "hydrogen-icon.png",
      activeIcon: ASSET_URL + "hydrogen-icon-active.png",
    },
    {
      title: "Next.js",
      url: NEXTJS_DEMO_STORE_URL,
      icon: ASSET_URL + "nextjs-icon.png",
      activeIcon: ASSET_URL + "nextjs-icon-active.png",
    },
    {
      title: "Liquid",
      url: LIQUID_DEMO_STORE_URL,
      icon: ASSET_URL + "liquid-icon.png",
      activeIcon: ASSET_URL + "liquid-icon-active.png",
    },
  ];

  const [selectedIntegration, setSelectedIntegration] = useState("");
  const [selectedPagePreview, setSelectedPagePreview] = useState(
    pagePreviews[0]
  );
  const [image, setImage] = useState(selectedPagePreview.image);
  const [previewActive, setPreviewActive] = useState(0);
  const [autorun, setAutorun]: any = useState();

  const pagePreviewUpdate = (v: number, updatePreviewActive = true) => {
    clearTimeout(autorun);
    const data = pagePreviews[v];
    setSelectedPagePreview(data);
    if (updatePreviewActive) setPreviewActive(v);
    setImage(data.image);
  };

  useEffect(() => {
    clearTimeout(autorun);
    setAutorun(
      setTimeout(() => {
        let newPreviewActive = previewActive + 1;
        if (newPreviewActive > pagePreviews.length - 1) newPreviewActive = 0;
        setPreviewActive(newPreviewActive);
        pagePreviewUpdate(newPreviewActive, true);
      }, 7000)
    );
  }, [previewActive]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="mt-8 relative"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 2, delay: 0.5 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="flex gap-[12px] lg:gap-4 lg:pt-4 justify-center flex-wrap md:flex-nowrap m-auto max-w-[330px] sm:max-w-full md:mb-10 lg:mb-0">
          {buttons.map((v) => (
            <motion.div
              initial={false}
              animate={{
                width: v.title === selectedIntegration ? "auto" : 141,
                transition: {
                  type: "tween",
                  duration: 0.2,
                  ease: "circOut",
                },
              }}
              key={v.title}
              onMouseEnter={() => setSelectedIntegration(v.title)}
              onMouseLeave={() => setSelectedIntegration("")}
              className="basis-[35%] xs:basis-0"
            >
              <Button
                to={v.url}
                target={"_blank"}
                variant="gradientBackground"
                active={v.title === selectedIntegration}
                py="py-[12px] lg:py-[16.2px]"
                px="px-[17px] lg:px-6"
                className="min-w-[114px] md:min-w-0"
                onClick={() => {
                  gtag.event({
                    action: "sledge_demo_store",
                    category: "sledge_demo_store_link",
                    value: v.title,
                  });
                }}
              >
                <span>{v.title === selectedIntegration && "See"}&nbsp;</span>
                <img
                  className={`w-[14px] md:w-4 h-[14px] md:h-4 ${
                    v.title === selectedIntegration ? "" : "hidden"
                  }`}
                  src={v.activeIcon}
                  alt={v.title}
                />
                <img
                  className={`w-[14px] md:w-4 h-[14px] md:h-4 ${
                    v.title === selectedIntegration ? "hidden" : ""
                  }`}
                  src={v.icon}
                  alt={v.title}
                />
                <span>&nbsp;{v.title}&nbsp;</span>
                <span>{v.title === selectedIntegration && "Demo"}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="lg:mt-20 text-center">
          <ButtonDropdown
            pagePreviews={pagePreviews}
            selectedPagePreview={selectedPagePreview}
            pagePreviewUpdate={pagePreviewUpdate}
          />
          <div className="mt-[18px] flex">
            <ImagesComponent image={image} />

            <div className="mt-28 hidden lg:block absolute right-0 top-0 bg-transparent">
              <CardGradient
                contentPosition="start"
                gradient="linear-gradient(40.68deg, #676767 49.16%, #676767 49.16%, rgba(103, 103, 103, 0) 51.4%)"
                className="h-auto relative min-w-[363px]"
                borderAnimation={false}
              >
                <img
                  className="absolute top-0 pointer-events-none"
                  src="/assets/images/home-hero-card-bg.png"
                  alt=""
                />
                <div className="mx-8 my-6 w-full">
                  <div className="text-2xl font-bold text-left">
                    <GradientText
                      deg="93.36deg"
                      className="from-[#43C6AC]/[9.73] to-[#F8FFAE]/[64.69]"
                    >
                      Batteries included
                    </GradientText>
                  </div>
                  <div className="mt-6 text-left font-inter text-base text-[#677487]">
                    {pagePreviews.map((v, i) => (
                      <div
                        key={v.label + "-page-" + i}
                        className={
                          selectedPagePreview.label === v.label
                            ? ` text-xl text-white font-medium`
                            : ""
                        }
                      >
                        <span>{v.number}</span>{" "}
                        <button
                          onClick={() => pagePreviewUpdate(i)}
                          className="mb-3"
                        >
                          {v.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardGradient>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
