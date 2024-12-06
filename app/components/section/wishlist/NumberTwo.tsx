import { ASSET_URL } from "~/utils/const";
import { Badge, FeatureTitle } from "~/components/global";
import { CardGradient } from "~/components/card";
import { IconBadgePopup, IconBadgeSeperatePage } from "~/components/icon";

export default function NumberTwo() {
  return (
    <div className="relative flex justify-center flex-col h-auto my-[0] mx-auto pt-12">
      <FeatureTitle
        number="02"
        title={<>Flexible widget layout</>}
        subtitle={
          <>
            Sledge offers a pretty flexible and customizable widget, you have
            the freedom <br className="hidden sm:block" /> to control and
            organize the desired layout.
          </>
        }
      />
      <PopUp />
      <SeperatePage />
    </div>
  );
}

function PopUp() {
  return (
    <div className="grid gap-[30px] mt-[64px]">
      <div className="flex flex-col md:flex-row items-center">
        <CardGradient
          contentPosition="start"
          rounded={"rounded-[30px]"}
          delay={"8s"}
          className={"lg:max-w-[850px] h-full lg:!mr-[110px]"}
          isGradientHover
        >
          <div className="flex px-[57.63px] mb-[-8px] pt-[48px] pb-[0px] space-y-[17px] w-full flex-col">
            {/* TODO: dummy image */}
            <img
              width={734.73}
              height={515}
              src={ASSET_URL + "my-wishlist-dummy.png"}
              alt=""
            />
          </div>
        </CardGradient>
        <div className="p-0 pl-0 md:pl-[30px] lg:pl-0 max-w-full md:max-w-[236px] lg:max-w-[330px] lg:mr-auto mt-10 lg:mt-0 flex flex-col items-start">
          <div className="mb-[20px] lg:mb-[40px]">
            <Badge
              gradient="bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
              className="w-fit h-full pointer-events-none"
              rounded="rounded-[8px]"
              pX="px-[16px]"
              pY="py-[16px]"
            >
              <IconBadgePopup />
            </Badge>
          </div>

          <div className="mb-[12px]">
            <h3 className="font-[700] text-lg lg:text-[32px] leading-tight lg:leading-[35.2px]">
              Pop Up
            </h3>
          </div>
          <div>
            <p className="text-sm font-inter lg:text-[16px] leading-snug lg:leading-[25.6px] text-gray-3">
              Gives instant access to the wishlist functionality without
              interrupting the user’s browsing flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeperatePage() {
  return (
    <div className="grid gap-[30px] mt-[64px]">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="p-0 pl-0 md:pl-[30px] lg:pl-0 max-w-full md:max-w-[236px] lg:max-w-[330px] lg:mr-auto mt-10 lg:mt-0 flex flex-col items-start">
          <div className="mb-[20px] lg:mb-[40px]">
            <Badge
              gradient="bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
              className="w-fit h-full pointer-events-none"
              rounded="rounded-[8px]"
              pX="px-[16px]"
              pY="py-[16px]"
            >
              <IconBadgeSeperatePage />
            </Badge>
          </div>
          <div className="mb-[12px]">
            <h3 className="font-[700] text-lg lg:text-[32px] leading-tight lg:leading-[35.2px]">
              Separate Page
            </h3>
          </div>
          <div>
            <p className="text-sm font-inter lg:text-[16px] leading-snug lg:leading-[25.6px] text-gray-3">
              Give more browsing freedom to users with a dedicated Wishlist page
              and adjust them to match with your store design.
            </p>
          </div>
        </div>
        <CardGradient
          contentPosition="end"
          rounded={"rounded-[30px]"}
          delay={"8s"}
          className={"lg:max-w-[850px] h-full"}
          isGradientHover
        >
          <div className="flex mb-[-8px] pt-[48px] pb-[0px] space-y-[17px] w-full flex-col">
            {/* TODO: dummy image */}
            <img
              width={734.73}
              height={515}
              className="lg:ml-auto rounded-br-[50px]"
              src={ASSET_URL + "seperate-page-dummy.png"}
              alt=""
            />
          </div>
        </CardGradient>
      </div>
    </div>
  );
}
