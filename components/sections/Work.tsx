"use client";

import { useRef, useState } from "react";
import { WORK } from "@/lib/content";

/** Selected work — horizontal scroll-snap carousel with segment controls. */
export default function Work() {
  const scRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const cardW = () => {
    const sc = scRef.current;
    const card = sc?.querySelector<HTMLElement>(".proj-card");
    return card ? card.getBoundingClientRect().width : sc ? sc.clientWidth * 0.64 : 480;
  };

  const onScroll = () => {
    const sc = scRef.current;
    if (!sc) return;
    const i = Math.round(sc.scrollLeft / cardW());
    setIdx(Math.max(0, Math.min(WORK.length - 1, i)));
  };

  const go = (dir: number) => {
    scRef.current?.scrollBy({ left: dir * cardW(), behavior: "smooth" });
  };

  const jump = (i: number) => {
    scRef.current?.scrollTo({ left: i * cardW(), behavior: "smooth" });
  };

  return (
    <section className="sec" id="work" data-screen-label="WORK">
      <div className="sec-head">
        <h2>
          Selected Work<span className="u">_</span>
        </h2>
        <span className="sec-idx">[ 02 // 04 PROJECTS ]</span>
      </div>

      <div className="work-ctrl">
        <div className="wc-left">
          <span className="wc-count">
            {String(idx + 1).padStart(2, "0")} <span className="wc-sep">/</span> 04
          </span>
          <div className="wc-segs">
            {WORK.map((_, i) => (
              <button
                key={i}
                className={"seg" + (i === idx ? " on" : "")}
                onClick={() => jump(i)}
                aria-label={"Project " + (i + 1)}
              />
            ))}
          </div>
        </div>
        <div className="wc-right">
          <span className="wc-hint">DRAG &middot; SCROLL -&gt;</span>
          <button
            className="wc-btn"
            onClick={() => go(-1)}
            disabled={idx === 0}
            aria-label="Previous project"
          >
            [ &lt;- ]
          </button>
          <button
            className="wc-btn"
            onClick={() => go(1)}
            disabled={idx === WORK.length - 1}
            aria-label="Next project"
          >
            [ -&gt; ]
          </button>
        </div>
      </div>

      <div className="work-scroller" ref={scRef} onScroll={onScroll}>
        <div className="work-track">
          {WORK.map((w, i) => (
            <article className={"proj-card" + (i === idx ? " active" : "")} key={w.n}>
              <div className="pc-top">
                <span className="pc-num">{w.n}</span>
                <span className="pc-tag">{w.tag}</span>
              </div>
              <h3 className="pc-title">{w.title}</h3>
              <p className="pc-desc">{w.desc}</p>
              <ul className="pc-bullets">
                {w.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="pc-stack">
                {w.stack.map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>
            </article>
          ))}
          <div className="work-end" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
