import { useEffect } from "react";
import { Badge, Link } from "../global";
import { IconSledgeLogo } from "~/components/icon";
import { CHATWOOT_TOKEN, CHATWOOT_URL } from "~/utils/const";

import menu from "~/data/layout/footerMenu.json";
import * as gtag from "~/utils/gtags.client";

const additionalFooterLinks = [
  {
    title: "Privacy Policy",
    url: "/supports/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    url: "/supports/terms-conditions",
  },
];

export default function Footer() {
  useEffect(() => {
    (function (d = document, t = 'script') {
      const g = d.createElement(t);
      const s = d.getElementsByTagName(t)[0] ?? document.body;
      g.src = CHATWOOT_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: CHATWOOT_TOKEN,
          baseUrl: CHATWOOT_URL,
        });
      };
    })(document, "script");
  }, []);

  return (
    <>
      <div
        className="flex w-full border-t border-solid max-w-[1290px] mx-auto"
        style={{
          borderImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0)) 1",
        }}
      />
      <footer className="flex flex-wrap max-w-[1290px] mx-auto px-5 lg:px-20 xl:px-0 pt-[56px] pb-[84px] justify-center lg:justify-start xl:justify-between flex-col lg:flex-row items-center lg:items-start gap-y-[30px] font-medium">
        <div className="space-y-[24px] mr-0 lg:mr-[80px] text-center lg:text-start">
          <Link to={"/"}>
            <div className="mx-auto lg:mx-0 max-w-[100px]">
              <IconSledgeLogo />
            </div>
          </Link>
          <p className="text-gray-3 text-[14px] max-w-[330px] leading-[22.4px] tracking-[0.5%]">
            Build instant search, product filters, wishlist, product review,
            etc. for your store using your preferred tech stacks — in just a few
            minutes.
          </p>
          <ul className="flex gap-2 justify-center lg:justify-start">
            {additionalFooterLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-gray-3 text-[14px] max-w-[330px] leading-[22.4px] tracking-[0.5%]"
                    to={item.url}
                  >
                    <div className="flex gap-2">
                      <span className="transition-all duration-200 hover:text-yellow-1">
                        {item.title}
                      </span>
                      {additionalFooterLinks.length - 1 !== index && (
                        <span>|</span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-[24px] lg:gap-[70px] transition-all duration-200">
          {menu.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center sm:items-start"
              >
                <div
                  key={item.url}
                  className="text-[18px]  leading-[25.2px] tracking-[-2%] mb-[24px] transition-all duration-200"
                >
                  {item.title}
                </div>
                {item.subMenu.map((sub: any) => {
                  return (
                    <Link
                      className="flex w-fit items-center gap-[8px] text-[16px] hover:text-yellow-1 text-gray-3 leading-[22.4px] tracking-[-2%] mb-[20px] transition-all duration-200"
                      to={sub.url}
                      key={sub.url}
                      onClick={() => {
                        if (item.title === "Demo") {
                          gtag.event({
                            action: "sledge_demo_store",
                            category: "sledge_demo_store_link",
                            value: sub.title,
                          });
                        }
                      }}
                    >
                      {sub.title} {sub.isNew ? <Badge>New</Badge> : ""}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
}
