import { Shake } from "~/components/animation";
import Badge from "./Badge";

type ICheckedboxList = {
  list: { checked: boolean; upcoming: boolean; label: string }[];
  active?: number;
};

export default function CheckedboxList({ list, active }: ICheckedboxList) {
  const Image = ({ v, animated }: any) => (
    <img
      className={` transition-all duration-75 ${
        animated ? "w-[35px]" : "w-[25.565px]"
      }`}
      src={`/assets/images/${
        !v.upcoming ? "checked" : "checked-upcomming"
      }.svg`}
      alt="checked"
    />
  );
  return (
    <div className="relative font-inter text-[14px] lg:text-[18px] lg:leading-[21.6px] font-normal text-[#D9D9D9]">
      {list.map((v, i) => {
        const animated = active === i && !v.upcoming;
        return (
          <div key={v.label + "-" + i}>
            <div className="mb-[16px] lg:mb-[22px] flex gap-[16px] overflow-visible relative">
              {animated ? (
                <Shake>
                  <Image v={v} animated={animated} />
                </Shake>
              ) : (
                <Image v={v} animated={animated} />
              )}
              <span
                className={`lg:ml-2 
                  ${animated && "absolute left-10 "} 
                ${v.upcoming && "text-[#9C9C9C]"}`}
              >
                {v.label}
              </span>
              {v.upcoming && (
                <div className="my-auto">
                  <Badge pY="py-[2px]" pX="px-[8px]">UPCOMING</Badge>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
