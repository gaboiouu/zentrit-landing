import { useState, useEffect, useRef, useCallback } from "react";
import {
  calculatePupilOffset,
  lerpPupilOffset,
  type PupilOffset,
  type CursorPosition,
} from "../animations/pupils";
import type { PupilTrackingConfig } from "../types/animations";

export function usePupilTracking(
  config: PupilTrackingConfig,
  containerRef: React.RefObject<SVGElement | null>,
  leftEyeCenter: CursorPosition,
  rightEyeCenter: CursorPosition,
) {
  const [leftOffset, setLeftOffset] = useState<PupilOffset>({ x: 0, y: 0 });
  const [rightOffset, setRightOffset] = useState<PupilOffset>({ x: 0, y: 0 });
  const cursorRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const svg = containerRef.current as SVGSVGElement;
    const viewBox = svg.viewBox?.baseVal;
    const scaleX = viewBox ? viewBox.width / rect.width : 1;
    const scaleY = viewBox ? viewBox.height / rect.height : 1;

    cursorRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, [containerRef]);

  useEffect(() => {
    if (!config.enabled) return;

    window.addEventListener("mousemove", handleMouseMove);

    const tick = () => {
      const targetLeft = calculatePupilOffset(leftEyeCenter, cursorRef.current, config);
      const targetRight = calculatePupilOffset(rightEyeCenter, cursorRef.current, config);

      setLeftOffset((prev) => lerpPupilOffset(prev, targetLeft, config.smoothing));
      setRightOffset((prev) => lerpPupilOffset(prev, targetRight, config.smoothing));

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [config, handleMouseMove, leftEyeCenter, rightEyeCenter]);

  return { leftOffset, rightOffset };
}
