import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink, mailtoLink } from "@/content/site";
import { projects, getProject } from "@/content/projects";
import { services, process } from "@/content/services";
import { latestPosts, formatDate } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";
import { personSchema, websiteSchema } from "@/lib/schema";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import { WorkReel, type ReelItem } from "@/components/motion/WorkReel";
import { ScrubWords } from "@/components/motion/ScrubWords";
import { Magnetic } from "@/components/motion/Magnetic";
import { Contours, CurlyArrow, ServiceIllo, Sparkle, Squiggle, Star, StepArrow } from "@/components/graphics";

const HOME_TITLE = "Rishi Yadav: Full-Stack Developer & Web Consultant, Narnaul, Haryana";
const base = pageMetadata({
  title: HOME_TITLE,
  description:
    "Rishi Yadav is a full-stack developer and web consultant in Narnaul, Haryana. Fast, reliable websites and web apps for clinics, institutes and businesses.",
  path: "/",
});

export const metadata: Metadata = {
  ...base,
  title: { absolute: HOME_TITLE },
  openGraph: { ...base.openGraph, title: HOME_TITLE },
  twitter: { ...base.twitter, title: HOME_TITLE },
};

// A varied selection for the home reel: healthcare, a web app, AI, education, hospitality, retail.
const REEL = [
  "vijay-hospital",
  "happy-laptops-repair",
  "reviewboost-ai",
  "pariksha-career-institute",
  "saawariya-hotels",
  "electronic-smart-plaza",
];

const engineeringStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "LLM integrations",
  "RAG and vector databases",
  "Shopify",
  "WordPress",
];

