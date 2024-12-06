import { FeatureNameSide, FeatureTitle } from "~/components/global";
import { Section } from "~/components/layout";
import { GradientText } from "~/components/typography";
import { CodeSection } from "~/components/section";
import { CardApp } from "~/components/card";
import { Background } from "~/components/background";
import {
  IconGridMansonry,
  IconList,
  IconProductReview,
  IconProductReviewGradient,
} from "~/components/icon";
import {
  dynamicIntegrationHydrogen,
  dynamicIntegrationNext,
  dynamicIntegrationLiquid,
  dynamicIntegrationWebflow,
} from "~/data/codes/dynamic";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

export default function ReviewPage() {
  let cardGradient =
    "linear-gradient(200.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)";

  const content = [
    {
      title: "Widget rating size",
      subtitle: (
        <>
          Pick the perfect widget rating size and match it with your store
          branding.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Medium (Md)",
          subtitle: <>Draw attention to the rating information.</>,
          className: "md:col-span-12",
          image: "/assets/images/review-widget-md.png",
          keepFullContentOnMobile: false,
          imageClassName: "pl-3 pt-3 -mb-6 lg:pl-0 lg:pt-0 lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Small (Sm)",
          subtitle: (
            <>Strike a balance between visibility and space utilization.</>
          ),
          className: "md:col-span-7",
          image: "/assets/images/review-widget-sm.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-6 lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Extra Small (Xs)",
          subtitle: <>Compact and can be placed alongside your content.</>,
          className: "md:col-span-5",
          image: "/assets/images/review-widget-xs.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-36 md:-mb-6 lg:mb-0",
        },
      ],
    },
    {
      title: <>Pagination & Sorting</>,
      subtitle: (
        <>
          Adjustable review per page and data sorting setting, help your
          visitors find the most <br className="hidden sm:block" />
          useful reviews faster and easier.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Review per page result",
          subtitle: (
            <>You decide the number of reviews that show up one at a time.</>
          ),
          className: "md:col-span-12",
          image: "/assets/images/review-limit-perpage.png",
          keepFullContentOnMobile: false,
          imageClassName: "pl-3 pt-3 md:pl-0 md:pt-0",
        },
        {
          titlePosition: "bottom",
          title: "Review sorting",
          subtitle: (
            <>
              Choose the default sorting system that matches the visitor’s
              intent
            </>
          ),
          className: "md:col-span-6",
          image: "/assets/images/review-default-sort.png",
          keepFullContentOnMobile: false,
          imageClassName:
            "mt-3 lg:mt-0 -mb-[110px] md:-mb-[60px] lg:mb-[70px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Turn on/off sorting options",
          subtitle: (
            <>Turn the review sorting options on and off anytime you want.</>
          ),
          className: "md:col-span-6",
          image: "/assets/images/review-enable-sort.png",
          keepFullContentOnMobile: false,
          imageClassName: "mt-3 lg:mt-0 -mb-[60px] lg:mb-[70px] xl:mb-0",
        },
      ],
    },
    {
      title: "Adjustable review widget",
      subtitle: (
        <>
          Customize the review widget component to match with your store
          branding.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Rating style on Review form",
          subtitle: (
            <>
              Descriptive rating-style reviews with the power to capture
              customer emotions.
            </>
          ),
          className: "md:col-span-8",
          image: "/assets/images/review-rating-style.png",
          keepFullContentOnMobile: false,
          imageClassName: "mt-3 lg:mt-0 -mb-[70px] md:-mb-[116px] lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Verified Badge",
          subtitle: (
            <>
              Build trust with your visitor by showcasing the verified review
              from trusted customers.
            </>
          ),
          className: "md:col-span-4",
          image: "/assets/images/review-verified.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-40 md:-mb-[100px] lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Rating summary",
          subtitle: (
            <>Highlight the average rating of your product and service.</>
          ),
          className: "md:col-span-4",
          image: "/assets/images/review-summary-bar.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-[185px] md:-mb-[120px] lg:mb-[50px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Buttons for Review form",
          subtitle: (
            <>
              Easy access for users to leave a review for the product or
              service.
            </>
          ),
          className: "md:col-span-4",
          image: "/assets/images/review-button-widget.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-48 md:-mb-[120px] lg:mb-[50px] xl:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Fill / Outline Color Rating Widget",
          subtitle: <>Pick the right color to describe your brand identity.</>,
          className: "md:col-span-4",
          image: "/assets/images/review-rating-color.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-48 md:-mb-[120px] lg:mb-[50px] xl:mb-0",
        },
      ],
    },
    {
      title: <>Flexible language settings</>,
      subtitle: (
        <>
          Complete with flexible language settings for the widget or text
          according to your wishes.
        </>
      ),
      features: [
        {
          titlePosition: "bottom",
          title: "Review widget",
          subtitle: (
            <>
              Increase sales by providing potential customers with information
              regarding a product or service.
            </>
          ),
          className: "md:col-span-12",
          image: "/assets/images/review-widget-language.png",
          keepFullContentOnMobile: false,
          imageClassName:
            "mt-3 md:mt-0 my-3 md:my-0 -mb-14 md:-mb-[110px] lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Write a Review form",
          subtitle: (
            <>
              Open the door for customers to leave feedback about a product or
              service.
            </>
          ),
          className: "md:col-span-6",
          image: "/assets/images/review-form-language.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-36 md:-mb-28 lg:mb-0",
        },
        {
          titlePosition: "bottom",
          title: "Notification",
          subtitle: (
            <>
              Confirmation with the customer before and after product reviewing.
            </>
          ),
          className: "md:col-span-6",
          image: "/assets/images/review-notification-language.png",
          keepFullContentOnMobile: false,
          imageClassName: "-mb-[130px] md:-mb-28 lg:mb-0",
        },
      ],
    },
  ];

  useEffect(() => {
    gtag.event({
      action: "favourite_apps",
      value: "Product Review",
    });
  }, []);

  return (
    <>
      <Background variant="rectangle" />
      <Section
        animation={false}
        icon={<IconProductReview />}
        titleSize="small"
        title={
          <>
            <GradientText
              deg="96.98deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              Product Review
            </GradientText>
          </>
        }
        subtitle={
          <>
            Show the best review of your products with the easy and customizable{" "}
            <br className="hidden sm:block" />
            product review widgets to gain customer trust and boost your store
            sales.
          </>
        }
        image="/assets/images/product-review-hero.png"
      >
        <div className="mt-[80px]">
          <FeatureTitle
            number="01"
            title={<>Elegant widget layout</>}
            subtitle={
              <>
                Choose from the two types of widget designs to impress visitors.
              </>
            }
          />

          <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-[72px] gap-6 md:gap-[30px] items-center">
            <div className="md:w-[65.8%]">
              <CardApp isGradientHover title="" subTitle="" fullContent>
                <img
                  className="-mb-2 rounded-[30px]"
                  src="/assets/images/review-widget-grid.png"
                  alt="filter layout vertical"
                />
              </CardApp>
            </div>

            <div className="grow flex md:justify-end w-full md:w-auto">
              <FeatureNameSide
                icon={<IconGridMansonry />}
                name={
                  <>
                    Review Widget <br />
                    Grid Masonry
                  </>
                }
                description={
                  <>
                    Show more reviews with greater flexibility to make your site
                    look great on all devices.
                  </>
                }
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-12 gap-6 md:gap-[30px] items-center">
            <div className=" grow w-full md:w-auto">
              <FeatureNameSide
                icon={<IconList />}
                name="Review Widget List"
                description={
                  <>
                    A straight forward approach that gives a clean and compact
                    look.
                  </>
                }
              />
            </div>

            <div className="md:w-[65.8%]">
              <CardApp
                isGradientHover
                fullContent
                title=""
                subTitle=""
                px="px-0"
                py="py-0"
              >
                <img
                  className="-mb-2 rounded-[30px]"
                  src="/assets/images/review-widget-list.png"
                  alt="filter layout vertical"
                />
              </CardApp>
            </div>
          </div>
        </div>

        {content.map((v: any, i: number) => (
          <div key={i} className="mt-20 md:mt-[100px]">
            <FeatureTitle
              number={"0" + (i + 2).toString()}
              title={v.title}
              subtitle={v.subtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-[30px] mt-12">
              {v.features.map((f: any, i: number) => (
                <CardApp
                  isGradientHover
                  key={i}
                  title={f.title}
                  subTitle={f.subtitle}
                  fullContent
                  keepFullContentOnMobile={f.keepFullContentOnMobile}
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
            value: "review",
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
              Choose your stack and build Product Review in just a few lines.
              See how <br className="hidden sm:block" />
              pretty quick and flexible integrating it to your store.
            </>
          }
          icon={<IconProductReviewGradient />}
          image="/assets/images/code-preview_review.png"
        />
      </Section>
    </>
  );
}
