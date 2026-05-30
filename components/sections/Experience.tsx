import Reveal from "@/components/Reveal";
import { EXPERIENCE } from "@/lib/content";

/** Career timeline with role, tenure, and impact bullets. */
export default function Experience() {
  return (
    <section className="sec" id="experience" data-screen-label="EXPERIENCE">
      <div className="sec-head">
        <h2>
          Experience<span className="u">_</span>
        </h2>
        <span className="sec-idx">[ 04 // CAREER ]</span>
      </div>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div className="tl-row" key={i}>
            <div className="tl-when">
              <div className="role">{e.role}</div>
              <div className={"span" + (e.now ? " now" : "")}>{e.span}</div>
            </div>
            <Reveal className="tl-body">
              <h3 className="co">
                {e.co}
                <span className="u">_</span>
              </h3>
              <ul>
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
