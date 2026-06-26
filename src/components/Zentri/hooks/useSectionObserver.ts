import { useEffect, useRef } from "react";
import { useZentriContext } from "../states/ZentriContext";
import type { SectionConfig } from "../types/sections";

export function useSectionObserver(sections: SectionConfig[]) {
  const { dispatch, showDialog } = useZentriContext();
  const observedRef = useRef<Map<string, boolean>>(new Map());

  useEffect(() => {
    if (sections.length === 0) return;

    const observers: IntersectionObserver[] = [];

    for (const section of sections) {
      const elements = document.querySelectorAll(section.selector);
      if (elements.length === 0) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleIds: string[] = [];

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleIds.push(section.id);

              if (!observedRef.current.get(section.id)) {
                dispatch({ type: "SET_ACTIVE_SECTION", sectionId: section.id });
                dispatch({ type: "MARK_SECTION_VISITED", sectionId: section.id });

                if (section.message) {
                  showDialog(
                    {
                      text: section.message,
                      emotion: section.emotion,
                      priority: 1,
                      duration: 5000,
                    },
                    "section",
                  );
                } else if (section.emotion) {
                  dispatch({
                    type: "SET_EMOTION",
                    emotion: section.emotion,
                    source: "section",
                  });
                }

                if (section.once) {
                  observedRef.current.set(section.id, true);
                  observer.unobserve(entry.target);
                }
              }
            }
          });

          if (visibleIds.length > 0) {
            dispatch({ type: "SET_VISIBLE_SECTIONS", sectionIds: visibleIds });
          }
        },
        {
          threshold: section.threshold,
          rootMargin: section.rootMargin,
        },
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    }

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sections, dispatch, showDialog]);
}
