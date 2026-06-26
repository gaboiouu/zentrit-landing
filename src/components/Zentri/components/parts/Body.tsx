import { motion } from "framer-motion";
import type { Variant, Transition } from "framer-motion";

interface PartProps {
  animate?: Variant;
  transition?: Transition;
}

export function ZentriBody({ animate, transition }: PartProps) {
  return (
    <motion.g id="zentri-body" animate={animate} transition={transition}>
      <ellipse cx="50" cy="62" rx="28" ry="24" fill="#14b88a" />
      <ellipse cx="50" cy="58" rx="22" ry="18" fill="#6edaae" opacity="0.5" />
      <rect x="38" y="54" width="24" height="6" rx="3" fill="#0a7f5a" opacity="0.3" />
    </motion.g>
  );
}
