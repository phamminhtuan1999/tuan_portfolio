"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "tp-theme";

/** Minimal line-art sun (stroke = currentColor). */
function SunGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="1.8" x2="12" y2="4.6" />
      <line x1="12" y1="19.4" x2="12" y2="22.2" />
      <line x1="1.8" y1="12" x2="4.6" y2="12" />
      <line x1="19.4" y1="12" x2="22.2" y2="12" />
      <line x1="4.6" y1="4.6" x2="6.6" y2="6.6" />
      <line x1="17.4" y1="17.4" x2="19.4" y2="19.4" />
      <line x1="4.6" y1="19.4" x2="6.6" y2="17.4" />
      <line x1="17.4" y1="6.6" x2="19.4" y2="4.6" />
    </svg>
  );
}

/** Minimal line-art crescent moon (stroke = currentColor). */
function MoonGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
      <path d="M20.5 14.8A8 8 0 0 1 9.2 3.5 6.6 6.6 0 1 0 20.5 14.8z" />
    </svg>
  );
}

/**
 * Persistent dark/light toggle rendered as a brutalist sliding key switch.
 * The active theme is set on <html data-theme> before first paint by the
 * inline script in layout.tsx; this component reads that on mount, then
 * writes data-theme + localStorage on change.
 */
export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Sync from the pre-paint attribute once on the client (avoids hydration mismatch).
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Brief cross-fade unless the user prefers reduced motion.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("theme-anim");
      window.setTimeout(() => root.classList.remove("theme-anim"), 320);
    }

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage unavailable (private mode) — theme still applies for the session */
    }
    setTheme(next);
  };

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      className={"theme-switch" + (isDark ? " on" : "")}
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="ts-label">
        {isDark ? "DARK" : "LIGHT"}
        <span className="u">_</span>
      </span>
      <span className="ts-track">
        <span className="ts-glyph sun" aria-hidden="true">
          <SunGlyph />
        </span>
        <span className="ts-glyph moon" aria-hidden="true">
          <MoonGlyph />
        </span>
        <span className="ts-knob" aria-hidden="true" />
      </span>
    </button>
  );
}
