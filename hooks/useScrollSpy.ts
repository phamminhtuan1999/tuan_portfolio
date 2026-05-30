import { useEffect, useState } from "react";
import type { SectionLabel } from "@/lib/site";

interface SpyTarget {
  id: string;
  label: SectionLabel;
}

/**
 * Tracks which section is currently in view based on scroll position and
 * returns its label. Mirrors the document's vertical scroll against each
 * section's `offsetTop` (with a fixed-header offset).
 */
export function useScrollSpy(targets: readonly SpyTarget[]): SectionLabel {
  const [active, setActive] = useState<SectionLabel>(targets[0]?.label ?? ("HOME" as SectionLabel));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = targets[0]?.label ?? ("HOME" as SectionLabel);
      for (const { id, label } of targets) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = label;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [targets]);

  return active;
}
