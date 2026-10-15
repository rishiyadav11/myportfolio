import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { whatsappLink } from "@/content/site";
import { projectsByRegion } from "@/content/projects";
import { narnaulFaqs } from "@/content/faqs";
import { ServicePageHero } from "@/components/ServicePageHero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";
import { LocalPageLinks } from "@/components/LocalPageLinks";

const PATH = "/website-developer-narnaul";
const DESCRIPTION =
  "Website developer based in Narnaul. I build websites for clinics, coaching institutes, shops and hotels in Narnaul and Mahendragarh, and meet you in person.";
const WHATSAPP = "Hi Rishi, I run a business in Narnaul and would like to talk about a website.";

export const metadata = pageMetadata({
  title: "Website Developer in Narnaul, Haryana",
  description: DESCRIPTION,
  path: PATH,
});

const reasons = [
  {
    title: "We can sit together",
    text: "I come to your clinic, institute or shop, see how enquiries actually reach you, and plan the site around that. No guessing over a phone call.",
  },
  {
    title: "Same language, same context",
    text: "We talk in Hindi or English, whichever is easier. I know how people here search: on a phone, often in Hinglish, and usually ending in a WhatsApp message or a call.",
  },
  {
    title: "Someone nearby after launch",
    text: "If something needs changing during admission season or a busy OPD week, you message someone in the same town, not a call centre.",
  },
];

const needs = [
  {
    business: "Clinics and hospitals",
    text: "Patients come in from nearby villages and towns, often after asking a relative which doctor to see. The website has to answer the basics on a phone in a few seconds: which doctor, which day, what timings, how to reach you. Treatment pages should be written so a patient's family can understand them.",
  },
  {
    business: "Coaching institutes",
    text: "Parents compare two or three institutes before admission. They look for batch timings, fees, faculty and past selections. A clear site with an admission enquiry form that reaches the right person saves your counsellors from answering the same questions all day.",
  },
  {
    business: "Shops and showrooms",
    text: "For many shops, a complete Google Business Profile matters more than a big website. A simple one-page site with your products, timings, location and a WhatsApp button is often enough. I'll tell you honestly if that's all you need.",
  },
  {
    business: "Hotels and wedding venues",
    text: "Families planning a wedding want to see the lawns, halls and rooms before they call. That means good photos that still load quickly on mobile data, and an enquiry form that asks for the date and guest count so you can reply with a real answer.",
  },
];

const steps = [
  { title: "First meeting", text: "At your place, at a time that suits you. We talk about what the site needs to do." },
  { title: "Written quote", text: "Within a few days you get the scope, timeline and a fixed price in writing." },
  { title: "Preview on WhatsApp", text: "I share a private link as the site takes shape. You check it on your own phone." },
  { title: "Launch together", text: "We go live, I show you or your staff how things work, and you get every login." },
];

export default function NarnaulPage() {
  const local = projectsByRegion("Narnaul");
  // Six varied cards up front; the rest as a linked list.
  const lead = ["vijay-hospital", "gice-academy", "saawariya-hotels", "electronic-smart-plaza", "happy-laptops-repair", "goyal-netra"];
  const shown = lead.map((slug) => local.find((p) => p.slug === slug)).filter((p) => p !== undefined);
  const more = local.filter((p) => !lead.includes(p.slug));
  return (
    <>
      <JsonLd data={professionalServiceSchema({ path: PATH, description: DESCRIPTION })} />

      <ServicePageHero
        breadcrumbs={[{ name: "Website developer in Narnaul", path: PATH }]}
        eyebrow="Narnaul · Mahendragarh district"
        title="Website Developer in Narnaul, Haryana"
        lead={
          <p>
            I&apos;m Rishi Yadav, a full-stack developer based in Narnaul. I build websites for clinics, coaching
            institutes, shops and hotels here and across Mahendragarh district, and I&apos;m happy to meet you in
            person to plan yours.
          </p>
        }
        actions={
          <>
            <TrackedLink href={whatsappLink(WHATSAPP)} event="whatsapp_click" variant="primary">
              <MessageCircle aria-hidden="true" className="size-4" /> Arrange a meeting
            </TrackedLink>
            <ButtonLink href="#local-work" variant="secondary">
              See Narnaul work
            </ButtonLink>
          </>
        }
      />

      <Section
        id="why-local"
        eyebrow="Why local helps"
        title="A developer you can actually meet"
        intro="Most website problems in small businesses are not technical. They come from nobody sitting down to ask how customers find you and what they need to know. Being in the same town makes that conversation easy."
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="bg-surface p-6 md:p-8">
              <h3 className="text-xl">{r.title}</h3>
              <p className="mt-3 text-ink-2">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="needs"
        eyebrow="Local businesses"
        title="What Narnaul businesses usually need"
        className="border-t border-line"
      >
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {needs.map((n) => (
            <div key={n.business}>
              <h3 className="text-2xl">{n.business}</h3>
              <p className="mt-3 text-ink-2">{n.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {local.length > 0 && (
        <Section
          id="local-work"
          eyebrow="Work in Narnaul"
          title="Websites I've built for Narnaul businesses"
          intro={`${local.length} live sites for hospitals, institutes, hotels, shops and local brands. Open any of them on your phone and judge for yourself how quickly they load and how easy it is to get in touch.`}
          className="border-t border-line bg-surface-2"
        >
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          {more.length > 0 && (
            <div className="mt-12 border-t border-line pt-6">
              <h3 className="eyebrow font-mono">Also in Narnaul</h3>
              <ul className="mt-3 flex flex-wrap gap-x-6">
                {more.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className="inline-flex min-h-11 items-center text-ink hover:text-accent-text hover:underline">
                      {p.client}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}

      <Section id="steps" eyebrow="How it works" title="How a project runs in Narnaul">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-accent pt-4">
              <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-xl">{s.title}</h3>
              <p className="mt-2 text-ink-2">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-ink-2">
          A typical business website takes 2 to 4 weeks once your content and photos are ready. Prices, inclusions
          and payment terms are on the{" "}
          <Link href="/work-with-me" className="font-semibold text-accent-text underline underline-offset-4">
            services page
          </Link>
          .
        </p>
      </Section>

      <Section
        id="area"
        eyebrow="Where I work"
        title="Narnaul and the rest of Mahendragarh district"
        className="border-t border-line"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-4 text-ink-2 md:col-span-5">
            <p>
              I can meet in person anywhere in Narnaul and in nearby towns such as Mahendragarh, Ateli, Nangal
              Chaudhry and Kanina. For businesses further away, in Rewari, Gurugram or elsewhere in Haryana, see
              the{" "}
              <Link href="/website-developer-haryana" className="font-semibold text-accent-text underline underline-offset-4">
                Haryana page
              </Link>
              .
            </p>
            <p>
              Already have a website that feels slow or out of date? A{" "}
              <Link href="/website-audit" className="font-semibold text-accent-text underline underline-offset-4">
                website audit
              </Link>{" "}
              tells you what to fix before you spend money on a rebuild.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
              <iframe
                src="https://www.google.com/maps?q=Narnaul,+Haryana&output=embed"
                title="Map of Narnaul, Haryana"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full border-0"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions from Narnaul business owners" className="border-t border-line">
        <div className="max-w-3xl">
          <FAQ items={narnaulFaqs} />
        </div>
      </Section>

      <LocalPageLinks current={PATH} />

      <CTASection
        title="Let's meet and talk about your website"
        text="Tell me what your business does and when you're free. I'll come over, listen, and tell you honestly what you need."
        whatsappMessage={WHATSAPP}
      />
    </>
  );
}
