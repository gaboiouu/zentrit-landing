import { useEffect, useCallback } from "react";
import { useZentriContext } from "../states/ZentriContext";

export function useZentriDialog() {
  const { state, dispatch, dismissDialog } = useZentriContext();
  const { dialog } = state;

  useEffect(() => {
    if (!dialog.current?.duration || !dialog.visible) return;

    const timeoutId = window.setTimeout(() => {
      dispatch({ type: "SHOW_NEXT_DIALOG" });
    }, dialog.current.duration);

    return () => window.clearTimeout(timeoutId);
  }, [dialog.current, dialog.visible, dispatch]);

  const dismiss = useCallback(() => {
    dismissDialog();
    dispatch({ type: "SHOW_NEXT_DIALOG" });
  }, [dismissDialog, dispatch]);

  return {
    message: dialog.current,
    visible: dialog.visible && dialog.current !== null,
    dismiss,
  };
}
