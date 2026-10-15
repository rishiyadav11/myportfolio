import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrackedLink } from "@/components/TrackedLink";
import { PrintButton } from "@/components/PrintButton";
import { site, mailtoLink } from "@/content/site";
import { projects } from "@/content/projects";

// Keep the printed resume to one page: a varied selection, not every project.
const RESUME_SLUGS = [
  "reviewboost-ai",
  "happy-laptops-repair",
  "vijay-hospital",
  "pariksha-career-institute",
  "revonix-labs",
  "chadni-resorts",
];
const resumeProjects = projects.filter((p) => RESUME_SLUGS.includes(p.slug));
import { stack } from "@/content/engineering";
import { confirmedExperience } from "@/content/experience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Resume of Rishi Yadav, full-stack developer in Narnaul, Haryana: skills, selected projects and education. Read it here, print it, or download the PDF.",
  path: "/resume",
  type: "profile",
});

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-6 print:break-inside-avoid print:pt-3">
      <h2 className="eyebrow mb-4 print:mb-2">{title}</h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  const roles = confirmedExperience();

  return (
    <Container className="pt-10 pb-16 md:pt-14 md:pb-24 print:p-0">
      <div className="no-print">
        <Breadcrumbs items={[{ name: "Resume", path: "/resume" }]} />
      </div>

      <div className="no-print mb-8 flex flex-wrap gap-3">
        <TrackedLink href={site.resumePdf} event="resume_download" variant="primary" download>
          <Download aria-hidden="true" className="size-4" />
          Download PDF
        </TrackedLink>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-3xl space-y-8 rounded-xl border border-line bg-surface p-6 md:p-12 print:max-w-none print:space-y-4 print:rounded-none print:border-0 print:bg-transparent print:p-0 print:text-[10.5pt]">
        <header>
          <h1 className="text-4xl md:text-5xl print:text-3xl">{site.name}</h1>
          <p className="mt-2 text-lg text-ink-2 print:mt-1 print:text-base">Full-stack developer and web consultant</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-2 print:mt-2">
            <li>{site.location.label}</li>
            <li>
              <TrackedLink href={mailtoLink("Hello from your resume page")} event="email_click" className="underline">
                {site.email}
              </TrackedLink>
            </li>
            <li>{site.phone.display}</li>
            <li>
              <a href={site.url} className="underline">
                {host(site.url)}
              </a>
            </li>
            <li>
              <a href={site.social.github} className="underline">
                {site.social.github.replace("https://", "")}
              </a>
            </li>
            <li>
              <a href={site.social.linkedin} className="underline">
                {site.social.linkedin.replace("https://www.", "").replace(/\/$/, "")}
              </a>
            </li>
          </ul>
        </header>

        <Block title="Summary">
          <p className="text-ink-2">
            Full-stack developer who builds websites and web apps end to end, from TypeScript and React frontends to
            Node.js and Python APIs, PostgreSQL databases and LLM features grounded in a business&apos;s own data. I work
            with clinics, coaching institutes, hotels and small businesses, and care about fast pages, clear scope and
            code the client owns.
          </p>
        </Block>

        <Block title="Skills">
          <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[9rem_1fr] print:grid-cols-[8rem_1fr]">
            {stack.map((group) => (
              <div key={group.area} className="contents">
                <dt className="font-semibold text-ink">{group.area}</dt>
                <dd className="text-ink-2">{group.items.map((i) => i.name).join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="Selected projects">
          <ul className="space-y-4 print:space-y-2">
            {resumeProjects.map((p) => (
              <li key={p.slug} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-sans text-base font-semibold">
                    {p.client} <span className="font-normal text-muted">· {p.industry}</span>
                  </h3>
                  <a href={p.url} className="font-mono text-xs text-muted underline">
                    {host(p.url)}
                  </a>
                </div>
                <p className="text-ink-2">{p.summary}</p>
                <p className="font-mono text-xs text-muted">{p.stack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </Block>

        {roles.length > 0 && (
          <Block title="Experience">
            <ul className="space-y-4 print:space-y-2">
              {roles.map((role) => (
                <li key={`${role.org}-${role.period}`} className="print:break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-sans text-base font-semibold">
                      {role.title}, {role.org}
                    </h3>
                    <span className="font-mono text-xs text-muted">{role.period}</span>
                  </div>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-ink-2">
                    {role.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-sans text-base font-semibold">{site.education.degree}</h3>
            <span className="font-mono text-xs text-muted">{site.education.period}</span>
          </div>
          <p className="text-ink-2">{site.education.school}</p>
        </Block>
      </article>
    </Container>
  );
}
