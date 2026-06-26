import type { TailAnimationConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function createTailAnimation(config: TailAnimationConfig): TargetAndTransition {
  if (!config.enabled) return {};

  return {
    animate: {
      rotate: [config.rotateMin, config.rotateMax, config.rotateMin],
    },
    transition: {
      duration: config.duration,
      ease: config.ease,
      repeat: Infinity,
      repeatType: "loop",
    },
    style: {
      transformOrigin: config.transformOrigin,
    },
  };
}
