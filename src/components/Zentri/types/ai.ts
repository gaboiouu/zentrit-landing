import type { ZentriDialogMessage } from "./dialogs";
import type { ZentriEmotion } from "./emotions";

/**
 * Contrato para futura integración con IA.
 * Implementar un adaptador que cumpla esta interfaz.
 */

export type ZentriAIStatus = "idle" | "loading" | "streaming" | "error";

export interface ZentriAIContext {
  activeSectionId: string | null;
  currentEmotion: ZentriEmotion;
  conversationHistory: ZentriAIMessage[];
  pageContext?: Record<string, unknown>;
}

export interface ZentriAIMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

/** Respuesta esperada del proveedor de IA */
export interface ZentriAIResponse {
  text: string;
  emotion?: ZentriEmotion;
  metadata?: Record<string, unknown>;
}

/** Configuración del adaptador de IA */
export interface ZentriAIConfig {
  enabled: boolean;
  endpoint?: string;
  apiKey?: string;
  model?: string;
  systemPrompt?: string;
  maxHistoryLength: number;
}

/**
 * Interfaz que cualquier proveedor de IA debe implementar.
 * Stub listo para OpenAI, Anthropic, o backend propio.
 */
export interface ZentriAIProvider {
  readonly status: ZentriAIStatus;
  sendMessage(
    message: string,
    context: ZentriAIContext,
  ): Promise<ZentriAIResponse>;
  streamMessage?(
    message: string,
    context: ZentriAIContext,
    onChunk: (chunk: string) => void,
  ): Promise<ZentriAIResponse>;
  cancel?(): void;
  reset?(): void;
}

/** Acción derivada de una respuesta de IA para el estado de Zentri */
export interface ZentriAIAction {
  type: "show_dialog" | "set_emotion" | "both";
  dialog?: Omit<ZentriDialogMessage, "id" | "source">;
  emotion?: ZentriEmotion;
  emotionDuration?: number;
}
