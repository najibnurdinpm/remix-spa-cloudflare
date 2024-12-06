import { useEffect } from "react";
import { FeatureTitle } from "~/components/global";
import { Section } from "~/components/layout";
import { GradientText } from "~/components/typography";
import { Background } from "~/components/background";
import { CodeSection } from "~/components/section";
import { CardApp } from "~/components/card";
import {
  IconInstantsearchGradient,
  IconInstatntsearch,
} from "~/components/icon";
import {
  dynamicIntegrationHydrogen,
  dynamicIntegrationLiquid,
  dynamicIntegrationNext,
  dynamicIntegrationWebflow,
} from "~/data/codes/dynamic";
import * as gtag from "~/utils/gtags.client";

export default function InstantsearchPage() {
  let cardGradient =
    "linear-gradient(200.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)";

  const content = [
    {
      title: <>Search widget layouts</>,
      subtitle: (
        <>
          Look impressive with the perfect widget popup layout types and score
          more leads from your customers.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Overlay full width",
          subtitle: (
            <>
              A full-screen experience for a focused and immersive user
              interaction.
            </>
          ),
          className: "md:col-span-2",
          image: "/assets/images/is-overlay-fullwidth-bg.png",
          mobileImage: "/assets/images/is-overlay-fullwidth-bg-mobile.png",
          imageClassName: "-mb-8 md:-mb-[180px] lg:mb-0",
          titleClass: "lg:w-[45%]",
        },
        {
          titlePosition: "bottom",
          title: "Dropdown two columns",
          subtitle: (
            <>Display a significant amount of information in a compact space.</>
          ),
          className: "",
          image: "/assets/images/is-dropdown-two-bg.png",
          imageClassName: "-mb-28 md:-mb-24 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "top",
          title: <>Dropdown one column</>,
          subtitle: (
            <>
              Organized the content in a single column, works great for limited
              space.
            </>
          ),
          className: "",
          image: "/assets/images/is-dropdown-one-bg.png",
          mobileImage: "/assets/images/is-dropdown-one-bg-mobile.png",
          imageClassName:
            "mt-3 md:mt-0 -mb-10 md:-mb-24 lg:mb-0 md:-ml-[60px] lg:ml-0 md:mt-[25px] lg:mt-0",
          titleClass:
            "w-full lg:w-[40%] bg-dark lg:bg-transparent rounded-[30px]",
        },
      ],
    },
    {
      title: "Categorized search result",
      subtitle: (
        <>
          Make quick work of discovering and indexing your site’s content based
          on different categories.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Products",
          subtitle: <>Highlights the products based on customers search.</>,
          className: "md:col-span-2",
          image: "/assets/images/is-product-bg.png",
          mobileImage: "/assets/images/is-product-bg-mobile.png",
          imageClassName: "-mb-8 md:-mb-[183px] lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Collections",
          subtitle: (
            <>Show the list of collections of your product or service.</>
          ),
          className: "",
          image: "/assets/images/is-collection-bg.png",
          imageClassName: "-mb-8 md:-mb-8 lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Pages",
          subtitle: <>Direct the customers to the desired pages.</>,
          className: "",
          image: "/assets/images/is-pages-bg.png",
          imageClassName: "-mb-8 md:-mb-8 lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Blogs",
          subtitle: (
            <>
              Quick access to the blog page contained the required information.
            </>
          ),
          className: "",
          image: "/assets/images/is-blogs-bg.png",
          imageClassName: "-mb-8 md:-mb-8 lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Articles",
          subtitle: <>List all available articles the customers need.</>,
          className: "",
          image: "/assets/images/is-articles-bg.png",
          imageClassName: "-mb-8 md:-mb-8 lg:mb-0",
        },
      ],
    },
  ];

  useEffect(() => {
    gtag.event({
      action: "favourite_apps",
      value: "Instant Search",
    });
  }, []);

  return (
    <>
      <Background variant="rectangle" />
      <Section
        animation={false}
        icon={<IconInstatntsearch className=" text-white" />}
        titleSize="small"
        title={
          <>
            <GradientText
              deg="96.98deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              Instant Search
            </GradientText>
          </>
        }
        subtitle={
          <>
            Personalized and customized instant search widgets that{" "}
            <br className="hidden sm:block" />
            fit with the look and feel of your brand.
          </>
        }
        image="/assets/images/instantsearch-hero.png"
      >
        <div className="mt-[80px]">
          <FeatureTitle
            number="01"
            title={<>Search result suggestions</>}
            subtitle={
              <>
                Implement a targeted solution with keyword and product
                suggestion, to capitalized on conversion potential.
              </>
            }
          />

          <div className="flex flex-col md:flex-row mt-6 md:mt-10 lg:mt-12 gap-4 lg:gap-[30px]">
            <CardApp
              isGradientHover
              title="Keyword Suggestion"
              subTitle={
                <>
                  Help the visitors refine the search by showing a list of
                  search predictions and alternative queries.
                </>
              }
              className=" md:w-[58.8%]"
              fullContent
              titlePosition="bottom"
            >
              <img
                className="w-full rounded-[30px] -mb-10 md:-mb-8 lg:mb-0"
                src="/assets/images/is-keyword-suggestion-bg.png"
                alt="keyword suggestion"
              />
            </CardApp>

            <CardApp
              isGradientHover
              title="Product Suggestion"
              subTitle={
                <>
                  Recommend similar and relevant product or service, to
                  encourage customers back into the sales funnel.
                </>
              }
              className=" md:w-[41.2%]"
              fullContent
              titlePosition="bottom"
            >
              <img
                className="w-full rounded-[30px] -mb-6 md:-mb-8 lg:mb-0"
                src="/assets/images/is-product-suggestion-bg.png"
                alt="Product suggestion"
              />
            </CardApp>
          </div>
        </div>

        {content.map((v: any, i: number) => (
          <div key={i} className="mt-20 lg:mt-[100px]">
            <FeatureTitle
              number={"0" + (i + 2).toString()}
              title={v.title}
              subtitle={v.subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[30px] mt-6 md:mt-10 lg:mt-16">
              {v.features.map((f: any, i: number) => (
                <CardApp
                  isGradientHover
                  height="h-full"
                  key={i}
                  title={f.title}
                  subTitle={f.subtitle}
                  fullContent
                  titlePosition={f.titlePosition}
                  className={f.className}
                  keepFullContentOnMobile={f.keepFullContentOnMobile}
                  titleClass={f.titleClass}
                >
                  <img
                    className={`rounded-[30px] 
                      ${f.imageClassName ? f.imageClassName : ""}
                      ${f.mobileImage ? "hidden md:block" : ""}
                    `}
                    src={f.image}
                    alt={f.title}
                  />
                  {f.mobileImage && (
                    <img
                      className={`md:hidden rounded-[30px] ${
                        f.imageClassName ? f.imageClassName : ""
                      }`}
                      src={f.mobileImage}
                      alt={f.title}
                    />
                  )}
                </CardApp>
              ))}
            </div>
          </div>
        ))}

        <CodeSection
          selectedPreviewPage={{
            value: "instantSearch",
          }}
          codes={{
            Hydrogen: dynamicIntegrationHydrogen,
            "Next.js": dynamicIntegrationNext,
            Liquid: dynamicIntegrationLiquid,
            Webflow: dynamicIntegrationWebflow,
          }}
          title={
            <>
              <GradientText
                deg="94.66deg"
                className=" from-[#43C6AC] to-[#F8FFAE]"
              >
                Code
              </GradientText>{" "}
              Sample
            </>
          }
          subtitle={
            <>
              Choose your stack and build Instant Search in just a few lines.
              See how <br className="hidden sm:block" /> pretty quick and
              flexible integrating it to your store.
            </>
          }
          icon={<IconInstantsearchGradient />}
          image="/assets/images/code-preview_instantsearch.png"
        />
      </Section>
    </>
  );
}
