interface SledgeRating {
  rating: string;
}

export default function SledgeRating({ rating }: SledgeRating) {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src="/assets/images/feather-icon.png" alt="" className="h-[53px]" />
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map(() => (
            <img src="/assets/images/stars-icon.png" className="h-[24px]" />
          ))}
        </div>
        <p className="font-[inter] text-sm -tracking-[2%] leading-[20px] text-[#F8FFAE]">
          Shopify App Store Rating {rating}/5
        </p>
      </div>
      <img
        src="/assets/images/feather-icon.png"
        className="h-[53px] -scale-x-[1]"
      />
    </div>
  );
}
