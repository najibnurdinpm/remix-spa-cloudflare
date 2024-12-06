import { ASSET_URL } from "~/utils/const";
import { FeatureTitle } from "~/components/global";
import { CardApp } from "~/components/card";
import { useState } from "react";
import { Button } from "~/components/button";
import { IconHeart } from "~/components/icon";
import { GradientText } from "~/components/typography";

export default function NumberOne() {
  return (
    <div className="relative flex justify-center flex-col h-auto my-[0] mx-auto pt-12">
      <FeatureTitle
        number="01"
        title={<>Various launch point options</>}
        subtitle={
          <>
            Sledge Wishlist offers various launch points to display user
            wishlists.
            <br className="hidden sm:block" /> Choose your preference and mix
            and match with your store design.
          </>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-[30px] pt-[48px]">
        {/* CardApps */}
        <HeaderMenu colSpan={"col-span-1 md:col-span-2 lg:col-span-2"} />
        <FloatingButton colSpan={"col-span-1 md:col-span-2 lg:col-span-1"} />
        <FloatingIcon colSpan={"col-span-1 md:col-span-2 lg:col-span-1"} />
        <Notification colSpan={"col-span-1 md:col-span-2 lg:col-span-2"} />
      </div>
    </div>
  );
}

function HeaderMenu({ colSpan }: any) {
  return (
    <CardApp
      isGradientHover
      height={"h-full"}
      title={"As a Header Menu"}
      subTitle={
        <>
          Increased visibility of the wishlist, which can lead to more items{" "}
          <br className="hidden sm:block" />
          being added to the wishlist.
        </>
      }
      className={` ${colSpan}`}
      px={"px-[29px]"}
      spaceY={"space-y-[25px]"}
      deg="160.19deg"
    >
      <div className="h-[267px]">
        <img
          className="ml-[57px] mt-[38px] -z-10 absolute"
          src={ASSET_URL + "wishlist-header_menu-content.png"}
          alt="Placehoder"
        />
      </div>
    </CardApp>
  );
}

function FloatingButton({ colSpan }: any) {
  const floatingButton = ["left", "right"];
  const [float, setFloat] = useState(floatingButton[0]);

  return (
    <CardApp
      isGradientHover
      height={"h-full"}
      title={<div className="px-[29px]">Floating Button</div>}
      subTitle={
        <div className="px-[29px]">
          Provides persistent visibility that remains visible for the user.
        </div>
      }
      className={` max-w-full lg:max-w-[410px] ${colSpan}`}
      px={"px-[0px]"}
      deg="160.19deg"
    >
      <div className="relative">
        <div className="flex gap-[8px] px-[29px] mb-[24px]">
          {!floatingButton.length
            ? null
            : floatingButton.map((position, index) => {
                return (
                  <div key={index}>
                    <Button
                      rounded="rounded-lg"
                      px="px-4"
                      py="py-2"
                      onClick={() => setFloat(position)}
                      key={position}
                      gradient={
                        "linear-gradient(120.68deg, rgb(103, 103, 103) 46.16%, rgb(103, 103, 103) 45.16%, rgba(103, 103, 103, 0) 52.4%)"
                      }
                      variant={
                        float === position
                          ? "borderAnimation"
                          : "gradientBackground"
                      }
                      className={`border-[#1D1D1D]`}
                    >
                      <span
                        className={`${
                          float === position ? "text-white" : "text-gray-1"
                        } font-[700] capitalize text-[18px] leading-[19.8px]`}
                      >
                        {position}
                      </span>
                    </Button>
                  </div>
                );
              })}
        </div>
        <div className="h-[190px] relative">
          <div
            className={`absolute flex gap-[32px] transition-all duration-200 ${
              float === "left" ? "pl-[29px]" : "pr-[29px] flex-row-reverse"
            }`}
          >
            <div>
              <Button
                className="relative"
                rounded="rounded-lg"
                px="px-[12px]"
                py="py-[16px]"
                variant="borderAnimation"
                gradient="linear-gradient(40.68deg, #676767 49.16%, #676767 49.16%, rgba(103, 103, 103, 0) 51.4%)"
                deg="(40.68deg"
                count={2}
                wrapperClass={"top-[42px]"}
                countClass={
                  float === "left"
                    ? "top-0 right-[-10px]"
                    : "bottom-[-10px] left-[-10px]"
                }
              >
                <span
                  className={`${
                    float === "left" ? "" : "flex-col-reverse"
                  } flex gap-[8px] flex-col items-center rounded-lg font-medium leading-[14px] lg:leading-[15.4px] text-[14px]`}
                >
                  <div className="my-auto">
                    <IconHeart
                      className={`${
                        float === "left" ? "rotate-[270deg]" : "rotate-[90deg]"
                      } `}
                      width="16"
                      height="16"
                    />
                  </div>
                  <div
                    className={`${
                      float === "left" ? "" : "rotate-[360deg]"
                    }  my-auto [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180`}
                  >
                    <GradientText
                      deg="137.65deg"
                      className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16]"
                    >
                      <>My Wishlist</>
                    </GradientText>
                  </div>
                </span>
              </Button>
            </div>

            <div className="flex gap-[17.16px] -z-10">
              <img
                className="w-full"
                src={ASSET_URL + "wishlist-card-placeholder.png"}
                alt=""
              />
              <img
                className="w-full"
                src={ASSET_URL + "wishlist-card-placeholder.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </CardApp>
  );
}

function FloatingIcon({ colSpan }: any) {
  const floatingIcon = ["left", "right"];
  const [float, setFloat] = useState(floatingIcon[0]);

  return (
    <CardApp
      isGradientHover
      height={"h-full"}
      title={<div className="px-[29px]">Floating Icon</div>}
      subTitle={
        <div className="px-[29px]">
          A subtle way to encourage users to access their wishlist.
        </div>
      }
      className={` ${colSpan}`}
      px={"px-[0px]"}
      deg="160.19deg"
    >
      <div className="relative">
        <div className="flex gap-[8px] px-[29px] mb-[24px]">
          {!floatingIcon.length
            ? null
            : floatingIcon.map((position, index) => {
                return (
                  <div key={index}>
                    <Button
                      rounded="rounded-lg"
                      px="px-4"
                      py="py-2"
                      onClick={() => setFloat(position)}
                      key={position}
                      gradient={
                        "linear-gradient(120.68deg, rgb(103, 103, 103) 46.16%, rgb(103, 103, 103) 45.16%, rgba(103, 103, 103, 0) 52.4%)"
                      }
                      variant={
                        float === position
                          ? "borderAnimation"
                          : "gradientBackground"
                      }
                      className={`border-[#1D1D1D]`}
                    >
                      <span
                        className={`${
                          float === position ? "text-white" : "text-gray-1"
                        } font-[700] capitalize text-[18px] leading-[19.8px]`}
                      >
                        Bottom {position}
                      </span>
                    </Button>
                  </div>
                );
              })}
        </div>
        <div className="h-[196px] relative">
          <div
            className={`absolute flex gap-[32px] h-full w-full transition-all duration-200 ${
              float === "left" ? "pl-[29px]" : "pr-[29px] flex-row-reverse"
            }`}
          >
            <div>
              <Button
                className="relative"
                rounded="rounded-full"
                px="px-[23.25px]"
                py="py-[23.25px]"
                variant="borderAnimation"
                gradient="linear-gradient(40.68deg, #676767 49.16%, #676767 49.16%, rgba(103, 103, 103, 0) 51.4%)"
                deg="(40.68deg"
                count={2}
                wrapperClass={"top-[42px]"}
                countClass={"bottom-[20px] left-[45%]"}
              >
                <span
                  className={`${
                    float === "left" ? "" : "flex-col-reverse"
                  } flex gap-[8px] flex-col items-center rounded-lg font-medium leading-[14px] lg:leading-[15.4px] text-[14px]`}
                >
                  <div className="my-auto">
                    <IconHeart width="31.67px" height="31.67px" />
                  </div>
                </span>
              </Button>
            </div>

            <div className="flex mt-[-70px] gap-[17.16px] -z-10">
              <img
                className="w-[158.84px]"
                src={ASSET_URL + "wishlist-card-placeholder.png"}
                alt=""
              />
              <img
                className="w-[158.84px]"
                src={ASSET_URL + "wishlist-card-placeholder.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </CardApp>
  );
}

function Notification({ colSpan }: any) {
  return (
    <CardApp
      isGradientHover
      height={"h-full"}
      title={"Notification"}
      subTitle={
        <>
          Enhance user engagement by notifying users of changes or updates to
          their wishlist and relevant product.
        </>
      }
      className={` ${colSpan}`}
      px={"px-[29px]"}
      py={"pt-0 pb-[32px]"}
      deg="160.19deg"
    >
      <div className="mx-auto">
        <img src={ASSET_URL + "notification_dummy-content.png"} alt="" />
      </div>
    </CardApp>
  );
}
