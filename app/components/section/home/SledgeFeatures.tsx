import React, { useState, useEffect } from "react";
import { CardApp } from "~/components/card";
import {
  AnnouncementBarContent,
  ProductReviewContent,
  RecentlyViewedContent,
  RelatedProductContent,
  WishlistContent,
  InstantSearchContent,
  CurrencyConverterContent,
  CookieConsentContent,
} from "~/components/card/children";
import { ProductFilter } from "~/components/global";
import Slider from "react-slick";

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

type colRowSpan = {
  colSpan?: string;
  rowSpan?: string;
  className?: string;
  to?: string;
};

const customBreakpoint = 1025;

function SliderComponent({ type }: any) {
  return (
    <>
      {type === 1 && (
        <div className="flex flex-wrap max-w-full gap-[16px] [flex-shrink:0]">
          <ProductReview className={"[flex-shrink:0] w-[98%]"} />
          <Wishlist className={"[flex-shrink:0]"} />
          <InstantSearch className={"[flex-shrink:0]"} />
        </div>
      )}
      {type === 2 && (
        <div className="flex flex-col md:flex-row  gap-[16px] [flex-shrink:0]">
          <div className="flex flex-col gap-y-[16px] w-full md:w-[45%]">
            <CookieConsent className={"w-full"} />
            <RelatedProducts className={"w-full"} />
          </div>
          <ProductFiltering className={"w-full"} />
        </div>
      )}
      {type === 3 && (
        <div className="flex flex-wrap gap-[16px] [flex-shrink:0]">
          <CurrencyConverter className={"order-6 flex-shrink:0] w-full "} />
          <AnnouncementBar className={"[flex-shrink:0] order-8 "} />
          <RecentlyViewed className={"[flex-shrink:0] order-9 "} />
        </div>
      )}
    </>
  );
}

export default function SledgeFeatures() {
  const [isSlider, setSlider] = useState(false);
  const [currentSlide, setSlide]: any = useState(0);

  const sliderSettings: any = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    beforeChange: (prev: any, next: any) => {
      setSlide(next);
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="">
        <ul className="flex gap-[10px] w-fit m-auto"> {dots} </ul>
      </div>
    ),
    customPaging: (index: number) => (
      <div
        className={`${
          index === currentSlide ? "bg-white" : "bg-[#333333]"
        } w-[12px] h-[12px] rounded-full mt-[30px]`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: {},
      },
    ],
  };

  const handleResize = () => {
    if (window.innerWidth < customBreakpoint) {
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
      className={`${
        !isSlider ? "grid grid-cols-3" : "flex"
      } gap-[16px] lg:gap-[30px] mt-[37px] lg:mt-[48px]`}
    >
      {isSlider ? (
        <SliderComponent type={1} />
      ) : (
        <>
          <ProductReview
            colSpan={" col-span-1 md:col-span-2"}
            className={"[flex-shrink:0] order-4  w-[678px] lg:w-full"}
          />
          <Wishlist
            colSpan={" col-span-1"}
            className={"[flex-shrink:0] order-2 lg:order-1 "}
          />
          <InstantSearch
            colSpan={" col-span-1"}
            className={"[flex-shrink:0] order-3 lg:order-2 "}
          />
        </>
      )}

      {isSlider ? (
        <SliderComponent type={2} />
      ) : (
        <>
          <CookieConsent
            colSpan={"col-span-1"}
            className={"[flex-shrink:0] order-5 "}
          />
          <RelatedProducts
            colSpan={"col-span-1"}
            className={"[flex-shrink:0] order-7 "}
          />
          <ProductFiltering
            colSpan={"col-span-1"}
            rowSpan={"row-span-2"}
            className={"[flex-shrink:0] order-4 lg:order-2 "}
          />
        </>
      )}

      {isSlider ? (
        <SliderComponent type={3} />
      ) : (
        <>
          <CurrencyConverter
            colSpan={"col-span-1 md:col-span-2"}
            className={"[flex-shrink:0] order-6 "}
          />
          <AnnouncementBar
            colSpan={"col-span-1"}
            className={"[flex-shrink:0] order-8 "}
          />
          <RecentlyViewed
            colSpan={"col-span-1"}
            className={"[flex-shrink:0] order-9 "}
          />
        </>
      )}
    </Slider>
  );
}

function ProductReview({ colSpan = "", rowSpan = "", className }: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/review"
      py="py-[21px] lg:py-[32px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={"Product Review"}
      subTitle={
        <>
          Show the best review of your products with the easy and customizable{" "}
          <br />
          product review widgets to gain customer trust and boost your store
          sales.
        </>
      }
      bigText={"T-shirt Classic Green | New Collection"}
      titlePosition="bottom"
      className={`${colSpan} ${rowSpan} ${className}`}
    >
      <ProductReviewContent animation={animationActive} />
    </CardApp>
  );
}

function ProductFiltering({
  colSpan = "",
  rowSpan = "",
  className,
}: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/product-filters"
      py="py-[21px] lg:py-[32px]"
      px="px-[24px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={"Product Filters"}
      titleClass={"pt-[20px] lg:pt-0"}
      subTitle={
        <>
          Instantly integrate a smart product filters on any pages including
          collection and search result pages.
        </>
      }
      titlePosition="top"
      className={`relative ${colSpan} ${rowSpan} ${className}`}
      deg={"280.19deg"}
      gradient="linear-gradient(280.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
    >
      <ProductFilter animation={animationActive} />
    </CardApp>
  );
}

