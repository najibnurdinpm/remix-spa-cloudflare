import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type IStateChange = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  state: any;
};

export default function StateChangeAnimation({
  children,
  state,
}: IStateChange) {
  const ctrls = useAnimation();

  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      variants={variants}
      className={"inline-block"}
    >
      <motion.div key={state} animate={"show"} initial="hide">
        {children}
      </motion.div>
    </motion.div>
  );
}

export const variants = {
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
