import { useMemo } from "react";
import { createFloatingAnimation } from "../animations/floating";
import type { FloatingConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function useFloating(config: FloatingConfig): TargetAndTransition {
  return useMemo(() => createFloatingAnimation(config), [config]);
}
