import Link from "next/link";
import { ArrowRight } from "lucide-react";

const paths = [
  {
    href: "/work-with-me",
    label: "For businesses",
    title: "Need a website for your business?",
    text: "Websites, redesigns, web apps and audits. Fixed scope, quoted in writing.",
  },
  {
    href: "/engineering",
    label: "For hiring teams",
    title: "Hiring a full-stack engineer?",
    text: "Next.js, TypeScript, Node.js, Python and LLM work, with architecture notes.",
  },
] as const;

/** The two audience paths under the home hero: large rows that invert on hover. */
export function PathSplit({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Choose where to start" className={className} style={{ "--d": "800ms" } as React.CSSProperties}>
      <ul className="grid border-y-[1.5px] border-ink md:grid-cols-2">
        {paths.map((p, i) => (
          <li key={p.href} className={i === 1 ? "border-t-[1.5px] border-ink md:border-t-0 md:border-l-[1.5px]" : ""}>
            <Link
              href={p.href}
              className="group relative isolate flex h-full items-center justify-between gap-6 overflow-hidden px-1 py-6 no-underline md:px-6 md:py-5"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
              />
              <span className="transition-colors duration-300 group-hover:text-bg">
                <span className="block text-sm font-semibold text-accent-text transition-colors group-hover:text-accent">
                  {p.label}
                </span>
                <span className="mt-1.5 block font-display text-2xl leading-tight font-bold tracking-tight md:text-3xl">
                  {p.title}
                </span>
                <span className="mt-2 block text-[0.9375rem] text-ink-2 transition-colors group-hover:text-bg/75">
                  {p.text}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent text-accent-ink transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-45"
              >
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
