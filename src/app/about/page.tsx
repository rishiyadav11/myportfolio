import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { buttonClass } from "@/components/Button";
import { site, mailtoLink } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "About Rishi Yadav",
  description:
    "Rishi Yadav is a full-stack developer and web consultant from Narnaul, Haryana. Who he is, what he builds for local businesses, and how he works with clients.",
  path: "/about",
  type: "profile",
});

const values = [
  {
    title: "Clear communication",
    text: "You get a written scope before work starts, a private preview link while I build, and a reply within one working day. If something is technical, I explain what it means for your business, not how it works under the hood.",
  },
  {
    title: "Speed",
    text: "Two kinds. Pages that load quickly on a mid-range phone, and a build that doesn't drag on. A typical business website takes 2–4 weeks from the first call to launch.",
  },
  {
    title: "Honesty about scope",
    text: "If you don't need a custom web app, I'll say so. If a request falls outside the quote, I tell you the cost before doing it. If I'm not the right person for the job, I'll tell you that too.",
  },
];

// TODO: Rishi to confirm and update "now" items every few months.
const now = [
  { text: "Taking on new client websites and web apps.", href: "/work-with-me" },
  { text: "Writing about website performance and what websites really cost.", href: "/writing" },
  { text: `Finishing my B.Tech at ${site.education.school} (${site.education.period}).` },
];

const socials = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
  { label: "X (Twitter)", href: site.social.x },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <Container className="pt-10 pb-16 md:pt-14 md:pb-24">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              width={site.photo.width}
              height={site.photo.height}
              priority
              sizes="(min-width: 1200px) 440px, (min-width: 768px) 40vw, 100vw"
              className="h-auto w-full max-w-md rounded-xl border border-line bg-surface-2"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-3">About</p>
            <h1 className="text-4xl md:text-5xl">I&apos;m Rishi Yadav. I build websites and web apps from Narnaul.</h1>
            {/* TODO: Rishi to review this story. Facts used: based in Narnaul, B.Tech CSE (AI) at MDU
                2023–2027, builds sites for local businesses (projects.ts) and ReviewBoost AI. */}
            <div className="prose mt-6 text-lg">
              <p>
                I&apos;m a full-stack developer and web consultant based in Narnaul, in Haryana&apos;s Mahendragarh
                district. I&apos;m studying for a B.Tech in Computer Science (AI) at {site.education.school}, and I
                build websites and web apps for businesses here and across India.
              </p>
              <p>
                Most of my client work is for local businesses: hospitals, coaching institutes, hotels, shops and gyms.
                Their owners don&apos;t want a showpiece. They want a site that loads fast on an ordinary phone,
                explains what they offer in plain words, and makes it easy to call or send a WhatsApp message.
                That&apos;s what I build, with enquiries going straight to the people who answer them.
              </p>
              <p>
                I also build software with AI in it. <Link href="/work/reviewboost-ai">ReviewBoost AI</Link> drafts
                replies to customer reviews using each business&apos;s own details, so the replies sound like the
                business and not like a chatbot.
              </p>
              <p>
                Why this work? A good website is one of the cheapest ways for a small business to look as trustworthy
                as it already is. Plenty of excellent local businesses are nearly invisible online. Fixing that is
                useful, and I enjoy doing it properly.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className={buttonClass("primary")}>
                See my work <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link href="/engineering" className={buttonClass("secondary")}>
                For recruiters
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Section
        id="values"
        eyebrow="How I work"
        title="Three things you can hold me to"
        className="border-t border-line bg-surface-2"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="rounded-xl border border-line bg-surface p-6">
              <h3 className="text-xl">{v.title}</h3>
              <p className="mt-3 text-ink-2">{v.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="now" eyebrow="Now" title="What I'm working on now" className="border-t border-line">
        <div className="grid gap-10 md:grid-cols-12">
          <ul className="space-y-4 md:col-span-7">
            {now.map((item) => (
              <li key={item.text} className="flex gap-3 text-ink-2">
                <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                {item.href ? (
                  <Link href={item.href} className="underline decoration-line-strong hover:decoration-ink">
                    {item.text}
                  </Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="md:col-span-5">
            <h3 className="text-xl">Find me elsewhere</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <TrackedLink href={mailtoLink()} event="email_click" variant="secondary">
                  <Mail aria-hidden="true" className="size-4" />
                  Email
                </TrackedLink>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
