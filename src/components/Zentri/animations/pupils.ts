import type { PupilTrackingConfig } from "../types/animations";

export interface PupilOffset {
  x: number;
  y: number;
}

export interface CursorPosition {
  x: number;
  y: number;
}

/**
 * Calcula el desplazamiento de pupila hacia el cursor,
 * limitado al radio máximo definido en la config.
 */
export function calculatePupilOffset(
  eyeCenter: CursorPosition,
  cursor: CursorPosition,
  config: PupilTrackingConfig,
): PupilOffset {
  if (!config.enabled) return { x: 0, y: 0 };

  const dx = cursor.x - eyeCenter.x;
  const dy = cursor.y - eyeCenter.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance === 0) return { x: 0, y: 0 };

  const clamped = Math.min(distance, config.maxOffset);
  const ratio = clamped / distance;

  return {
    x: dx * ratio,
    y: dy * ratio,
  };
}

/** Interpolación lineal para suavizar el movimiento de pupilas */
export function lerpPupilOffset(
  current: PupilOffset,
  target: PupilOffset,
  smoothing: number,
): PupilOffset {
  return {
    x: current.x + (target.x - current.x) * smoothing,
    y: current.y + (target.y - current.y) * smoothing,
  };
}
