import Boot from "@/components/Boot";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="frame">
      <Boot />
      <TopBar />
      <NavBar />
      <Hero />
      <Marquee
        items={[
          "MINH TUAN PHAM · SENIOR BACKEND ENGINEER",
          "NODE.JS · NESTJS · .NET 8",
          "AWS CERTIFIED SOLUTIONS ARCHITECT",
        ]}
      />
      <About />
      <Work />
      <Skills />
      <Marquee
        reverse
        items={[
          "99.9% UPTIME",
          "75% LOWER LATENCY",
          "TDD · CLEAN CODE",
          "EVENT-DRIVEN · MICROSERVICES",
          "OPEN TO WORK",
        ]}
      />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
