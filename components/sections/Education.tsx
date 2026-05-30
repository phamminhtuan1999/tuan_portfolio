import Reveal from "@/components/Reveal";
import { EDUCATION } from "@/lib/content";

/** Credentials — education, certifications, and language proficiency. */
export default function Education() {
  return (
    <section className="sec" id="education" data-screen-label="EDUCATION">
      <div className="sec-head">
        <h2>
          Credentials<span className="u">_</span>
        </h2>
        <span className="sec-idx">[ 05 // EDU + CERTS ]</span>
      </div>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <Reveal className="edu" key={i}>
            <span className="ei">{e.i}_</span>
            <span className="et">{e.t}</span>
            <span className="ed">{e.d}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
