"use client";

import { useEffect, useState } from "react";

interface BootLine {
  t: string;
  ok?: string;
  d?: string;
}

const LINES: BootLine[] = [
  { t: "> initializing portfolio.sh", d: "" },
  { t: "> loading profile ", ok: "[ MINH TUAN PHAM ]" },
  { t: "> role           ", ok: "[ SENIOR BACKEND ENGINEER ]" },
  { t: "> region         ", ok: "[ REMOTE · US TIMEZONES OK ]" },
  { t: "> status         ", ok: "[ OPEN TO WORK ]" },
  { t: "> mount /work /skills /experience", d: "  ...ok" },
];

/** Stepped terminal boot flourish shown over the page on first load. */
export default function Boot() {
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= LINES.length) clearInterval(iv);
    }, 95);
    const end = setTimeout(() => setDone(true), 1150);
    return () => {
      clearInterval(iv);
      clearTimeout(end);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
  }, [done]);

  return (
    <div className={"boot" + (done ? " done" : "")} aria-hidden="true">
      {LINES.map((l, idx) => (
        <div key={idx} className={"boot-line" + (idx < shown ? " show" : "")}>
          <span className="dim">{l.t}</span>
          {l.ok && <span className="ok">{l.ok}</span>}
          {l.d && <span className="dim">{l.d}</span>}
        </div>
      ))}
      <div className="boot-bar">
        <i />
      </div>
    </div>
  );
}