/** Heading row used by home sections: big title on the left, a quiet link on the right. */
function SectionHead({
  id,
  eyebrow,
  title,
  intro,
  link,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  link?: { href: string; label: string };
}) {
  return (
    <div data-reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-3xl">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 id={id} className="text-4xl md:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-xl text-lg text-ink-2">{intro}</p>}
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-ink no-underline"
        >
          <span className="link-draw">{link.label}</span>
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const reel: ReelItem[] = REEL.map(getProject)
    .filter((p) => p !== undefined)
    .map((p) => ({
      slug: p.slug,
      client: p.client,
      industry: p.industry,
      city: p.city,
      summary: p.summary,
      image: p.screenshots.desktop,
      alt: p.screenshots.desktopAlt,
    }));
  const posts = latestPosts(3);

  return (
    <>
      <JsonLd data={[personSchema(), websiteSchema()]} />
      <Hero />

      <ClientMarquee names={projects.map((p) => p.client)} />

      {/* Selected work: pinned horizontal reel on desktop */}
      <section aria-labelledby="work-title" className="pt-20 md:pt-28">
        <Container>
          <SectionHead
            id="work-title"
            eyebrow="Selected work"
            title={
              <>
                Websites people <em>actually use</em>
              </>
            }
            intro={`${projects.length} live sites and web apps, mostly for businesses in Narnaul. Open any of them on your phone.`}
            link={{ href: "/work", label: `All ${projects.length} case studies` }}
          />
        </Container>
        <WorkReel items={reel} />
      </section>

      {/* Services as large numbered rows */}
      <section aria-labelledby="services-title" className="py-20 md:py-28">
        <Container>
          <SectionHead
            id="services-title"
            eyebrow="What I do"
            title={
              <>
                Four ways <em>I can help</em>
              </>
            }
            intro="Every project starts with a written scope and a fixed quote, so you know the cost before work begins."
            link={{ href: "/work-with-me", label: "Services and process" }}
          />
          <ol data-reveal-stagger className="border-t-[1.5px] border-ink">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-line">
                <Link
                  href={s.href}
                  className="group grid items-baseline gap-x-8 gap-y-2 py-7 no-underline md:grid-cols-12 md:py-9"
                >
                  <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent-text md:col-span-1">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl font-bold tracking-tight transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 md:col-span-5 md:text-[2.75rem] md:leading-none">
                    {s.name}
                  </span>
                  <span className="flex items-center gap-5 md:col-span-4">
                    <ServiceIllo
                      slug={s.slug}
                      className="hidden h-16 w-20 shrink-0 text-ink transition-colors duration-300 group-hover:text-accent-text sm:block"
                    />
                    <span className="text-ink-2">{s.short}</span>
                  </span>
                  <span className="flex items-center justify-between gap-4 text-sm text-muted md:col-span-2 md:justify-end">
                    {s.timeline}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:text-accent-text"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Statement that lights up as you scroll */}
      <section aria-label="How I work with clients" className="relative overflow-hidden bg-surface-2/60 py-24 md:py-36">
        <Star data-spin className="pointer-events-none absolute -right-24 -bottom-24 size-[22rem] text-accent md:-right-16 md:size-[30rem]" />
        <Container className="relative">
          <ScrubWords
            className="max-w-5xl font-display text-[2rem] leading-[1.08] font-bold tracking-tight md:text-6xl"
            text="Fixed quotes in writing. Code, domain and hosting in your name. A reply within one working day. Websites that load fast on an ordinary phone."
          />
        </Container>
      </section>

      {/* Process with a progress line */}
      <section aria-labelledby="process-title" className="py-20 md:py-28">
        <Container>
          <SectionHead
            id="process-title"
            eyebrow="How a project runs"
            title={
              <>
                From first call to launch in <em>two to four weeks</em>
              </>
            }
            intro="A typical website follows these four steps. Web apps take longer, and I'll tell you how long up front."
          />
          <div className="relative">
            <div aria-hidden="true" className="absolute top-0 left-0 hidden h-[2px] w-full bg-line lg:block" />
            <div aria-hidden="true" data-progress className="absolute top-0 left-0 hidden h-[2px] w-full bg-accent lg:block" />
            <ol data-reveal-stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {process.map((s, i) => (
                <li key={s.step} className="relative border-t-2 border-line pt-6 lg:border-t-0 lg:pt-8">
                  {i < process.length - 1 && (
                    <StepArrow className="absolute top-10 right-2 hidden w-24 text-muted lg:block xl:right-6" />
                  )}
                  <span className="font-display text-6xl font-bold text-accent-text">{i + 1}</span>
                  <h3 className="mt-4 text-2xl">{s.step}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted">{s.time}</p>
                  <p className="mt-3 text-ink-2">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* For hiring managers: inverted block */}
      <section aria-labelledby="hiring-title" className="relative overflow-hidden bg-ink py-20 text-bg md:py-28">
        <span
          aria-hidden="true"
          data-parallax="0.3"
          className="pointer-events-none absolute -top-10 right-[-2rem] font-display text-[14rem] leading-none font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgb(255_106_61/0.35)] select-none md:text-[22rem]"
        >
          &lt;/&gt;
        </span>
        <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div data-reveal className="md:col-span-6">
            <p className="text-sm font-semibold text-accent">For hiring managers and founders</p>
            <h2 id="hiring-title" className="mt-5 text-4xl text-bg md:text-6xl">
              Looking for a <em>full-stack</em> engineer?
            </h2>
          </div>
          <div data-reveal className="md:col-span-6 md:pt-10">
            <p className="text-lg text-bg/80">
              I work across the stack: React and Next.js front ends, Node.js and FastAPI services, PostgreSQL, and LLM
              features with retrieval. I&rsquo;m studying for a {site.education.degree} at {site.education.school} (
              {site.education.period}).
            </p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
              {engineeringStack.map((t) => (
                <li key={t} className="rounded-md border border-bg/25 px-3 py-1.5 text-sm text-bg/85">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <TrackedLink
                href={site.resumePdf}
                event="resume_download"
                download
                className="btn bg-bg text-ink hover:text-accent-ink"
              >
                <Download aria-hidden="true" className="size-4" /> Download resume
              </TrackedLink>
              <ButtonLink
                href={site.social.github}
                variant="secondary"
                className="border-bg/60 text-bg hover:border-accent"
              >
                GitHub <ArrowUpRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <Link
                href="/engineering"
                className="inline-flex min-h-12 items-center gap-2 px-2 font-semibold text-bg no-underline"
              >
                <span className="link-draw">Engineering notes</span> <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Squiggle className="h-6 w-full text-line-strong" />

      {/* Writing */}
      <section aria-labelledby="writing-title" className="py-20 md:py-28">
        <Container>
          <SectionHead
            id="writing-title"
            eyebrow="Writing"
            title={
              <>
                Notes on websites, <em>speed and cost</em>
              </>
            }
            link={{ href: "/writing", label: "All articles" }}
          />
          <ul data-reveal-stagger className="border-t-[1.5px] border-ink">
            {posts.map((post) => (
              <li key={post.slug} className="group relative border-b border-line">
                <article className="grid gap-2 py-7 md:grid-cols-12 md:gap-8 md:py-9">
                  <p className="text-sm text-muted md:col-span-3 md:pt-2">
                    <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} min read
                  </p>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl md:text-3xl">
                      <Link
                        href={`/writing/${post.slug}`}
                        className="no-underline transition-colors after:absolute after:inset-0 group-hover:text-accent-text"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-ink-2">{post.description}</p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="hidden size-6 justify-self-end text-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:text-accent-text md:col-span-1 md:mt-2 md:block"
                  />
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing call to action */}
      <section
        aria-labelledby="cta-title"
        className="relative overflow-hidden border-t-[1.5px] border-ink pt-20 pb-24 md:pt-28 md:pb-32"
      >
        <Contours
          seed={3}
          rings={10}
          className="pointer-events-none absolute -bottom-72 -left-60 size-[44rem] text-line-strong opacity-60"
        />
        <Sparkle className="spin-slow pointer-events-none absolute top-16 right-[12%] size-8 text-accent md:size-12" />
        <Sparkle className="pointer-events-none absolute top-40 right-[6%] size-4 text-ink md:size-5" />
        <Container className="relative">
          <p data-reveal className="eyebrow">Have a project in mind?</p>
          <h2 id="cta-title" data-reveal className="mt-6 text-[3.25rem] leading-[0.92] sm:text-7xl md:text-[8rem]">
            Let&rsquo;s build <em className="text-accent-text">something good.</em>
          </h2>
          <div data-reveal className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-lg text-ink-2">
              Tell me what you need. I&rsquo;ll reply with honest advice, a rough timeline and a price range.{" "}
              {site.responseTime}
            </p>
            <div className="relative flex flex-wrap items-center gap-3">
              <CurlyArrow className="pointer-events-none absolute -top-28 -left-36 hidden w-36 text-accent md:block" />
              <Magnetic>
                <TrackedLink href={whatsappLink()} event="whatsapp_click" variant="primary" className="min-h-14 px-7 text-base">
                  <MessageCircle aria-hidden="true" className="size-5" /> WhatsApp me
                </TrackedLink>
              </Magnetic>
              <TrackedLink href={mailtoLink()} event="email_click" variant="secondary" className="min-h-14 px-7 text-base">
                <Mail aria-hidden="true" className="size-5" /> Email me
              </TrackedLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
