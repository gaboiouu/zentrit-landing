import type { EmotionState } from "../types/emotions";
import type { EmotionAction } from "./actions";

export function emotionReducer(
  state: EmotionState,
  action: EmotionAction,
): EmotionState {
  switch (action.type) {
    case "SET_EMOTION": {
      const duration = action.duration ?? 0;
      return {
        current: action.emotion,
        previous: state.current,
        expiresAt: duration > 0 ? Date.now() + duration : null,
        source: action.source ?? "manual",
      };
    }
    case "RESET_EMOTION":
      return {
        current: "neutral",
        previous: state.current,
        expiresAt: null,
        source: "idle",
      };
    case "TICK_EMOTION": {
      if (state.expiresAt && Date.now() >= state.expiresAt) {
        return {
          current: "neutral",
          previous: state.current,
          expiresAt: null,
          source: "idle",
        };
      }
      return state;
    }
    default:
      return state;
  }
}
