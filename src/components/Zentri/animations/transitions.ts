import type { EmotionConfig } from "../types/emotions";
import type { Variant } from "framer-motion";

export function getEmotionVariant(
  emotion: EmotionConfig,
  part: keyof EmotionConfig["variants"],
): Variant {
  return emotion.variants[part] ?? {};
}

export const dialogBubbleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 4,
  },
};

export const assistantContainerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};
