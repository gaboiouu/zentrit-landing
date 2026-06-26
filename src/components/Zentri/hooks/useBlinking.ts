import { useState, useEffect, useRef } from "react";
import { getRandomBlinkInterval } from "../animations/blinking";
import type { BlinkingConfig } from "../types/animations";

export function useBlinking(config: BlinkingConfig) {
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    if (!config.enabled) return;

    const clearAll = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };

    const scheduleNextBlink = () => {
      const interval = getRandomBlinkInterval(config);
      const waitId = window.setTimeout(() => {
        setIsBlinking(true);
        const blinkId = window.setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink();
        }, config.blinkDuration);
        timeoutsRef.current.push(blinkId);
      }, interval);
      timeoutsRef.current.push(waitId);
    };

    scheduleNextBlink();
    return clearAll;
  }, [config]);

  return { isBlinking };
}
