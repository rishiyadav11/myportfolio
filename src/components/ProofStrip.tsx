import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Container } from "./Container";

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

const facts = [
  {
    title: "Fixed-scope quotes, in writing",
    text: "You know what you get and what it costs before any work starts.",
  },
  {
    title: "Code, domain and hosting in your name",
    text: "You own everything. No lock-in if you move on later.",
  },
  {
    title: "A reply within one working day",
    text: `On WhatsApp or email, ${site.workingHours}.`,
  },
];

/**
 * Verifiable facts only. No measured numbers exist yet.
 * TODO: add dated Lighthouse / load-time measurements here once Rishi has them.
 */
export function ProofStrip() {
  return (
    <section aria-labelledby="proof-title" className="py-12 md:py-16">
      <Container>
        <h2 id="proof-title" className="sr-only">
          What you can check
        </h2>
        <ul className="grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          <li className="bg-bg py-6 sm:px-6 lg:py-8 lg:pl-0">
            <p className="flex items-baseline gap-3">
              <span className="font-display text-5xl leading-none text-accent-text">{projects.length}</span>
              <span className="font-display text-xl leading-tight text-ink">live sites you can visit</span>
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-3 font-mono text-xs">
              {projects.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-8 items-center text-muted underline decoration-line-strong hover:text-ink hover:decoration-ink"
                  >
                    {host(p.url)}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {facts.map((f) => (
            <li key={f.title} className="bg-bg py-6 sm:px-6 lg:py-8">
              <p className="font-display text-xl leading-tight text-ink">{f.title}</p>
              <p className="mt-2 text-[0.9375rem] text-ink-2">{f.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
