import type { BlinkingConfig } from "../types/animations";

export interface BlinkState {
  isBlinking: boolean;
  scaleY: number;
}

export function getEyeScaleY(isBlinking: boolean, config: BlinkingConfig): number {
  if (!config.enabled) return 1;
  return isBlinking ? config.closedScaleY : 1;
}

export function getRandomBlinkInterval(config: BlinkingConfig): number {
  const { minInterval, maxInterval } = config;
  return minInterval + Math.random() * (maxInterval - minInterval);
}
