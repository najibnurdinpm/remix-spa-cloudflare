import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ISlippedText = {
  children: any;
};

export default function SlippedText({
  children = "Example Text",
}: ISlippedText) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) ctrls.start("visible");
    if (!inView) ctrls.start("hidden");
  }, [ctrls, inView]);

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: "50%",
    },
    visible: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 1.5,
        ease: [0.5, 0.5, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      variants={textAnimation}
      className=" inline-block"
    >
      {children}
    </motion.div>
  );
}
