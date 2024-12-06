import { useEffect, useState } from "react";
import { ProductOptionSize } from "~/components/card/children";
import { IconStar } from "~/components/icon";
import { CardGradient } from "~/components/card";
import { StateChangeAnimation } from "~/components/animation";

type IProductReviewContent = {
  animation?: boolean;
};

export default function ProductReviewContent({
  animation,
}: IProductReviewContent) {
  const options = [
    {
      scale: 0.6,
      size: "S",
      stars: 5,
      count: 99,
      comment: (
        <>
         The t-shirt I purchased exceeded my expectations. The fabric is 
         soft and breathable, making it incredibly comfortable to wear 
         throughout the day. The design is also quite stylish, adding a 
         trendy touch to my casual wardrobe. 
        </>
      ),
    },
    {
      scale: 0.7,
      size: "M",
      stars: 4,
      count: 88,
      comment: (
        <>
         The t-shirt I purchased exceeded my expectations. The fabric is
         soft and breathable, making it incredibly comfortable to wear
         throughout the day. The design is also quite stylish, adding a
         trendy touch to my casual wardrobe. 
        </>
      ),
    },
    {
      scale: 0.8,
      size: "L",
      stars: 5,
      count: 77,
      comment: (
        <>
          The t-shirt I purchased exceeded my expectations. The fabric is
         soft and breathable, making it incredibly comfortable to wear
         throughout the day. The design is also quite stylish, adding a
         trendy touch to my casual wardrobe. 
        </>
      ),
    },
    {
      scale: 0.9,
      size: "XL",
      stars: 5,
      count: 88,
      comment: (
        <>
          The t-shirt I purchased exceeded my expectations. The fabric is
         soft and breathable, making it incredibly comfortable to wear
         throughout the day. The design is also quite stylish, adding a
         trendy touch to my casual wardrobe. 
        </>
      ),
    },
    {
      scale: 1,
      size: "XXL",
      stars: 4,
      count: 200,
      comment: (
        <>
          The t-shirt I purchased exceeded my expectations. The fabric is
         soft and breathable, making it incredibly comfortable to wear
         throughout the day. The design is also quite stylish, adding a
         trendy touch to my casual wardrobe. 
        </>
      ),
    },
    {
      scale: 1.1,
      size: "XXXL",
      stars: 5,
      count: 100,
      comment: (
        <>
          The t-shirt I purchased exceeded my expectations. The fabric is
         soft and breathable, making it incredibly comfortable to wear
         throughout the day. The design is also quite stylish, adding a
         trendy touch to my casual wardrobe. 
        </>
      ),
    },
  ];

  const [update, setUpdate]: any = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked]: any = useState(options[currentIndex]);

  const handleChange = (index: number) => {
    setChecked(options[index]);
  };

  useEffect(() => {
    let selectedIndex = currentIndex;
    let maxIndex = 5;
    let time = 1000;

    if (animation) {
      setUpdate(1);
      setCurrentIndex(1);
      setChecked(options[1]);
      // after first select
      setUpdate(
        setInterval(() => {
          selectedIndex += 1;
          if (selectedIndex <= maxIndex) {
            setCurrentIndex(selectedIndex);
            setChecked(options[selectedIndex]);
          } else {
            clearInterval(update);
          }
        }, time)
      );
    } else {
      // reset changes
      setUpdate(0);
      setCurrentIndex(0);
      setChecked(options[0]);
      if (update) clearInterval(update);
    }
  }, [animation]);

  return (
    <div className="flex items-center overflow-hidden w-[480px] md:w-auto">
      <div className="flex flex-col gap-[12px]">
        {options.map((item, index) => (
          <ProductOptionSize
            checked={checked.size}
            handleChange={() => handleChange(index)}
            size={item.size}
            key={index}
            index={index}
          />
        ))}
      </div>
      <div className="relative w-[w-fit] md:w-[150px] lg:w-fit">
        <img
          style={{
            scale: String(checked.scale),
          }}
          className="transition-all duration-200"
          src="/assets/images/product-shirt.webp"
          alt="Product Shirt"
        />
        <div className="flex gap-[4px] items-end absolute right-[8px] bottom-[20px] py-[5px] px-[6px] rounded-[4px] bg-[#1919194D]">
          <span className="text-[16.94px] leading-[20.33px] font-[700]">
            $67
            <span className="text-[10.59px] leading-[12.71px]">.00</span>
          </span>
          <span className="font-inter text-[#FF7373] text-[8px] leading-[15px] line-through">
            $145.00
          </span>
        </div>
      </div>
      <div className="w-fit">
        <StateChangeAnimation state={currentIndex}>
          <CardGradient
            contentPosition={"start"}
            borderAnimation={false}
            gradient={
              "linear-gradient(130.1deg, #676767 25.52%, rgba(103, 103, 103, 0) 40.31%)"
            }
            className={"h-[125px] lg:h-[135px] max-w-[330px]"}
          >
            <div className="p-[16px] flex flex-col gap-[12px] ">
              <div className="flex space-x-[5.51px] items-center">
                <div className="flex gap-[3.44px]  transition-all duration-300">
                  {[...Array(checked.stars)].map((v, i) => {
                    return (
                      <IconStar
                        key={i}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </div>
                <span className="font-inter text-[9.64px] leading-[15.43px] text-[#767676]">
                  ({checked.count})
                </span>
              </div>
              <div className="border-t border-solid border-[#222222]">
                <p className="font-inter text-gray-1 text-[10px] leading-[16px] tracking-[-2%] pt-[12px]">
                  {checked.comment}
                </p>
              </div>
            </div>
          </CardGradient>
        </StateChangeAnimation>
      </div>
    </div>
  );
}
