import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { whatsappLink } from "@/content/site";
import { projectsByRegion } from "@/content/projects";
import { haryanaFaqs } from "@/content/faqs";
import { ServicePageHero } from "@/components/ServicePageHero";
import { Section } from "@/components/Section";
import { ScopeLists } from "@/components/ScopeLists";
import { ProjectCard } from "@/components/ProjectCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";
import { LocalPageLinks } from "@/components/LocalPageLinks";

const PATH = "/website-developer-haryana";
const DESCRIPTION =
  "Website developer for businesses in Gurugram, Rewari, Rohtak, Mahendragarh and Jhajjar. Remote or on-site, in Hindi or English, with fixed quotes and timelines.";
const WHATSAPP = "Hi Rishi, I run a business in Haryana and would like to discuss a website.";

export const metadata = pageMetadata({
  title: "Website Developer in Haryana",
  description: DESCRIPTION,
  path: PATH,
});

const towns = [
  {
    name: "Gurugram",
    meet: "Remote first, visits for key meetings",
    text: "Offices, clinics and startups that want an experienced developer without agency overheads. Web apps, dashboards and company websites.",
  },
  {
    name: "Rewari",
    meet: "On-site visits are easy to arrange",
    text: "Coaching and defence-exam academies, schools, hospitals, and suppliers to the industrial units around Bawal and Dharuhera.",
  },
  {
    name: "Rohtak",
    meet: "Remote, with visits when needed",
    text: "A large student population means coaching institutes, hostels and PG accommodation, clinics and diagnostic centres.",
  },
  {
    name: "Mahendragarh",
    meet: "Close to Narnaul, meetings in person",
    text: "Schools, coaching centres, clinics and local shops that need a simple, clear site and a working Google listing.",
  },
  {
    name: "Jhajjar",
    meet: "Remote, with visits when needed",
    text: "Hospitals and clinics, schools, and manufacturers and traders around Bahadurgarh who sell to buyers across NCR.",
  },
];

const remote = [
  "A website with a clear brief and content you can send by email or WhatsApp",
  "Changes and reviews you can do on a preview link on your phone",
  "Busy owners who would rather take a 20-minute call than host a meeting",
  "Keeping costs down, since there is no travel to pay for",
];

const onSite = [
  "Web apps where I need to see how your staff work today",
  "A first meeting with partners or doctors who all need a say",
  "Training front-desk or admission staff to use a new system",
  "Collecting photos and details from a site that is hard to describe",
];

