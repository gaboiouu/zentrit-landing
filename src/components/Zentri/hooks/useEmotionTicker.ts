import { useEffect } from "react";
import { useZentriContext } from "../states/ZentriContext";

/** Expira emociones temporales periódicamente */
export function useEmotionTicker() {
  const { dispatch } = useZentriContext();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      dispatch({ type: "TICK_EMOTION" });
    }, 500);

    return () => window.clearInterval(intervalId);
  }, [dispatch]);
}
