import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { getProject, projects, type Project } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { creativeWorkSchema } from "@/lib/schema";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { StackBadges } from "@/components/StackBadges";
import { Testimonial } from "@/components/Testimonial";
import { CTASection } from "@/components/CTASection";
import { CaseStudyView } from "@/components/CaseStudyView";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** Hand-written meta descriptions (140–160 chars). Falls back to the project summary. */
const descriptions: Record<string, string> = {
  "goyal-netra":
    "Goyal Netra case study: a website for an eye hospital in Narnaul with treatment pages, doctor profiles and appointment enquiries that work on any phone.",
  "pariksha-career-institute":
    "Pariksha Career Institute case study: a fast, mobile-first website for a NEET, JEE and Olympiad coaching institute, with batch pages and admission enquiries.",
  "chadni-resorts":
    "Chandni Resorts case study: a resort website in Narnaul with rooms, amenities, events and booking requests that reach the front desk directly.",
  "rb-health-club":
    "RB Health Club case study: a gym website with programme pages, membership plans and a simple enquiry flow for people checking plans on their phones.",
  "reviewboost-ai":
    "ReviewBoost AI case study: an AI tool that drafts replies to customer reviews with Llama 3 and retrieval over each business's own details, approved by a person.",
  "vijay-hospital":
    "Vijay Hospital case study: a bilingual English and Hindi website for a multispeciality hospital in Narnaul, with department, doctor and appointment pages.",
  "gice-academy":
    "GICE Computer Education case study: a website for a Narnaul computer institute with HARTRON, HKCL and Tally course pages and an enquiry flow for students.",
  "revonix-labs":
    "Revonix Labs case study: a website for a venture studio that runs product-building labs inside schools, with programme, curriculum and school enquiry pages.",
  "saawariya-hotels":
    "Saawariya Hotels case study: a hotel website in Narnaul for rooms, a food court, a conference hall and wedding bookings, with a simple booking enquiry flow.",
  "electronic-smart-plaza":
    "Electronics Smart Plaza case study: a showroom website for a Narnaul electronics, appliance and furniture store, with brand, collection and delivery pages.",
  "om-garments":
    "Om Garments case study: a website for a Narnaul clothing store selling to retail and wholesale buyers, with collections for men, women and kids.",
  "happy-laptops":
    "Happy Laptops case study: websites for a Narnaul laptop store and repair centre, plus a separate site for its Tally sales, renewals and support business.",
  "happy-laptops-repair":
    "Happy Laptops repair tracker case study: a web app where customers check repair status by ticket number and staff manage the workshop from an installable app.",
  "ravi-jangid":
    "Ravi Jangid case study: a personal website for a Narnaul fitness coach and RB Health Club founder, with profile, achievements, gallery and join pages.",
  "ram-gurjar":
    "Ram Gurjar case study: a personal portfolio for a hotel general manager, with an online resume, experience timeline, media gallery and testimonials.",
  vidocraft:
    "Vidocraft case study: a website for a Narnaul social media and video agency, with services, work samples, pricing and a booking call for local businesses.",
  "reworks-studio":
    "Reworks Studio case study: a studio website for a software and AI engineering practice, with services, work, process and a booking flow for scoping calls.",
};

const describe = (p: Project) =>
  descriptions[p.slug] ?? `${p.client} case study by Rishi Yadav, full-stack developer. ${p.summary}`;

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMetadata({ title: `${p.client} case study`, description: describe(p), path: `/work/${p.slug}` });
}

