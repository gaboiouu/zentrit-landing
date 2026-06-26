import { motion } from "framer-motion";
import type { PupilOffset } from "../../../animations/pupils";

interface PupilsProps {
  leftOffset: PupilOffset;
  rightOffset: PupilOffset;
}

export function ZentriPupils({ leftOffset, rightOffset }: PupilsProps) {
  return (
    <g id="zentri-pupils">
      <motion.circle
        cx={40 + leftOffset.x}
        cy={37 + leftOffset.y}
        r="3.5"
        fill="#111418"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.circle
        cx={60 + rightOffset.x}
        cy={37 + rightOffset.y}
        r="3.5"
        fill="#111418"
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      {/* Brillo */}
      <circle cx={38.5 + leftOffset.x} cy={35.5 + leftOffset.y} r="1.2" fill="white" opacity="0.8" />
      <circle cx={58.5 + rightOffset.x} cy={35.5 + rightOffset.y} r="1.2" fill="white" opacity="0.8" />
    </g>
  );
}
