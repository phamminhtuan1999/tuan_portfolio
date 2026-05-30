/**
 * Portfolio content — the single source of truth for everything shown on the
 * page. Editing copy, projects, skills, experience, or credentials happens
 * here, not in the section components.
 */
import type { ReactNode } from "react";

/* ---------------- Selected work ---------------- */
export interface Project {
  n: string;
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  bullets: string[];
}

export const WORK: Project[] = [
  {
    n: "01",
    title: "Ca-Gov Disclosure System",
    tag: "US GOV · FINTECH",
    desc: "Secure financial-filing APIs + portal with audit trails.",
    stack: ["ASP.NET Core (.NET 8)", "C#", "EF Core", "SQL Server", "Razor Pages"],
    bullets: [
      "Built end-to-end APIs + portal for the Financial Transactions Team to create, validate, and submit receipts, invoices, and transactions.",
      "Implemented compliance-ready validation, audit logging, and secure access patterns supporting downstream auditing and public search.",
      "Designed SQL Server data access and managed EF Core migrations for reliable schema changes across local and production.",
      "Integrated a background job queue for asynchronous post-filing processing.",
    ],
  },
  {
    n: "02",
    title: "Phil Healthcare Management System",
    tag: "PH GOV · HEALTH",
    desc: "NestJS microservices, event-driven multi-tenant sync.",
    stack: ["NestJS", "ReactJS", "PostgreSQL", "Redis", "AWS"],
    bullets: [
      "Developed backend services in a microservice architecture for scalable, modular hospital & clinic deployment.",
      "Implemented event-driven services with PostgreSQL + Redis for real-time, fault-tolerant sync across multi-tenant clients.",
      "Cut response times from 6s to 1.5s via Redis caching and PostgreSQL optimization.",
      "Ran AWS end-to-end (EC2, RDS, S3, CloudWatch, SNS) with 99.9% uptime.",
    ],
  },
  {
    n: "03",
    title: "Ca-Gov Tax Management System",
    tag: "US GOV · TAX",
    desc: "Tax-billing logic + production stability hardening.",
    stack: ["Angular 13", ".NET Core", "SQL Server", "Azure", "Microservices"],
    bullets: [
      "Owned bug resolution and backend enhancements during the production release phase for US tax users.",
      "Developed backend features supporting multiple tax-billing types with complex financial logic in .NET Core + SQL Server.",
      "Hardened event-driven microservices for stability and performance at release.",
    ],
  },
  {
    n: "04",
    title: "Viet Nam Tier-1 Retail Platform",
    tag: "E-COMMERCE",
    desc: "12,000+ SKU catalogue, ElasticSearch + Redis at peak.",
    stack: [".NET Core", "ElasticSearch", "Redis", "SQL Server"],
    bullets: [
      "Engineered backend workflows for a 12,000+ SKU catalogue, keeping the platform stable during peak-traffic surges.",
      "Integrated ElasticSearch + Redis for distributed caching and rapid search indexing, offloading primary SQL Server.",
      "Refactored transaction modules for strict consistency between inventory and checkout services.",
      "Optimized server-side response logic, contributing to first-page Google rankings and increased organic traffic.",
    ],
  },
];

/* ---------------- Skills ---------------- */
export interface SkillGroup {
  num: string;
  title: string;
  /** [label, isPrimary] — primary tags are highlighted in accent. */
  tags: [string, boolean][];
}

export const SKILLS: SkillGroup[] = [
  {
    num: "01",
    title: "Languages & Frameworks_",
    tags: [
      ["Node.js (NestJS)", true],
      ["ASP.NET Core", true],
      ["TypeScript", false],
      ["C#", false],
      ["Python", false],
    ],
  },
  {
    num: "02",
    title: "Databases & Vector Search_",
    tags: [
      ["PostgreSQL", true],
      ["SQL Server", false],
      ["Redis", true],
      ["ElasticSearch", true],
      ["pgvector", true],
    ],
  },
  {
    num: "03",
    title: "Architecture, AI & DevOps_",
    tags: [
      ["Microservices", true],
      ["Event-Driven Systems", true],
      ["RAG Pipelines", true],
      ["LLM Integration", true],
      ["Docker", false],
      ["CI/CD", false],
      ["Git", false],
      ["Jira", false],
    ],
  },
  {
    num: "04",
    title: "Cloud & Practices_",
    tags: [
      ["AWS (EC2·RDS·S3·SNS)", true],
      ["Azure", false],
      ["TDD", true],
      ["SOLID", false],
      ["Agile / Scrum", false],
    ],
  },
];

/* ---------------- Experience timeline ---------------- */
export interface ExperienceEntry {
  role: string;
  co: string;
  span: string;
  now: boolean;
  bullets: ReactNode[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    co: "Datahouse Asia",
    span: "Oct 2022 — Present",
    now: true,
    bullets: [
      <span key="1">
        Architected core Web APIs for the <b>Government Disclosure System</b>, leading backend on a
        high-security financial filing system with stateless authorization and complex audit trails
        for state-level transactions.
      </span>,
      <span key="2">
        Engineered high-performance NestJS microservices for a multi-tenant healthcare ecosystem,{" "}
        <b>reducing response times from 6s to 1.5s</b> via Redis caching and PostgreSQL optimization.
      </span>,
      <span key="3">
        Managed multi-tenant AWS deployments, maintaining <b>99.9% uptime</b> through automated
        scaling and proactive monitoring.
      </span>,
      <span key="4">
        Led technical delivery and code quality through backlog refinement, PR reviews, and TDD
        adoption to minimize production regressions.
      </span>,
    ],
  },
  {
    role: ".NET Developer",
    co: "Mobile World Group",
    span: "Oct 2020 — Sep 2022",
    now: false,
    bullets: [
      <span key="1">
        Engineered backend workflows for a <b>Tier-1 retail website</b> with a 12,000+ SKU catalogue,
        optimizing .NET Core services to hold stability during peak-traffic surges.
      </span>,
      <span key="2">
        Integrated <b>ElasticSearch + Redis</b> for distributed caching and rapid search indexing,
        offloading primary SQL Server databases.
      </span>,
      <span key="3">
        Refactored transaction modules to ensure strict data consistency between inventory and
        checkout services.
      </span>,
      <span key="4">
        Optimized server-side response logic and content structure, contributing to{" "}
        <b>first-page Google rankings</b> and increased organic traffic.
      </span>,
    ],
  },
];

/* ---------------- Education / certifications ---------------- */
export interface Credential {
  i: string;
  t: string;
  d: string;
}

export const EDUCATION: Credential[] = [
  {
    i: "Education",
    t: "B.S. Software Technology",
    d: "Ho Chi Minh University of Technology — Scholarship Recipient.",
  },
  { i: "Certification", t: "AWS Solutions Architect", d: "Associate — Mar 2025." },
  { i: "Language", t: "IELTS 6.0", d: "Professional English proficiency." },
];
