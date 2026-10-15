import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/content/site";
import { getProject, type Project } from "@/content/projects";
import { delhiFaqs } from "@/content/faqs";
import { ServicePageHero, FactList } from "@/components/ServicePageHero";
import { Section } from "@/components/Section";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProjectCard } from "@/components/ProjectCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";
import { LocalPageLinks } from "@/components/LocalPageLinks";

const PATH = "/website-developer-delhi";
const DESCRIPTION =
  "Remote website and web app developer for Delhi, Noida and Gurugram businesses. One person from brief to launch, weekly previews, replies within a working day.";
const WHATSAPP = "Hi Rishi, I'm with a business in Delhi NCR and would like to discuss a website or web app.";

export const metadata = pageMetadata({
  title: "Website Developer for Delhi NCR Businesses",
  description: DESCRIPTION,
  path: PATH,
});

const remoteSteps = [
  {
    title: "Video call",
    time: "30 minutes",
    text: "We go through your business, the goal of the site and any deadlines. Share your screen and show me what isn't working today.",
  },
  {
    title: "Written scope and fixed quote",
    time: "Within a few days",
    text: "Pages, features, timeline, price and payment terms in one document. Your team can review it before anything starts.",
  },
  {
    title: "Shared preview link",
    time: "Throughout the build",
    text: "A private link that updates as I work. You and your colleagues comment from your own phones and laptops.",
  },
  {
    title: "Updates on WhatsApp",
    time: "Every week",
    text: "A short note on what's done, what's next and anything I need from you. Calls when a decision needs talking through.",
  },
  {
    title: "Launch and handover",
    time: "Launch week",
    text: "We go live on your domain. You get the code, every login and a short guide, all in your company's name.",
  },
];

const comparison = [
  {
    label: "Who you talk to",
    cells: [
      "The person who designs and builds your site, from the first call to launch.",
      "Usually an account manager, who passes your feedback to designers and developers.",
    ],
  },
  {
    label: "Cost structure",
    cells: [
      "You pay for the work. No office, sales team or account management overhead in the price.",
      "The price covers a larger team and its overheads. Often higher, sometimes with retainers.",
    ],
  },
  {
    label: "Speed of changes",
    cells: [
      "Small changes can happen the same day, since there is no hand-off between people.",
      "Changes go through a queue and a project manager, which takes longer but is well tracked.",
    ],
  },
  {
    label: "Range of skills",
    cells: [
      "Design, development, speed, SEO basics and AI features. Not branding, ads or video.",
      "Better here. Designers, copywriters, ad specialists and developers under one roof.",
    ],
  },
  {
    label: "Capacity and cover",
    cells: [
      "One person, so a limited number of projects at a time. Leave is planned and shared in advance.",
      "Better here. Several people can work in parallel, and someone covers if a person is away.",
    ],
  },
  {
    label: "Paperwork and process",
    cells: [
      "A clear written scope, NDA if needed, and invoices. Simple, but not enterprise procurement.",
      "Better for large companies that need vendor onboarding, formal reports and multiple contracts.",
    ],
  },
];

const featuredSlugs = ["reviewboost-ai", "pariksha-career-institute", "goyal-netra"];

