import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useZentriContext } from "../../states/ZentriContext";
import { useZentriDialog } from "../../hooks/useZentriDialog";
import { dialogBubbleVariants } from "../../animations/transitions";

export function ZentriDialog() {
  const { config } = useZentriContext();
  const { message, visible, dismiss } = useZentriDialog();
  const { dialog: dialogConfig } = config;

  return (
    <AnimatePresence mode="wait">
      {visible && message && (
        <motion.div
          key={message.id}
          className="absolute bottom-full mb-3 right-0 z-10"
          style={{ maxWidth: dialogConfig.maxWidth }}
          variants={dialogBubbleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: dialogConfig.enterDuration,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="relative bg-white border border-zt-border rounded-2xl rounded-br-sm px-4 py-3 shadow-lg shadow-zt-primary/10">
            <p className="text-sm text-zt-dark leading-relaxed pr-5">
              {message.text}
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="absolute top-2 right-2 p-0.5 rounded-full text-zt-text/40 hover:text-zt-text hover:bg-zt-surface transition-colors"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {dialogConfig.showPointer && (
              <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white border-r border-b border-zt-border rotate-45" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
