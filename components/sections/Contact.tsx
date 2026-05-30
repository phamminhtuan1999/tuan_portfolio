"use client";

import Button from "@/components/Button";
import { CV, EMAIL, GITHUB, LINKEDIN } from "@/lib/site";

/** Closing call-to-action plus footer with contact links. */
export default function Contact() {
  return (
    <section className="sec" id="contact" data-screen-label="CONTACT">
      <div className="cta">
        <h2>
          Let&apos;s build
          <br />
          something<span className="u">_</span> reliable.
        </h2>
        <p className="para muted" style={{ maxWidth: "46ch" }}>
          AWS Certified Solutions Architect. Open to senior backend roles building systems that have
          to stay up &mdash; remote, US timezones welcome. Tell me what you&apos;re shipping.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button onClick={() => (window.location.href = `mailto:${EMAIL}`)}>Get In Touch -&gt;</Button>
          <Button variant="ghost" onClick={() => window.open(CV, "_blank")}>
            Download CV_
          </Button>
        </div>
      </div>
      <div className="foot">
        <span>© 2026 MINH TUAN PHAM_</span>
        <span style={{ display: "flex", gap: 16 }}>
          <a href={`mailto:${EMAIL}`}>EMAIL</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
        </span>
      </div>
    </section>
  );
}
