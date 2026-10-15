import type { ComponentType, SVGProps } from "react";
import { Building2, Dumbbell, GraduationCap, Hotel, Landmark, MessageCircle, ShoppingBag, Stethoscope } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/content/site";
import { services } from "@/content/services";
import { workWithMeFaqs } from "@/content/faqs";
import { ServicePageHero, FactList } from "@/components/ServicePageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ScopeLists } from "@/components/ScopeLists";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";

const PATH = "/work-with-me";
const DESCRIPTION =
  "Websites, web apps, audits and care plans for clinics, coaching institutes, hotels, retailers and SMEs. Fixed quotes, clear timelines, code in your name.";

export const metadata = pageMetadata({
  title: "Work With Me: Websites and Web Apps for Businesses",
  description: DESCRIPTION,
  path: PATH,
});

type Audience = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  problems: string[];
};

const audiences: Audience[] = [
  {
    name: "Clinics and hospitals",
    icon: Stethoscope,
    problems: [
      "Patients can't find OPD timings or which doctor sits on which day.",
      "Appointment enquiries go to a form nobody checks.",
      "Doctor and treatment pages are years out of date.",
    ],
  },
  {
    name: "Coaching institutes and schools",
    icon: GraduationCap,
    problems: [
      "Batch timings and fees live in PDFs and WhatsApp forwards.",
      "The site slows down or breaks during admission season.",
      "Parents can't tell what makes you different from the institute next door.",
    ],
  },
  {
    name: "Hotels, resorts and venues",
    icon: Hotel,
    problems: [
      "Most bookings come through travel sites that take a commission.",
      "Large photo galleries make the site painfully slow on mobile data.",
      "Wedding and event enquiries get lost between phone, email and WhatsApp.",
    ],
  },
  {
    name: "Retailers and e-commerce",
    icon: ShoppingBag,
    problems: [
      "Updating products and stock takes too long.",
      "Shoppers drop off at checkout, especially on phones.",
      "The store looks fine but loads slowly and ranks poorly.",
    ],
  },
  {
    name: "Gyms and fitness studios",
    icon: Dumbbell,
    problems: [
      "Plans, timings and trainer details are out of date.",
      "No simple way to book a trial or ask about membership.",
      "Instagram does the work the website should be doing.",
    ],
  },
  {
    name: "Financial-services firms",
    icon: Landmark,
    problems: [
      "The site doesn't look as careful as the firm actually is.",
      "Disclosure pages your registration requires are missing or hard to find.",
      "No privacy policy, consent or basic security headers in place.",
    ],
  },
  {
    name: "SMEs and growing companies",
    icon: Building2,
    problems: [
      "The site was built years ago by someone who is no longer reachable.",
      "Nobody in the company has the domain or hosting login.",
      "Small changes take weeks because every edit needs a developer.",
    ],
  },
];

const youProvide = [
  "Your logo and brand colours, if you have them",
  "Photos of your place, team or products (I'll tell you what works best)",
  "The key facts: services, timings, prices you want shown, contact details",
  "One person who can make decisions and reply within a couple of days",
  "Access to your domain, hosting or existing site, or the details to recover it",
  "Registration or disclosure details if your sector requires them",
];

const iHandle = [
  "Page plan and structure, agreed with you before design starts",
  "Design for mobile and desktop",
  "Shaping your information into clear copy for the agreed pages",
  "Development, contact forms, WhatsApp and call buttons",
  "Analytics with cookie consent, sitemap and Search Console",
  "Hosting setup, launch on your domain and a handover guide",
];

const included = [
  "Design and build of the pages in the agreed scope",
  "Mobile-first layout, tested on real phones",
  "Basic on-page SEO: titles, descriptions, structured data, sitemap",
  "Speed checks before launch",
  "Contact form, WhatsApp and call buttons",
  "Hosting and domain set up in your name, with all logins handed over",
  "Fixes for anything I built that doesn't work as agreed",
];

