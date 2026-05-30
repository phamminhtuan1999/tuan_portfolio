"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Reveal-on-scroll wrapper. Adds the `in` class when the element enters the
 * viewport (via IntersectionObserver) to trigger the CSS fade/slide. Respects
 * `prefers-reduced-motion` by showing content immediately.
 */
export default function Reveal({ children, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in", "show");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} reveal`} style={style}>
      {children}
    </div>
  );
}
