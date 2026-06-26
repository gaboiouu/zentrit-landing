import type { ZentriAIProvider, ZentriAIContext, ZentriAIResponse } from "../types/ai";

/**
 * Stub del adaptador de IA.
 * Reemplazar con implementación real (OpenAI, backend propio, etc.)
 */
export class ZentriAIStub implements ZentriAIProvider {
  readonly status = "idle" as const;

  async sendMessage(
    message: string,
    context: ZentriAIContext,
  ): Promise<ZentriAIResponse> {
    return {
      text: `[Stub] Recibí: "${message}" (sección: ${context.activeSectionId ?? "ninguna"})`,
      emotion: "thinking",
    };
  }
}
