import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { TrackedLink } from "@/components/TrackedLink";
import { PrivateWork } from "@/components/PrivateWork";
import { site, mailtoLink } from "@/content/site";
import { projects, getProject } from "@/content/projects";
import { stack, engineeringNotes, repos, openTo, type EngineeringNote } from "@/content/engineering";
import { confirmedExperience, confirmedAchievements } from "@/content/experience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Engineering: Stack, Architecture Notes and GitHub",
  description:
    "For recruiters and founders: the stack Rishi Yadav works in, short architecture notes on real projects, public GitHub repositories and his resume.",
  path: "/engineering",
  type: "profile",
});

// ReviewBoost AI's note lives on the project itself; the rest are in engineering.ts.
const notes: EngineeringNote[] = [
  ...projects
    .filter((p) => p.architecture)
    .map((p) => ({
      slug: p.slug,
      title: `${p.client}: grounded AI replies`,
      projectSlug: p.slug,
      ...p.architecture!,
    })),
  ...engineeringNotes,
];

export default function EngineeringPage() {
  const roles = confirmedExperience();
  const awards = confirmedAchievements();

  return (
    <>
      <Container className="pt-10 pb-12 md:pt-14 md:pb-16">
        <Breadcrumbs items={[{ name: "Engineering", path: "/engineering" }]} />
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow mb-3">For recruiters and founders</p>
            <h1 className="text-4xl md:text-5xl">Full-stack engineer working in Next.js, Node.js and applied AI</h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-2">
              I build production websites and web apps end to end: TypeScript frontends, Node.js and Python APIs,
              PostgreSQL, and LLM features grounded in real data. Below is the stack I use, how I think about a few
              real projects, and code you can read.
            </p>
            {openTo && <p className="mt-4 font-semibold text-ink">{openTo}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink href={site.resumePdf} event="resume_download" variant="primary" download>
                <Download aria-hidden="true" className="size-4" />
                Resume (PDF)
              </TrackedLink>
              <ButtonLink href={site.social.github} variant="secondary">
                GitHub
              </ButtonLink>
              <ButtonLink href={site.social.linkedin} variant="secondary">
                LinkedIn
              </ButtonLink>
              <TrackedLink
                href={mailtoLink("Role or project for Rishi Yadav")}
                event="email_click"
                variant="ghost"
              >
                <Mail aria-hidden="true" className="size-4" />
                {site.email}
              </TrackedLink>
            </div>
          </div>
          <dl className="grid content-start gap-5 rounded-xl border border-line bg-surface p-6 text-sm md:col-span-4">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-1 text-ink">{site.location.label}. Remote across India.</dd>
            </div>
            <div>
              <dt className="eyebrow">Education</dt>
              <dd className="mt-1 text-ink">
                {site.education.degree}, {site.education.school}, {site.education.period}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Focus</dt>
              <dd className="mt-1 text-ink">Full-stack TypeScript, APIs and databases, LLM integrations, web performance</dd>
            </div>
            <div>
              <dt className="eyebrow">Live work</dt>
              <dd className="mt-1">
                <Link href="/work" className="text-accent-text underline">
                  {projects.length} projects with live links
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </Container>

      <Section
        id="stack"
        eyebrow="Stack"
        title="What I work with"
        intro="Grouped by where it sits in a system. I pick the simplest tool that fits the job, and I'm comfortable reading and changing code in all of these."
        className="border-t border-line"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <section key={group.area} className="rounded-xl border border-line bg-surface p-6" aria-labelledby={`stack-${group.area}`}>
              <h3 id={`stack-${group.area}`} className="text-xl">
                {group.area}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3 border-b border-line pb-2 last:border-0 last:pb-0">
                    <span className="text-ink-2">{item.name}</span>
                    {item.years !== null && (
                      <span className="font-mono text-xs text-muted">
                        {item.years} {item.years === 1 ? "yr" : "yrs"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section
        id="notes"
        eyebrow="Architecture notes"
        title="How a few real projects are put together"
        intro="Short notes on what I built, why it's shaped that way, and what it costs. Each one links to the live project."
        className="border-t border-line bg-surface-2"
      >
        <div className="space-y-6">
          {notes.map((note) => {
            const project = getProject(note.projectSlug);
            return (
              <article key={note.slug} className="rounded-xl border border-line bg-surface p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-2xl">{note.title}</h3>
                  {project && (
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex min-h-11 items-center gap-1 font-mono text-xs uppercase tracking-wide text-accent-text hover:underline"
                    >
                      {project.client} case study
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  )}
                </div>
                <dl className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <dt className="eyebrow">What</dt>
                    <dd className="mt-2 text-ink-2">{note.what}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Why</dt>
                    <dd className="mt-2 text-ink-2">{note.why}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Trade-offs</dt>
                    <dd className="mt-2 text-ink-2">{note.tradeoffs}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </Section>

      {repos.length > 0 && (
        <Section
          id="github"
          eyebrow="GitHub"
          title="Public repositories"
          intro={
            <>
              A few recent public projects. Everything else is on{" "}
              <a href={site.social.github} className="text-accent-text underline" target="_blank" rel="noopener noreferrer">
                github.com/rishiyadav11
              </a>
              .
            </>
          }
          className="border-t border-line"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <li key={repo.name} className="flex flex-col rounded-xl border border-line bg-surface p-6">
                <h3 className="font-mono text-base font-medium">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent-text hover:underline">
                    {repo.name}
                  </a>
                </h3>
                {repo.description && <p className="mt-2 text-ink-2">{repo.description}</p>}
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-sm text-muted">
                  {repo.language && <span className="font-mono text-xs">{repo.language}</span>}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1 hover:text-ink hover:underline"
                    >
                      Live demo <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      <span className="sr-only"> of {repo.name}</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Container className="pb-16 md:pb-24">
        <PrivateWork />
      </Container>

      {roles.length > 0 && (
        <Section id="experience" eyebrow="Experience" title="Work history" className="border-t border-line">
          <ol className="divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li key={`${role.org}-${role.period}`} className="grid gap-2 py-6 md:grid-cols-12">
                <p className="font-mono text-xs text-muted md:col-span-3 md:pt-1.5">{role.period}</p>
                <div className="md:col-span-9">
                  <h3 className="text-xl">
                    {role.title}, {role.org}
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-2">
                    {role.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {awards.length > 0 && (
        <Section id="achievements" eyebrow="Achievements" title="Hackathons and recognition" className="border-t border-line">
          <ul className="space-y-3">
            {awards.map((a) => (
              <li key={a.title} className="text-ink-2">
                <strong className="text-ink">{a.title}</strong>: {a.detail}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section className="border-t border-line">
        <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h2 className="text-3xl">Want to talk about a role?</h2>
            <p className="mt-3 text-ink-2">
              Email me with the role, team and stack. {site.responseTime}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <TrackedLink href={mailtoLink("Role for Rishi Yadav")} event="email_click" variant="primary">
              <Mail aria-hidden="true" className="size-4" />
              Email me
            </TrackedLink>
            <Link href="/resume" className="inline-flex min-h-11 items-center px-2 font-semibold text-ink underline decoration-line-strong hover:decoration-ink">
              View resume
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
