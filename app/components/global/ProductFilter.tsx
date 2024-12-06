import React, { useEffect, useState } from "react";
import { CardGradient } from "~/components/card";
import { Button } from "~/components/button";
import { GradientText } from "~/components/typography";
import { Arrow, Close } from "~/components/icon";
import Checkbox from "./Checkbox";

type IProductFilter = {
  animation: boolean;
};
export default function ProductFilter({ animation }: IProductFilter) {
  const selectedFilter = {
    Vendor: ["Adidas"],
    Price: 500,
    "Product Type": ["T-shirt"],
    Color: ["Black"],
    Available: "In Stock",
    "Ready to ship": true,
  };

  const [selected, setSelected] = useState(selectedFilter);
  const selectedUpdate = (key: string, value: any) => {
    setSelected((old) => ({ ...old, [key]: value }));
  };
  const [updatePrice, setUpdatePrice]: any = useState();
  const [filterActive, setFilterActive] = useState("Vendor_Adidas");

  useEffect(() => {
    if (animation) {
      setFilterActive("Color_Black");
      // update price
      let price = 500;
      setUpdatePrice(
        setInterval(() => {
          price += 1;
          if (price <= 1000) selectedUpdate("Price", price);
          else clearInterval(updatePrice);
        }, 0)
      );
    } else {
      setFilterActive("Vendor_Adidas");
      // reset changes
      selectedUpdate("Price", 500);
      if (updatePrice) clearInterval(updatePrice);
    }
  }, [animation]);

  const SelectedFilter = ({ data, filterActive }: any) => {
    const [active, setActive] = useState(filterActive);

    return (
      <div className="flex flex-col text-[16px] leading-[25.5px] font-normal font-inter">
        {Object.keys(data).map(function (key) {
          if (Array.isArray(data[key])) {
            return data[key].map((v: any) => {
              const isActive = active === key + "_" + v;
              return (
                <div
                  key={v}
                  className="mb-3"
                  onMouseEnter={() => setActive(key + "_" + v)}
                >
                  <Button
                    px={isActive ? "px-[9px]" : "px-[6px]"}
                    py="py-[3px]"
                    rounded={isActive ? "rounded-md" : "rounded-sm"}
                    variant={
                      isActive ? "borderAnimation" : "gradientBackground"
                    }
                    className={isActive ? "" : "border-none bg-[#191919]"}
                    gradient={
                      "linear-gradient(155.8deg, rgba(67, 198, 172, 0.5) 20.38%, rgba(248, 255, 174, 0.25) 31.06%, rgba(122, 122, 122, 0) 61.19%)"
                    }
                    inset="inset-[-100%]"
                  >
                    <ButtonText active={isActive} text={key + " : " + v} />
                  </Button>
                </div>
              );
            });
          } else {
            const isActive = active === key + "_" + data[key];
            return (
              <div
                key={data[key]}
                className="mb-3"
                onMouseEnter={() => setActive(key + "_" + data[key])}
              >
                <Button
                  px={isActive ? "px-[9px]" : "px-[6px]"}
                  py="py-[3px]"
                  rounded={isActive ? "rounded-md" : "rounded-sm"}
                  variant={isActive ? "borderAnimation" : "gradientBackground"}
                  className={isActive ? "" : "border-none bg-[#191919]"}
                  gradient={
                    "linear-gradient(155.8deg, rgba(67, 198, 172, 0.5) 20.38%, rgba(248, 255, 174, 0.25) 31.06%, rgba(122, 122, 122, 0) 61.19%)"
                  }
                >
                  <ButtonText
                    active={isActive}
                    text={
                      typeof data[key] !== "boolean"
                        ? `${key} : ${key === "Price" ? "$" : ""} ${data[key]}`
                        : key
                    }
                  />
                </Button>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="w-[calc(100%_-_50px)] lg:w-[415px]">
      <CardGradient
        contentPosition="start"
        gradient="linear-gradient(130.1deg, #676767 25.52%, rgba(103, 103, 103, 0) 40.31%)"
        className="absolute mt-6 md:mt-10"
      >
        <div className="p-[15px] md:p-[24px] lg:p-8 lg:pb-10">
          <SelectedFilter data={selected} filterActive={filterActive} />

          <div className="hidden md:block w-[270px] md:w-[250px] lg:w-[270px]">
            <Filter
              selected={selected}
              selectedUpdate={selectedUpdate}
              animation={animation}
            />
          </div>
        </div>
      </CardGradient>
    </div>
  );
}

const ButtonText = ({ active, text }: { active: boolean; text: string }) => {
  return !active ? (
    <div className="flex gap-[6px] text-[12.33px] md:text-[15.33px] lg:text-[15.94px]">
      {text}{" "}
      <span className="mt-[2px]">
        <Close />
      </span>
    </div>
  ) : (
    <div className="text-[15px] md:text-[20px] lg:text-[21px] leading-[24px] md:leading-[34px] font-normal">
      <GradientText
        deg="109.41deg"
        className="from-[#43C6AC] to-[#F8FFAE] flex gap-[9px]"
      >
        {text}{" "}
        <span className="my-auto">
          <Close size={active ? "normal" : "small"} />
        </span>
      </GradientText>
    </div>
  );
};

const Filter = ({ selectedUpdate, selected, animation }: any) => {
  const [vendors, setVendors] = useState([
    { label: "Adidas (13)", checked: true },
    { label: "Puma (4)", checked: false },
    { label: "Ardiles (9)", checked: false },
    { label: "Swallow (7)", checked: false },
    { label: "3 Second (2)", checked: false },
  ]);
  const [updatingCehcked, setUpdatingCehcked]: any = useState();

  const updateChecked = (index: number, value: boolean) => {
    setVendors((old) => {
      old[index].checked = value;
      return old;
    });

    if (index < 4)
      setUpdatingCehcked(setTimeout(() => updateChecked(index + 1, true), 500));
  };
  useEffect(() => {
    if (animation) {
      setTimeout(() => updateChecked(1, true), 2000);
    } else {
      if (updatingCehcked) clearTimeout(updatingCehcked);
      setVendors((old) => {
        for (let index = 1; index < 5; index++) {
          old[index].checked = false;
        }
        return old;
      });
    }
  }, [animation]);

  const [opened, setOpened] = useState(["Price", "Vendor"]);
  const openedUpdate = (text: any) => {
    setOpened((old: any) => {
      if (old.includes(text)) return old.filter((f: string) => f !== text);
      else return [...old, text];
    });
  };

  const FilterTitle = ({ text }: any) => (
    <div className="flex cursor-pointer" onClick={() => openedUpdate(text)}>
      <span className="grow text-base font-bold text-[15.38px] lg:text-[16px]">
        {text}
      </span>
      <div
        className={`my-auto ${
          !opened.includes(text) ? "rotate-180" : "rotate-0"
        }`}
      >
        <Arrow />
      </div>
    </div>
  );

  return (
    <div className="text-[#677487] font-inter mt-5">
      <FilterTitle text="Price" />
      {opened.includes("Price") && (
        <div className="">
          <div className="mt-4 mb-2 h-8 relative">
            <div
              className={`absolute`}
              style={{
                left:
                  selected.Price / 10 -
                  ((selected.Price / 10) * 30) / 100 +
                  "%",
              }}
            >
              <Button
                py="py-2"
                px="px-[14px]"
                rounded=" rounded-lg"
                variant="borderAnimation"
                gradient={
                  "linear-gradient(155.8deg, rgba(67, 198, 172, 0.5) 20.38%, rgba(248, 255, 174, 0.25) 31.06%, rgba(122, 122, 122, 0) 61.19%)"
                }
                inset="inset-[-100%]"
              >
                <span className="text-white text-[13px] lg:text-[14px]">
                  ${selected.Price}
                </span>
              </Button>
            </div>
          </div>
          <input
            min={10}
            max={1000}
            id="default-range"
            type="range"
            onChange={(v) => selectedUpdate("Price", v.target.value)}
            value={selected.Price}
            className={`
                            w-full appearance-none bg-transparent
                            [&::-webkit-slider-runnable-track]:rounded-lg
                            [&::-webkit-slider-runnable-track]:h-[5px]
                            [&::-webkit-slider-runnable-track]:bg-[#191919]
                            [&::-webkit-slider-thumb]:appearance-none cursor-pointer 
                            [&::-webkit-slider-thumb]:h-[20px]
                            [&::-webkit-slider-thumb]:w-[20px]
                            [&::-webkit-slider-thumb]:bg-[#222222]
                            [&::-webkit-slider-thumb]:rounded-lg
                            [&::-webkit-slider-thumb]:-mt-[6px]
                            [&::-webkit-slider-thumb]:border-[#191919]
                            [&::-webkit-slider-thumb]:border-solid
                            [&::-webkit-slider-thumb]:border-3`}
          />
          <div className="flex justify-between text-sm text-[#929292] mt-1">
            <span>$10</span>
            <span>$1.000</span>
          </div>
        </div>
      )}

      <div className="mt-8 hidden lg:block">
        <div className="pb-1">
          <FilterTitle text="Vendor" />
        </div>
        {opened.includes("Vendor") &&
          vendors.map((c: any, i: any) => (
            <div key={i} className="mt-3">
              <Checkbox
                checked={c.checked}
                setChecked={(v: any) =>
                  setVendors((old: any) => {
                    let updatedIndex = 0;
                    old.map((v: any, i: number) => {
                      if (v.label === c.label) updatedIndex = i;
                    });
                    let newOld = JSON.parse(JSON.stringify(old));
                    newOld[updatedIndex].checked =
                      !newOld[updatedIndex].checked;
                    return newOld;
                  })
                }
                label={c.label}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
