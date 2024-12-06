import { GradientText } from "~/components/typography";
import CheckedboxList from "./CheckedboxList";
import { Button } from "~/components/button";
import { useEffect, useState } from "react";

type IPricingSledge = {
  animation: boolean;
};

export default function PricingSledge({ animation }: IPricingSledge) {
  const [active, setActive] = useState(5);
  const [changeActive, setChangeActive]: any = useState();

  const updateActive = (val: number) => {
    setChangeActive(
      setTimeout(() => {
        setActive(val);
        if (val < 4) updateActive(val + 1);
      }, 1000)
    );
  };
  useEffect(() => {
    if (animation) {
      updateActive(0);
    } else {
      setActive(5);
      if (changeActive) clearInterval(changeActive);
    }
  }, [animation]);

  const checkedList = [
    { checked: true, upcoming: false, label: "Wishlist" },
    { checked: true, upcoming: false, label: "Product Reviews" },
    { checked: true, upcoming: false, label: "Instant Search" },
    {
      checked: true,
      upcoming: false,
      label: "Product Filter",
    },
    { checked: true, upcoming: true, label: "Cookie Consent" },
    { checked: true, upcoming: true, label: "Currency Converter" },
    { checked: true, upcoming: true, label: "Related Products" },
    { checked: true, upcoming: true, label: "Announcement Bar" },
    { checked: true, upcoming: true, label: "Recently Viewed" },
  ];

  const title = (
    <div className="font-bold text-2xl leading-[28px]">
      Pay for one price
      <br />
      get multiple apps!
    </div>
  );

  const price = (
    <div className="mt-2 text-[32px] lg:text-[40px] leading-[48px] font-bold">
      <GradientText
        deg="137.65deg"
        className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
      >
        $29.<span className=" text-[14px] lg:text-xl">99</span>
      </GradientText>
      <span className=" text-[14px] lg:text-xl font-normal">/month</span>
    </div>
  );

  return (
    <div className="flex h-full w-full font-inter">
      <div className="hidden xl:block mt-10 w-[45%] relative overflow-hidden">
        <div className="ml-10">{title}</div>
        <div className="absolute bottom-0">
          <img
            className="rounded-bl-[24px] max-w-none object-fill h-[562.82px]"
            src="/assets/images/sledge-pricing-3.png"
            alt="sledge pricing"
            height={562.82}
            width={660.57}
          />
        </div>
      </div>

      <div className="my-8 px-[27px] lg:px-8 w-full lg:w-[55%] lg:border-l-[1px] border-[#393D4E]">
        <div className="lg:hidden">{title}</div>
        <div className="hidden lg:block">{price}</div>
        <div className="mt-[32px]">
          <CheckedboxList list={checkedList} active={active} />
        </div>
        <div className="flex lg:block pt-3 lg:pt-10">
          <div className="lg:hidden grow -mt-2">{price}</div>
          <Button
            active={true}
            className={"lg:ml-auto"}
            variant={"gradientBackground"}
          >
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
