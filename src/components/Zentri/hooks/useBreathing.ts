import { useMemo } from "react";
import { createBreathingAnimation } from "../animations/breathing";
import type { BreathingConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function useBreathing(config: BreathingConfig): TargetAndTransition {
  return useMemo(() => createBreathingAnimation(config), [config]);
}
