import Reveal from "@/components/Reveal";

/** About / profile summary with a side panel of quick facts. */
export default function About() {
  return (
    <section className="sec" id="about" data-screen-label="ABOUT">
      <div className="sec-head">
        <h2>
          Profile<span className="u">_</span>
        </h2>
        <span className="sec-idx">[ 01 // ABOUT ]</span>
      </div>
      <div className="about">
        <Reveal className="about-main">
          <p className="lead">
            I build backends that have to stay up<span className="u">_</span> &mdash; for US
            government, healthcare, and Tier-1 retail.
          </p>
          <p>
            Senior Backend Engineer with <strong>4+ years</strong> architecting high-availability
            distributed systems. I specialize in <strong>Node.js (NestJS)</strong> and{" "}
            <strong>ASP.NET Core (.NET 8)</strong>, with a track record of slashing API latency by{" "}
            <strong>75%</strong> through strategic caching and query optimization.
          </p>
          <p>
            Expert in <strong>AWS</strong> cloud infrastructure and event-driven architectures.
            Committed to Test-Driven Development and clean-code principles to keep high-volume
            systems at <strong>99.9% stability</strong> in production.
          </p>
        </Reveal>
        <div className="about-side">
          <Reveal className="fact">
            <div className="k">Experience_</div>
            <div className="v">
              4+ Years<span className="u"> /</span> Backend
            </div>
          </Reveal>
          <Reveal className="fact">
            <div className="k">Core Stack_</div>
            <div className="v">
              NestJS<span className="u"> ·</span> .NET 8<span className="u"> ·</span> AWS
            </div>
          </Reveal>
          <Reveal className="fact">
            <div className="k">Certified_</div>
            <div className="v">AWS Solutions Architect</div>
          </Reveal>
          <Reveal className="fact">
            <div className="k">Availability_</div>
            <div className="v">
              Open<span className="u">{" //"}</span> US Timezones OK
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
