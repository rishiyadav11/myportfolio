/**
 * Work history and achievements, shown on /engineering and /resume.
 *
 * Honesty rule: only items with `confirmed: true` are rendered. Everything below
 * was taken from the resume PDF (public/rishi-yadav-resume.pdf) and still needs
 * Rishi's sign-off before it goes public. If nothing is confirmed, the
 * "Experience" sections are hidden entirely.
 */

export type Role = {
  title: string;
  org: string;
  /** e.g. "Narnaul" or "Remote" */
  location?: string;
  /** Display string, e.g. "Jan 2026 – present" */
  period: string;
  points: string[];
  /** Set to true only after Rishi has confirmed every word of this entry. */
  confirmed: boolean;
};

export const experience: Role[] = [
  {
    // TODO: Rishi to confirm. From resume PDF. Not a client project, so Revonix is not in projects.ts.
    title: "Founder",
    org: "Revonix Labs",
    location: "Narnaul",
    period: "Jan 2026 – present",
    points: [
      "Runs an ed-tech venture offering robotics, AI and maker-lab programmes to schools.",
      "Owns product, delivery and sales.",
    ],
    confirmed: false,
  },
  {
    // TODO: Rishi to confirm. From resume PDF ("Founder, VidoCraft & ReviewsBoosted, Sep 2025 – Jan 2026").
    title: "Founder",
    org: "VidoCraft and ReviewBoost",
    location: "Narnaul",
    period: "Sep 2025 – Jan 2026",
    points: [
      "Ran two small ventures in video production and review growth for local businesses.",
    ],
    confirmed: false,
  },
  {
    // TODO: Rishi to confirm title, dates and what can be said publicly. Resume says "Software Developer Intern, Aug 2025 – Sep 2025".
    title: "Software Developer Intern",
    org: "Fact Industries",
    period: "Aug 2025 – Sep 2025",
    points: ["Built and shipped internal software features in a production codebase with the engineering team."],
    confirmed: false,
  },
  {
    // TODO: Rishi to confirm. The brief says "Founder, Reworks Studio (2023–present)"; the resume
    // says "Full-Stack Developer, Reworks Studio, May 2025 – Aug 2025". Pick one before confirming.
    title: "Full-stack developer",
    org: "Reworks Studio",
    period: "May 2025 – Aug 2025",
    points: ["Delivered client websites from design implementation through deployment with Next.js, TypeScript and Tailwind CSS."],
    confirmed: false,
  },
  {
    // TODO: Rishi to confirm. From resume PDF.
    title: "Full-stack developer",
    org: "RB Health Club",
    period: "Jan 2025 – May 2025",
    points: [
      "Built the club website, an internal admin dashboard and the founder's site.",
      "Implemented membership flows, lead capture and role-based access on the dashboard.",
    ],
    confirmed: false,
  },
  {
    // TODO: Rishi to confirm. From resume PDF.
    title: "Developer",
    org: "Happy Laptops & Computers",
    period: "Sep 2024 – Jan 2025",
    points: ["Built a Shopify storefront, catalogue and order flows, plus the company site, for a retail electronics business."],
    confirmed: false,
  },
  {
    // TODO: Rishi to confirm. From resume PDF.
    title: "Freelance developer",
    org: "Self-employed",
    location: "Remote",
    period: "Sep 2023 – Sep 2024",
    points: ["Designed and built websites for schools, from requirements to deployment."],
    confirmed: false,
  },
];

export type Achievement = { title: string; detail: string; confirmed: boolean };

export const achievements: Achievement[] = [
  {
    // TODO: Rishi to confirm wording and add a link to proof (certificate or listing).
    title: "NASA Space Apps Challenge",
    detail: "Galactic Problem Solver, Sep 2023",
    confirmed: false,
  },
];

export const confirmedExperience = () => experience.filter((r) => r.confirmed);
export const confirmedAchievements = () => achievements.filter((a) => a.confirmed);
