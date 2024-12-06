import { motion, Variants, AnimatePresence } from "framer-motion";

type IFadeInWhenVisible = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  variant?: Variants;
  duration?: number;
  className?: string;
  [key: string]: any;
};

export default function FadeInWhenVisible({
  children,
  variant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  },
  duration = 0.7,
  className = "",
  ...props
}: IFadeInWhenVisible) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: duration }}
        variants={variant}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
