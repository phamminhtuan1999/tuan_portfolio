import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, IBM_Plex_Mono, Space_Mono } from "next/font/google";

import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";

/* Self-hosted, optimized Google Fonts exposed as CSS variables consumed in tokens.css. */
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"], // display/headings — bold + black are the only weights used
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"], // UI / body — regular + bold
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400"], // data / code labels — regular only
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minh Tuan Pham — Senior Backend Engineer",
  description:
    "Senior Backend Engineer with 4+ years architecting high-availability distributed systems in Node.js (NestJS), .NET 8, and AWS. AWS Certified Solutions Architect.",
  authors: [{ name: "Minh Tuan Pham" }],
  keywords: [
    "Senior Backend Engineer",
    "NestJS",
    "Node.js",
    ".NET 8",
    "AWS",
    "Microservices",
    "Event-Driven Architecture",
  ],
  openGraph: {
    title: "Minh Tuan Pham — Senior Backend Engineer",
    description:
      "High-availability distributed systems in Node.js (NestJS), .NET 8, and AWS.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Font CSS variables live on <html> (:root) so the --font-* tokens in
    // tokens.css — which are declared on :root and reference these — resolve.
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${spaceMono.variable} ${ibmPlexMono.variable}`}
    >
      <body className="ds-canvas">{children}</body>
    </html>
  );
}
