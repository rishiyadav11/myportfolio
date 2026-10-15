import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  /** Page name; rendered as "<title> | Rishi Yadav" via the root template. */
  title: string;
  /** 140–160 characters, written for humans. */
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
  /** Use for pages that shouldn't be indexed (e.g. /styleguide). */
  noindex?: boolean;
  /** Set when the page has its own opengraph-image; otherwise the root one is used. */
  type?: "website" | "article" | "profile";
  publishedTime?: string;
};

/**
 * Build per-page metadata. OG images come from each route's
 * `opengraph-image.tsx` (or the root fallback), so we don't set `images` here.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex,
  type = "website",
  publishedTime,
}: PageMeta): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@RishiYadav5911",
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
