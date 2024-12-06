import { ASSET_URL } from "~/utils/const";
import { CardApp } from "~/components/card";
import { FeatureTitle } from "~/components/global";

export default function NumberFour() {
  return (
    <div className="relative flex justify-center flex-col h-auto my-[0] mx-auto pt-12">
      <FeatureTitle
        number="04"
        title={
          <>
            Flexible language settings
          </>
        }
        subtitle={
          <>
            Complete with flexible language settings for the widget or copywriting according to your store branding.
          </>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pt-[48px]">
        <WishlistWidget colSpan={"col-span-2"} />
        <ButtonAdd colSpan={"col-span-full lg:col-span-1"} />
        <Notification colSpan={"col-span-full lg:col-span-1"} />
      </div>
    </div>
  );
}

function WishlistWidget({ colSpan = "" }: any) {
  return (
    <CardApp
      isGradientHover
      height="h-full"
      title={"Wishlist widgets"}
      subTitle={
        <>
          Change the language on the wishlist widget to your store branding.
        </>
      }
      titlePosition="bottom"
      className={` w-full ${colSpan}`}
    >
      <div className="flex justify-between mb-[44px]">
        <div className="relative flex justify-center items-center">
          <img
            width={1218}
            height={293.73}
            src={ASSET_URL + "wishlist_widget_dummy.png"}
            alt=""
          />
        </div>
      </div>
    </CardApp>
  );
}

function ButtonAdd({ colSpan = "" }: any) {
  return (
    <CardApp
      isGradientHover
      height="h-full"
      title={"Button widgets"}
      subTitle={
        <>
          Adjustable language on buttons for adding or removing items from the wishlist.
        </>
      }
      titlePosition="bottom"
      className={` ${colSpan}`}
    >
      <img
        className="m-auto pt-[95px] pb-[63px]"
        width={372}
        src={ASSET_URL + "wishlist_button_detail.png"}
        alt=""
      />
    </CardApp>
  );
}

function Notification({ colSpan = "" }: any) {
  return (
    <CardApp
      isGradientHover
      height="h-full"
      title={"Notifications"}
      subTitle={
        <>
          Adjust language wishlist notification update after adding new items, removing items, and clear all wish confirmations.
        </>
      }
      titlePosition="bottom"
      className={` ${colSpan}`}
      py={"py-[32px] pt-0"}
    >
      <img
        className="mx-auto pb-[49px]"
        width={587}
        src={ASSET_URL + "wishlist_notification.png"}
        alt=""
      />
    </CardApp>
  );
}
