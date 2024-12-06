export default function BlogDetailHeader({
  title,
  description,
  date,
  image,
  author,
  authorImage,
}: any) {
  return (
    <div className="relative z-[9999] bg-dark">
      <div className="flex justify-center max-w-[1290px] px-5 lg:px-20 xl:px-0 flex-col mx-auto pt-12 md:pb-[64px] z-[1]">
        <div className="flex flex-col md:flex-row gap-[60px] justify-end">
          <div className="flex flex-col max-w-[570px]">
            <div>
              <h2
                className="font-medium text-[40px] leading-[48px] tracking-[-0.8px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="max-w-[550px] mt-[16px] font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div className="flex justify-between mt-[32px]">
              <div className="flex gap-[16px] items-center">
                <img
                  className="rounded-[360px]"
                  src={authorImage}
                  width={32}
                  height={32}
                  alt="profile"
                />
                <span
                  className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3"
                  dangerouslySetInnerHTML={{ __html: author }}
                ></span>
              </div>
              <span className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-gray-3">
                {date}
              </span>
            </div>
          </div>
          <div className="rounded-[24px] w-fit h-full max-w-[550px]">
            <img src={image} alt="blog" className=" object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
