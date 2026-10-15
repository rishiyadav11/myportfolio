import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { StackBadges } from "@/components/StackBadges";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { FAQ } from "@/components/FAQ";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Style Guide",
  description:
    "Internal style guide for rishiyadav.space: colour tokens, the Fraunces, Source Sans 3 and JetBrains Mono type pairing, type scale and core components.",
  path: "/styleguide",
  noindex: true,
});

const swatches = [
  { name: "--bg", use: "Page background" },
  { name: "--surface", use: "Cards, panels" },
  { name: "--surface-2", use: "Alternate sections, image placeholders" },
  { name: "--ink", use: "Headings, primary text" },
  { name: "--ink-2", use: "Body text" },
  { name: "--muted", use: "Captions, labels" },
  { name: "--line", use: "Borders, dividers" },
  { name: "--line-strong", use: "Hover borders, inputs" },
  { name: "--accent", use: "Primary buttons, links" },
  { name: "--accent-hover", use: "Primary button hover" },
  { name: "--accent-ink", use: "Text on accent" },
  { name: "--accent-soft", use: "Selection, soft highlights" },
  { name: "--success", use: "Success messages" },
  { name: "--warning", use: "Warnings" },
  { name: "--danger", use: "Errors" },
];

// Literal class names so Tailwind generates them.
const scale = [
  { cls: "text-5xl", token: "--text-5xl", size: "3.75rem", role: "Page H1 (desktop)" },
  { cls: "text-4xl", token: "--text-4xl", size: "3rem", role: "Page H1 (mobile), H2 (desktop)" },
  { cls: "text-3xl", token: "--text-3xl", size: "2.375rem", role: "Section H2" },
  { cls: "text-2xl", token: "--text-2xl", size: "1.875rem", role: "Card titles, prose H2" },
  { cls: "text-xl", token: "--text-xl", size: "1.5rem", role: "H3" },
  { cls: "text-lg", token: "--text-lg", size: "1.25rem", role: "Intros, lead paragraphs" },
  { cls: "text-base", token: "--text-base", size: "1.0625rem", role: "Body (18px from md up)" },
  { cls: "text-sm", token: "--text-sm", size: "0.9375rem", role: "Buttons, secondary text" },
  { cls: "text-xs", token: "--text-xs", size: "0.8125rem", role: "Eyebrows, metadata" },
];

