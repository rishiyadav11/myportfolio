import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "./Container";
import { PathSplit } from "./PathSplit";
import { Contours, RotatingBadge, Scribble } from "./graphics";

/*
 * Home hero. Headline alternatives in the same plain tone (pick one later if wanted):
 *   1. "I'm Rishi Yadav. I design and build websites that bring in enquiries, and web apps that save your team time."
 *   2. "I'm Rishi Yadav. Clear, fast websites and dependable web apps for businesses that are ready to grow."
 */

type Segment = { words: string[]; em?: boolean; muted?: boolean };

const headline: Segment[] = [
  { words: ["I’m", "Rishi", "Yadav."], muted: true },
  { words: ["I", "build"] },
  { words: ["fast,", "reliable"], em: true },
  { words: ["websites", "and", "web", "apps", "for", "growing", "businesses."] },
];

/** Each word sits in a mask and rises in on load (CSS only, so it paints without waiting for JS). */
function RisingHeadline() {
  let i = 0;
  return (
    <>
      {headline.map((seg, s) => {
        const words = seg.words.map((w, k) => (
          <span key={k}>
            <span className="rise">
              <span style={{ "--i": i++ } as React.CSSProperties}>{w}</span>
            </span>{" "}
          </span>
        ));
        if (seg.em)
          return [
            <em key={s} className="relative inline-block whitespace-nowrap text-accent-text">
              {words}
              <Scribble className="absolute -bottom-[0.08em] left-0 h-[0.22em] w-[92%] text-accent" />
            </em>,
            " ",
          ];
        if (seg.muted) return <span key={s} className="text-muted">{words}</span>;
        return <span key={s}>{words}</span>;
      })}
    </>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Contours
        seed={11}
        rings={11}
        className="pointer-events-none absolute -top-40 -right-56 size-[46rem] text-line-strong opacity-45 md:-top-24 md:-right-40 md:size-[60rem]"
      />
      <Container className="relative pt-10 pb-14 sm:pt-14 md:pt-8 md:pb-14 xl:pt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p className="eyebrow fade-in">
              {site.role} · {site.location.locality}, {site.location.region}
            </p>
            <h1
              id="hero-title"
              className="mt-6 text-[2.6rem] leading-[0.98] sm:text-6xl md:mt-6 md:text-[4.25rem] xl:text-[4.6rem]"
            >
              <RisingHeadline />
            </h1>
            <p
              className="fade-in mt-7 max-w-xl text-lg text-ink-2 md:mt-6"
              style={{ "--d": "650ms" } as React.CSSProperties}
            >
              Full-stack developer and web consultant based in Narnaul, Haryana, working with clinics, institutes,
              retailers and companies across Delhi NCR and India.
            </p>
            {site.availability && (
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-ink-2">
                <span aria-hidden="true" className="size-2 rounded-full bg-success" />
                {site.availability}
              </p>
            )}
          </div>

          <figure
            className="fade-in relative hidden lg:col-span-4 lg:block"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-surface-2">
              <Image
                data-parallax="0.12"
                src={site.photo.src}
                alt={site.photo.alt}
                width={site.photo.width}
                height={site.photo.height}
                priority
                sizes="(min-width: 1280px) 400px, 32vw"
                className="h-[112%] w-full object-cover object-top"
              />
            </div>
            <RotatingBadge className="absolute -top-8 -left-10 z-10 size-28 xl:size-32" />
            <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>Rishi Yadav</span>
              <span>Narnaul, India</span>
            </figcaption>
          </figure>
        </div>

        <PathSplit className="fade-in mt-12 md:mt-8" />
      </Container>
    </section>
  );
}
