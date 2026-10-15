"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

export type ReelItem = {
  slug: string;
  client: string;
  industry: string;
  city?: string;
  summary: string;
  image: string;
  alt: string;
};

/**
 * Selected work. On large screens with motion allowed, the section pins and the
 * cards travel sideways as you scroll down. Everywhere else it's a plain grid, so
 * the content never depends on the animation.
 */
export function WorkReel({ items }: { items: ReelItem[] }) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (min-width: 1024px)`, () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth + 64;
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        // Screenshots drift slightly inside their frames for depth.
        gsap.utils.toArray<HTMLElement>("[data-reel-img]").forEach((img) => {
          gsap.fromTo(img, { xPercent: -4 }, { xPercent: 4, ease: "none", scrollTrigger: { trigger: section.current, start: "top top", end: () => `+=${distance()}`, scrub: true } });
        });
      });
      return () => mm.revert();
    },
    { scope: section },
  );

  return (
    <div ref={section} className="overflow-hidden lg:flex lg:h-dvh lg:flex-col lg:justify-center">
      <ul
        ref={track}
        className="grid gap-10 px-4 sm:px-6 md:grid-cols-2 lg:flex lg:w-max lg:gap-8 lg:pr-16 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {items.map((p, i) => (
          <li key={p.slug} className="group relative lg:w-[min(42rem,58vw)] lg:shrink-0">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-2">
              <Image
                data-reel-img
                src={p.image}
                alt={p.alt}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-[110%] max-w-none object-cover object-top transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] lg:-ml-[5%]"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-3xl md:text-4xl">
                  <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0">
                    {p.client}
                  </Link>
                </h3>
                <p className="mt-2 text-ink-2">{p.summary}</p>
                <p className="mt-3 text-sm text-muted">{[p.industry, p.city].filter(Boolean).join(" · ")}</p>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 flex size-12 shrink-0 items-center justify-center rounded-md border-[1.5px] border-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink"
              >
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