function Wishlist({ colSpan = "", rowSpan = "", className }: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/wishlist"
      py="py-[21px] lg:py-[32px]"
      px="px-[24px]"
      title={<div className="pl-[10px] lg:pl-[16px]">Wishlist</div>}
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      subTitle={
        <div className="pl-[10px] lg:pl-[16px]">
          Increase engagement and sales on your sites by allowing customers to
          save their desired products for later.
        </div>
      }
      titlePosition="bottom"
      deg={"50.19deg"}
      gradient="linear-gradient(50.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
      className={`max-w-full md:min-w-0 md:max-w-[48%] lg:max-w-[410px] ${colSpan} ${rowSpan} ${className}`}
    >
      <WishlistContent animation={animationActive} />
    </CardApp>
  );
}

function InstantSearch({ colSpan = "", rowSpan = "", className }: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/instant-search"
      py="py-[21px] lg:py-[32px]"
      px="px-[24px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={"Instant Search"}
      subTitle={
        <>
          Personalized and customized instant search widgets that fit with the
          look and feel of your brand.
        </>
      }
      titlePosition="bottom"
      deg={"290.19deg"}
      gradient="linear-gradient(290.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
      className={`max-w-full md:min-w-0 md:max-w-[48%] lg:max-w-[410px] ${colSpan} ${rowSpan} ${className}`}
    >
      <InstantSearchContent animation={animationActive} />
    </CardApp>
  );
}

function CookieConsent({ colSpan = "", rowSpan = "", className }: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/upcoming#cookie-consent"
      py="py-[21px] lg:py-[32px]"
      px="px-[21px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={"Cookie Consent"}
      subTitle={
        <>
          Show respect for your user's privacy. Allow users to manage their
          cookie preferences.
        </>
      }
      titlePosition="bottom"
      className={` ${colSpan} ${rowSpan} ${className}`}
      badgeText="upcoming"
      deg={"50.19deg"}
      gradient="linear-gradient(50.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
    >
      <CookieConsentContent animation={animationActive} />
    </CardApp>
  );
}

function CurrencyConverter({
  colSpan = "",
  rowSpan = "",
  className,
}: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/upcoming#currency-converter"
      py="py-[21px] lg:py-[32px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={<div className="pl-[21px] lg:pl-[40px]">Currency Converter</div>}
      subTitle={
        <div className="pl-[21px] lg:pl-[40px]">
          Convert your store prices automatically to your customers <br />
          local currencies on any devices.
        </div>
      }
      titlePosition="bottom"
      px="px-0"
      className={`min-w-full md:min-w-0 ${colSpan} ${rowSpan} ${className}`}
      badgeText="upcoming"
      deg={"290.19deg"}
      gradient="linear-gradient(290.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
    >
      <CurrencyConverterContent animation={animationActive} />
    </CardApp>
  );
}

function RelatedProducts({
  colSpan = "",
  rowSpan = "",
  className,
}: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/upcoming#related-products"
      py="py-[21px] lg:py-[32px]"
      px="px-[21px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={<div>Related Products</div>}
      subTitle={
        <div>
          Keep your customers in the sales funnel by showing them the relevant
          products.
        </div>
      }
      titlePosition="bottom"
      className={`${colSpan} ${rowSpan} ${className}`}
      badgeText="upcoming"
      deg={"50.19deg"}
      gradient="linear-gradient(50.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
      spaceY="space-y-[10.49px] lg:space-y-[44.49px]"
    >
      <RelatedProductContent animation={animationActive} />
    </CardApp>
  );
}

function AnnouncementBar({
  colSpan = "",
  rowSpan = "",
  className,
}: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/upcoming#announcement-bar"
      py="py-[21px] lg:py-[32px]"
      px="px-[21px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={"Announcement Bar"}
      subTitle={
        <>
          Make sure your customers didn’t miss out on important news, updates,
          discounts, and offers.
        </>
      }
      titlePosition="bottom"
      className={`max-w-full md:min-w-0 md:max-w-[48%] lg:max-w-[410px] ${colSpan} ${rowSpan} ${className}`}
      badgeText="upcoming"
      deg={"200.19deg"}
      gradient="linear-gradient(200.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
    >
      <AnnouncementBarContent animation={animationActive} />
    </CardApp>
  );
}

function RecentlyViewed({ colSpan = "", rowSpan = "", className }: colRowSpan) {
  const [animationActive, setAnimationActive] = useState(false);
  return (
    <CardApp
      isGradientHover
      height="h-full"
      to="/apps/upcoming#recently-viewed"
      py="py-[21px] lg:py-[32px]"
      px="px-[21px]"
      onMouseEnter={() => setAnimationActive(true)}
      onMouseLeave={() => setAnimationActive(false)}
      title={"Recently Viewed"}
      subTitle={
        <>
          Keep your customers engaged with thir recently viewed products and
          cross-sell efficiently.
        </>
      }
      titlePosition="bottom"
      className={`max-w-full md:min-w-0 md:max-w-[48%] lg:max-w-[410px] ${colSpan} ${rowSpan} ${className}`}
      badgeText="upcoming"
      deg={"290.19deg"}
      gradient="linear-gradient(290.19deg, rgb(67, 198, 172) 40%, rgb(248, 255, 174) 43%, rgb(21, 21, 21) 50.6%)"
    >
      <RecentlyViewedContent animation={animationActive} />
    </CardApp>
  );
}