export default function HaryanaPage() {
  const haryanaWork = projectsByRegion("Narnaul");
  return (
    <>
      <JsonLd data={professionalServiceSchema({ path: PATH, description: DESCRIPTION })} />

      <ServicePageHero
        breadcrumbs={[{ name: "Website developer in Haryana", path: PATH }]}
        eyebrow="Haryana"
        title="Website Developer in Haryana"
        lead={
          <p>
            I&apos;m based in Narnaul and work with businesses across southern Haryana and Gurugram. Most of the
            work happens remotely, and I visit when meeting in person will make the project better.
          </p>
        }
        actions={
          <>
            <TrackedLink href={whatsappLink(WHATSAPP)} event="whatsapp_click" variant="primary">
              <MessageCircle aria-hidden="true" className="size-4" /> Talk about your project
            </TrackedLink>
            <ButtonLink href="/work" variant="secondary">
              See my work
            </ButtonLink>
          </>
        }
      />

      <Section
        id="towns"
        eyebrow="Where I work"
        title="Towns and cities I work with"
        intro="Each place has different businesses and different needs. Here is what I usually see, and how we would normally work together."
      >
        <ul className="divide-y divide-line border-y border-line">
          {towns.map((t) => (
            <li key={t.name} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl">{t.name}</h3>
                <p className="eyebrow mt-1">{t.meet}</p>
              </div>
              <p className="text-ink-2 md:col-span-9">{t.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-ink-2">
          In Narnaul itself, I can meet you at your place of business. See the{" "}
          <Link href="/website-developer-narnaul" className="font-semibold text-accent-text underline underline-offset-4">
            Narnaul page
          </Link>{" "}
          for details.
        </p>
      </Section>

      <Section
        id="remote-onsite"
        eyebrow="Remote or on-site"
        title="When a call is enough, and when it's worth meeting"
        intro="You don't pay for travel you don't need. For most websites, calls and a shared preview link are faster than meetings. Some projects genuinely go better face to face."
        className="border-t border-line"
      >
        <ScopeLists left={{ title: "Remote works well for", items: remote }} right={{ title: "On-site helps with", items: onSite }} />
        {/* TODO(Rishi): confirm the travel policy below (what's covered, what's quoted). */}
        <div className="mt-8 max-w-3xl rounded-xl border border-line bg-surface-2 p-6">
          <h3 className="text-xl">Travel</h3>
          <p className="mt-2 text-ink-2">
            Meetings within Mahendragarh district are part of the project. For Gurugram, Rohtak, Jhajjar and other
            towns, I plan visits around the moments that matter, usually the first meeting and launch, and include
            any travel cost in the quote so you see it before agreeing.
          </p>
        </div>
      </Section>

      <Section
        id="language"
        eyebrow="Communication"
        title="Hindi or English, whichever you prefer"
        className="border-t border-line"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-ink-2">
            <p>
              Many business owners in Haryana are more comfortable discussing their business in Hindi, and that
              is how our calls can go. Quotes, scopes and handover notes are written in clear, simple English, and
              I walk you through them on a call so nothing is unclear.
            </p>
            <p>
              Your website can be in English, Hindi or both. A bilingual site takes a little longer because each
              page exists twice, but for clinics, schools and coaching institutes it often brings more enquiries
              from parents and older patients.
            </p>
          </div>
          <div className="space-y-4 text-ink-2">
            <p>
              Updates come on WhatsApp, because that is where you already are. You get a short message when
              there is something to review, with a link you can open on your phone, not a long email thread.
            </p>
            <p>
              When I need something from you, such as photos, timings or a decision, I ask clearly and early, so
              the project doesn&apos;t stall in the last week.
            </p>
          </div>
        </div>
      </Section>

      {haryanaWork.length > 0 && (
        <Section
          id="work"
          eyebrow="Work in Haryana"
          title="Recent websites for Haryana businesses"
          intro={`A few of the ${haryanaWork.length} sites I have built for businesses in Narnaul. More projects, from schools to AI tools, are on the work page.`}
          className="border-t border-line bg-surface-2"
        >
          <div className="grid gap-10 md:grid-cols-2">
            {haryanaWork.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}

      <Section
        id="next"
        eyebrow="Before you call"
        title="Not sure where to start?"
        className="border-t border-line"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-xl">You have a website, but it isn&apos;t working</h3>
            <p className="mt-2 text-ink-2">
              Start with a{" "}
              <Link href="/website-audit" className="font-semibold text-accent-text underline underline-offset-4">
                website audit
              </Link>
              . You get a written list of what&apos;s wrong and what each fix takes, in 5 to 7 working days.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-xl">You need a new site or a web app</h3>
            <p className="mt-2 text-ink-2">
              See the{" "}
              <Link href="/work-with-me" className="font-semibold text-accent-text underline underline-offset-4">
                services page
              </Link>{" "}
              for what&apos;s included, timelines and the questions clients usually ask, then send me a message.
            </p>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions from Haryana businesses" className="border-t border-line">
        <div className="max-w-3xl">
          <FAQ items={haryanaFaqs} />
        </div>
      </Section>

      <LocalPageLinks current={PATH} />

      <CTASection
        title="Tell me where you are and what you need"
        text="Send your town, your business and what the website should do. I'll suggest whether a call or a visit makes more sense, and give you a rough timeline."
        whatsappMessage={WHATSAPP}
      />
    </>
  );
}
