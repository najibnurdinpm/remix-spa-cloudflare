import CheckedboxList from "./CheckedboxList";
import { InstallNowBtn } from "~/components/button";
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

  return (
    <div className="flex flex-col gap-4 w-full font-inter lg:flex-row lg:gap-[30px]">
      <div className="flex flex-col bg-[#181818] rounded-[24px] gap-[24px] p-[24px] w-full md:flex-row md:p-[20px] lg:w-[70%] lg:gap-[40px] lg:items-center">
        <img
          src="/assets/images/pricing-product.png"
          className="rounded-[24px] object-cover md:hidden"
        />
        <img
          src="/assets/images/pricing-product-tablet.png"
          className="rounded-[24px] object-cover hidden md:block md:w-[50%] lg:w-[100%] lg:max-w-[514px] md:max-h-[420px] lg:max-h-[460px]"
        />
        <CheckedboxList list={checkedList} active={active} />
      </div>
      <div className="bg-[linear-gradient(146.85deg,#43C6AC_2.46%,rgba(248,255,174,0.5)_34.01%,rgba(122,122,122,0)_66.23%)] p-[1px] rounded-[24px] shadow-[0_0_11px_-2px_#43C6AC] lg:w-[30%] lg:max-w-[341px]">
        <div className="rounded-[24px] flex flex-col md:flex-row md:items-center md:gap-[79px] bg-[#181818] p-[24px] lg:p-[32px] w-full lg:block lg:h-full">
          <img
            src="/assets/images/sledge-logo-hd.png"
            className="hidden lg:block mb-[100px] w-[132px]"
            alt=""
          />
          <div className="md:max-w-[405px] lg:max-w-[100%] lg:mb-[64px]">
            <h2 className="font-inter text-[20px] font-bold leading-[120%] -tracking-[0.4px] text-[#43C6AC] mb-3 lg:mb-[16px]">
              <span className="text-[32px] lg:text-[40px]">$29</span>.99
              <span className="text-white font-normal">/mo</span>
            </h2>
            <p className="text-[#9C9C9C] font-inter text-sm font-normal leading-[140%] -tracking-[0.28px] mb-6 lg:text-base lg:tracking-[-0.32px] lg:leading-[160%]">
              Boost your fast-growing store's sales with Sledge. Get all apps
              and future updates at a single, affordable price.
            </p>
          </div>
          <InstallNowBtn
            variant="gradientBackground"
            className={"ml-auto"}
            source={"Simple Pricing"}
          >
            <span className="font-bold">Get Started</span>
          </InstallNowBtn>
        </div>
      </div>
    </div>
  );
}
