import type { TargetAndTransition, Variant } from "framer-motion";

/** Emociones base del personaje — extensible sin cambiar la API pública */
export type ZentriEmotion =
  | "neutral"
  | "happy"
  | "excited"
  | "curious"
  | "thinking"
  | "surprised"
  | "sad";

/** Partes animables del SVG */
export type ZentriBodyPart =
  | "root"
  | "body"
  | "head"
  | "eyes"
  | "pupils"
  | "mouth"
  | "armLeft"
  | "armRight"
  | "tail";

/** Variantes de animación por parte del cuerpo */
export type EmotionPartVariants = Partial<Record<ZentriBodyPart, Variant>>;

/** Configuración completa de una emoción */
export interface EmotionConfig {
  id: ZentriEmotion;
  label: string;
  /** Duración por defecto antes de volver a neutral (ms). 0 = permanente */
  defaultDuration: number;
  /** Variantes Framer Motion aplicadas a cada parte */
  variants: EmotionPartVariants;
  /** Transición al entrar en esta emoción */
  transition?: TargetAndTransition["transition"];
}

/** Mapa de todas las emociones disponibles */
export type EmotionRegistry = Record<ZentriEmotion, EmotionConfig>;

/** Estado de emoción en runtime */
export interface EmotionState {
  current: ZentriEmotion;
  previous: ZentriEmotion | null;
  /** Timestamp hasta el cual la emoción temporal está activa */
  expiresAt: number | null;
  /** Si la emoción fue disparada por una sección o manualmente */
  source: "idle" | "section" | "dialog" | "manual" | "ai";
}
