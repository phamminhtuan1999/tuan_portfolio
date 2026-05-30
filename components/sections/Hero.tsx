import Image from "next/image";
import Counter from "@/components/Counter";
import { PORTRAIT } from "@/lib/site";

/** Hero — 3-column brutalist grid with animated stat counters. */
export default function Hero() {
  return (
    <section className="hero" id="home" data-screen-label="HERO">
      {/* LEFT ~45% */}
      <div className="col">
        <div className="ghost">BACKEND</div>
        <div className="pad megawrap">
          <span
            className="badge"
            style={{ marginBottom: "20px" }}
          >
            [SENIOR BACKEND ENGINEER_]
          </span>
          <h1 className="mega">
            Systems<span className="u">_</span>
            <br />
            Built to<span className="u">_</span>
            <br />
            Scale<span className="cursor-blink" />
          </h1>
        </div>
        <div className="pad leadblock">
          <h3 className="subhead">I architect high-availability systems_</h3>
          <p className="para muted">
            4+ years building distributed backends for{" "}
            <a href="#work">government, healthcare &amp; e-commerce</a> &mdash; Node.js (NestJS),
            .NET 8, and AWS. I cut API latency by 75% and hold 99.9% uptime in production.
          </p>
        </div>
      </div>

      {/* CENTER ~30% */}
      <div className="col">
        <div className="center-stack">
          <div className="pad center-top">
            <h3 className="subhead">
              Minh Tuan Pham<span className="u">_</span>
            </h3>
            <p className="para">
              Senior Backend Engineer specializing in high-availability distributed systems,
              event-driven architecture, and cloud infrastructure on AWS.
            </p>
            <p className="para muted">
              Committed to Test-Driven Development and clean code &mdash; slashing latency and
              keeping high-volume systems stable in production.
            </p>
          </div>
          <div className="stats">
            <div className="stat">
              <Counter to={75} pad={4} />
              <span className="lab">% Latency Cut_</span>
            </div>
            <div className="stat">
              <Counter to={99} pad={4} />
              <span className="lab">.9% Uptime Held_</span>
            </div>
          </div>
        </div>
        <span className="scrollind">SCROLL DOWN -&gt;</span>
      </div>

      {/* RIGHT ~25% */}
      <div className="col">
        <div className="media">
          <Image
            src={PORTRAIT}
            alt="Minh Tuan Pham"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
          <div className="scrim" />
          <span className="cap">MINH TUAN PHAM_ // SAN DIEGO, CALIFORNIA</span>
        </div>
      </div>
    </section>
  );
}
