import { ASSET_URL } from "~/utils/const";
import { Background } from "~/components/background";
import { IconHeart, IconHeartWhite } from "~/components/icon";
import { Section } from "~/components/layout";
import { Wishlist, CodeSection } from "~/components/section";
import { GradientText } from "~/components/typography";
import {
  dynamicIntegrationHydrogen,
  dynamicIntegrationLiquid,
  dynamicIntegrationNext,
  dynamicIntegrationWebflow,
} from "~/data/codes/dynamic";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

export default function WishlistPage() {
  useEffect(() => {
    gtag.event({
      action: "favourite_apps",
      value: "Wishlist",
    });
  }, []);

  return (
    <>
      <Background variant="rectangle" />
      <Section
        animation={false}
        icon={<IconHeartWhite />}
        titleSize="small"
        title={
          <>
            <GradientText
              deg="95.41deg"
              className="from-[#43C6AC]/[62.35] to-[#F8FFAE]/[84.6]"
            >
              Wishlist
            </GradientText>
          </>
        }
        subtitle={
          <>
            Increase engagement and sales on your stores by allowing{" "}
            <br className="hidden sm:block" /> customers to save their desired
            products for later.
          </>
        }
        image={ASSET_URL + "hero-wishlist.png"}
      >
        <Wishlist.NumberOne />
        <Wishlist.NumberTwo />
        <Wishlist.NumberThree />
        <Wishlist.NumberFour />

        <CodeSection
          selectedPreviewPage={{
            value: "wishlist",
          }}
          codes={{
            Hydrogen: dynamicIntegrationHydrogen,
            "Next.js": dynamicIntegrationNext,
            Liquid: dynamicIntegrationLiquid,
            Webflow: dynamicIntegrationWebflow,
          }}
          image={ASSET_URL + "wishlist-my-wishlist-2.png"}
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
              Choose your stack and build Wishlist page in just a few lines. See
              how <br className="hidden sm:block" />
              pretty quick and flexible integrating it to your store.
            </>
          }
          icon={<IconHeart width="32" height="32" />}
        />
      </Section>
    </>
  );
}
