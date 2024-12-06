import { IconInfo } from "~/components/icon";

export default function Info({ content }: any) {
  return (
    <div className="p-3 bg-[#0B1816] border-[1px] border-[#145245] rounded-lg text-[#43C6AC] ">
      <div className="flex gap-2">
        <div className="min-w-[22px]">
          <IconInfo />
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