/** Two-column editorial block: label on the left, content on the right (stacked on mobile). */
function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
      <h2 id={id} className="text-2xl md:col-span-4 md:text-3xl">
        {title}
      </h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  const meta = [
    { label: "Client", value: p.client },
    { label: "Industry", value: p.industry },
    { label: "City", value: p.city },
    { label: "Year", value: p.year ? String(p.year) : undefined },
    { label: "Role", value: p.role },
    { label: "Duration", value: p.duration },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value));

  return (
    <>
      <CaseStudyView slug={p.slug} client={p.client} />
      <JsonLd data={creativeWorkSchema(p)} />

      <article>
        <header className="pt-10 md:pt-14">
          <Container>
            <Breadcrumbs
              items={[
                { name: "Work", path: "/work" },
                { name: p.client, path: `/work/${p.slug}` },
              ]}
            />
            <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-8">
              <div className="md:col-span-8">
                <p className="eyebrow mb-4">Case study · {p.industry}</p>
                <h1 className="text-4xl md:text-5xl">{p.client}</h1>
                <p className="mt-5 max-w-2xl text-lg text-ink-2 md:text-xl">{p.summary}</p>
              </div>
              <div className="flex flex-col items-start gap-2 md:col-span-4 md:items-end">
                <ButtonLink href={p.url} variant="secondary">
                  Visit {host(p.url)} <ArrowUpRight aria-hidden="true" className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </ButtonLink>
                {p.links?.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1 text-sm text-ink-2 hover:text-ink hover:underline"
                  >
                    {l.label}: {host(l.url)} <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5 md:gap-x-14">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow">{m.label}</dt>
                  <dd className="mt-1 font-semibold text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </header>

        <section aria-labelledby="screens-title" className="py-10 md:py-14">
          <Container>
            <h2 id="screens-title" className="sr-only">
              Screenshots
            </h2>
            <div className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
              <figure className="md:col-span-9">
                <ScreenshotFrame
                  src={p.screenshots.desktop}
                  alt={p.screenshots.desktopAlt}
                  url={p.url}
                  priority
                  sizes="(min-width: 1200px) 860px, (min-width: 768px) 72vw, 100vw"
                />
                <figcaption className="mt-3 text-sm text-muted">Home page on a desktop browser.</figcaption>
              </figure>
              <figure className="mx-auto w-full max-w-[15rem] md:col-span-3 md:max-w-none">
                <ScreenshotFrame
                  src={p.screenshots.mobile}
                  alt={p.screenshots.mobileAlt}
                  device="phone"
                  sizes="(min-width: 1200px) 260px, (min-width: 768px) 22vw, 240px"
                />
                <figcaption className="mt-3 text-sm text-muted">The same page on a phone.</figcaption>
              </figure>
            </div>
          </Container>
        </section>

        <Container>
          {p.problem && (
            <Block id="problem" title="The problem">
              <p className="max-w-prose text-lg text-ink-2">{p.problem}</p>
            </Block>
          )}

          <Block id="built" title="What I built">
            <ol className="max-w-prose divide-y divide-line border-y border-line">
              {p.built.map((b, n) => (
                <li key={b} className="flex gap-5 py-4">
                  <span aria-hidden="true" className="pt-0.5 font-mono text-sm text-accent-text tabular-nums">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-2">{b}</span>
                </li>
              ))}
            </ol>
          </Block>

          {p.results.length > 0 && (
            <Block id="results" title="Results">
              <dl className="grid gap-4 sm:grid-cols-2">
                {p.results.map((r) => (
                  <div key={r.label} className="rounded-xl border border-line bg-surface p-6">
                    <dt className="eyebrow">{r.label}</dt>
                    <dd className="mt-2 font-display text-4xl leading-none text-ink">{r.value}</dd>
                    {r.note && <dd className="mt-3 text-sm text-muted">{r.note}</dd>}
                  </div>
                ))}
              </dl>
            </Block>
          )}

          {p.stack.length > 0 && (
            <Block id="stack" title="Stack">
              <StackBadges items={p.stack} />
            </Block>
          )}

          {p.quote && (
            <section aria-label="Client quote" className="border-t border-line py-10 md:py-14">
              <div className="md:ml-[33.333%] md:pl-8">
                <Testimonial text={p.quote.text} author={p.quote.author} title={p.quote.title} />
              </div>
            </section>
          )}

          {p.region === "Narnaul" && (
            <p className="flex items-start gap-2 border-t border-line py-6 text-[0.9375rem] text-ink-2">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-text" />
              <span>
                Based in Narnaul?{" "}
                <Link href="/website-developer-narnaul" className="text-accent-text underline">
                  See how I work with local businesses
                </Link>
                .
              </span>
            </p>
          )}
        </Container>
      </article>

      <nav aria-label="More case studies" className="mt-6 border-y border-line">
        <Container className="grid sm:grid-cols-2">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex min-h-24 flex-col justify-center gap-1 border-b border-line py-6 no-underline sm:border-r sm:border-b-0 sm:pr-8"
          >
            <span className="eyebrow inline-flex items-center gap-1.5">
              <ArrowLeft aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
              Previous
            </span>
            <span className="font-display text-2xl text-ink group-hover:text-accent-text">{prev.client}</span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group flex min-h-24 flex-col items-end justify-center gap-1 py-6 text-right no-underline sm:pl-8"
          >
            <span className="eyebrow inline-flex items-center gap-1.5">
              Next
              <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="font-display text-2xl text-ink group-hover:text-accent-text">{next.client}</span>
          </Link>
        </Container>
      </nav>

      <CTASection
        title="Need something similar?"
        text={`Tell me what your ${p.industry === "SaaS & AI" ? "product" : "business"} needs. I'll reply with honest advice, a rough timeline and a price range.`}
        whatsappMessage={`Hi Rishi, I saw the ${p.client} case study on your website and would like something similar.`}
      />
    </>
  );
}
