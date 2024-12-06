import { useEffect, useRef, useState } from "react";
import { CardGradient } from "~/components/card";
import { IconStar, IconStarBlank } from "~/components/icon";
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion";

const products = [
  {
    scale: "0.8",
    image: "/assets/images/product-crewneck_mini.png",
    gradient: "",
    key: 1,
    delay: 0.6,
  },
  {
    scale: "1",
    image: "/assets/images/product-shoes_mini.png",
    gradient:
      "linear-gradient(200deg, rgba(67, 198, 172, 0.3) 35.38%, rgba(248, 255, 174, 0.25) 44.06%, rgba(122, 122, 122, 0) 49.19%)",
    key: 2,
    delay: 0.4,
  },
  {
    scale: "0.8",
    image: "/assets/images/product-bag_mini.png",
    gradient: "",
    key: 3,
    delay: 0.2,
  },
];

const productsUpcoming = [
  {
    image: "/assets/images/product-crewneck_mini.png",
    gradient: "",
    fontClass: {
      title:
        "text-[10.341px] leading-[12.409px] lg:text-[16.349px] lg:leading-[19.618px]",
      subtitle:
        "text-[7.239px] leading-[11.582px] tracing-[-0.145px] lg:text-[11.444px] lg:leading-[18.311px] lg:tracking-[-0.229px]",
    },
    imageSize: "w-[155.115px] h-[155.115px] lg:w-[245.231px] lg:h-[245.231px]",
    key: 1,
    delay: 0.6,
  },
  {
    image: "/assets/images/product-shoes_mini.png",
    gradient:
      "linear-gradient(200deg, rgba(67, 198, 172, 0.3) 35.38%, rgba(248, 255, 174, 0.25) 44.06%, rgba(122, 122, 122, 0) 49.19%)",
    fontClass: {
      title:
        "text-[13.222px] leading-[15.866px] lg:text-[20.904px] lg:leading-[25.084px]",
      subtitle:
        "text-[9.255px] leading-[14.809px] lg:text-[14.633px] lg:leading-[23.412px]",
    },
    imageSize: "w-[198.331px] h-[198.331px] lg:w-[313.554px] lg:h-[313.554px]",
    key: 2,
    delay: 0.4,
  },
  {
    image: "/assets/images/product-bag_mini.png",
    gradient: "",
    fontClass: {
      title:
        "text-[10.341px] leading-[12.409px] lg:text-[16.349px] lg:leading-[19.618px]",
      subtitle:
        "text-[7.239px] leading-[11.582px] tracing-[-0.145px] lg:text-[11.444px] lg:leading-[18.311px] lg:tracking-[-0.229px]",
    },
    imageSize: "w-[155.115px] h-[155.115px] lg:w-[245.231px] lg:h-[245.231px]",
    key: 3,
    delay: 0.2,
  },
];

export default function RelatedProductContent({ animation, type = 1 }: any) {
  const step = 1;
  const scrollRef: any = useRef({ scrollLeft: 0 });
  const isScrollRef: any = useRef();

  const [card, setCard] = useState(type === 1 ? products : productsUpcoming);

  const setMove = (state: any) => (isScrollRef.current = state);

  const move = () => {
    if (isScrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + step;
      requestAnimationFrame(move);
    }
  };

  useEffect(() => {
    if (animation) {
      setMove(true);
      move();
    } else {
      setMove(false);
      scrollRef.current.scrollLeft = 0;
    }
  }, [animation]);

  return (
    <>
      {type === 1 && (
        <div className="overflow-scroll no-scrollbar" ref={scrollRef}>
          <div className="flex">
            <AnimatePresence initial={false}>
              {card.map((item, index) => {
                return <Products key={index} item={item} index={index} />;
              })}
            </AnimatePresence>
          </div>
        </div>
      )}
      {type === 2 && (
        <div className="overflow-scroll no-scrollbar max-w-[98%]" ref={scrollRef}>
          <div className="flex gap-[22.74px] items-center">
            <AnimatePresence initial={false}>
              {card.map((item, index) => {
                return <ProductsType2 key={index} item={item} index={index} />;
              })}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
}

export function Products({ item, index }: any) {
  return (
    <div
      className={`w-full related-product-card-${index} ${
        Number(item.scale) < 1 ? "-mt-[35px]" : ""
      }`}
      style={{ scale: item.scale }}
      key={item.key}
    >
      <CardGradient
        contentPosition={`start`}
        gradient={item.gradient}
        rounded={"rounded-[8px]"}
        bgColor={"bg-[#191919]"}
        className={
          "max-w-[90px] lg:min-w-[165.45px] max-h-[90px] lg:max-h-[165.45px]"
        }
      >
        <img
          className="object-cover object-center w-full h-full p-1 lg:p-5"
          src={item.image}
          alt="Product Jacket"
        />
      </CardGradient>
      <div className="flex flex-col gap-[7.58px] mt-[5px] lg:mt-[13px]">
        <div className="flex justify-between">
          <h3 className="font-[700] text-[11.03px] leading-[13.24px] text-[#393D4E]">
            Canvas Sneakers
          </h3>
          <span className="text-[11.03px] leading-[13.24px] text-[#393D4E]">
            $124.00
          </span>
        </div>
        <div>
          <p className="flex gap-[14px] font-inter text-[7.72px] leading-[12.35px] text-[#677487]">
            Vendor: Adidas | SKU: AD-40-Green
          </p>
          <div className="flex gap-[2.21px] items-center">
            <IconStar className="flex-[0_1_8px]" />
            <IconStar className="flex-[0_1_8px]" />
            <IconStar className="flex-[0_1_8px]" />
            <IconStar className="flex-[0_1_8px]" />
            <IconStarBlank className="flex-[0_1_8px]" />
            <span className="text-[7.72px] text-[#767676] leading-[12.35px] font-inter">
              (321)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsType2({ item, index }: any) {
  return (
    <div className={`w-full h-fit related-product-card-${index}`} key={index}>
      <CardGradient
        contentPosition={`start`}
        gradient={item.gradient}
        rounded={"rounded-[8px]"}
        bgColor={"bg-[#191919]"}
        className={item.imageSize}
      >
        <img
          className="object-cover object-center w-full h-full p-1 lg:p-5"
          src={item.image}
          alt="Product Jacket"
        />
      </CardGradient>
      <div className="flex flex-col gap-[7.58px] mt-[5px] lg:mt-[13px]">
        <div className="flex justify-between">
          <h3 className={`font-[700] ${item.fontClass.title} text-[#393D4E]`}>
            Canvas Sneakers
          </h3>
          <span className={`${item.fontClass.title} text-[#393D4E]`}>
            $124.00
          </span>
        </div>
        <div>
          <p
            className={`flex gap-[14px] font-inter ${item.fontClass.subtitle} text-[#677487] mb-[7px]`}
          >
            Vendor: Adidas | SKU: AD-40-Green
          </p>
          <div className="flex gap-[3px] items-center">
            <IconStar className="flex-[0_1_16.723px]" />
            <IconStar className="flex-[0_1_16.723px]" />
            <IconStar className="flex-[0_1_16.723px]" />
            <IconStar className="flex-[0_1_16.723px]" />
            <IconStarBlank className="flex-[0_1_16.723px]" />
            <span
              className={`${item.fontClass.subtitle} text-[#767676] font-inter`}
            >
              (321)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
