/**
 * Case studies. Add a project by appending an object here and dropping
 * screenshots into /public/work/<slug>-desktop.webp and <slug>-mobile.webp.
 *
 * Honesty rule: only fill `results`, `quote`, `role`, `duration` with real,
 * confirmed information. Leave them empty/undefined otherwise and the UI hides them.
 */

export type Industry =
  | "Healthcare"
  | "Education"
  | "Hospitality"
  | "Retail & e-commerce"
  | "Fitness"
  | "SaaS & AI"
  | "Brands & studios";

export const industries: Industry[] = [
  "Healthcare",
  "Education",
  "Hospitality",
  "Retail & e-commerce",
  "Fitness",
  "SaaS & AI",
  "Brands & studios",
];

export type Result = {
  label: string;
  value: string;
  /** e.g. "Measured 15 Oct 2026, Lighthouse mobile" */
  note?: string;
};

export type Project = {
  slug: string;
  client: string;
  industry: Industry;
  city?: string;
  year?: number;
  url: string;
  /** Extra live URLs (e.g. subdomains) shown under the main link. */
  links?: { label: string; url: string }[];
  /** One plain-language line for cards. */
  summary: string;
  role?: string;
  duration?: string;
  problem?: string;
  built: string[];
  results: Result[];
  quote?: { text: string; author: string; title?: string };
  stack: string[];
  /** Areas used to link from local landing pages. */
  region?: "Narnaul" | "Haryana" | "Delhi NCR" | "India";
  featured?: boolean;
  /** Short technical note shown on /engineering. */
  architecture?: { what: string; why: string; tradeoffs: string };
  screenshots: {
    desktop: string;
    mobile: string;
    desktopAlt: string;
    mobileAlt: string;
  };
};

const shots = (slug: string, client: string) => ({
  desktop: `/work/${slug}-desktop.webp`,
  mobile: `/work/${slug}-mobile.webp`,
  desktopAlt: `${client} website home page on desktop`,
  mobileAlt: `${client} website home page on a phone`,
});

