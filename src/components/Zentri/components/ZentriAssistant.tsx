import { motion } from "framer-motion";
import { useZentriContext } from "../states/ZentriContext";
import { useSectionObserver, useEmotionTicker } from "../hooks";
import { assistantContainerVariants } from "../animations/transitions";
import { ZentriCharacter } from "./ZentriCharacter";
import { ZentriDialog } from "./ZentriDialog";

const positionClasses = {
  "bottom-right": "fixed bottom-6 right-6",
  "bottom-left": "fixed bottom-6 left-6",
  inline: "relative",
} as const;

function ZentriAssistantInner() {
  const { config, state } = useZentriContext();

  useSectionObserver(config.sections);
  useEmotionTicker();

  if (!state.enabled) return null;

  return (
    <motion.div
      className={`${positionClasses[config.position]} z-40`}
      variants={assistantContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <ZentriDialog />
        <div className="absolute -inset-3 bg-gradient-to-br from-zt-primary/10 via-zt-secondary/5 to-zt-mint/10 rounded-full blur-xl -z-10" />
        <ZentriCharacter />
      </div>
    </motion.div>
  );
}

export interface ZentriAssistantProps {
  className?: string;
}

export function ZentriAssistant({ className }: ZentriAssistantProps) {
  return (
    <div className={className}>
      <ZentriAssistantInner />
    </div>
  );
}
