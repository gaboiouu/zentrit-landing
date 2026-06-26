import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { zentriReducer, initialZentriState, type ZentriState } from "./zentriReducer";
import type { ZentriAction, ZentriConfig } from "./actions";
import type { ZentriEmotion } from "../types/emotions";
import type { ZentriDialogMessage } from "../types/dialogs";
import type { ZentriAIProvider } from "../types/ai";
import { defaultZentriConfig } from "../config/defaults";

export interface ZentriContextValue {
  state: ZentriState;
  config: ZentriConfig;
  dispatch: React.Dispatch<ZentriAction>;
  setEmotion: (emotion: ZentriEmotion, duration?: number) => void;
  showDialog: (message: Omit<ZentriDialogMessage, "id" | "source">, source?: ZentriDialogMessage["source"]) => void;
  dismissDialog: () => void;
  setAIProvider: (provider: ZentriAIProvider | null) => void;
}

const ZentriContext = createContext<ZentriContextValue | null>(null);

export interface ZentriProviderProps {
  children: ReactNode;
  config?: Partial<ZentriConfig>;
}

export function ZentriProvider({ children, config: configOverride }: ZentriProviderProps) {
  const [state, dispatch] = useReducer(zentriReducer, initialZentriState);

  const config = useMemo<ZentriConfig>(
    () => ({ ...defaultZentriConfig, ...configOverride }),
    [configOverride],
  );

  const setEmotion = useCallback((emotion: ZentriEmotion, duration?: number) => {
    dispatch({ type: "SET_EMOTION", emotion, duration, source: "manual" });
  }, []);

  const showDialog = useCallback(
    (
      message: Omit<ZentriDialogMessage, "id" | "source">,
      source: ZentriDialogMessage["source"] = "manual",
    ) => {
      dispatch({ type: "ENQUEUE_DIALOG", message: { ...message, source } });
      if (message.emotion) {
        dispatch({
          type: "SET_EMOTION",
          emotion: message.emotion,
          duration: message.duration,
          source,
        });
      }
    },
    [],
  );

  const dismissDialog = useCallback(() => {
    dispatch({ type: "DISMISS_DIALOG" });
  }, []);

  const setAIProvider = useCallback((provider: ZentriAIProvider | null) => {
    dispatch({ type: "SET_AI_PROVIDER", provider });
  }, []);

  const value = useMemo<ZentriContextValue>(
    () => ({
      state,
      config,
      dispatch,
      setEmotion,
      showDialog,
      dismissDialog,
      setAIProvider,
    }),
    [state, config, setEmotion, showDialog, dismissDialog, setAIProvider],
  );

  return (
    <ZentriContext.Provider value={value}>{children}</ZentriContext.Provider>
  );
}

export function useZentriContext(): ZentriContextValue {
  const ctx = useContext(ZentriContext);
  if (!ctx) {
    throw new Error("useZentriContext debe usarse dentro de <ZentriProvider>");
  }
  return ctx;
}
