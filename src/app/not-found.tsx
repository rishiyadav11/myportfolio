import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { buttonClass } from "@/components/Button";
import { latestPosts, formatDate } from "@/content/posts";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/", label: "Home", text: "Start from the beginning." },
  { href: "/work", label: "Work", text: "Websites and apps I've built, with live links." },
  { href: "/work-with-me", label: "Services", text: "What I offer, timelines and how we'd work together." },
  { href: "/contact", label: "Contact", text: "Tell me what you were looking for." },
];

export default function NotFound() {
  const posts = latestPosts(3);
  return (
    <Container className="py-16 md:py-24">
      <p className="eyebrow mb-3">Error 404</p>
      <h1 className="max-w-2xl text-4xl md:text-5xl">This page doesn&apos;t exist, or it has moved.</h1>
      <p className="mt-5 max-w-xl text-lg text-ink-2">
        Check the address for a typo, or pick up from one of these pages.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <span className="font-display text-xl text-ink">{l.label}</span>
              <span className="mt-2 flex-1 text-ink-2">{l.text}</span>
              <ArrowRight
                aria-hidden="true"
                className="mt-4 size-4 text-accent-text transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>

      {posts.length > 0 && (
        <section aria-labelledby="latest-writing" className="mt-16 border-t border-line pt-10">
          <h2 id="latest-writing" className="text-2xl md:text-3xl">
            Latest writing
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/writing/${p.slug}`} className="group flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:gap-6">
                  <time dateTime={p.date} className="font-mono text-xs text-muted md:w-28 md:shrink-0">
                    {formatDate(p.date)}
                  </time>
                  <span className="font-semibold text-ink group-hover:text-accent-text group-hover:underline">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/writing" className={buttonClass("ghost", "mt-4")}>
            All articles
          </Link>
        </section>
      )}
    </Container>
  );
}
