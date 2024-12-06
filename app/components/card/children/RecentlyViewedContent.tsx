import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "~/components/global";
import { GradientText } from "~/components/typography";

const Notif = ({
  className,
  text,
  time,
  space,
  padding,
  gradient,
  pX = "px-[22px]",
  pY = "py-[17px]",
}: any) => (
  <div className={` text-[#677487] mb-3 ${className}`}>
    {gradient ? (
      <Badge
        height="h-auto"
        rounded="rounded-[6px]"
        pX={pX}
        pY={pY}
        gradient="bg-[linear-gradient(40.68deg,_#676767_25.52%,_#676767_40.31%,_rgba(103,103,103,0)_51.4%)]"
      >
        <div
          className={`h-full table rounded-[6px] bg-[#191919] decora normal-case ${className}`}
        >
          <span className={space}>{text}</span>
          <span>{time}</span>
        </div>
      </Badge>
    ) : (
      <div className={`h-full table  rounded-[6px] bg-[#191919] ${padding}`}>
        <span className={space}>{text}</span>
        <span>{time}</span>
      </div>
    )}
  </div>
);

export default function RecentlyViewedContent({
  animation,
  type = 1,
  className = "container min-h-[202px] lg:min-h-[235px] flex flex-col relative",
}: any) {
  const defaultInit = [
    {
      key: 1,
      delay: 0.6,
      content: (
        <Notif
          padding="py-[10px] px-[14px]"
          className="text-[8.775px] leading-[9.63px]"
          space="mr-[30px] xl:mr-[92px]"
          text="Frontpack"
          time="3 weeks ago"
        />
      ),
    },
    {
      key: 2,
      delay: 0.4,
      content: (
        <Notif
          padding="py-[13px] px-[16.5px]"
          className="text-[10.5px] leading-[11.5px]"
          space="mr-[30px] xl:mr-[96px]"
          text="Canvas Sneakers"
          time="16 days ago"
        />
      ),
    },
    {
      key: 3,
      delay: 0.2,
      content: (
        <Notif
          padding="py-[15px] px-[19px]"
          className="text-[12.5px] leading-[13.5px]"
          space="mr-[30px] xl:mr-[96px]"
          text="Women's Crewneck"
          time="16 hours ago"
        />
      ),
    },
    {
      key: 4,
      delay: 0,
      content: (
        <Notif
          gradient
          padding="lg:py-[17px] lg:px-[22px]"
          className="text-[12px] leading-[13px] lg:text-[1.07vw] xl:text-[14px] lg:leading-[15.5px]"
          space="mr-[40px] xl:mr-[105px]"
          text={
            <GradientText
              deg="129.19deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              Sweatpants
            </GradientText>
          }
          time={
            <GradientText
              deg="129.19deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              4 minutes ago
            </GradientText>
          }
        />
      ),
    },
  ];

  const upcomingInit = [
    {
      key: 1,
      delay: 0.6,
      content: (
        <Notif
          padding="py-[10px] px-[15px] md:py-[15px] md:px-[15px] lg:py-[22px] lg:px-[30px]"
          className="md:text-[15.3px] lg:text-[18.42px] leading-[20.262px] tracking-[-0.368px]"
          space="mr-[20px] md:mr-[100px] lg:mr-[203px]"
          text="Frontpack"
          time="3 weeks ago"
        />
      ),
    },
    {
      key: 2,
      delay: 0.4,
      content: (
        <Notif
          padding="py-[10px] px-[18px] md:py-[18px] md:px-[18px] lg:py-[24px] lg:px-[34px]"
          className="md:text-[15.3px] lg:text-[22.104px] leading-[24.315px] tracking-[-0.442px]"
          space="mr-[20px] md:mr-[80px] lg:mr-[193px]"
          text="Canvas Sneakers"
          time="16 days ago"
        />
      ),
    },
    {
      key: 3,
      delay: 0.2,
      content: (
        <Notif
          padding="py-[10px] px-[20px] md:py-[20px] md:px-[20px] lg:py-[30px] lg:px-[40px]"
          className="text-[14.2px] md:text-[18.3px] lg:text-[25.788px] leading-[28.367px] tracking-[-0.516px]"
          space="mr-[40px] md:mr-[50px] lg:mr-[182px]"
          text="Women's Crewneck"
          time="16 hours ago"
        />
      ),
    },
    {
      key: 4,
      delay: 0,
      content: (
        <Notif
          gradient
          pX="py-[10px] md:py-[24px] lg:py-[32px]"
          pY="px-[25px] md:px-[20px] lg:px-[42px]"
          className="text-[16.2px] md:text-[20.3px] lg:text-[29.472px] leading-[32.42px] tracking-[-0.589px]"
          space="mr-[70px] md:mr-[120px] lg:mr-[290px]"
          text={
            <GradientText
              deg="129.19deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              Sweatpants
            </GradientText>
          }
          time={
            <GradientText
              deg="129.19deg"
              className="from-[#43C6AC] to-[#F8FFAE]"
            >
              4 minutes ago
            </GradientText>
          }
        />
      ),
    },
  ];

  const init = type === 1 ? defaultInit : upcomingInit;

  const [notifications, setNotifications] = useState([...init].reverse());

  useEffect(() => {
    if (animation) {
      setNotifications([]);
      setTimeout(() => {
        setNotifications([...init].reverse());
      }, 100);
    } else {
      clearTimeout;
      setNotifications([...init].reverse());
    }
  }, [animation]);

  return (
    <div className={className}>
      <div className="absolute top-0 left-0">
        <AnimatePresence initial={false}>
          {notifications.map((id) => (
            <motion.div
              key={id.key}
              initial={{ opacity: 0, y: -50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 },
              }}
              transition={{
                delay: id.delay,
              }}
            >
              {id.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
