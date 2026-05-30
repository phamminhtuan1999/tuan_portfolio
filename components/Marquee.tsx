interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

/** Infinite horizontal scrolling ticker of short phrases. */
export default function Marquee({ items, reverse = false }: MarqueeProps) {
  const line = items.join("  |  ") + "  |  ";
  return (
    <div className={"marquee" + (reverse ? " marquee--rev" : "")} aria-hidden="true">
      <div className="track">
        <span>{line + line}</span>
        <span>{line + line}</span>
      </div>
    </div>
  );
}