const sampleFaq = [
  {
    q: "How long does a business website take?",
    a: "Usually 2–4 weeks from the first call to launch, depending on how quickly content and feedback come in.",
  },
  {
    q: "Who owns the code and hosting?",
    a: "You do. The domain, hosting and code are set up in your name from day one.",
  },
];

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-12 md:py-16">
      <h2 id={`${id}-title`} className="mb-8 text-3xl md:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  const sample = projects[0];
  return (
    <Container className="pt-10 pb-16 md:pt-14">
      <Breadcrumbs items={[{ name: "Style guide", path: "/styleguide" }]} />
      <p className="eyebrow mb-3">Internal · not indexed</p>
      <h1 className="text-4xl md:text-5xl">Style guide</h1>
      <div className="prose mt-6 text-lg">
        <p>
          The site should feel like a calm, careful consultancy: easy to read, quietly confident, and trustworthy enough
          for a hospital or an investment firm. Every choice below serves that.
        </p>
        <p>
          <strong>Forest-green accent.</strong> Green reads as calm and dependable, and it sets the site apart from the
          default tech blue. It&apos;s used sparingly: primary buttons, links and small highlights.
        </p>
        <p>
          <strong>Fraunces for headings.</strong> An editorial display serif with real character. It is used with
          restraint, at medium weight, for headings only.
        </p>
        <p>
          <strong>Source Sans 3 for body text.</strong> Very readable at 17–18px on phones and desktops, with an
          even, neutral tone that doesn&apos;t compete with the headings.
        </p>
        <p>
          <strong>JetBrains Mono for labels.</strong> Small uppercase labels, dates and stack names. It adds precision
          without turning the site into a code editor.
        </p>
      </div>

      <Block id="colour" title="Colour">
        <p className="mb-6 max-w-2xl text-ink-2">
          All colours are CSS variables, with a separate set for dark mode. Components use Tailwind utilities mapped to
          them (for example <code className="font-mono text-sm">bg-surface</code>,{" "}
          <code className="font-mono text-sm">text-muted</code>), never raw hex values.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {swatches.map((s) => (
            <li key={s.name} className="overflow-hidden rounded-xl border border-line bg-surface">
              <div className="h-20 border-b border-line" style={{ background: `var(${s.name})` }} aria-hidden="true" />
              <div className="p-3">
                <p className="font-mono text-sm text-ink">{s.name}</p>
                <p className="text-sm text-muted">{s.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="type" title="Typography">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="eyebrow">Display · font-display</p>
            <p className="mt-3 font-display text-4xl">Fraunces</p>
            <p className="mt-2 font-display text-lg text-ink-2">Fast, reliable websites for growing businesses.</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="eyebrow">Body · font-sans</p>
            <p className="mt-3 font-sans text-4xl font-semibold">Source Sans 3</p>
            <p className="mt-2 text-ink-2">You get a written scope and a fixed quote before any work starts.</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="eyebrow">Labels · font-mono</p>
            <p className="mt-3 font-mono text-3xl">JetBrains Mono</p>
            <p className="mt-2 font-mono text-sm text-ink-2">Next.js · PostgreSQL · 15 Oct 2026</p>
          </div>
        </div>

        <h3 className="mt-12 mb-4 text-xl">Type scale (ratio about 1.25)</h3>
        <ul className="divide-y divide-line border-y border-line">
          {scale.map((s) => (
            <li key={s.cls} className="grid gap-2 py-4 md:grid-cols-12 md:items-baseline">
              <div className="font-mono text-xs text-muted md:col-span-3">
                {s.cls} · {s.size}
                <br />
                {s.role}
              </div>
              <p className={`${s.cls} truncate font-display md:col-span-9`}>Websites that load fast</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-ink-2">
          The <code className="font-mono text-sm">.eyebrow</code> class gives the small uppercase mono label used above
          headings: <span className="eyebrow">Like this</span>.
        </p>
      </Block>

      <Block id="buttons" title="Buttons and badges">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="/styleguide#buttons" variant="primary">
            Primary <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href="/styleguide#buttons" variant="secondary">
            Secondary
          </ButtonLink>
          <ButtonLink href="/styleguide#buttons" variant="ghost">
            Ghost
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-muted">All buttons are at least 44px tall.</p>
        <StackBadges className="mt-8" items={["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "FastAPI"]} />
      </Block>

      {sample && (
        <Block id="screenshots" title="Screenshot frames">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <ScreenshotFrame
              src={sample.screenshots.desktop}
              alt={sample.screenshots.desktopAlt}
              url={sample.url}
              className="md:col-span-9"
              sizes="(min-width: 1200px) 860px, (min-width: 768px) 75vw, 100vw"
            />
            <ScreenshotFrame
              src={sample.screenshots.mobile}
              alt={sample.screenshots.mobileAlt}
              device="phone"
              className="mx-auto w-40 md:col-span-3 md:w-full"
            />
          </div>
        </Block>
      )}

      <Block id="faq" title="FAQ">
        <div className="max-w-3xl">
          <FAQ items={sampleFaq} schema={false} />
        </div>
      </Block>

      <Block id="services" title="Service cards">
        <div className="grid gap-4 md:grid-cols-2">
          {services[0] && <ServiceCard service={services[0]} variant="compact" />}
          {services[0] && <ServiceCard service={services[0]} variant="full" />}
        </div>
      </Block>
    </Container>
  );
}
