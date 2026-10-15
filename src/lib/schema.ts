/**
 * Typed JSON-LD builders. Render with <JsonLd data={...} />.
 * Validate output at https://validator.schema.org/.
 */
import { site } from "@/content/site";
import type { Project } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

type Thing = Record<string, unknown>;

export const PERSON_ID = `${site.url}/#person`;
export const WEBSITE_ID = `${site.url}/#website`;
export const SERVICE_ID = `${site.url}/#service`;

export function personSchema(): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    alternateName: ["Rishi Yadav Developer"],
    jobTitle: "Full-stack developer and web consultant",
    description: site.shortBio,
    url: site.url,
    image: absoluteUrl(site.photo.src),
    email: `mailto:${site.email}`,
    telephone: site.phone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: site.education.school },
    knowsAbout: [
      "Web development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Shopify",
      "WordPress",
      "Large language models",
      "Retrieval-augmented generation",
      "Search engine optimisation",
      "Core Web Vitals",
    ],
    sameAs: [site.social.linkedin, site.social.github, site.social.x],
  };
}

export function websiteSchema(): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: { "@id": PERSON_ID },
  };
}

export function professionalServiceSchema(opts: { path: string; description: string }): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: "Rishi Yadav – Web Development",
    url: absoluteUrl(opts.path),
    description: opts.description,
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phone.e164,
    email: site.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      postalCode: site.location.postalCode,
      addressCountry: site.location.country,
    },
    areaServed: [
      "Narnaul",
      "Mahendragarh",
      "Rewari",
      "Gurugram",
      "Haryana",
      "Delhi NCR",
      "India",
    ].map((name) => ({ "@type": "Place", name })),
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
  };
}

export function creativeWorkSchema(p: Project): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.client} website`,
    url: absoluteUrl(`/work/${p.slug}`),
    about: p.summary,
    genre: p.industry,
    creator: { "@id": PERSON_ID },
    ...(p.year ? { dateCreated: String(p.year) } : {}),
    image: absoluteUrl(p.screenshots.desktop),
    sameAs: p.url,
    keywords: p.stack.join(", "),
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
}): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/writing/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/writing/${post.slug}`),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@id": PERSON_ID, "@type": "Person", name: site.name, url: site.url },
    publisher: { "@id": PERSON_ID },
    image: absoluteUrl(`/writing/${post.slug}/opengraph-image`),
    inLanguage: "en-IN",
  };
}

export function faqSchema(items: { q: string; a: string }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: absoluteUrl(i.path),
    })),
  };
}
