import { useCallback } from "react";
import { useZentriContext } from "../states/ZentriContext";
import type { ZentriAIProvider, ZentriAIContext } from "../types/ai";

/**
 * Hook preparado para integración futura con IA.
 * Expone la interfaz sin implementar el proveedor.
 */
export function useZentriAI() {
  const { state, dispatch, showDialog, setEmotion } = useZentriContext();
  const { ai, emotion, section, dialog } = state;

  const buildContext = useCallback((): ZentriAIContext => ({
    activeSectionId: section.activeSectionId,
    currentEmotion: emotion.current,
    conversationHistory: [],
    pageContext: {
      visitedSections: Array.from(section.visitedSections),
      currentDialog: dialog.current?.text ?? null,
    },
  }), [section, emotion, dialog]);

  const sendMessage = useCallback(
    async (message: string) => {
      if (!ai.provider) {
        console.warn("[Zentri] No hay proveedor de IA configurado");
        return null;
      }

      dispatch({ type: "SET_AI_STATUS", status: "loading" });

      try {
        const response = await ai.provider.sendMessage(message, buildContext());

        if (response.emotion) {
          setEmotion(response.emotion, 5000);
        }

        showDialog(
          {
            text: response.text,
            emotion: response.emotion,
            priority: 10,
            duration: 8000,
            metadata: response.metadata,
          },
          "ai",
        );

        dispatch({ type: "SET_AI_STATUS", status: "idle" });
        return response;
      } catch (error) {
        dispatch({ type: "SET_AI_STATUS", status: "error" });
        throw error;
      }
    },
    [ai.provider, buildContext, dispatch, setEmotion, showDialog],
  );

  return {
    status: ai.status,
    provider: ai.provider,
    isReady: ai.provider !== null,
    sendMessage,
    buildContext,
  };
}
