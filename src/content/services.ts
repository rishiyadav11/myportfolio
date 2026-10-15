/**
 * Services for business clients. Prices are "starting from" in ₹.
 * `price: null` renders "Price on request" until Rishi fills it in.
 */

export type Service = {
  slug: string;
  name: string;
  short: string;
  /** TODO: starting price in ₹, e.g. "₹30,000". */
  price: string | null;
  timeline: string;
  deliverables: string[];
  href: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Websites & redesigns",
    short: "A fast, clear website that explains what you do and turns visitors into enquiries.",
    price: null, // TODO ₹ website
    timeline: "2–4 weeks",
    deliverables: [
      "Up to 8 pages, designed and written with you",
      "Mobile-first, Lighthouse 90+ on launch",
      "Contact form, WhatsApp and call buttons",
      "Basic on-page SEO and Google Search Console setup",
      "Hosting setup and handover in your name",
    ],
    href: "/work-with-me#websites",
  },
  {
    slug: "web-apps",
    name: "Web apps & dashboards",
    short: "Booking systems, admin panels, portals and AI features built around how your team works.",
    price: null, // TODO ₹ web app
    timeline: "4–10 weeks",
    deliverables: [
      "Scoping workshop and written spec",
      "Login, roles and admin panel",
      "Database design and API",
      "AI features (chat, search, summaries) where they help",
      "Documentation and handover",
    ],
    href: "/work-with-me#web-apps",
  },
  {
    slug: "audits",
    name: "Website audits & speed fixes",
    short: "A written report on what's slowing your site down or losing you leads, with a fix list.",
    price: null, // TODO ₹ audit
    timeline: "5–7 working days",
    deliverables: [
      "Speed and Core Web Vitals check (mobile and desktop)",
      "SEO, broken links and mobile issues",
      "Security headers and basic compliance hygiene",
      "Prioritised fix list with effort estimates",
    ],
    href: "/website-audit",
  },
  {
    slug: "care",
    name: "Care plans",
    short: "Monthly updates, backups, uptime checks and small changes so your site never goes stale.",
    price: null, // TODO ₹/month care plan
    timeline: "Monthly, cancel any time",
    deliverables: [
      "Content and image updates each month",
      "Backups and dependency updates",
      "Uptime and form checks",
      "Monthly short report",
    ],
    href: "/work-with-me#care",
  },
];

export const process = [
  {
    step: "Discovery",
    time: "Week 1",
    text: "A call to understand your business, goals and budget. You get a written scope and fixed quote.",
  },
  {
    step: "Design",
    time: "Week 1–2",
    text: "Page structure and design for the key pages. You review on your phone and we revise.",
  },
  {
    step: "Build",
    time: "Week 2–4",
    text: "I build the site, connect forms and analytics, and share a private preview link.",
  },
  {
    step: "Launch & care",
    time: "Launch week",
    text: "We go live on your domain, I check speed and SEO, and you get a handover guide.",
  },
];
