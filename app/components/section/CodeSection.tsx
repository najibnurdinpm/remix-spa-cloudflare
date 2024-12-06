import { Description } from "~/components/typography";
import { Badge, CodeTabs } from "~/components/global";

type ICodeSection = {
  customTitle?: any;
  icon?: any;
  title?: any;
  subtitle?: any;
  image: string;
  codes: any;
  selectedPreviewPage: any;
};

export default function CodeSection({
  customTitle,
  icon,
  title,
  subtitle,
  image,
  codes,
  selectedPreviewPage,
}: ICodeSection) {
  return (
    <div className="max-w-[1290px] overflow-visible m-auto relative">
      <div className="mt-[80px] lg:mt-[100px] lg:flex gap-[76px]">
        <div className="lg:w-[60%]">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:items-start">
            {customTitle ? (
              customTitle
            ) : (
              <div className="flex flex-col lg:flex-row lg:gap-8 text-center lg:text-left">
                <Badge
                  gradient={
                    "bg-[linear-gradient(40.68deg,_#676767_49.16%,_#676767_49.16%,_rgba(103,103,103,0)_51.4%)]"
                  }
                  as={"span"}
                  pY={"py-2 lg:py-4"}
                  pX={"px-2 lg:px-4"}
                  height={"h-[40px] lg:h-[64px]"}
                  rounded={"rounded-[10px]"}
                  className={
                    "mx-auto w-[40px] lg:w-fit mb-4 lg:mb-8 pointer-events-none"
                  }
                >
                  {icon}
                </Badge>
                <div>
                  <div className="text-[40px] leading-[48px] lg:text-[48px] lg:leading-[58px] text-white mb-2">
                    {title}
                  </div>
                  {!!subtitle && <Description>{subtitle}</Description>}
                </div>
              </div>
            )}
          </div>

          <div className="flex relative md:mt-[30px] lg:mt-[40px]">
            <img
              className="w-full"
              src="/assets/images/code-preview-bg.png"
              alt="code preview background"
            />

            <img
              className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[3.5%]"
              src={image}
              alt="page preview"
            />
          </div>
        </div>
        <img
          className="-z-40 pointer-events-none absolute hidden md:block md:-bottom-[45%] lg:-bottom-[100%] md:-left-[10%] lg:-left-[25%]"
          src="/assets/images/background-2-left.png"
          alt="gradient code bg"
          width={1077}
          height={500}
        />
        <div className="lg:w-[40%]">
          <CodeTabs
            codes={codes}
            selectedPreviewPage={selectedPreviewPage.value}
          />
        </div>
      </div>
    </div>
  );
}