export const projects: Project[] = [
  {
    slug: "goyal-netra",
    client: "Goyal Netra",
    industry: "Healthcare",
    city: "Narnaul",
    region: "Narnaul",
    // TODO: confirm year, role, duration, problem and results.
    url: "https://www.goyalnetra.com/",
    summary: "Website for an eye hospital: treatments, doctors and appointment enquiries.",
    built: [
      "Treatment and service pages patients can understand",
      "Doctor profiles and hospital information",
      "Appointment enquiry flow that works on any phone",
    ],
    results: [],
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    featured: true,
    screenshots: shots("goyal-netra", "Goyal Netra"),
  },
  {
    slug: "pariksha-career-institute",
    client: "Pariksha Career Institute",
    industry: "Education",
    // TODO: confirm city, year, role, duration, problem and results.
    url: "https://www.parikshacareerinstitute.in/",
    summary: "Website for a coaching institute running NEET, JEE, Olympiad and foundation batches.",
    built: [
      "Course and batch pages for NEET, JEE, Olympiads and classes 8–10",
      "Admission enquiry form for parents and students",
      "Fast, mobile-first layout for students on budget phones",
    ],
    results: [],
    stack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    screenshots: shots("pariksha-career-institute", "Pariksha Career Institute"),
  },
  {
    slug: "chadni-resorts",
    client: "Chandni Resorts",
    industry: "Hospitality",
    city: "Narnaul",
    region: "Narnaul",
    // TODO: confirm year, role, duration, problem and results.
    url: "https://www.chadniresorts.in/",
    summary: "Resort website with rooms, amenities, events and booking requests.",
    built: [
      "Room, amenity and event pages with large, fast-loading photos",
      "Booking request form that reaches the front desk directly",
      "Event and wedding enquiry flow",
    ],
    results: [],
    stack: ["Next.js", "Tailwind CSS"],
    featured: true,
    screenshots: shots("chadni-resorts", "Chandni Resorts"),
  },
  // TODO: Baemark (https://www.baemark.com/, fashion e-commerce) is left out for now: the
  // domain did not resolve on 15 Oct 2026, so there's no live site or screenshot to show.
  {
    slug: "rb-health-club",
    client: "RB Health Club",
    industry: "Fitness",
    city: "Narnaul",
    region: "Narnaul",
    // TODO: confirm year, role, duration, problem and results.
    url: "https://www.rbhealthclub.com/",
    summary: "Gym website with programmes, membership plans and enquiries.",
    built: [
      "Programme and membership plan pages",
      "Membership enquiry flow",
      "Mobile-first layout for people checking plans on the go",
    ],
    results: [],
    stack: ["Next.js", "Tailwind CSS", "Node.js"],
    screenshots: shots("rb-health-club", "RB Health Club"),
  },
  {
    slug: "reviewboost-ai",
    client: "ReviewBoost AI",
    industry: "SaaS & AI",
    // TODO: confirm year, role, duration, problem and results.
    url: "https://reviewboosted.in/",
    summary: "AI tool that drafts replies to customer reviews, grounded in each business's own details.",
    built: [
      "Review analysis and reply drafting with an open-weight LLM (Llama 3)",
      "Retrieval over each business's own information so replies stay specific",
      "Web dashboard to review and approve replies",
    ],
    results: [],
    stack: ["Python", "FastAPI", "Llama 3", "Qdrant", "LangChain", "Next.js"],
    featured: true,
    architecture: {
      what: "A FastAPI service retrieves business-specific context from a Qdrant vector store and passes it to Llama 3 to draft a review reply, which a person approves in a Next.js dashboard.",
      why: "Generic LLM replies read as canned. Grounding each reply in the business's own details (services, hours, tone) keeps responses specific without fine-tuning a model per customer.",
      tradeoffs:
        "Retrieval adds latency and an extra service to run, but it keeps per-business data editable and avoids retraining. A human approval step trades full automation for fewer embarrassing replies.",
    },
    screenshots: shots("reviewboost-ai", "ReviewBoost AI"),
  },

  // Added 15 Oct 2026. Summaries and "built" lists describe what is visible on each
  // live site. TODO for all: confirm year, role, duration, problem, results and stack.
  {
    slug: "vijay-hospital",
    client: "Vijay Hospital",
    industry: "Healthcare",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://vijayhospitalnnl.in/",
    summary: "Bilingual website for a multispeciality hospital: departments, doctors, empanelments and appointments.",
    built: [
      "A page for each department, labelled in English and Hindi",
      "English and Hindi versions of the site with a language switch",
      "Doctor, empanelment and facility pages, plus blogs and careers",
      "Appointment booking and quick call buttons on every page",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("vijay-hospital", "Vijay Hospital"),
  },
  {
    slug: "gice-academy",
    client: "GICE Computer Education",
    industry: "Education",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://giceedu.com/",
    summary: "Website for a computer institute offering HARTRON, HKCL and Tally courses.",
    built: [
      "Course pages for computer basics, Tally, programming, web development and digital marketing",
      "Facilities, team and gallery pages",
      "Enquiry and contact flow for students and parents",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("gice-academy", "GICE Computer Education"),
  },
  {
    slug: "revonix-labs",
    client: "Revonix Labs",
    industry: "Education",
    url: "https://revonixlabs.in/",
    summary: "Website for a venture studio that runs product-building labs inside schools.",
    built: [
      "Programme, curriculum and lab pages that explain the model to school leaders",
      "Research and resources sections",
      "Enquiry flow for schools that want to bring the programme in",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("revonix-labs", "Revonix Labs"),
  },
  {
    slug: "saawariya-hotels",
    client: "Saawariya Hotels",
    industry: "Hospitality",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://saawariyahotels.com/",
    summary: "Hotel website for rooms, a food court, conference halls and wedding bookings.",
    built: [
      "Room, facility and gallery pages with large photos",
      "Booking enquiry flow for rooms and events",
      "Pages for the conference hall and wedding venue",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("saawariya-hotels", "Saawariya Hotels"),
  },
  {
    slug: "electronic-smart-plaza",
    client: "Electronics Smart Plaza",
    industry: "Retail & e-commerce",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://electronicsmartplaza.com/",
    summary: "Showroom website for an electronics, appliance and furniture store.",
    built: [
      "Showroom pages for electronics, appliances and furniture",
      "Brand and collection pages customers can browse before visiting",
      "Delivery, installation and contact information",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("electronic-smart-plaza", "Electronics Smart Plaza"),
  },
  {
    slug: "om-garments",
    client: "Om Garments",
    industry: "Retail & e-commerce",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://omgarments.in/",
    summary: "Website for a clothing store selling to retail and wholesale customers.",
    built: [
      "Collection pages for men, women and kids",
      "Separate information for retail shoppers and wholesale buyers",
      "Store location and contact details for walk-in customers",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("om-garments", "Om Garments"),
  },
  {
    slug: "happy-laptops",
    client: "Happy Laptops & Computer",
    industry: "Retail & e-commerce",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://happylaptops.in/",
    links: [{ label: "Tally site", url: "https://tally.happylaptops.in/" }],
    summary: "Website for a laptop store and repair centre, plus a separate site for its Tally software business.",
    built: [
      "Store website covering laptops, custom PCs, repairs and accounting software",
      "A separate site for Tally sales, renewals, cloud hosting and support",
      "Store hours, location and WhatsApp contact on every page",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("happy-laptops", "Happy Laptops & Computer"),
  },
  {
    slug: "happy-laptops-repair",
    client: "Happy Laptops repair tracker",
    industry: "Retail & e-commerce",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://repair.happylaptops.in/",
    summary: "Repair tracking web app: customers check their repair status using the ticket number on their job slip.",
    built: [
      "Ticket numbers and barcoded job slips for every device that comes in",
      "Public status page where customers check their repair without calling",
      "Installable web app for staff to manage the workshop, with nothing to download from an app store",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("happy-laptops-repair", "Happy Laptops repair tracker"),
  },
  {
    slug: "ravi-jangid",
    client: "Ravi Jangid",
    industry: "Fitness",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://ravijangid.in/",
    summary: "Personal site for a fitness coach and the founder of RB Health Club.",
    built: [
      "Profile, achievements and gallery pages",
      "Training and coaching information",
      "Join and contact buttons linked to RB Health Club",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("ravi-jangid", "Ravi Jangid"),
  },
  {
    slug: "ram-gurjar",
    client: "Ram Gurjar",
    industry: "Brands & studios",
    url: "https://www.ramgurjar.in/",
    summary: "Portfolio for a hotel general manager: resume, experience, media and testimonials.",
    built: [
      "Online resume and experience timeline",
      "Media and gallery section",
      "Skills, testimonials and contact pages",
    ],
    results: [],
    stack: [], // TODO: confirm stack (couldn't tell from the live site).
    screenshots: shots("ram-gurjar", "Ram Gurjar"),
  },
  {
    slug: "vidocraft",
    client: "Vidocraft",
    industry: "Brands & studios",
    city: "Narnaul",
    region: "Narnaul",
    url: "https://vidocraft.in/",
    summary: "Website for a social media and video agency serving local businesses.",
    built: [
      "Services, work samples, pricing and founder pages",
      "Lead capture with a booking call to action",
      "Dark, video-led design to match the agency's style",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("vidocraft", "Vidocraft"),
  },
  {
    slug: "reworks-studio",
    client: "Reworks Studio",
    industry: "Brands & studios",
    url: "https://www.reworksstudio.in/",
    summary: "Studio website for a software and AI engineering practice.",
    built: [
      "Hand-drawn style home page with services, work and process sections",
      "Pages explaining web apps, AI agents and custom software services",
      "Booking flow for scoping calls",
    ],
    results: [],
    stack: ["Next.js"],
    screenshots: shots("reworks-studio", "Reworks Studio"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);
export const projectsByRegion = (region: Project["region"]) =>
  projects.filter((p) => p.region === region);
