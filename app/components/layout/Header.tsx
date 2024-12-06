import { useLocation, useMatches } from "@remix-run/react";
import { useEffect, useState } from "react";
import { InstallNowBtn } from "~/components/button";
import { IconArrow, IconCaret, IconDrawer, IconSledgeLogo } from "../icon";
import { CardGradient } from "~/components/card";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "../global";

import menu from "~/data/layout/megaMenu.json";
import * as gtag from "~/utils/gtags.client";

type IHeader = {
  logo?: string;
  isOpen?: boolean;
  setOpen?: any;
  menu?: any;
};

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [megaMenu, setMenu] = useState(menu);
  const matches = useMatches();
  const getSomePath = (word: string) => {
    return matches[1].pathname.includes(word);
  };

  return (
    <header
      className={`z-[999999] ${
        getSomePath("tech-stacks") || getSomePath("supports/faq")
          ? "bg-dark2"
          : "bg-dark"
      }`}
    >
      <DesktopHeader setOpen={setOpen} menu={megaMenu} />
      <MobileHeader isOpen={isOpen} setOpen={setOpen} menu={megaMenu} />
    </header>
  );
}

export function DesktopHeader({ setOpen, menu }: IHeader) {
  return (
    <AnimatePresence initial={false}>
      <motion.nav
        className="flex items-center justify-between py-[24px] max-w-[1290px] mx-auto px-5 lg:px-20 xl:px-0 "
        aria-label="Mega Menu"
        initial={{ opacity: 0, y: -50, scale: 1 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.2 },
        }}
      >
        <div className="flex items-baseline w-full">
          <Link to="/" className="self-center">
            <IconSledgeLogo />
          </Link>
          <div className="hidden lg:flex lg:gap-x-[32px] ml-auto mr-[65px]">
            {!menu.length
              ? null
              : menu.map((item: any, ke: number) => {
                  return <NavLinkComponent key={ke} item={item} />;
                })}
          </div>
          <div className="hidden lg:flex">
            <InstallNowButton />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IconDrawer />
          </button>
        </div>
        <div className="hidden lg:flex gap-[20px]"></div>
      </motion.nav>
    </AnimatePresence>
  );
}

export function MobileHeader({ isOpen, setOpen, menu }: IHeader) {
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div
      className={`${
        !isOpen ? "opacity-0 invisible" : "opacity-100 visible"
      } mobile-dialog transition-all duration-200`}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-20" />
      <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link className="-m-1.5 p-1.5" to="/">
            <h4>Sledge</h4>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-100"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6 font-sledge-font-family-2">
              {menu.map((item: any, index: number) => {
                const subMenu = item.subMenu;

                return (
                  <div key={index}>
                    <div className="relative w-full">
                      <Link
                        className="flex gap-[10px] items-center -mx-3 w-full relative px-3 py-2 text-base hover:text-yellow-1 focus:text-yellow-1 font-semibold leading-7 text-white hover:text-sledge-color-text-hover transition duration-200"
                        to={item.url}
                        onClick={(e) => {
                          const target = e.target as HTMLAnchorElement;
                          const nextElemenet = target.nextElementSibling;

                          if (subMenu.length) {
                            if (nextElemenet) e.preventDefault();

                            if (nextElemenet?.classList.contains("hidden")) {
                              nextElemenet?.classList.remove("hidden");
                              target.querySelector("svg")!.style.rotate =
                                "90deg";
                            } else {
                              nextElemenet?.classList.add("hidden");
                              target.querySelector("svg")!.style.rotate = "";
                              target.blur();
                            }
                          }
                        }}
                      >
                        {item.title}
                        {!subMenu.length ? null : (
                          <IconCaret className="-z-10 transition-all duration-300" />
                        )}
                      </Link>
                      {!subMenu.length ? null : (
                        <div
                          className={`sub-menu hidden pb-[10px] transition-all duration-200`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex={-1}
                        >
                          {subMenu.map((sub: any, index: number) => {
                            return (
                              <Link
                                key={index}
                                to={sub.url}
                                className="text-white flex items-center px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                target={sub.target}
                                onClick={() => {
                                  gtag.event({
                                    action: "sledge_demo_store",
                                    category: "sledge_demo_store_link",
                                    value: sub.title,
                                  });
                                }}
                              >
                                {sub.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {index !== menu.length - 1 && (
                      <div
                        className="flex w-full border-t border-solid max-w-[1290px] mx-auto"
                        style={{
                          borderImage:
                            "radial-gradient(circle, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0)) 1",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="py-6">
              <div className="flex gap-[20px]">
                <InstallNowButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLinkComponent({ item }: any) {
  const subMenu = item.subMenu;
  const Component = !subMenu.length ? Link : "div";

  return (
    <Component
      key={item.id}
      to={item.url}
      className="relative group text-[16px] font-[500] leading-[18px] tracking-[0.02em] hover:text-yellow-1 transition-all duration-200 cursor-pointer"
    >
      <div className="flex group items-center gap-x-[8px] text-[16px] font-[500] leading-[17.6px] tracking-[-2%]">
        {item.title}
        {!subMenu.length ? null : (
          <IconArrow className="transition-all group-hover:translate-x-1 group-hover:rotate-[45deg] group-hover:fill-yellow-1" />
        )}
      </div>
      {!subMenu.length ? null : (
        <div className="mt-[12px]">
          <CardGradient
            contentPosition={"start"}
            gradient={
              "linear-gradient(40.68deg, #676767 49.16%, #676767 49.16%, rgba(103, 103, 103, 0) 51.4%)"
            }
            className={
              "hidden group-hover:block !w-auto !whitespace-nowrap !h-auto !absolute min-w-[140px]"
            }
            rounded={"rounded-[8px]"}
          >
            <div className="flex flex-col py-2 cursor-default">
              {subMenu.map((sub: any, j: number) => {
                return (
                  <Link
                    key={"sub-" + j}
                    to={sub.url}
                    className="text-white hover:text-yellow-1 group flex items-center px-4 py-2 text-[16px] font-[500] leading-[17.6px]"
                    target={sub.target}
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
                    {sub.title}
                  </Link>
                );
              })}
            </div>
          </CardGradient>
        </div>
      )}
    </Component>
  );
}

function InstallNowButton({ className }: any) {
  return (
    <div className={className}>
      <InstallNowBtn source={"Header"} variant="borderAnimation" />
    </div>
  );
}
