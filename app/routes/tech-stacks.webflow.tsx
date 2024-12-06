import { useEffect } from "react";
import { Section } from "~/components/layout";
import { Home, Integration } from "~/components/section";
import { GradientText } from "~/components/typography";
import { integrationWebflow1 } from "~/data/codes";
import * as gtag from "~/utils/gtags.client";

export default function IntegrationWebflowPage() {
  useEffect(() => {
    gtag.event({
      action: "favourite_tech-stack",
      value: "Webflow",
    });
  }, []);

  return (
    <div>
      <Integration.IntegrationHero
        heroImage="/assets/images/integration-liquid-hero.png"
        integrationType="Webflow"
        integrationDescription='Build instant search, product filters, wishlist, product review, etc. <br class="hidden md:block" />for your store using Webflow — in just a few minutes.'
      />

      <Integration.IntegrationSteps
        integrationType="Webflow"
        steps={[
          [
            {
              type: "text",
              value: "Copy the embed code below.",
            },
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
            { type: "code", value: integrationWebflow1 },
            {
              type: "text",
              value: "And paste inside the <head> tag of your website",
            },
            {
              type: "image",
              value: "/assets/images/integration-webflow-paste-head.png",
            },
          ],
          [
            {
              type: "text",
              value:
                "Implement widget in Webflow with create a Div Block element",
            },
            {
              type: "images",
              value: [
                {
                  size: "sm",
                  url: "/assets/images/integration-webflow-create-div-small.png",
                },
                {
                  size: "lg",
                  url: "/assets/images/integration-webflow-create-div.png",
                },
              ],
            },
          ],
          [
            {
              type: "text",
              value:
                "Add the attributes to Div Block element by click the Div Block element > Setting > Custom Attributes",
            },
            {
              type: "images",
              value: [
                {
                  size: "lg",
                  url: "/assets/images/integration-webflow-add-div-attr.png",
                },
                {
                  size: "sm",
                  url: "/assets/images/integration-webflow-add-div-attr-small.png",
                },
              ],
            },
          ],
          [
            {
              type: "text",
              value: "Product Filters is now ready on your store.",
            },
            {
              type: "image",
              value: "/assets/images/integration-webflow-end.png",
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
