import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type IShake = {
  children: any;
};

export default function Shake({ children = "Example Text" }: IShake) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) ctrls.start("visible");
    if (!inView) ctrls.start("hidden");
  }, [ctrls, inView]);

  const getRandomDelay = () => -(Math.random() * 0.1 + 0.05);
  const randomDuration = () => Math.random() * 0.1 + 0.2;

  const variants = {
    hidden: { rotate: 0 },
    visible: (i: number) => ({
      rotate: i % 2 === 0 ? [-1, 20, 0] : [1, -20, 0],
      transition: {
        delay: getRandomDelay(),
        repeat: Infinity,
        duration: randomDuration(),
      },
    }),
  };

  const getRandomTransformOrigin = () => {
    const value = (16 + 40 * Math.random()) / 100;
    const value2 = (15 + 36 * Math.random()) / 100;
    return {
      originX: value,
      originY: value2,
    };
  };

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      variants={variants}
      className=" inline-block"
      style={getRandomTransformOrigin()}
    >
      {children}
    </motion.div>
  );
}
