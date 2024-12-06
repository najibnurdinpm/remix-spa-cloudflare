import { useEffect } from "react";
import { Section } from "~/components/layout";
import { Home, Integration } from "~/components/section";
import { GradientText } from "~/components/typography";
import { integrationLiquid1, integrationLiquid2 } from "~/data/codes";
import * as gtag from "~/utils/gtags.client";

export default function IntegrationShopifyPage() {
  useEffect(() => {
    gtag.event({
      action: "favourite_tech-stack",
      value: "Liquid",
    });
  }, []);

  return (
    <div>
      <Integration.IntegrationHero
        heroImage="/assets/images/integration-liquid-hero.png"
        integrationType="Liquid"
        integrationDescription='Build instant search, product filters, wishlist, product review, etc. <br class="hidden md:block" />for your store using Liquid — in just a few minutes.'
      />

      <Integration.IntegrationSteps
        integrationType="Liquid"
        steps={[
          [
            { type: "text", value: "Include Sledge script into your store." },
            {
              type: "description",
              value: (
                <>
                  Fill the attribute with value from your store. <br />
                  Get API key from Shopify &rsaquo; Apps &rsaquo; Sledge
                  &rsaquo; General &rsaquo; API Key. <br />
                  Copy API Key & Instant Search API Key.
                </>
              ),
            },
            { type: "code", value: integrationLiquid1, language: "liquid" },
          ],
          [
            {
              type: "text",
              value: "Place component code below wherever you like.",
            },
            { type: "code", value: integrationLiquid2, language: "liquid" },
          ],
          [
            {
              type: "text",
              value: "Product Filters is now ready on your store.",
            },
            {
              type: "image",
              value: "/assets/images/integration-liquid-end.png",
            },
          ],
        ]}
      />

      <Section
        title={
          <>
            <GradientText
              deg="95.97deg"
              className="from-[#43C6AC]/[34.74] to-[#F8FFAE]/[73.44]"
            >
              Batteries
            </GradientText>{" "}
            included
          </>
        }
        subtitle={
          <>
            Sledge provides important features that you can use in just a few
            minutes
            <br className="hidden sm:block" /> while you can focus on building
            other features for your store.
          </>
        }
      >
        <Home.SledgeFeatures />
      </Section>
    </div>
  );
}
