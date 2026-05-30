"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  to: number;
  pad?: number;
  duration?: number;
  delay?: number;
}

/** Count-up number with cubic ease-out and zero-padding. */
export default function Counter({ to, pad = 4, duration = 1200, delay = 1200 }: CounterProps) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = setTimeout(() => {
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  return <span className="num counting">{String(val).padStart(pad, "0")}</span>;
}
