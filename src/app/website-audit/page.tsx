import type { ComponentType, SVGProps } from "react";
import { FileText, Gauge, Globe, MessageCircle, Scale, Search, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { whatsappLink } from "@/content/site";
import { services } from "@/content/services";
import { auditFaqs } from "@/content/faqs";
import { ServicePageHero, FactList } from "@/components/ServicePageHero";
import { Section } from "@/components/Section";
import { AuditSampleReport } from "@/components/AuditSampleReport";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";

const PATH = "/website-audit";
const DESCRIPTION =
  "A written audit of your site's speed, SEO, forms, mobile layout, security headers and compliance basics, with a prioritised fix list. Ready in 5–7 working days.";

export const metadata = pageMetadata({
  title: "Website Audit: Speed, SEO, Security and Compliance",
  description: DESCRIPTION,
  path: PATH,
});

const audit = services.find((s) => s.slug === "audits");
const price = audit?.price ?? "Price on request";
const turnaround = audit?.timeline ?? "5–7 working days";

type Area = { title: string; icon: ComponentType<SVGProps<SVGSVGElement>>; checks: string[] };

const areas: Area[] = [
  {
    title: "Speed and Core Web Vitals",
    icon: Gauge,
    checks: [
      "Mobile and desktop speed, tested on a mid-range phone profile",
      "Largest Contentful Paint, Interaction to Next Paint and layout shift",
      "Heavy images, fonts, plugins and third-party scripts",
    ],
  },
  {
    title: "SEO",
    icon: Search,
    checks: [
      "Titles, descriptions and headings on key pages",
      "Indexing, sitemap, robots.txt and broken links",
      "Structured data and how your business shows in search results",
    ],
  },
  {
    title: "Broken features and forms",
    icon: Wrench,
    checks: [
      "Contact and booking forms tested end to end",
      "WhatsApp, call and map links",
      "Error pages, redirects and dead buttons",
    ],
  },
  {
    title: "Mobile experience",
    icon: Smartphone,
    checks: [
      "Layout on small Android phones and iPhones",
      "Tap targets, text size and menus",
      "Whether key information is visible without hunting for it",
    ],
  },
  {
    title: "Security headers",
    icon: ShieldCheck,
    checks: [
      "HTTPS, HSTS and mixed content",
      "Content-Security-Policy, X-Frame-Options and related headers",
      "Outdated platform versions and plugins visible from outside",
    ],
  },
  {
    title: "Compliance hygiene",
    icon: Scale,
    checks: [
      "Privacy policy and cookie consent, in line with the DPDP Act 2023",
      "Analytics and tracking that load before consent",
      "Disclosure pages where your sector expects them, such as SEBI-registered advisers",
    ],
  },
  {
    title: "Competitor comparison",
    icon: Globe,
    checks: [
      "Two or three competitors you name, or that rank above you",
      "Speed, clarity of information and how easy it is to enquire",
      "What they do well that you could adopt",
    ],
  },
];

const auditSteps = [
  {
    step: "Share your site",
    time: "Day 1",
    text: "Send the website address, what the site is meant to achieve and any competitors you want compared.",
  },
  {
    step: "Review and testing",
    time: "Days 1–5",
    text: "I test the site on phones and desktop, run speed and SEO checks, and try every form and link.",
  },
  {
    step: "Written report",
    time: "Days 5–7",
    text: "You get the report with a summary, findings by severity and a fix list with effort estimates.",
  },
  {
    step: "Walkthrough",
    time: "After delivery",
    // TODO(Rishi): confirm a walkthrough call is included with every audit.
    text: "A short call to go through the findings and answer questions. Then you decide who fixes what.",
  },
];

export default function WebsiteAuditPage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema({ path: PATH, description: DESCRIPTION })} />

      <ServicePageHero
        breadcrumbs={[
          { name: "Work with me", path: "/work-with-me" },
          { name: "Website audit", path: PATH },
        ]}
        eyebrow="Website audit"
        title="Find out what's slowing your website down or losing you enquiries"
        lead={
          <p>
            A written audit of speed, SEO, forms, mobile layout, security and compliance basics. Every finding
            comes with a plain-language fix and an effort estimate, so you know what to do first.
          </p>
        }
        actions={
          <>
            <TrackedLink
              href={whatsappLink("Hi Rishi, I'd like a website audit. My website is: ")}
              event="whatsapp_click"
              variant="primary"
            >
              <MessageCircle aria-hidden="true" className="size-4" /> Request an audit
            </TrackedLink>
            <ButtonLink href="#sample" variant="secondary">
              See a sample report
            </ButtonLink>
          </>
        }
        aside={
          <FactList
            items={[
              { label: "Turnaround", value: turnaround },
              { label: "Price", value: price },
              { label: "Format", value: "Written report + call" },
              { label: "Access needed", value: "None required" },
            ]}
          />
        }
      />

      <Section
        id="covers"
        eyebrow="What the audit covers"
        title="Seven areas, checked the way your visitors and Google see them"
        intro="The audit is for business owners who suspect the website is underperforming but don't know where to start. It works on any platform: WordPress, Wix, Shopify or custom code."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ title, icon: Icon, checks }) => (
            <li key={title} className="rounded-xl border border-line bg-surface p-6">
              <Icon aria-hidden="true" className="size-6 text-accent-text" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <ul className="mt-3 space-y-2 text-ink-2">
                {checks.map((c) => (
                  <li key={c} className="border-l-2 border-line pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-xl border border-dashed border-line-strong p-6">
            <div>
              <FileText aria-hidden="true" className="size-6 text-accent-text" />
              <h3 className="mt-4 text-xl">Not a sales pitch</h3>
              <p className="mt-3 text-ink-2">
                If your site is in good shape, the report will say so. You are free to fix the issues yourself, with
                your current developer, or with me.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <Section
        id="deliverable"
        eyebrow="What you receive"
        title="A report you can act on, not a 60-page printout"
        className="border-t border-line bg-surface-2"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-5 text-lg text-ink-2 md:col-span-7">
            <p>
              The report starts with a one-page summary in plain language: what is working, what is costing you
              enquiries, and the three things to fix first. If you only read one page, read that one.
            </p>
            <p>
              After the summary, each finding is listed with its severity, the area it affects, what I found, how to
              fix it and roughly how long the fix takes. Speed scores are recorded with the date and device they were
              tested on, so you can measure the improvement later.
            </p>
            <p>
              The fix list is written so you can hand it straight to whoever maintains your site. Nothing is hidden
              behind jargon.
            </p>
          </div>
          <div className="md:col-span-5">
            <FactList
              items={[
                { label: "Summary", value: "1 page, plain language" },
                { label: "Findings", value: "Severity, fix, effort" },
                { label: "Evidence", value: "Screenshots, dated scores" },
                { label: "Delivered as", value: "PDF and shared doc" },
                { label: "Turnaround", value: turnaround },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section
        id="sample"
        eyebrow="Sample"
        title="What a report looks like"
        intro="An anonymised excerpt to show the format. The findings below are typical issues, not results from a particular client's website."
      >
        <AuditSampleReport />
      </Section>

      <Section id="how" eyebrow="How it works" title="From request to report in about a week" className="border-t border-line">
        <ProcessSteps steps={auditSteps} />
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions about the audit" className="border-t border-line">
        <div className="max-w-3xl">
          <FAQ items={auditFaqs} />
        </div>
      </Section>

      <CTASection
        title="Want to know where your website stands?"
        text="Send me your website address and what it should be doing for your business. I'll confirm the scope, price and delivery date before starting."
        whatsappMessage="Hi Rishi, I'd like a website audit. My website is: "
      />
    </>
  );
}
