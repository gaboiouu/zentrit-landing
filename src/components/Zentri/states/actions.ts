import type { ZentriEmotion } from "../types/emotions";
import type { ZentriDialogMessage } from "../types/dialogs";
import type { ZentriAIProvider, ZentriAIStatus } from "../types/ai";
import type { ZentriAnimationConfig } from "../types/animations";
import type { SectionConfig } from "../types/sections";
import type { DialogBubbleConfig } from "../types/dialogs";

// ─── Acciones de emoción ───────────────────────────────────────────────────

export type EmotionAction =
  | { type: "SET_EMOTION"; emotion: ZentriEmotion; duration?: number; source?: EmotionActionSource }
  | { type: "RESET_EMOTION" }
  | { type: "TICK_EMOTION" };

export type EmotionActionSource = "idle" | "section" | "dialog" | "manual" | "ai";

// ─── Acciones de diálogo ───────────────────────────────────────────────────

export type DialogAction =
  | { type: "ENQUEUE_DIALOG"; message: Omit<ZentriDialogMessage, "id"> & { id?: string } }
  | { type: "SHOW_NEXT_DIALOG" }
  | { type: "DISMISS_DIALOG" }
  | { type: "CLEAR_DIALOG_QUEUE" }
  | { type: "SET_DIALOG_VISIBLE"; visible: boolean };

// ─── Acciones de sección ───────────────────────────────────────────────────

export type SectionAction =
  | { type: "SET_ACTIVE_SECTION"; sectionId: string | null }
  | { type: "MARK_SECTION_VISITED"; sectionId: string }
  | { type: "SET_VISIBLE_SECTIONS"; sectionIds: string[] };

// ─── Acciones globales de Zentri ───────────────────────────────────────────

export type ZentriAction =
  | EmotionAction
  | DialogAction
  | SectionAction
  | { type: "SET_AI_STATUS"; status: ZentriAIStatus }
  | { type: "SET_AI_PROVIDER"; provider: ZentriAIProvider | null }
  | { type: "SET_ENABLED"; enabled: boolean };

// ─── Configuración del provider ────────────────────────────────────────────

export interface ZentriConfig {
  animations: ZentriAnimationConfig;
  sections: SectionConfig[];
  dialog: DialogBubbleConfig;
  /** Posición fija del asistente en pantalla */
  position: "bottom-right" | "bottom-left" | "inline";
  enabled: boolean;
}
