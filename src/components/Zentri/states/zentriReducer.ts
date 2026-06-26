import { emotionReducer } from "./emotionReducer";
import { dialogReducer } from "./dialogReducer";
import { sectionReducer } from "./sectionReducer";
import { initialZentriState } from "./initialState";
import type { ZentriState } from "./initialState";
import type { ZentriAction } from "./actions";

export function zentriReducer(state: ZentriState, action: ZentriAction): ZentriState {
  switch (action.type) {
    case "SET_EMOTION":
    case "RESET_EMOTION":
    case "TICK_EMOTION":
      return { ...state, emotion: emotionReducer(state.emotion, action) };

    case "ENQUEUE_DIALOG":
    case "SHOW_NEXT_DIALOG":
    case "DISMISS_DIALOG":
    case "CLEAR_DIALOG_QUEUE":
    case "SET_DIALOG_VISIBLE":
      return { ...state, dialog: dialogReducer(state.dialog, action) };

    case "SET_ACTIVE_SECTION":
    case "MARK_SECTION_VISITED":
    case "SET_VISIBLE_SECTIONS":
      return { ...state, section: sectionReducer(state.section, action) };

    case "SET_AI_STATUS":
      return { ...state, ai: { ...state.ai, status: action.status } };

    case "SET_AI_PROVIDER":
      return { ...state, ai: { ...state.ai, provider: action.provider } };

    case "SET_ENABLED":
      return { ...state, enabled: action.enabled };

    default:
      return state;
  }
}

export { initialZentriState };
export type { ZentriState };
