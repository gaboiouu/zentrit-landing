import { useMemo } from "react";
import { createTailAnimation } from "../animations/tail";
import type { TailAnimationConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function useTailAnimation(config: TailAnimationConfig): TargetAndTransition {
  return useMemo(() => createTailAnimation(config), [config]);
}
