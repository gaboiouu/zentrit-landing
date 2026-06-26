import type { ZentriDialogState } from "../types/dialogs";
import type { ZentriDialogMessage } from "../types/dialogs";
import type { DialogAction } from "./actions";

function generateId(): string {
  return `dialog-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function sortByPriority(messages: ZentriDialogMessage[]): ZentriDialogMessage[] {
  return [...messages].sort((a, b) => b.priority - a.priority);
}

export function dialogReducer(
  state: ZentriDialogState,
  action: DialogAction,
): ZentriDialogState {
  switch (action.type) {
    case "ENQUEUE_DIALOG": {
      const message: ZentriDialogMessage = {
        ...action.message,
        id: action.message.id ?? generateId(),
      };

      if (!state.current) {
        return {
          current: message,
          queue: state.queue,
          visible: true,
          dismissed: false,
        };
      }

      return {
        ...state,
        queue: sortByPriority([...state.queue, message]),
      };
    }

    case "SHOW_NEXT_DIALOG": {
      if (state.queue.length === 0) {
        return { ...state, current: null, visible: false };
      }
      const [next, ...rest] = state.queue;
      return {
        current: next,
        queue: rest,
        visible: true,
        dismissed: false,
      };
    }

    case "DISMISS_DIALOG":
      return {
        current: null,
        queue: state.queue,
        visible: false,
        dismissed: true,
      };

    case "CLEAR_DIALOG_QUEUE":
      return {
        current: null,
        queue: [],
        visible: false,
        dismissed: false,
      };

    case "SET_DIALOG_VISIBLE":
      return { ...state, visible: action.visible };

    default:
      return state;
  }
}
