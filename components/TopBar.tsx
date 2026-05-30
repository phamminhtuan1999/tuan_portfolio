"use client";

import { useEffect, useState } from "react";
import { EMAIL } from "@/lib/site";

/** Slim top bar with a tagline and a live Pacific-time clock. */
export default function TopBar() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        timeZone: "America/Los_Angeles",
      });
      setClock(t + " PT");
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="topbar">
      <span>WELCOME TO MINH TUAN PHAM_ &mdash; SENIOR BACKEND ENGINEER</span>
      <span className="contact">
        <a className="ilink" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <span className="pipe">|</span>
        {/* suppressHydrationWarning: clock differs between server render and client */}
        <span suppressHydrationWarning>{clock}</span>
      </span>
    </div>
  );
}