const notIncluded = [
  "Running paid ads on Google or Meta",
  "Logo design and brand identity",
  "Content writing beyond the agreed pages, or regular blog posts",
  "Ongoing SEO campaigns and link building",
  "Professional photography or video",
  "Social media management",
  "Third-party costs: domain, hosting, paid plugins, payment gateway fees",
];

export default function WorkWithMePage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema({ path: PATH, description: DESCRIPTION })} />

      <ServicePageHero
        breadcrumbs={[{ name: "Work with me", path: PATH }]}
        eyebrow="Services for businesses"
        title="Websites and web apps for clinics, institutes and growing businesses"
        lead={
          <p>
            I design and build websites, web apps and dashboards for businesses in Haryana, Delhi NCR and across
            India. You get a fixed quote, a clear timeline and one person who answers your messages.
          </p>
        }
        actions={
          <>
            <TrackedLink
              href={whatsappLink("Hi Rishi, I'd like to discuss a website or web app for my business.")}
              event="whatsapp_click"
              variant="primary"
            >
              <MessageCircle aria-hidden="true" className="size-4" /> Discuss your project
            </TrackedLink>
            <ButtonLink href="/work" variant="secondary">
              See my work
            </ButtonLink>
          </>
        }
        aside={
          <FactList
            items={[
              { label: "Based in", value: "Narnaul, Haryana" },
              { label: "Clients in", value: "Delhi NCR and across India" },
              { label: "Hours", value: site.workingHours },
              { label: "Replies", value: "Within one working day" },
            ]}
          />
        }
      />

      <Section
        id="who"
        eyebrow="Who I help"
        title="Businesses where the website has a real job to do"
        intro="Most of my clients are not tech companies. They run a clinic, an institute, a resort or a shop, and they need a website that answers questions and brings in enquiries. These are the problems I hear most often."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ name, icon: Icon, problems }) => (
            <li key={name} className="rounded-xl border border-line bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent-text">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-xl">{name}</h3>
              </div>
              <p className="eyebrow mt-5">Typical problems</p>
              <ul className="mt-2 space-y-2">
                {problems.map((p) => (
                  <li key={p} className="border-l-2 border-line pl-3 text-ink-2">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Four ways I can help"
        intro="Every project starts with a written scope. You know what you're getting, when, and what it costs before any work begins."
        className="border-t border-line bg-surface-2"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} variant="full" />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Not sure which one you need? Start with a short call. If your current site only needs fixes, I&apos;ll
          say so.
        </p>
      </Section>

      <Section
        id="process"
        eyebrow="Process"
        title="How a website project runs"
        intro="A typical business website takes 2 to 4 weeks. You see progress on a private preview link throughout, and nothing goes live until you approve it."
      >
        <ProcessSteps />
      </Section>

      <Section
        id="roles"
        eyebrow="Who does what"
        title="What you provide, and what I handle"
        intro="Projects go fastest when content is ready early. Here is how the work is usually split."
        className="border-t border-line"
      >
        <ScopeLists left={{ title: "What you provide", items: youProvide }} right={{ title: "What I handle", items: iHandle }} />
      </Section>

      <Section
        id="scope"
        eyebrow="Scope"
        title="Included, and not included"
        intro="Being clear about this up front avoids awkward conversations later. Anything in the second list can be quoted separately, or I can suggest someone who does it well."
        className="border-t border-line"
      >
        <ScopeLists
          left={{ title: "Included in a website project", items: included }}
          right={{ title: "Not included unless quoted", items: notIncluded, tone: "no" }}
        />
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Questions clients usually ask"
        className="border-t border-line"
      >
        <div className="max-w-3xl">
          <FAQ items={workWithMeFaqs} />
        </div>
      </Section>

      <CTASection
        title="Tell me about your business"
        text="Send a few lines about what you do and what isn't working. I'll reply with honest advice, a rough timeline and the next step."
        whatsappMessage="Hi Rishi, I saw your services page and would like to discuss a project."
      />
    </>
  );
}
