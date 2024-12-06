import React, { useState } from "react";
import { CardGradient } from "~/components/card";
import { Modal } from "~/components/global/Modal";

export default function SledgeReviews() {
  return (
    <>
      <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CardGradient
          contentPosition={"start"}
          borderAnimation={true}
          isGradientHover
          gradient={
            "linear-gradient(64.92deg,rgba(67,198,172, 0.3) 27.88%, rgba(248, 255, 174, 0.15) 56.53%, rgba(122, 122, 122, 0) 84.06%)"
          }
          rounded={"rounded-[24px]"}
          className={"min-h-[334px]"}
        >
          <div className="flex flex-col flex-1 h-full justify-between p-6">
            <div>
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(() => (
                  <img
                    src="/assets/images/stars-icon.png"
                    className="h-[24px]"
                  />
                ))}
              </div>
              <ContentText
                text="Super App und super Support. Design möglichkeiten und integration sind einfach super. Empfehle diese App jedem."
                maxLength={244}
              />
            </div>
            <div>
              <p className="text-xl text-white font-bold leading-[32px] -tracking-[0.02em] mb-3">
                NextLevel
              </p>
              <p className="text-[16px] text-[#677487] font-[inter] leading-[25.6px] -tracking-[0.02em]">
                Switzerland
              </p>
            </div>
          </div>
        </CardGradient>
        <CardGradient
          contentPosition={"start"}
          borderAnimation={true}
          isGradientHover
          gradient={
            "linear-gradient(64.92deg,rgba(67,198,172, 0.3) 27.88%, rgba(248, 255, 174, 0.15) 56.53%, rgba(122, 122, 122, 0) 84.06%)"
          }
          rounded={"rounded-[24px]"}
          className={"min-h-[334px]"}
        >
          <div className="flex flex-col flex-1 h-full justify-between p-6">
            <div className="mb-[46px]">
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(() => (
                  <img
                    src="/assets/images/stars-icon.png"
                    className="h-[24px]"
                  />
                ))}
              </div>
              <ContentText
                text="Absolutely unreal support. The amount of work the Sledge team did for us
        to earn our business is unbelievable. We've been on Shopify for 3+ years
        and have never seen this much dedication from the developers of an app.
        On top the amazing support, the app works great once the tweaks were
        done. It works extremely fast and we are very satisfied with the
        results. If any issues rise, a simple email is sent to the Sledge team
        and they work tirelessly to take care of it. 100% recommended. The
        Sledge team have built something awesome!"
                maxLength={244}
              />
            </div>
            <div>
              <p className="text-xl text-white font-bold leading-[32px] -tracking-[0.02em] mb-3">
                Brox Tuning
              </p>
              <p className="text-[16px] text-[#677487] font-[inter] leading-[25.6px] -tracking-[0.02em]">
                Canada
              </p>
            </div>
          </div>
        </CardGradient>
        <CardGradient
          contentPosition={"start"}
          isGradientHover
          borderAnimation={true}
          gradient={
            "linear-gradient(64.92deg,rgba(67,198,172, 0.3) 27.88%, rgba(248, 255, 174, 0.15) 56.53%, rgba(122, 122, 122, 0) 84.06%)"
          }
          rounded={"rounded-[24px]"}
          className={"min-h-[334px]"}
        >
          <div className="flex flex-col flex-1 h-full justify-between p-6">
            <div>
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(() => (
                  <img
                    src="/assets/images/stars-icon.png"
                    className="h-[24px]"
                  />
                ))}
              </div>
              <ContentText
                text="A great app with a great support team. I was able to achieve my desired results with clean-looking custom filters and a wish list page. Support is very helpful and informative. They were able to help with my setup and fix any details that I struggled to do myself."
                maxLength={264}
              />
            </div>
            <div>
              <p className="text-xl text-white font-bold leading-[32px] -tracking-[0.02em] mb-3">
                Sibi Built
              </p>
              <p className="text-[16px] text-[#677487] font-[inter] leading-[25.6px] -tracking-[0.02em]">
                United States
              </p>
            </div>
          </div>
        </CardGradient>
      </div>
    </>
  );
}

function ContentText({ text, maxLength }: { text: string; maxLength: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: isExpanded ? '' : '6' }}
        className="text-[16px] text-[#677487] overflow-hidden font-[inter] leading-[25.6px] -tracking-[0.02em]"
      >
        {text}
      </p>
      {text.length > maxLength && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white underline cursor-pointer"
        >
          {isExpanded ? "See less" : "See more"}
        </span>
      )}
    </div>
  );
}
