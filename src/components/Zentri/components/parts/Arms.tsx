import { motion } from "framer-motion";
import type { Variant, Transition } from "framer-motion";

interface ArmProps {
  side: "left" | "right";
  animate?: Variant;
  transition?: Transition;
}

export function ZentriArm({ side, animate, transition }: ArmProps) {
  const isLeft = side === "left";
  const transformOrigin = isLeft ? "34px 58px" : "66px 58px";

  return (
    <motion.g
      id={`zentri-arm-${side}`}
      animate={animate}
      transition={transition}
      style={{ transformOrigin }}
    >
      {isLeft ? (
        <>
          <ellipse cx="28" cy="62" rx="7" ry="5" fill="#14b88a" />
          <rect x="22" y="58" width="8" height="14" rx="4" fill="#0a7f5a" />
          <circle cx="24" cy="74" r="5" fill="#6edaae" />
        </>
      ) : (
        <>
          <ellipse cx="72" cy="62" rx="7" ry="5" fill="#14b88a" />
          <rect x="70" y="58" width="8" height="14" rx="4" fill="#0a7f5a" />
          <circle cx="76" cy="74" r="5" fill="#6edaae" />
        </>
      )}
    </motion.g>
  );
}
