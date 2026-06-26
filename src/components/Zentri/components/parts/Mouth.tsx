import { motion } from "framer-motion";
import type { Variant, Transition } from "framer-motion";

interface PartProps {
  animate?: Variant;
  transition?: Transition;
}

export function ZentriMouth({ animate, transition }: PartProps) {
  return (
    <motion.g
      id="zentri-mouth"
      animate={animate}
      transition={transition}
      style={{ transformOrigin: "50px 46px" }}
    >
      <path
        d="M42 46 Q50 52 58 46"
        fill="none"
        stroke="#0a7f5a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </motion.g>
  );
}
