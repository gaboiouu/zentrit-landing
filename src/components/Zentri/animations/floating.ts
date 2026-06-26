import type { FloatingConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function createFloatingAnimation(config: FloatingConfig): TargetAndTransition {
  if (!config.enabled) return {};

  return {
    animate: {
      y: [0, -config.amplitude, 0, config.amplitude * 0.5, 0],
    },
    transition: {
      duration: config.duration,
      ease: config.ease,
      repeat: Infinity,
      repeatType: "loop",
    },
  };
}
