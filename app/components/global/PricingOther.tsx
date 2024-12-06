type IPricing = { price: string; app: string }[];

const pricing: IPricing = [
  { price: "$24.95/month", app: "Sales Pop - Popup Notification" },
  { price: "$24.95/month", app: "Pre-Order Manager 2.0" },
  { price: "$24.95/month", app: "WinAds: Facebook Pixels" },
  { price: "$24.95/month", app: "Bold Quantity Breaks" },
  { price: "$24.95/month", app: "Instant Search +" },
  { price: "$24.95/month", app: "Sales Box - Shipping & Offers" },
  { price: "$24.95/month", app: "Bold Quantity Breaks" },
  { price: "$24.95/month", app: "Instant Search +" },
  { price: "$24.95/month", app: "Sales Box - Shipping & Offers" },
];

export default function PricingOther() {
  return (
    <div className="w-full p-[24px] lg:p-8 lg:pb-[115px] xl:pb-[104px] font-inter">
      <div className="flex text-white/60 text-2xl font-inter leading-[29px] mb-[32px]">
        <span className="w-1/2">
          Other Apps <br />
        </span>
        <span className="w-1/2 text-right">$289/month</span>
      </div>

      <table className="table-auto text-[14px] lg:text-[17px] tracking-[0.02em] leading-[17px] lg:leading-[21px] font-normal text-[#9C9C9C]">
        <tbody>
          {pricing.map((v, i) => (
            <tr key={v.app + "-" + i} className="h-[40px] lg:h-[52px]">
              <td className="pr-[12px] w-[26px] lg:w-fit">
                <img
                  className="max-h-[24px] lg:max-h-[28px] my-auto"
                  src="/assets/images/pricing-dots.png"
                  alt="pricing dots"
                />
              </td>
              <td className="pr-4 lg:pr-8">
                <span className="my-auto">{v.price}</span>
              </td>
              <td>
                <span className="my-auto">{v.app}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
