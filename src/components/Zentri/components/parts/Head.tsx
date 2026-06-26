import { motion } from "framer-motion";
import type { Variant, Transition } from "framer-motion";

interface PartProps {
  animate?: Variant;
  transition?: Transition;
}

export function ZentriHead({ animate, transition }: PartProps) {
  return (
    <motion.g
      id="zentri-head"
      animate={animate}
      transition={transition}
      style={{ transformOrigin: "50px 38px" }}
    >
      <circle cx="50" cy="36" r="26" fill="#14b88a" />
      <circle cx="50" cy="34" r="22" fill="#6edaae" opacity="0.35" />
      {/* Antena */}
      <line x1="50" y1="10" x2="50" y2="4" stroke="#0a7f5a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="3" r="3" fill="#a6e34a" />
    </motion.g>
  );
}
