import { useMemo } from "react";
import { createLimbSwingAnimation } from "../animations/limbs";
import type { ArmAnimationConfig } from "../types/animations";
import type { TargetAndTransition } from "framer-motion";

export function useArmAnimation(config: ArmAnimationConfig): {
  left: TargetAndTransition;
  right: TargetAndTransition;
} {
  const left = useMemo(
    () => (config.enabled ? createLimbSwingAnimation(config.left) : {}),
    [config],
  );
  const right = useMemo(
    () => (config.enabled ? createLimbSwingAnimation(config.right) : {}),
    [config],
  );

  return { left, right };
}
