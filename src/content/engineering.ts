/**
 * Content for /engineering (the page for recruiters and founders).
 * Stack, architecture notes and GitHub highlights live here.
 */

export type StackItem = {
  name: string;
  /** TODO: years used. Unknown for now; rendered only when set. */
  years: number | null;
};

export type StackGroup = { area: string; items: StackItem[] };

const items = (...names: string[]): StackItem[] => names.map((name) => ({ name, years: null }));

// Skills from the brief and from Rishi's resume PDF. TODO: Rishi to confirm list and add years.
export const stack: StackGroup[] = [
  {
    area: "Frontend",
    items: items("TypeScript", "React", "Next.js", "Tailwind CSS", "React Native", "GSAP", "Framer Motion"),
  },
  {
    area: "Backend",
    items: items("Node.js", "Express", "tRPC", "Hono", "Python", "FastAPI", "Zod"),
  },
  {
    area: "Data",
    items: items("PostgreSQL", "MongoDB", "Supabase", "Prisma", "Drizzle", "Qdrant"),
  },
  {
    area: "AI / LLM",
    items: items("OpenAI API", "Llama 3", "RAG with vector databases", "LangChain"),
  },
  {
    area: "DevOps & tooling",
    items: items("Vercel", "AWS", "Docker", "Cloudflare", "GitHub Actions", "Shopify", "WordPress", "Lighthouse"),
  },
];

export type EngineeringNote = {
  slug: string;
  title: string;
  /** Project this note is about (links to /work/<slug>). */
  projectSlug: string;
  what: string;
  why: string;
  tradeoffs: string;
};

/**
 * Approach notes for real projects. They describe how these sites are built in
 * general terms that can be checked against the live sites, not internal details.
 * ReviewBoost AI's note comes from `architecture` in projects.ts.
 */
export const engineeringNotes: EngineeringNote[] = [
  {
    // TODO: Rishi to confirm details (rendering mode, hosting) for Goyal Netra.
    slug: "static-first-clinic-site",
    title: "A static-first site for an eye hospital",
    projectSlug: "goyal-netra",
    what: "Treatment, doctor and contact pages are pre-rendered with Next.js and served as static HTML from a CDN. Content sits in typed files, and every page ends with the same enquiry options: call, WhatsApp or a short form.",
    why: "Patients mostly arrive on phones, often on patchy mobile data, and want one thing: to book. Static pages load fast without a server round trip, and repeating the same enquiry options means nobody has to hunt for a phone number.",
    tradeoffs: "Content changes need a rebuild and deploy instead of a CMS edit. For a site that changes a few times a month that's acceptable, and it removes a database, an admin login and a whole class of security updates.",
  },
  {
    // TODO: Rishi to confirm details (image formats, gallery approach) for Chandni Resorts.
    slug: "photo-heavy-resort-site",
    title: "Large photos without a slow page",
    projectSlug: "chadni-resorts",
    what: "Room, venue and event photos go through next/image: responsive sizes per breakpoint, modern formats (AVIF/WebP) where the browser supports them, explicit width and height, and lazy loading for everything below the fold. Only the hero image loads eagerly.",
    why: "A resort sells with photos, but uncompressed galleries are the most common reason hospitality sites feel slow. Serving the right size to each device keeps the photos sharp without making a phone download desktop-sized files.",
    tradeoffs: "On-demand image optimisation uses hosting compute and adds a short delay the first time each size is requested. Pre-sizing images by hand would avoid that but makes every photo update a chore for the client.",
  },
  {
    // TODO: Rishi to confirm details (which sites use email delivery vs WhatsApp only, provider used).
    slug: "lead-routing",
    title: "Routing enquiries to where the team already works",
    projectSlug: "pariksha-career-institute",
    what: "Enquiry forms validate on the server, drop obvious spam with a honeypot field, and send the details by email. Next to each form, a WhatsApp link opens a chat with a pre-filled message so people can skip the form entirely.",
    why: "Small teams at institutes and clinics reply on WhatsApp and check email, not a dashboard. Sending leads straight there means enquiries get answered the same day instead of sitting in a database nobody opens.",
    tradeoffs: "There's no CRM, so reporting is limited to counting emails and analytics events. That's the right trade for a team of a few people; a bigger team would want enquiries stored and assigned.",
  },
];

export type Repo = {
  name: string;
  /** From the GitHub API. Null when the repo has no description. */
  description: string | null;
  language: string | null;
  url: string;
  homepage?: string;
};

/**
 * Public, non-fork repositories fetched once from
 * https://api.github.com/users/rishiyadav11/repos on 15 Oct 2026.
 * TODO: Rishi to pick the final set and add one-line descriptions on GitHub (most are empty).
 */
export const repos: Repo[] = [
  {
    name: "chattrix",
    description: null,
    language: "TypeScript",
    url: "https://github.com/rishiyadav11/chattrix",
    homepage: "https://chattrix.tech/",
  },
  {
    name: "neuronote-blog-",
    description: "A full-stack website using Hono.js and React.",
    language: "TypeScript",
    url: "https://github.com/rishiyadav11/neuronote-blog-",
    homepage: "https://neuronote-blog.vercel.app",
  },
  {
    name: "device-tracker",
    description: null,
    language: "TypeScript",
    url: "https://github.com/rishiyadav11/device-tracker",
    homepage: "https://device-tracker-plum.vercel.app",
  },
  {
    name: "wikni",
    description: null,
    language: "TypeScript",
    url: "https://github.com/rishiyadav11/wikni",
    homepage: "https://wikni.vercel.app",
  },
  {
    name: "vidogen",
    description: null,
    language: "TypeScript",
    url: "https://github.com/rishiyadav11/vidogen",
    homepage: "https://vidogen.vercel.app",
  },
  {
    name: "webkitter",
    description: null,
    language: "TypeScript",
    url: "https://github.com/rishiyadav11/webkitter",
    homepage: "https://webkitter.vercel.app",
  },
];

/**
 * TODO: Rishi to confirm. The resume says "Open to full-time roles and freelance projects".
 * Set to null to hide the line.
 */
export const openTo: string | null = "Open to full-time and contract roles in full-stack and AI engineering.";
