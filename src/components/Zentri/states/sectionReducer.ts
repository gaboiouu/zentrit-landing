import type { SectionState } from "../types/sections";
import type { SectionAction } from "./actions";

export function sectionReducer(
  state: SectionState,
  action: SectionAction,
): SectionState {
  switch (action.type) {
    case "SET_ACTIVE_SECTION":
      return { ...state, activeSectionId: action.sectionId };

    case "MARK_SECTION_VISITED": {
      const visited = new Set(state.visitedSections);
      visited.add(action.sectionId);
      return { ...state, visitedSections: visited };
    }

    case "SET_VISIBLE_SECTIONS":
      return { ...state, visibleSections: action.sectionIds };

    default:
      return state;
  }
}
