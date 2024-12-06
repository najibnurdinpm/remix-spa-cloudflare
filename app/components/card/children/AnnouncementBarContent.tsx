import { useEffect, useState } from "react";
import { Shake } from "~/components/animation";
import { Badge } from "~/components/global";
import { IconNotification } from "~/components/icon";
import { GradientText } from "~/components/typography";

type IAnnouncementBarContent = {
  animation: boolean;
  type?: string;
};
export default function AnnouncementBarContent({
  animation = true,
  type = "default",
}: IAnnouncementBarContent) {
  const [play, setPlay] = useState(false);
  const [progress, setProgress]: any = useState();

  useEffect(() => {
    setPlay(animation);
    if (animation)
      setProgress(
        setTimeout(() => {
          setPlay(false);
        }, 1500)
      );
    else {
      if (progress) clearTimeout(progress);
      setPlay(false);
    }
  }, [animation]);

  const Icon = () => (
    <Badge
      gradient={
        play
          ? "bg-[#43C6AC]"
          : "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
      }
      pX="px-4"
      pY="py-4"
      height="h-[58px]"
      rounded="rounded-[15px]"
      className="w-[58px]"
    >
      <span className={play ? "text-[#F8FFAE]" : "text-[#677487]"}>
        <IconNotification />
      </span>
    </Badge>
  );
  return (
    <>
      {type === "default" && (
        <div className="ml-1 mt-2 -mr-[35px] relative max-h-[220px] md:max-h-fit">
          <img
            className="object-contain"
            height={239}
            width={406}
            src="/assets/images/announcement-bar-content-frame.webp"
            alt=""
          />
          <div className="absolute top-16 left-6 font-[18px] leading-[25px] text-[#677487]">
            <div className="max-w-full overflow-hidden whitespace-nowrap">
              Sign Up and{" "}
              <GradientText
                deg="91deg"
                className=" from-[#43C6AC] to-[#F8FFAE] "
              >
                GET 10% DISCOUNT
              </GradientText>{" "}
              for your first order.
            </div>
            <div className="mt-4 mb-[18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="346"
                height="1"
                fill="none"
                viewBox="0 0 346 1"
              >
                <path stroke="#222" d="M0 0.5L382 0.5"></path>
              </svg>
            </div>

            <div className="flex gap-4 align-bottom">
              {play ? (
                <Shake>
                  <Icon />
                </Shake>
              ) : (
                <Icon />
              )}
              <div className="">
                <span className="leading-[19px]">
                  Delivery of goods to Berlin’s is <br />
                  experiencing problems
                </span>
                <div className="flex gap-[130px] text-[12px] text-[#4B4B4B] font-inter">
                  <span>3 hours ago</span>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "upcoming" && (
        <div className="ml-1 mt-2 -mr-[35px] relative max-h-[220px] md:max-h-fit">
          <img
            className="object-contain lg:w-[966px]"
            src="/assets/images/announcement-bar-content-frame.webp"
            alt="frame"
          />
          <div className="absolute top-20 lg:top-32 left-7 font-[18px] leading-[25px] text-[#677487]">
            <div className="max-w-full overflow-hidden whitespace-nowrap">
              Sign Up and{" "}
              <GradientText
                deg="91deg"
                className=" from-[#43C6AC] to-[#F8FFAE] "
              >
                GET 10% DISCOUNT
              </GradientText>{" "}
              for your first order. Sign Up Now - Sign Up and GET 10% DISCOUNT
              for your first order. Sign Up Now
            </div>
            <div className="mt-4 mb-[18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="346"
                height="1"
                fill="none"
                viewBox="0 0 346 1"
              >
                <path stroke="#222" d="M0 0.5L382 0.5"></path>
              </svg>
            </div>

            <div className="flex gap-4 align-bottom">
              {play ? (
                <Shake>
                  <Icon />
                </Shake>
              ) : (
                <Icon />
              )}
              <div className="">
                <span className="leading-[19px]">
                  Delivery of goods to Berlin’s is <br />
                  experiencing problems
                </span>
                <div className="flex gap-[130px] text-[12px] text-[#4B4B4B] font-inter">
                  <span>3 hours ago</span>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
