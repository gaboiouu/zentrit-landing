import type { LimbSwingConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function createLimbSwingAnimation(config: LimbSwingConfig): TargetAndTransition {
  return {
    animate: {
      rotate: [config.rotateMin, config.rotateMax, config.rotateMin],
    },
    transition: {
      duration: config.duration,
      ease: config.ease,
      repeat: Infinity,
      repeatType: "loop",
      delay: config.delay,
    },
  };
}
