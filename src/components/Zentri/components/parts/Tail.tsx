import { motion } from "framer-motion";
import type { Variant, Transition } from "framer-motion";

interface PartProps {
  animate?: Variant;
  transition?: Transition;
  style?: React.CSSProperties;
}

export function ZentriTail({ animate, transition, style }: PartProps) {
  return (
    <motion.g
      id="zentri-tail"
      animate={animate}
      transition={transition}
      style={style}
    >
      <path
        d="M28 78 Q8 88 4 72 Q2 60 18 68 Q24 72 28 78Z"
        fill="#14b88a"
      />
      <path
        d="M28 78 Q8 88 4 72"
        fill="none"
        stroke="#0a7f5a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </motion.g>
  );
}
