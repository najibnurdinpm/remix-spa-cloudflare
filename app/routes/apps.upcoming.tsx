import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
  AnnouncementBarContent,
  CookieConsentContent,
  CurrencyConverterContent,
  RecentlyViewedContent,
  RelatedProductContent,
} from "~/components/card/children";
import { Badge } from "~/components/global";
import {
  IconAnnouncementBar,
  IconCookies,
  IconCurrencyConverter,
  IconRecentlyViewed,
  IconRelatedProduct,
} from "~/components/icon";
import { Section } from "~/components/layout";
import BorderStep from "~/components/section/integration/BorderStep";
import { GradientText } from "~/components/typography";
import * as gtag from "~/utils/gtags.client";

export default function UpcomingAppsPage() {
  const content = [
    {
      icon: <IconCookies />,
      title: "Cookie Consent",
      isReverse: false,
      gap: "gap-[30px] lg:gap-[130px]",
      subtitle: (
        <p className="max-w-full md:max-w-[384px] font-inter">
          Easily comply with GDPR regulations using this feature. Take control
          of data privacy management for your store.
        </p>
      ),
      component: <CookieComponent />,
      anchorLink: "cookie-consent",
      features: [
        {
          title: "01/ Customizable Bar",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Easily customize your cookie bar (color, position, etc) to match
              with your store branding.
            </>
          ),
        },
        {
          title: "02/ Customizable Language",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Easily modify consent language for the cookie bar or privacy text
              according your store branding.
            </>
          ),
        },
        {
          title: "03/ Auto Hide",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Automatically hide the cookie banner once consent is granted by
              the customer.
            </>
          ),
        },
        {
          title: (
            <>
              <GradientText
                deg="137.65deg"
                className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
              >
                More to come!
              </GradientText>
            </>
          ),
          isNew: false,
          useArrow: true,
          useBorder: true,
          subtitle: (
            <>...and that's not all, prepare for more feature to come!</>
          ),
        },
      ],
    },
    {
      icon: <IconCurrencyConverter />,
      title: "Currency Converter",
      isReverse: true,
      gap: "gap-[30px] lg:gap-[130px]",
      subtitle: (
        <p className="max-w-full md:max-w-[384px] font-inter">
          Achieve your international sales growth seamlessly by leveraging
          Sledge instant Currency Converter feature.
        </p>
      ),
      component: <CurrencyConverterComponent />,
      anchorLink: "currency-converter",
      features: [
        {
          title: "01/ Currency Switcher",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Effortless customizable currency switching by customer location:
              opt for automatic or manual control.
            </>
          ),
        },
        {
          title: "02/ Customizable Design",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Easily change the design and colors of the currency switcher to
              match your store branding.
            </>
          ),
        },
        {
          title: "03/ Up-to-date Rates",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Our currency rates information is always kept precise and
              up-to-date from credible providers.
            </>
          ),
        },
        {
          title: (
            <>
              <GradientText
                deg="137.65deg"
                className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
              >
                More to come!
              </GradientText>
            </>
          ),
          isNew: false,
          useArrow: true,
          useBorder: true,
          subtitle: (
            <>...and that's not all, prepare for more feature to come!</>
          ),
        },
      ],
    },
    {
      icon: <IconRelatedProduct />,
      title: "Related Products",
      isReverse: false,
      gap: "gap-[30px] lg:gap-[55px]",
      subtitle: (
        <p className="max-w-full md:max-w-[384px] font-inter">
          Experience sales growth through high-quality product recommendations,
          enhancing cross-selling opportunities and product visibility.
        </p>
      ),
      component: <RelatedProductComponent />,
      anchorLink: "related-products",
      features: [
        {
          title: "01/ Easy cross-sell",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Boost your product page's effectiveness with integrated cross-sell
              products, presented in any custom of styles.
            </>
          ),
        },
        {
          title: "02/ Easy Upsell",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Drive sales conversions with upsell recommendations, offer
              products that align with wustomer interests.
            </>
          ),
        },
        {
          title: "03/ Easy Customization",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Craft your own look and user experience: personalize text, colors
              and styles with total flexibility.
            </>
          ),
        },
        {
          title: (
            <>
              <GradientText
                deg="137.65deg"
                className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
              >
                More to come!
              </GradientText>
            </>
          ),
          isNew: false,
          useArrow: true,
          useBorder: true,
          subtitle: (
            <>...and that's not all, prepare for more feature to come!</>
          ),
        },
      ],
    },
    {
      icon: <IconRecentlyViewed />,
      title: "Recently Viewed",
      isReverse: true,
      gap: "gap-[30px] lg:gap-[130px]",
      subtitle: (
        <p className="max-w-full md:max-w-[384px] font-inter">
          Enhance your store by adding sections for 'Recently Viewed Products'
          and encourage your customers to buy more products.
        </p>
      ),
      component: <RecentlyViewedComponent />,
      anchorLink: "recently-viewed",
      features: [
        {
          title: "01/ Remind Your Customers",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Gently nudge your customers with a reminder of their recent
              product views, offering them a second chance to buy.
            </>
          ),
        },
        {
          title: "02/ Easy Customization",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Craft your own look and user experience: personalize text, colors
              and styles with total flexibility.
            </>
          ),
        },
        {
          title: "03/ Show Anywhere",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Choose which pages should feature Recently Viewed Products and
              craft your own look to match store branding.
            </>
          ),
        },
        {
          title: (
            <>
              <GradientText
                deg="137.65deg"
                className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
              >
                More to come!
              </GradientText>
            </>
          ),
          isNew: false,
          useArrow: true,
          useBorder: true,
          subtitle: (
            <>...and that's not all, prepare for more feature to come!</>
          ),
        },
      ],
    },
    {
      icon: <IconAnnouncementBar />,
      title: "Announcement Bar",
      isReverse: false,
      gap: "gap-[30px] lg:gap-[130px]",
      subtitle: (
        <p className="max-w-full md:max-w-[384px] font-inter">
          Maximize sales impact by utilizing a banner that's fully customizable
          to promote any special offers and drive customer awareness.
        </p>
      ),
      component: <AnnouncementBarComponent />,
      anchorLink: "announcement-bar",
      features: [
        {
          title: "01/ Customizable Design",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Easily change the design and colors of the announcement bar to
              match your store branding.
            </>
          ),
        },
        {
          title: "02/ Advanced Targeting",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Strategic offer alignment: use advanced targeting for
              laser-focused offer delivery to your ideal customers.
            </>
          ),
        },
        {
          title: "03/ Powerful Analytics",
          isNew: false,
          useArrow: false,
          useBorder: false,
          subtitle: (
            <>
              Evaluate and compare the impact of each offer to identify the one
              that generates greater sales and revenue.
            </>
          ),
        },
        {
          title: (
            <>
              <GradientText
                deg="137.65deg"
                className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
              >
                More to come!
              </GradientText>
            </>
          ),
          isNew: false,
          useArrow: true,
          useBorder: true,
          subtitle: (
            <>...and that's not all, prepare for more feature to come!</>
          ),
        },
      ],
    },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView();
      }
    }

    gtag.event({
      action: "favourite_upcoming_apps",
      value: location?.hash.replace("#", "").replace("-", " "),
    });
  }, [location]);

  return (
    <Section
      animation={false}
      titleSize="small"
      title={
        <>
          <GradientText deg="96.98deg" className="from-[#43C6AC] to-[#F8FFAE]">
            Upcoming{" "}
          </GradientText>
          Apps
        </>
      }
      subtitle={
        <>
          Instant Search, product filters, wishlist, product review, what else?{" "}
          <br className="hidden sm:block" />
          Sledge will keep adding new features, see what we're cooking below.
        </>
      }
    >
      {content.map((item, index) => {
        return (
          <div key={"content-" + index}>
            <div id={item.anchorLink} className="py-14 md:py-20" key={index}>
              <div
                className={`flex ${
                  item.isReverse ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col gap-[30px] ${item?.gap}`}
              >
                <div className="flex flex-col items-center md:items-start min-w-[236px] lg:min-w-[384px]">
                  <Badge
                    gradient="bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
                    as="span"
                    pY={"py-5 md:py-[13px] lg:py-5"}
                    pX={"px-5 md:px-[13px] lg:px-5"}
                    height={"h-[56px] lg:h-[80px]"}
                    rounded={"rounded-[16px]"}
                    className={`w-[56px] lg:w-[80px] pointer-events-none mb-[40px]`}
                  >
                    {item.icon}
                  </Badge>
                  <h2 className="font-bold text-[24px] lg:text-[32px] leading-[35.2px] tracking-[-0.64px] mb-[12px]">
                    {item.title}
                  </h2>
                  <div className="text-gray-3 text-[14px] lg:text-[16px] leading-[25.6px] tracking-[-0.32px]">
                    {item.subtitle}
                  </div>
                </div>
                {item.component}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-24">
                {item.features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className={`space-y-[12px] w-full h-full group/item ${
                        feature.useBorder &&
                        "border-l-[1px] border-solid border-[#323232] pl-[30px]"
                      }`}
                    >
                      <div className="flex gap-2 items-center">
                        <h4 className="font-inter text-[20px] font-medium leading-[26px] tracking-[-0.2px]">
                          {feature.title}
                        </h4>
                        {feature.isNew && (
                          <Badge className="pointer-events-none">New</Badge>
                        )}
                      </div>

                      <p className="md:max-w-[300px] font-inter text-[14px] leading-[25.2px] tracking-[-0.28px] text-[#A3A3A3]">
                        {feature.subtitle}
                      </p>

                      {feature.useArrow && (
                        <svg
                          width="161"
                          height="8"
                          viewBox="0 0 161 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M160.354 4.5684C160.549 4.37314 160.549 4.05655 160.354 3.86129L157.172 0.67931C156.976 0.484048 156.66 0.484048 156.464 0.67931C156.269 0.874572 156.269 1.19115 156.464 1.38642L159.293 4.21484L156.464 7.04327C156.269 7.23853 156.269 7.55512 156.464 7.75038C156.66 7.94564 156.976 7.94564 157.172 7.75038L160.354 4.5684ZM0.0771484 4.71484H160V3.71484H0.0771484V4.71484Z"
                            fill="#F8FFAE"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <BorderStep />
          </div>
        );
      })}
    </Section>
  );
}

export function CookieComponent() {
  const [animation, setAnimation] = useState(false);
  return (
    <div
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
    >
      <CookieConsentContent
        className={
          "w-full h-full md:w-[412px] md:h-[260px] lg:w-[509.14px] lg:h-[370.28px] md:max-w-[509.14px] md:max-h-[370.28px]"
        }
        textClass={"text-[18.51px] leading-[25.92px] tracking-[-0.37px]"}
        animation={animation}
        iconClass={{
          parent: "w-[61.713px] h-[61.713px] mb-[24.69px]",
          children: "w-[30.857px] h-[30.857px]",
        }}
        buttonProps={{
          py: "py-[12.34px]",
          px: "px-[24.69px]",
          className: "h-[50.69px] max-w-fit",
          svgClass: "w-[30px] h-[30px]",
        }}
        description={
          <p
            className={`text-[18.51px] leading-[25.92px] tracking-[-0.37px] text-gray-1 max-w-[317.12px] lg:max-w-full`}
          >
            <>
              We use third-party cookies in order to personalize
              <br className="hidden lg:block" />
              your site experience
            </>
          </p>
        }
      />
    </div>
  );
}

export function CurrencyConverterComponent() {
  const [animation, setAnimation] = useState(false);
  return (
    <div
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      className="w-full h-[228.253px] lg:h-[361.576px] group relative left-[-20px] md:left-[-40px] lg:left-[-80px]"
    >
      <CurrencyConverterContent
        className="h-[228.253px] lg:h-[361.576px] w-full relative"
        variant="2"
        animation={animation}
      />
    </div>
  );
}

export function RelatedProductComponent() {
  const [animation, setAnimation] = useState(false);
  return (
    <div
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      className="w-full h-full overflow-scroll no-scrollbar group"
    >
      <RelatedProductContent type={2} animation={animation} />
    </div>
  );
}

export function RecentlyViewedComponent() {
  const [animation, setAnimation] = useState(false);
  return (
    <div
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      className="w-full h-full group"
    >
      <RecentlyViewedContent
        className={
          "container min-h-[170px] md:min-h-[250px] lg:min-h-[361px] flex flex-col relative"
        }
        type={2}
        animation={animation}
      />
    </div>
  );
}

export function AnnouncementBarComponent() {
  const [animation, setAnimation] = useState(false);
  return (
    <div
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      className="w-full h-full group overflow-hidden"
    >
      <AnnouncementBarContent animation={animation} type="upcoming" />
    </div>
  );
}
