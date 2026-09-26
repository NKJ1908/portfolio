import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + offset;

        // If at the very bottom of the document, activate the last section (typically contact)
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
          setActiveId(sectionIds[sectionIds.length - 1]);
          ticking = false;
          return;
        }

        let currentActive = sectionIds[0];

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const top = element.offsetTop;
            if (scrollPosition >= top) {
              currentActive = id;
            }
          }
        }

        setActiveId(currentActive);
        ticking = false;
      });
      ticking = true;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
