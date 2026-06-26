import { motion } from "framer-motion";
import type { Variant, Transition } from "framer-motion";

interface EyesProps {
  animate?: Variant;
  transition?: Transition;
  blinkScaleY: number;
}

export function ZentriEyes({ animate, transition, blinkScaleY }: EyesProps) {
  return (
    <motion.g
      id="zentri-eyes"
      animate={{ ...animate, scaleY: blinkScaleY }}
      transition={transition}
      style={{ transformOrigin: "50px 36px" }}
    >
      {/* Ojo izquierdo */}
      <ellipse cx="40" cy="36" rx="7" ry="8" fill="white" />
      {/* Ojo derecho */}
      <ellipse cx="60" cy="36" rx="7" ry="8" fill="white" />
    </motion.g>
  );
}
