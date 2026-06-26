import type { ZentriEmotion } from "./emotions";

/** Origen de un mensaje de diálogo */
export type DialogSource = "section" | "manual" | "ai" | "system";

/** Mensaje individual en la cola de diálogos */
export interface ZentriDialogMessage {
  id: string;
  text: string;
  emotion?: ZentriEmotion;
  /** Duración visible en ms. undefined = hasta el siguiente mensaje */
  duration?: number;
  /** Mayor prioridad desplaza mensajes de menor prioridad */
  priority: number;
  source: DialogSource;
  /** Metadatos extensibles (p. ej. respuesta de IA) */
  metadata?: Record<string, unknown>;
}

/** Estado de la burbuja de diálogo */
export interface ZentriDialogState {
  current: ZentriDialogMessage | null;
  queue: ZentriDialogMessage[];
  visible: boolean;
  /** Si el usuario cerró manualmente el diálogo actual */
  dismissed: boolean;
}

/** Props visuales de la burbuja */
export interface DialogBubbleConfig {
  maxWidth: number;
  showPointer: boolean;
  enterDuration: number;
  exitDuration: number;
  position: "top" | "right" | "left";
}
