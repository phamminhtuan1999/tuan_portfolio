/** Site-wide constants: contact details and asset paths. */

export const EMAIL = "phamminhtuan1999@gmail.com";
export const GITHUB = "https://github.com/phamminhtuan1999";
export const LINKEDIN = "https://www.linkedin.com/in/tuan-pham-9095b9299/";

/** Static assets served from /public. */
export const CV = "/cv/TuanPhamSWE.pdf";
export const PORTRAIT = "/portrait-tuan.png";

/** Navigation / scroll-spy sections, in page order. */
export const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
] as const;

export type SectionLabel = (typeof SECTIONS)[number]["label"];
