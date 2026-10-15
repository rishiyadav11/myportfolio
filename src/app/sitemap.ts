import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { posts } from "@/content/posts";

// Bump when a static page's content changes meaningfully.
const SITE_UPDATED = "2026-10-15";

const staticPages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/work-with-me", priority: 0.9 },
  { path: "/website-audit", priority: 0.8 },
  { path: "/website-developer-narnaul", priority: 0.8 },
  { path: "/website-developer-haryana", priority: 0.8 },
  { path: "/website-developer-delhi", priority: 0.8 },
  { path: "/engineering", priority: 0.7 },
  { path: "/resume", priority: 0.6 },
  { path: "/about", priority: 0.7 },
  { path: "/writing", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => `${site.url}${p === "/" ? "" : p}`;
  return [
    ...staticPages.map((p) => ({ url: url(p.path), lastModified: SITE_UPDATED, priority: p.priority })),
    ...projects.map((p) => ({ url: url(`/work/${p.slug}`), lastModified: SITE_UPDATED, priority: 0.7 })),
    ...posts.map((p) => ({ url: url(`/writing/${p.slug}`), lastModified: p.updated ?? p.date, priority: 0.6 })),
  ];
}
