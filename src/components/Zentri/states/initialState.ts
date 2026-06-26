import type { EmotionState } from "../types/emotions";
import type { ZentriDialogState } from "../types/dialogs";
import type { SectionState } from "../types/sections";
import type { ZentriAIProvider, ZentriAIStatus } from "../types/ai";

export interface ZentriState {
  emotion: EmotionState;
  dialog: ZentriDialogState;
  section: SectionState;
  ai: {
    status: ZentriAIStatus;
    provider: ZentriAIProvider | null;
  };
  enabled: boolean;
}

export const initialEmotionState: EmotionState = {
  current: "neutral",
  previous: null,
  expiresAt: null,
  source: "idle",
};

export const initialDialogState: ZentriDialogState = {
  current: null,
  queue: [],
  visible: false,
  dismissed: false,
};

export const initialSectionState: SectionState = {
  activeSectionId: null,
  visitedSections: new Set(),
  visibleSections: [],
};

export const initialZentriState: ZentriState = {
  emotion: initialEmotionState,
  dialog: initialDialogState,
  section: initialSectionState,
  ai: {
    status: "idle",
    provider: null,
  },
  enabled: true,
};