export default function DelhiPage() {
  const work = featuredSlugs.map((s) => getProject(s)).filter((p): p is Project => Boolean(p));
  return (
    <>
      <JsonLd data={professionalServiceSchema({ path: PATH, description: DESCRIPTION })} />

      <ServicePageHero
        breadcrumbs={[{ name: "Website developer in Delhi NCR", path: PATH }]}
        eyebrow="Delhi · Noida · Gurugram"
        title="Website Developer for Delhi NCR Businesses"
        lead={
          <p>
            I work with companies in Delhi, Noida and Gurugram, remotely from Narnaul. You deal with one person
            who plans, builds and looks after your website or web app, and you see progress every week.
          </p>
        }
        actions={
          <>
            <TrackedLink href={whatsappLink(WHATSAPP)} event="whatsapp_click" variant="primary">
              <MessageCircle aria-hidden="true" className="size-4" /> Start a conversation
            </TrackedLink>
            <ButtonLink href="#compare" variant="secondary">
              Me or an agency?
            </ButtonLink>
          </>
        }
        aside={
          <FactList
            items={[
              { label: "Works", value: "Remote first" },
              { label: "Hours", value: site.workingHours },
              { label: "Replies", value: "Within one working day" },
            ]}
          />
        }
      />

      <Section
        id="remote"
        eyebrow="Remote-first process"
        title="How a project runs without anyone commuting"
        intro="Distance doesn't slow a website project down. Unclear decisions do. This process keeps decisions small, written down and quick to make."
      >
        <ol className="divide-y divide-line border-y border-line">
          {remoteSteps.map((s, i) => (
            <li key={s.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8">
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="eyebrow mt-1">{s.time}</p>
                </div>
              </div>
              <p className="text-ink-2 md:col-span-8">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-ink-2">
          If a meeting in person will help, for example a kickoff for a larger web app, I can come to your office
          in Gurugram, Delhi or Noida.
        </p>
      </Section>

      <Section
        id="response"
        eyebrow="Response times"
        title="When you can expect to hear back"
        className="border-t border-line bg-surface-2"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-xl">Messages and email</h3>
            <p className="mt-2 text-ink-2">{site.responseTime} Working hours are {site.workingHours}.</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-xl">During a project</h3>
            <p className="mt-2 text-ink-2">
              A weekly WhatsApp update without you having to ask, plus a call whenever a decision needs one.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-xl">If something breaks</h3>
            <p className="mt-2 text-ink-2">
              Message me on WhatsApp with a screenshot. If I can&apos;t look at it the same day, I&apos;ll tell you
              when I can, rather than leave you guessing.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="compare"
        eyebrow="An honest comparison"
        title="Working with me, or with a large agency"
        intro="Agencies are the right choice for some projects. Here is a fair comparison so you can decide which fits yours."
      >
        <ComparisonTable
          caption="Comparison of working with Rishi Yadav and working with a large agency"
          columns={["Working with me", "Large agency"]}
          rows={comparison}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl">Choose an agency if</h3>
            <p className="mt-2 text-ink-2">
              you need branding, ads, social media and the website handled together, you have a very large build
              that needs several developers at once, or your company requires formal vendor processes.
            </p>
          </div>
          <div>
            <h3 className="text-xl">I&apos;m a good fit if</h3>
            <p className="mt-2 text-ink-2">
              you want a fast, well-built website or web app, you prefer talking directly to the person doing the
              work, and you value clear scope and price over a large team.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="who"
        eyebrow="Who I work with"
        title="NCR businesses I'm most useful to"
        className="border-t border-line"
      >
        <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          <li>
            <h3 className="text-xl">Financial-services firms</h3>
            <p className="mt-2 text-ink-2">
              Calm, careful sites with the disclosure pages your registration requires, a privacy policy and proper
              security headers.
            </p>
          </li>
          <li>
            <h3 className="text-xl">Clinics and diagnostic centres</h3>
            <p className="mt-2 text-ink-2">
              Doctor and service pages patients can follow, and enquiry forms that reach the front desk.
            </p>
          </li>
          <li>
            <h3 className="text-xl">Startups and product teams</h3>
            <p className="mt-2 text-ink-2">
              Dashboards, internal tools and AI features in Next.js, Node.js or FastAPI, built to hand over to
              your own team later.
            </p>
          </li>
          <li>
            <h3 className="text-xl">Brands and retailers</h3>
            <p className="mt-2 text-ink-2">
              Shopify and custom stores that load fast on phones, plus migrations off slow page-builder sites.
            </p>
          </li>
        </ul>
      </Section>

      {work.length > 0 && (
        <Section
          id="work"
          eyebrow="Recent work"
          title="Projects you can check"
          intro="An AI tool, a coaching institute and an eye hospital. The same remote process applies whether your office is in Narnaul or Noida."
          className="border-t border-line bg-surface-2"
        >
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {work.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <p className="mt-8 text-ink-2">
            Have an existing site? A{" "}
            <Link href="/website-audit" className="font-semibold text-accent-text underline underline-offset-4">
              website audit
            </Link>{" "}
            shows what to fix first. For scope, inclusions and FAQs, see{" "}
            <Link href="/work-with-me" className="font-semibold text-accent-text underline underline-offset-4">
              how I work
            </Link>
            .
          </p>
        </Section>
      )}

      <Section id="faq" eyebrow="FAQ" title="Questions from NCR companies" className="border-t border-line">
        <div className="max-w-3xl">
          <FAQ items={delhiFaqs} />
        </div>
      </Section>

      <LocalPageLinks current={PATH} />

      <CTASection
        title="Tell me about your project"
        text="A few lines are enough: your company, what you need and any deadline. I'll reply with questions, a rough timeline and a suggested next step."
        whatsappMessage={WHATSAPP}
      />
    </>
  );
}
