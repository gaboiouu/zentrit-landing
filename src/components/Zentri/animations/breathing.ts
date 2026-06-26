import type { BreathingConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function createBreathingAnimation(config: BreathingConfig): TargetAndTransition {
  if (!config.enabled) return {};

  return {
    animate: {
      scaleX: [config.scaleMin, config.scaleMax, config.scaleMin],
      scaleY: [config.scaleMax, config.scaleMin, config.scaleMax],
    },
    transition: {
      duration: config.duration,
      ease: config.ease,
      repeat: Infinity,
      repeatType: "loop",
    },
  };
}
