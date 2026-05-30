"use client";

import { useCallback } from "react";
import { SECTIONS, type SectionLabel } from "@/lib/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/** Sticky navigation with scroll-spy highlighting and smooth in-page scrolling. */
export default function NavBar() {
  const active = useScrollSpy(SECTIONS);

  const onNav = useCallback((label: SectionLabel) => {
    const target = SECTIONS.find((s) => s.label === label) ?? SECTIONS[0];
    const el = document.getElementById(target.id);
    if (!el) return;
    const top = target.id === "home" ? 0 : el.offsetTop - 64;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <nav className="nav navbar-sticky">
      <div className="logo" onClick={() => onNav("HOME")}>
        TUAN<span className="u">_</span>PHAM
      </div>
      <div className="links">
        {SECTIONS.map(({ label }) => (
          <button
            key={label}
            className={"navlink" + (active === label ? " active" : "")}
            onClick={() => onNav(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="spacer" />
      <span className="status">
        <span className="dot" />
        OPEN TO WORK_
      </span>
    </nav>
  );
}
