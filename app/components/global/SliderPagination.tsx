import { IconArrowRightWithState } from "../icon";

export default function SliderPagintaion({
  slideNextPrev,
  currentSlide,
  totalSlide,
}: {
  slideNextPrev: any;
  currentSlide: number;
  totalSlide: number;
}) {
  return (
    <div className="flex w-full items-center gap-[24px] justify-center mt-[35px]">
      <button>
        <div onClick={() => slideNextPrev(false)}>
          <IconArrowRightWithState
            className="rotate-180"
            width="32"
            height="32"
            isActive={currentSlide > 0}
          ></IconArrowRightWithState>
        </div>
      </button>

      <button>
        <div onClick={() => slideNextPrev(true)}>
          <IconArrowRightWithState
            width="32"
            height="32"
            isActive={currentSlide < totalSlide - 2} // currentSlide < totalSlide - slidesToShow
          ></IconArrowRightWithState>
        </div>
      </button>
    </div>
  );
}
