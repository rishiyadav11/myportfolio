/**
 * Article registry. Each entry needs a matching MDX file at
 * src/content/writing/<slug>.mdx. Dates are ISO (YYYY-MM-DD).
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  /** Minutes, rounded up. */
  readingTime: number;
};

export const posts: Post[] = [
  {
    slug: "what-a-website-audit-finds",
    title: "What a website audit finds: lessons from auditing an investment firm's website",
    description:
      "The speed, SEO, security and compliance issues a website audit usually finds on a financial firm's site, and which fixes matter most first.",
    date: "2026-10-15",
    readingTime: 7,
  },
  {
    slug: "why-elementor-websites-are-slow",
    title: "Why most Elementor websites are slow, and how to fix them",
    description:
      "Elementor sites are often heavy for predictable reasons. Here's what slows them down, how to measure it, and the fixes that actually move Core Web Vitals.",
    date: "2026-10-15",
    readingTime: 7,
  },
  {
    slug: "website-cost-in-india",
    title: "Website cost in India in 2026: what you actually pay for",
    description:
      "A plain breakdown of what a business website costs in India in 2026: design, build, content, hosting, domain, maintenance, and where quotes differ.",
    date: "2026-10-15",
    readingTime: 6,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const latestPosts = (n = 3) =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);

/** "15 Oct 2026" */
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
