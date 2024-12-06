import { AIOFeature, Dropdown, PricingSledgeV2 } from "~/components/global";
import {
  dynamicIntegrationHydrogen,
  dynamicIntegrationNext,
  dynamicIntegrationLiquid,
  dynamicIntegrationWebflow,
} from "~/data/codes/dynamic";
import { Section } from "~/components/layout";
import { Description, GradientText } from "~/components/typography";
import { Background } from "~/components/background";
import { useState } from "react";
import { CodeSection, Home } from "~/components/section";

export default function Index() {
  type IOption = { label: string; image: string; value: string };
  const previewCodePageOptions: IOption[] = [
    {
      label: "Wishlist",
      image: "/assets/images/example_wishlist.png",
      value: "wishlist",
    },
    {
      label: "Product Review",
      image: "/assets/images/example_product_review.png",
      value: "review",
    },
    {
      label: "Instant Search",
      image: "/assets/images/example_instant_search.png",
      value: "instantSearch",
    },
    {
      label: "Product Filters",
      image: "/assets/images/example_plp.png",
      value: "plp",
    },
  ];
  const [previewCodePage, setPreviewCodePage] = useState(
    previewCodePageOptions[0]
  );
  let [pricingAnimation, setPricingAnimation] = useState(false);

  return (
    <>
      <Background
        position={"right"}
        className={"mt-[430px] -z-[100] pointer-events-none"}
      />

      <Section title={""} pb="pb-0" pt="pt-0">
        <Home.SledgeRating rating="5" />
      </Section>

      <Section
        animation={false}
        pt="pt-[20px]"
        titleSize="small"
        title={
          <>
            <GradientText
              deg="96.7deg"
              className="from-[#43C6AC]/[17.72] to-[#F8FFAE]/[42.11]"
            >
              One
            </GradientText>{" "}
            Shopify App.
            <br />
            Works on{" "}
            <GradientText
              deg="96.7deg"
              className="from-[#43C6AC]/[17.72] to-[#F8FFAE]/[42.11]"
            >
              various
            </GradientText>{" "}
            stacks.
          </>
        }
        subtitle={
          <>
            Build instant search, product filters, wishlist, product review,
            etc.
            <br className="hidden sm:block" />
            for your store using your preferred tech stacks — in just a few
            minutes.
          </>
        }
      >
        <AIOFeature />
      </Section>

      <Section title={""}>
          <Home.SledgeReviews/>
      </Section>

      <Section
        title={
          <>
            Everything you need for <br /> starting your{" "}
            <GradientText
              deg="95.97deg"
              className="from-[#43C6AC]/[34.74] to-[#F8FFAE]/[73.44]"
            >
              Shopify
            </GradientText>{" "}
            store
          </>
        }
        subtitle={
          <>
            Sledge provides important features that you can use in just a few
            minutes
            <br />
            while you can focus on building other features for your store.
          </>
        }
      >
        <Home.SledgeFeatures />
      </Section>

      <Section
        title={
          <>
            Works on your <br />
            <GradientText
              deg="93.63deg"
              className="from-[#43C6AC]/[19.79] to-[#F8FFAE]/[52.98]"
            >
              preferred tech stack
            </GradientText>
          </>
        }
        subtitle={
          <>
            Sledge works on various tech stacks, whether it's Liquid, Headless
            framework like Hydrogen,
            <br className="hidden sm:block" /> Next.js and even no-code tools
            like Webflow.
          </>
        }
      >
        <Home.MultilingualIntegrating />
      </Section>

      <Section
        title={
          <>
            Integrate features to your store <br />{" "}
            <GradientText
              deg="95.41deg"
              className="from-[#43C6AC]/[62.35] to-[#F8FFAE]/[84.6]"
            >
              quickly and flexibily
            </GradientText>
          </>
        }
        subtitle={
          <>
            See how pretty quick and flexible integrating Sledge features to
            your store. <br className="hidden sm:block" />
            From instant search, product filters, wishlist to product review.
          </>
        }
      >
        {/* <CodeSection
          image={previewCodePage.image}
          selectedPreviewPage={previewCodePage}
          customTitle={
            <>
              <div className="-mt-12 lg:mt-1 mx-auto lg:mx-0">
                <Description>Apps Preview: </Description>
              </div>
              <div className="mx-auto lg:mx-0 z-50">
                <Dropdown
                  options={previewCodePageOptions}
                  selected={previewCodePage}
                  setSelected={setPreviewCodePage}
                />
              </div>
            </>
          }
          codes={{
            Hydrogen: dynamicIntegrationHydrogen,
            "Next.js": dynamicIntegrationNext,
            Liquid: dynamicIntegrationLiquid,
            Webflow: dynamicIntegrationWebflow,
          }}
        /> */}
      </Section>

      <Section
        titleStack="vertical"
        itemsCenter={true}
        pb="pb-[50px]"
        flexWidth="max-w-[782px]"
        title={
          <>
            Simple{" "}
            <GradientText
              deg="96.7deg"
              className="bg-gradient-97 from-[#43C6AC]/[50.6] to-[#F8FFAE]/[98.29]"
            >
              Pricing
            </GradientText>
          </>
        }
        subtitle={
          <>
            You don't need to pay for each apps, Sledge offers simple pricing
            method. <br className="hidden sm:block" />
            Pay for one price and get all Sledge apps along with upcoming apps.
          </>
        }
      >
        <div className="md:flex gap-8 mt-8">
          <div
            className="mt-4 lg:mt-0 w-full"
            onMouseEnter={() => setPricingAnimation(true)}
            onMouseLeave={() => setPricingAnimation(false)}
          >
            <PricingSledgeV2 animation={pricingAnimation} />
          </div>
        </div>
      </Section>
    </>
  );
}
