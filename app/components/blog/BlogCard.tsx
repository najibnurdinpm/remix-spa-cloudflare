import { Link } from "../global";

export default function BlogCard({ item }: any) {
  return (
    <Link
      className="col-md-1 lg:col-md-2 rounded-[20.887px] max-w-[410px] flex flex-col justify-between bg-dark3"
      to={`/blog/${item.slug}`}
      prefetch={"intent"}
    >
      <img
        className="rounded-[32px]"
        src={item.image}
        width={item.imageWidth}
        height={item.imageHeight}
        alt={item?.title?.props?.dangerouslySetInnerHTML.__html}
      />
      <h2 className="font-inter font-semibold text-[20px] leading-[36px] tracking-[-0.4px] text-white p-[24px]">
        {item.title}
      </h2>
      <div className="px-[24px] mb-[24px] w-fit flex gap-3 flex-wrap">
        {item?.badges?.map((text: any) => (
          <span
            key={text}
            className="p-2 rounded-lg bg-dark text-gray-3 font-inter text-[12px] leading-[21.6px] trackng-[-0.24px] uppercase"
          >
            {text.replace("-", " ")}
          </span>
        ))}
      </div>
    </Link>
  );
}
