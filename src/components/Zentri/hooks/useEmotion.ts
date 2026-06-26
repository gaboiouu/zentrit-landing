import { useMemo } from "react";
import { emotionRegistry } from "../config/emotions";
import type { ZentriEmotion } from "../types/emotions";
import type { Variant } from "framer-motion";

export function useEmotion(currentEmotion: ZentriEmotion) {
  const config = emotionRegistry[currentEmotion];

  const variants = useMemo(() => {
    const parts = config.variants;
    return {
      root: parts.root ?? {},
      body: parts.body ?? {},
      head: parts.head ?? {},
      eyes: parts.eyes ?? {},
      pupils: parts.pupils ?? {},
      mouth: parts.mouth ?? {},
      armLeft: parts.armLeft ?? {},
      armRight: parts.armRight ?? {},
      tail: parts.tail ?? {},
    } satisfies Record<string, Variant>;
  }, [config]);

  return {
    config,
    variants,
    transition: config.transition,
  };
}
