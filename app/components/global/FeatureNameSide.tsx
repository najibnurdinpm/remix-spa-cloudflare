import { GradientText } from "../typography";
import Badge from "./Badge";

type IFeatureNameSide = {
  nameGradient?: boolean;
  icon: any;
  name: any;
  description: any;
};

export default function FeatureNameSide({
  nameGradient = false,
  icon,
  name,
  description,
}: IFeatureNameSide) {
  return (
    <div className="text-left flex gap-[18px] md:gap-8 lg:gap-10 flex-row md:flex-col">
      <div>
        <Badge
          gradient={
            "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
          }
          as={"span"}
          pY={"py-3"}
          pX={"px-3"}
          height={"h-[64px] md:h-[56px] lg:h-[80px]"}
          rounded={"rounded-[10px]"}
          className={"w-[64px] md:w-[56px] lg:w-[80px] pointer-events-none"}
        >
          {icon}
        </Badge>
      </div>
      <div className="md:max-w-[236px] lg:max-w-[330px]">
        <div className="text-[24px] leading-[26px] lg:text-[32px] lg:leading-[35px] font-bold md:mb-3">
          {!nameGradient ? (
            name
          ) : (
            <GradientText
              deg="93.63deg"
              className="from-[#43C6AC]/[19.79] to-[#F8FFAE]/[52.98]"
            >
              {name}
            </GradientText>
          )}
        </div>
        <div className="font-inter text-[14px] leading-[22px] lg:text-[16px] lg:leading-[25.6px] text-[#9C9C9C] mt-3">
          {description}
        </div>
      </div>
    </div>
  );
}
