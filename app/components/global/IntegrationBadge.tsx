import { Badge } from "~/components/global";

export default function IntegrationBadge({
    icon,
    roundedFull = true,
    size,
    pointerEvent = false,
}: any) {
    
    let height = "h-[64px] md:h-[56px] lg:h-[64px]";
    let width = "w-[64px] md:w-[56px] lg:w-[64px]";
    let pY = "py-4 md:py-[14px] lg:py-4";
    let pX = "px-4 md:px-[14px] lg:px-4";
    if (roundedFull) {
        height = "h-[72px] md:h-[48px] lg:h-[72px]";
        width = "w-[72px] md:w-[48px] lg:w-[72px]";
        pY = "py-5 md:py-[13px] lg:py-5";
        pX = "px-5 md:px-[13px] lg:px-5";
    }
    if (size === "sm") {
        height = "h-[56px]";
        width = "w-[56px]";
        pY = "py-5";
        pX = "px-5";
    }
    if (size === "xs") {
        height = "h-[48px]";
        width = "w-[48px]";
        pY = "py-3";
        pX = "px-3";
    }
    return (
        <Badge
            gradient="bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
            as="span"
            pY={pY}
            pX={pX}
            height={height}
            rounded={roundedFull ? "rounded-full" : "rounded-[10px]"}
            className={`mx-auto ${width} ${
                !pointerEvent ? "pointer-events-none" : ""
            }`}
        >
            {icon}
        </Badge>
    );
}
