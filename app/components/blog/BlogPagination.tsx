import { Link } from "../global";
import { IconArrowRightWithState } from "../icon";

export default function BlogPagintaion({
  as = "button",
  firstPage = 0,
  lastPage = 0,
  totalData = 0,
  page,
  setPage,
  setSearchParams,
  ...props
}: {
  as?: React.ElementType;
  [key: string]: any;
  firstPage: number;
  lastPage: number;
  totalData: number;
  setPage: any;
}) {
  const Component = props?.to ? Link : as;

  const updatePage = (how: any) => {
    const offsetTop = document?.querySelector<HTMLElement>("#blogs")?.offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });

    const newPage = firstPage + how;
    if (newPage === 0) return;
    if (newPage > lastPage) return;
    setPage(newPage);

    setSearchParams((prev: any) => {
      prev.set("page", newPage);
      return prev;
    });
  };

  return (
    <div className="flex w-full items-center gap-[24px] justify-center mt-[59px]">
      <Component>
        <div onClick={() => updatePage(-1)}>
          <IconArrowRightWithState
            className="rotate-180"
            width="32"
            height="32"
            isActive={firstPage > 1}
          ></IconArrowRightWithState>
        </div>
      </Component>

      <span className="text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
        Page {firstPage} of {lastPage} - total {totalData} Result
      </span>

      <Component>
        <div onClick={() => updatePage(+1)}>
          <IconArrowRightWithState
            width="32"
            height="32"
            isActive={firstPage < lastPage}
          ></IconArrowRightWithState>
        </div>
      </Component>
    </div>
  );
}
