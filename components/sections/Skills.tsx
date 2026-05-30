import Reveal from "@/components/Reveal";
import { SKILLS } from "@/lib/content";

/** Tech stack — grouped, taggable skills with primary highlights. */
export default function Skills() {
  return (
    <section className="sec" id="skills" data-screen-label="SKILLS">
      <div className="sec-head">
        <h2>
          Tech Stack<span className="u">_</span>
        </h2>
        <span className="sec-idx">[ 03 // SKILLS ]</span>
      </div>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <Reveal className="skill-cell" key={s.num}>
            <div className="sk-head">
              <span className="sk-num">{s.num}</span>
              <span className="sk-title">{s.title}</span>
            </div>
            <div className="tags">
              {s.tags.map(([label, primary], i) => (
                <span className={"tag" + (primary ? " primary" : "")} key={i}>
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
