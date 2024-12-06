import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconSearch, IconClose } from "~/components/icon";

function DropdownInput({ inputDropdown }: any) {
  return (
    <div className="h-[113.1px] lg:h-[142.2px] w-full md:w-[281px] lg:w-[359px]">
      <AnimatePresence initial={false}>
        {inputDropdown.map((item: any, index: number) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
            >
              {item.content}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default function InstantSearchContent({ animation }: any) {
  const dropdown = [
    {
      key: 1,
      content: (
        <div className="bg-[#191919] p-[16px]">
          <div className="relative">
            <p className="text-[9.49px] leading-[13.29px] lg:text-[12px] lg:leading-[16.8px] text-gray-3 mb-[10px]">
              Search result:
            </p>
            <div className="flex justify-between">
              <p className="text-[9.49px] leading-[13.29px] lg:text-[12px] lg:leading-[16.8px] bg-[linear-gradient(94.19deg,_#43C6AC_46.59%,_#F8FFAE_66.44%)] bg-clip-text [-webkit-background-clip:text;] text-transparent">
                Adidas Black | Cutton Combed 24s
              </p>
              <p className="text-yellow-1 text-[9.49px] leading-[13.29px] lg:text-[12px] lg:leading-[16.8px]">
                $79
              </p>
            </div>
          </div>
          <div className="mt-[14px] lg:mt-[16px] border-t border-solid border-[#222222]">
            <p className="pt-[14px] lg:pt-[16px] text-[9.49px] leading-[13.29px] lg:text-[12px] lg:leading-[16.8px] text-gray-1">
              Black t-shirts are the workhorse of any activewear wardrobe.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const [inputDropdown, setInputDropdown] = useState(dropdown);
  const [typing, setTyping] = useState("");
  const [fullText, setFullText] = useState("T - Shirt Adidas Black");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (animation) {
      setInputDropdown([]);
      if (typingIndex < fullText.length) {
        setTimeout(() => {
          setTyping(typing + fullText[typingIndex]);
          setTypingIndex(typingIndex + 1);
        }, 25);
      } else {
        setInputDropdown(dropdown);
      }
    } else {
      setInputDropdown(dropdown);
      setTypingIndex(0);
      setTyping("");
    }
  }, [typingIndex, animation]);
  return (
    <div className="flex flex-col mb-[12.94px] lg:mb-[0px]">
      <div className="rounded-[12px] w-full bg-[linear-gradient(148.6deg,_#676767_-26.04%,_rgba(103,103,103,0)_81.05%)] p-[1px]">
        <div className="flex h-full  w-full items-center justify-center bg-dark rounded-[12px]">
          <div className="relative flex items-center flex-grow focus-within:z-10 text-[#6F6F6F] font-sledge-font-family-1 text-[16px] leading-[18px] tracking-[-0.02em]">
            <div className="pl-[17.4px] pr-[15.82px] lg:pl-[20px] lg:pr-[18px]">
              <IconSearch className="w-[12.65px] lg:w-[16px]" />
            </div>
            <input
              type="text"
              disabled
              name="search"
              id="instant-search"
              className="border-0 h-[35.96px] lg:h-[46px] block w-full focus:outline-none 
              text-[11.07px] leading-[12.18px] lg:text-[12px] lg:leading-[13.2px] tracking-[-2%] 
              placeholder:text-[11.07px] placeholder:leading-[12.18px] lg:placeholder:text-[12px] lg:placeholder:leading-[13.2px] placeholder:tracking-[-2%]
              bg-transparent placeholder:text-[#6F6F6F] focus:border-none focus:box-shadow-none text-[#6F6F6F] focus:ring-0"
              placeholder="T - Shirt Adidas Black"
              value={typing}
            />
            <button
              onClick={() => {
                setTypingIndex(0);
                setTyping("");
              }}
            >
              <IconClose className="mr-[15px]" />
            </button>
          </div>
        </div>
      </div>
      <DropdownInput inputDropdown={inputDropdown} />
    </div>
  );
}
