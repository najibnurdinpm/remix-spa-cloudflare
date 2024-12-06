import { FeatureNameSide, FeatureTitle } from "~/components/global";
import { Section } from "~/components/layout";
import { GradientText } from "~/components/typography";
import { CodeSection } from "~/components/section";
import { CardApp } from "~/components/card";
import { Background } from "~/components/background";
import {
  dynamicIntegrationHydrogen,
  dynamicIntegrationLiquid,
  dynamicIntegrationNext,
  dynamicIntegrationWebflow,
} from "~/data/codes/dynamic";
import {
  IconProductFilters,
  IconSettingsGradient,
  VerticalLayout,
} from "~/components/icon";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

export default function ProductFilterPage() {
  let cardGradient =
    "linear-gradient(200.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)";

  const content = [
    {
      title: "Filter facet options",
      subtitle: <>Living up the search result with various filter facet.</>,
      features: [
        {
          titlePosition: "bottom",
          title: "Checkbox",
          subtitle: (
            <>Filter the product by category, brand, and other attributes.</>
          ),
          className: "md:col-span-3",
          image: "/assets/images/filter-checkbox.png",
          imageClassName:
            "-mb-[150px] md:-mb-[120px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Radio button",
          subtitle: (
            <>
              Display product variation options and allow your customers to
              compare at a glance.
            </>
          ),
          className: "md:col-span-3",
          image: "/assets/images/filter-radio-button.png",
          imageClassName:
            "-mb-[150px] md:-mb-[120px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Slider",
          subtitle: (
            <>
              Refine the search result to get the products comprised in a
              specific range only.
            </>
          ),
          className: "md:col-span-2",
          image: "/assets/images/filter-slider.png",
          imageClassName:
            "-mb-[160px] md:-mb-[100px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Select option",
          subtitle: (
            <>
              Gives users the freedom to select one or more options from the
              list.
            </>
          ),
          className: "md:col-span-2",
          image: "/assets/images/filter-select-option.png",
          imageClassName:
            "-mb-[160px] md:-mb-[100px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Color swatch",
          subtitle: (
            <>Allow users to observe the product visually and easily.</>
          ),
          className: "md:col-span-2",
          image: "/assets/images/filter-color-swatch.png",
          imageClassName:
            "-mb-[160px] md:-mb-[100px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
      ],
    },
    {
      title: "More Filter Settings",
      subtitle: (
        <>
          Advanced filter settings to match your store branding. Decide how your
          filter will show up in the storefront.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Custom Filter",
          subtitle: (
            <>Curate additional custom filter based on your store data.</>
          ),
          className: "md:col-span-6",
          image: "/assets/images/filter-custom.png",
          imageClassName:
            "mt-4 lg:mt-0 -mb-[50px] md:-mb-[100px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Sorting",
          subtitle: (
            <>
              Arrange the product in a category according to certain criteria,
              referring to the already filtered result.
            </>
          ),
          className: "md:col-span-3",
          image: "/assets/images/filter-sorting.png",
          imageClassName: "-mb-[55px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Limit / Result Per Page",
          subtitle: (
            <>
              Limit the number of products on the search result page for a more
              pleasant view.
            </>
          ),
          className: "md:col-span-3",
          image: "/assets/images/filter-limit.png",
          imageClassName: "-mb-[55px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
      ],
    },
    {
      title: "Color swatches",
      subtitle: (
        <>
          Specify your product filtering search according to product color
          variations.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Custom Color",
          subtitle: <>Specify custom color naming for your store filters.</>,
          className: "md:col-span-6",
          image: "/assets/images/filter-custom-color.png",
          imageClassName:
            "-mb-[30px] md:-mb-[120px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "RGB",
          subtitle: <>Specify color with RGB format for your store filters.</>,
          className: "md:col-span-3",
          image: "/assets/images/filter-rgb.png",
          imageClassName: "-mb-[100px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Image Color",
          subtitle: <>Specify color with Image for your store filters.</>,
          className: "md:col-span-3",
          image: "/assets/images/filter-image-color.png",
          imageClassName:
            "-mb-[125px] md:-mb-[105px] lg:mb-0 lg:mb-[80px] xl:mb-0",
        },
      ],
    },
  ];

  useEffect(() => {
    gtag.event({
      action: "favourite_apps",
      value: "Product Filters",
    });
  }, []);

  return (
    <>
      <Background variant="rectangle" />
      <Section
        animation={false}
        icon={<IconProductFilters />}
        titleSize="small"
        title={
          <>
            <GradientText
              deg="96.98deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              Product Filters
            </GradientText>
          </>
        }
        subtitle={
          <>
            Instantly integrate a smart product filters on any pages <br />
            including collections and search result pages.
          </>
        }
        image="/assets/images/product-filter-hero.png"
      >
        <div className="mt-[80px]">
          <FeatureTitle
            number="01"
            title="2 types filter layout"
            subtitle={
              <>
                Provide 2 types layout filter that match perfectly with the
                store design.
              </>
            }
          />

          <div className="flex flex-col md:flex-row mt-10 lg:mt-12 gap-6 md:gap-[30px] items-center">
            <div className=" grow">
              <FeatureNameSide
                icon={<VerticalLayout />}
                name="Vertical layout"
                description={
                  <>
                    Filter the product vertically down the left side of the
                    page. Provides a more detailed and comprehensive way to
                    display the filter. Grouping it together by category or type
                    to help users find the filters they need.
                  </>
                }
              />
            </div>

            <div className="md:w-[65.8%]">
              <CardApp isGradientHover title="" subTitle="" fullContent>
                <img
                  className="-mb-2 rounded-[30px]"
                  src="/assets/images/filter-layout-vertical.png"
                  alt="filter layout vertical"
                />
              </CardApp>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-16 lg:mt-[72px] gap-6 md:gap-[30px] items-center">
            <div className="md:w-[65.8%]">
              <CardApp isGradientHover title="" subTitle="" fullContent>
                <img
                  className="-mb-2 rounded-[30px]"
                  src="/assets/images/filter-layout-horizontal.png"
                  alt="filter layout vertical"
                />
              </CardApp>
            </div>

            <div className="md:grow flex justify-end">
              <FeatureNameSide
                icon={<VerticalLayout rotate />}
                name="Horizontal layout"
                description={
                  <>
                    Filter the products horizontally across the top of the page.
                    Visually appealing and allow for improved the filter
                    discoverability and usability by users.
                  </>
                }
              />
            </div>
          </div>
        </div>

        {content.map((v: any, i: number) => (
          <div key={i} className="mt-20 lg:mt-[100px]">
            <FeatureTitle
              number={"0" + (i + 2).toString()}
              title={v.title}
              subtitle={v.subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-[30px] mt-6 md:mt-10 lg:mt-12">
              {v.features.map((f: any, i: number) => (
                <CardApp
                  isGradientHover
                  key={i}
                  title={f.title}
                  subTitle={f.subtitle}
                  fullContent
                  titlePosition={f.titlePosition}
                  className={f.className}
                >
                  <img
                    className={`rounded-[30px] ${
                      f.imageClassName ? f.imageClassName : ""
                    }`}
                    src={f.image}
                    alt={f.title}
                  />
                </CardApp>
              ))}
            </div>
          </div>
        ))}

        <CodeSection
          selectedPreviewPage={{
            value: "plp",
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
              Choose your stack and build Product Filters in just a few lines.
              See how <br className="hidden sm:block" /> pretty quick and
              flexible integrating it to your store.
            </>
          }
          icon={<IconSettingsGradient />}
          image="/assets/images/code-preview_filter.png"
        />
      </Section>
    </>
  );
}
