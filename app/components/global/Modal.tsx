import { useState, useEffect } from "react";
import { Button } from "../button";

export function Modal({
  title = "Modal Title",
  isModalOpen,
  setModalOpen,
  hideOnDesktop = false,
  children,
}: {
  title?: string;
  isModalOpen: Boolean;
  setModalOpen: any;
  hideOnDesktop?: Boolean;
  children: React.ReactNode;
}) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize, false);
  }, []);

  if (dimensions.width > 1023 && hideOnDesktop) {
    setModalOpen(false);
  }
  return (
    <div
      className={`relative z-50 transition-all duration-100 ${
        isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="modal-bg"
    >
      <div className="fixed inset-0 transition-opacity bg-opacity-20 bg-black/60"></div>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="flex items-center justify-center min-h-full p-4 pb-0 text-center sm:p-0"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative flex-1 px-4 sm:px-6 pb-4 overflow-hidden text-left transition-all transform rounded-t-[16px] shadow-xl bg-contrast sm:my-12 sm:flex-none sm:w-full sm:max-w-[678px] 
            bg-[#1F1F1F] mt-auto max-h-[488px] lg:max-h-[678px] overflow-y-scroll"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyPress={(e) => {
              e.stopPropagation();
            }}
            tabIndex={0}
          >
            <div className="sticky top-0 right-0 py-6 mb-[32px] pr-4 flex items-center justify-between border-b border-[#2E2E2E] bg-[#1F1F1F]">
              <h3 className="text-[20px] font-bold leading-[22px] tracking-[-0.4px]">
                {title}
              </h3>
              <Button
                onClick={() => setModalOpen(false)}
                active={true}
                variant={"borderAnimation"}
                bgColor={"bg-[#1F1F1F]"}
                textColor={"text-white"}
              >
                <span>Done</span>
              </Button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
