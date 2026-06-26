// ─── Componentes ───────────────────────────────────────────────────────────
export { ZentriRoot } from "./components/ZentriRoot";
export { ZentriAssistant } from "./components/ZentriAssistant";
export { ZentriCharacter } from "./components/ZentriCharacter";
export { ZentriDialog } from "./components/ZentriDialog";

// ─── Estado ────────────────────────────────────────────────────────────────
export { ZentriProvider, useZentriContext } from "./states/ZentriContext";
export type { ZentriContextValue, ZentriProviderProps } from "./states/ZentriContext";
export type { ZentriState } from "./states/initialState";
export type { ZentriAction, ZentriConfig } from "./states/actions";

// ─── Hooks ─────────────────────────────────────────────────────────────────
export {
  useFloating,
  useBreathing,
  useBlinking,
  usePupilTracking,
  useArmAnimation,
  useTailAnimation,
  useEmotion,
  useSectionObserver,
  useZentriDialog,
  useEmotionTicker,
  useZentriAI,
} from "./hooks";

// ─── Tipos ─────────────────────────────────────────────────────────────────
export type * from "./types";

// ─── Configuración ─────────────────────────────────────────────────────────
export { defaultZentriConfig, defaultSections, defaultAnimationConfig } from "./config/defaults";
export { emotionRegistry } from "./config/emotions";

// ─── Animaciones ───────────────────────────────────────────────────────────
export * from "./animations";

// ─── Servicios (IA) ────────────────────────────────────────────────────────
export { ZentriAIStub } from "./services/ZentriAIStub";
