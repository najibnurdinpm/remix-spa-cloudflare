import { useEffect, useState } from "react";
import { CardGradient } from "~/components/card";
import { Badge } from "~/components/global";
import { IconHeart, IconHeartWhite } from "~/components/icon";
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion";

export default function WishlistContent({ animation }: any) {
  const products = [
    {
      title: "Hoodie | Classic Green | New Collection",
      image: "/assets/images/product-hoodie_small.png",
      size: "OS",
      color: "Green",
      isActive: false,
      scale: 0.75,
      reScale: 1,
      delay: 0.6,
    },
    {
      title: "Hoodie | Classic Green | New Collection",
      image: "/assets/images/product-jacket_small.png",
      size: "OS",
      color: "Green",
      isActive: true,
      scale: 1,
      reScale: 0.8,
      delay: 0.4,
    },
    {
      title: "Hoodie | Classic Green | New Collection",
      image: "/assets/images/product-shirt.webp",
      size: "OS",
      color: "Green",
      isActive: false,
      scale: 0.7,
      reScale: 0.9,
      delay: 0.2,
    },
  ];

  const [card, setCard] = useState([...products].reverse());

  useEffect(() => {
    if (animation) {
      setCard([]);
      setTimeout(() => {
        setCard([...products].reverse());
      }, 100);
    } else {
      clearTimeout;
      setCard([...products].reverse());
    }
  }, [animation]);

  return (
    <div className="container max-h-[169.17px] xl:max-h-[221.79px] flex flex-col relative">
      <div className="flex flex-col space-y-[5px] xl:-space-y-[2px] xl:max-h-[221.79px]">
        <AnimatePresence initial={false}>
          {card.map((item, index) => {
            return (
              <motion.div
                className={`wishlist-cards wishlist-card-${index} max-h-[50.19px] lg:max-h-[81.51px]`}
                key={index}
                initial={{ opacity: 0, y: -50, scale: item.reScale }}
                animate={{ opacity: 1, y: 0, scale: item.scale }}
                exit={{
                  opacity: 0,
                  scale: item.scale,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: item.delay,
                }}
              >
                <Products item={item} index={index} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Products({ item, index }: any) {
  const defaultGradient =
    "linear-gradient(130.1deg, #676767 25.52%, rgba(103, 103, 103, 0) 40.31%)";

  return (
    <div className="flex items-center gap-[7.7px] xl:gap-[11.37px] transition-all duration-75">
      {/* TODO: ukuran belum pas */}
      <Badge
        gradient={
          "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
        }
        as={"button"}
        height={"h-[18.16px] min-h-[18.16px] lg:h-[20.91px] xl:min-h-[20.91px]"}
        rounded={"rounded-[6px]"}
        pX={"px-[4px]"}
        pY={"py-[4px]"}
        className={
          "min-w-[18.16px] w-[18.16px] xl:min-w-[20.91px] xl:w-[20.91px]"
        }
      >
        {item.isActive ? (
          <IconHeart />
        ) : (
          <IconHeartWhite width={10.45} height={10.45} fill={"#767676"} />
        )}
      </Badge>
      <CardGradient
        contentPosition={`start`}
        gradient={item.isActive ? defaultGradient : ""}
        rounded={"rounded-[8px]"}
        bgColor={"bg-[#191919]"}
      >
        <div className="flex px-[10.27px] py-[7.7px] xl:px-[15.17px] xl:py-[11.37px] items-center">
          <div className="mr-[23.1px] xl:mr-[34.12px]">
            <img
              src={item.image}
              width={58.76}
              height={58.76}
              alt="Product Jacket"
              className="w-[39.79px] h-fit xl:w-[58.76px] xl:h-[58.76px]"
            />
          </div>
          <div className="flex flex-col gap-[5.13px] xl:gap-[7.58px]">
            <div>
              <h3 className="font-[700] text-[10.27px] leading-[12.32px] xl:text-[15.16px] xl:leading-[18.2px] text-[#677487]">
                {item.title}
              </h3>
            </div>
            <div>
              <p className="flex gap-[14px] font-inter text-[6.42px] leading-[10.27px] xl:text-[9.48px] xl:leading-[15.16px] text-[#4B4B4B]">
                <span>{item.size}</span>
                <span>{item.color}</span>
              </p>
            </div>
          </div>
        </div>
      </CardGradient>
    </div>
  );
}
