import type { ReactNode } from "react";
import { ZentriProvider, type ZentriProviderProps } from "../states/ZentriContext";
import { ZentriAssistant } from "./ZentriAssistant";

export interface ZentriRootProps extends ZentriProviderProps {
  className?: string;
}

/**
 * Punto de entrada recomendado: envuelve con Provider y renderiza el asistente.
 *
 * @example
 * // En Astro:
 * // <ZentriRoot client:load />
 */
export function ZentriRoot({ children, config, className }: ZentriRootProps & { children?: ReactNode }) {
  return (
    <ZentriProvider config={config}>
      <ZentriAssistant className={className} />
      {children}
    </ZentriProvider>
  );
}
