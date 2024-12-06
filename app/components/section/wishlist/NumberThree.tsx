import { ASSET_URL } from "~/utils/const";
import { CardApp } from "~/components/card";
import { FeatureTitle } from "~/components/global";
import { GradientText } from "~/components/typography";

export default function NumberThree() {
  return (
    <div className="relative flex justify-center flex-col h-auto my-[0] mx-auto pt-12">
      <FeatureTitle
        number="03"
        title={<>Customizable widget components</>}
        subtitle={
          <>
            Control the appearance of wishlist components. Create an appealing
            visual <br className="hidden sm:block" /> experience that supports
            the theme of your site and products.
          </>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] pt-[48px]">
        <FontStyling colSpan={"col-span-1 lg:col-span-4"} />
        <PaddingSetting colSpan={"col-span-1 lg:col-span-2"} />
        <BackgroundSetting colSpan={"col-span-1 lg:col-span-2"} />
      </div>
    </div>
  );
}

function FontStyling({ colSpan = "" }: any) {
  return (
    <CardApp
      isGradientHover
      height="h-full"
      title={"Adjustable font styling"}
      subTitle={
        <>
          You have full control over font styling to match with your store
          brand.
        </>
      }
      titlePosition="bottom"
      className={` w-full ${colSpan}`}
    >
      <div className="flex justify-between mb-[44px]">
        <div className="relative flex justify-center items-center">
          <GradientText
            deg="137.65deg"
            className="from-[#43C6AC]/[9.65] to-[#F8FFAE]/[76.16] font-[700] text-[30px] lg:text-[76px] leading-[88px] 
              absolute top-[-10px] lg:top-[-25px] w-fit h-full flex items-center max-w-[389px]"
          >
            My Wishlist
          </GradientText>
          <img
            width={1210}
            height={200}
            src={ASSET_URL + "wishlist-setting.png"}
            alt=""
          />
        </div>
      </div>
    </CardApp>
  );
}

function PaddingSetting({ colSpan = "" }: any) {
  return (
    <CardApp
      isGradientHover
      height="h-full"
      title={"Adjustable padding"}
      subTitle={
        <>
          Control the space around components to create a visually enchanting
          and functional wishlist.
        </>
      }
      titlePosition="bottom"
      className={` ${colSpan}`}
    >
      <img
        className="m-auto py-[24px]"
        width={338}
        src={ASSET_URL + "wishlist-clear-wishlist.png"}
        alt=""
      />
    </CardApp>
  );
}

function BackgroundSetting({ colSpan = "" }: any) {
  return (
    <CardApp
      isGradientHover
      height="h-full"
      title={"Adjustable button styling"}
      subTitle={
        <>
          Manage the contrast and visibility to define button’s appearance and
          set up the overall tone of the wishlist.
        </>
      }
      titlePosition="bottom"
      className={` ${colSpan}`}
    >
      <img
        className="py-[8px] m-auto"
        width={521}
        src={ASSET_URL + "wishlist-bg-setting.png"}
        alt=""
      />
    </CardApp>
  );
}
