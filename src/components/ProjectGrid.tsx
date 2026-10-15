"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Industry, Project } from "@/content/projects";
import { ScreenshotFrame } from "./ScreenshotFrame";

export type GridProject = Pick<
  Project,
  "slug" | "client" | "industry" | "city" | "year" | "url" | "summary" | "screenshots"
>;

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

/**
 * /work index: industry filter + editorial list.
 * Desktop (fine pointer, >=1024px): the row in the middle of the screen (or the one
 * hovered/focused) drives a sticky preview panel, so screenshots change as you scroll. Touch and small screens: the screenshot
 * is shown inline in each row. Every project is rendered in the server HTML; the
 * filter only toggles the `hidden` attribute.
 */
export function ProjectGrid({ projects, industries }: { projects: GridProject[]; industries: Industry[] }) {
  const [filter, setFilter] = useState<Industry | "All">("All");
  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.industry === filter),
    [projects, filter],
  );
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  // If the active project was filtered out, fall back to the first visible one.
  const active = visible.find((p) => p.slug === activeSlug) ?? visible[0];

  // Scroll-driven: the row crossing the middle of the viewport becomes active.
  const listRef = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const rows = listRef.current?.querySelectorAll<HTMLLIElement>("li[data-slug]");
    if (!rows?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        const slug = hit && (hit.target as HTMLElement).dataset.slug;
        if (slug) setActiveSlug(slug);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, [filter]);

  const chips: { value: Industry | "All"; count: number }[] = [
    { value: "All", count: projects.length },
    ...industries
      .map((i) => ({ value: i, count: projects.filter((p) => p.industry === i).length }))
      .filter((c) => c.count > 0),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter case studies by industry" className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const on = c.value === filter;
          return (
            <button
              key={c.value}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(c.value)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-md border-[1.5px] px-4 text-[0.9375rem] transition-colors duration-150 ${
                on
                  ? "border-ink bg-ink text-bg"
                  : "border-line-strong bg-surface text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              {c.value}
              <span className={`font-mono text-xs ${on ? "opacity-70" : "text-muted"}`}>{c.count}</span>
            </button>
          );
        })}
      </div>
      <p className="eyebrow mt-5" aria-live="polite">
        {filter === "All"
          ? `${visible.length} case studies`
          : `${visible.length} of ${projects.length} case studies · ${filter}`}
      </p>

      <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <ol ref={listRef} className="border-t-[1.5px] border-ink lg:col-span-7 lg:pointer-coarse:col-span-12">
          {projects.map((p) => {
            const shown = visible.includes(p);
            const isActive = active?.slug === p.slug;
            const n = visible.indexOf(p) + 1;
            const meta = [p.industry, p.city, p.year].filter(Boolean).join(" · ");
            return (
              <li
                key={p.slug}
                data-slug={p.slug}
                hidden={!shown}
                data-active={isActive}
                onMouseEnter={() => setActiveSlug(p.slug)}
                className="group relative border-b border-line before:absolute before:-bottom-px before:left-0 before:h-px before:w-0 before:bg-accent before:transition-[width] before:duration-300 lg:data-[active=true]:before:w-full"
              >
                <article className="py-8 md:py-10">
                  <div data-reveal className="mb-6 lg:hidden lg:pointer-coarse:block">
                    <ScreenshotFrame
                      src={p.screenshots.desktop}
                      alt={p.screenshots.desktopAlt}
                      url={p.url}
                      sizes="(min-width: 1024px) 900px, (min-width: 640px) 90vw, 100vw"
                    />
                  </div>
                  <div className="flex gap-4 sm:gap-8">
                    <span
                      aria-hidden="true"
                      className="hidden pt-2 font-mono text-sm text-muted tabular-nums sm:block lg:group-data-[active=true]:text-accent-text"
                    >
                      {String(n).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-3xl leading-tight transition-colors duration-150 md:text-4xl lg:group-data-[active=true]:text-accent-text">
                        <Link
                          href={`/work/${p.slug}`}
                          onFocus={() => setActiveSlug(p.slug)}
                          className="no-underline after:absolute after:inset-0 focus-visible:outline-none"
                        >
                          {p.client}
                        </Link>
                      </h2>
                      <p className="eyebrow mt-2">{meta}</p>
                      <p className="mt-3 max-w-xl text-ink-2">{p.summary}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-[0.9375rem]">
                        <span className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-text">
                          Read case study
                          <ArrowRight
                            aria-hidden="true"
                            className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                          />
                        </span>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 inline-flex min-h-11 items-center gap-1 font-mono text-xs text-muted underline decoration-line-strong hover:text-ink hover:decoration-ink"
                        >
                          {host(p.url)}
                          <ArrowUpRight aria-hidden="true" className="size-3.5" />
                          <span className="sr-only">(live site, opens in a new tab)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Focus ring for the whole row (the link's overlay covers it). */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg outline-2 outline-offset-2 outline-transparent group-has-[h2_a:focus-visible]:outline-[color:var(--focus)]"
                />
              </li>
            );
          })}
        </ol>

        <div className="hidden lg:col-span-5 lg:block lg:pointer-coarse:hidden">
          <div className="sticky top-28 pt-8">
            <div className="mb-5 flex items-end justify-between" aria-hidden="true">
              <span className="font-display text-7xl leading-none font-extrabold tracking-tighter tabular-nums">
                {String(active ? visible.indexOf(active) + 1 : 0).padStart(2, "0")}
              </span>
              <span className="pb-2 font-mono text-sm text-muted">/ {String(visible.length).padStart(2, "0")}</span>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg border-[1.5px] border-ink bg-surface shadow-card">
                <div className="flex items-center gap-2 border-b-[1.5px] border-ink bg-surface-2 px-3 py-2" aria-hidden="true">
                  <span className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-accent" />
                    <span className="size-2.5 rounded-full bg-line-strong" />
                    <span className="size-2.5 rounded-full bg-line-strong" />
                  </span>
                  <span className="mx-auto truncate rounded-md bg-surface px-3 py-0.5 font-mono text-[0.6875rem] text-muted">
                    {active ? host(active.url) : ""}
                  </span>
                </div>
                <div className="relative aspect-[1440/900] bg-surface-2">
                  {projects.map((p) => {
                    const on = active?.slug === p.slug;
                    return (
                      <Image
                        key={p.slug}
                        src={p.screenshots.desktop}
                        alt={on ? p.screenshots.desktopAlt : ""}
                        aria-hidden={!on}
                        fill
                        sizes="(min-width: 1200px) 480px, 40vw"
                        className={`object-cover object-top transition-[clip-path,scale] duration-700 ease-[var(--ease-out-expo)] ${
                          on ? "z-10 scale-100 [clip-path:inset(0_0_0_0)]" : "z-0 scale-105 [clip-path:inset(100%_0_0_0)]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Phone frame with the mobile screenshot, overlapping the browser frame. */}
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -left-8 w-[26%] overflow-hidden rounded-[1.1rem] border-[5px] border-ink bg-ink shadow-card"
              >
                <div className="relative aspect-[780/1688] overflow-hidden rounded-[0.8rem] bg-surface-2">
                  {projects.map((p) => {
                    const on = active?.slug === p.slug;
                    return (
                      <Image
                        key={p.slug}
                        src={p.screenshots.mobile}
                        alt=""
                        fill
                        sizes="130px"
                        className={`object-cover object-top transition-[clip-path] delay-100 duration-700 ease-[var(--ease-out-expo)] ${
                          on ? "z-10 [clip-path:inset(0_0_0_0)]" : "z-0 [clip-path:inset(0_0_100%_0)]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {active && (
              <p className="mt-16 flex items-baseline justify-end gap-4 pl-[24%] text-right">
                <span className="font-display text-xl font-bold text-ink">{active.client}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
