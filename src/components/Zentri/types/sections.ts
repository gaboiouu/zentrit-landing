import type { ZentriEmotion } from "./emotions";

/** Configuración de una sección observable de la página */
export interface SectionConfig {
  id: string;
  /** Selector CSS del elemento a observar */
  selector: string;
  /** Mensaje que Zentri muestra al entrar en la sección */
  message?: string;
  /** Emoción asociada a la sección */
  emotion?: ZentriEmotion;
  /** Umbral de intersección (0–1) */
  threshold: number;
  /** Margen del root del observer */
  rootMargin: string;
  /** Si solo debe dispararse una vez */
  once: boolean;
}

/** Estado de detección de secciones */
export interface SectionState {
  activeSectionId: string | null;
  visitedSections: Set<string>;
  /** Secciones actualmente visibles en viewport */
  visibleSections: string[];
}
