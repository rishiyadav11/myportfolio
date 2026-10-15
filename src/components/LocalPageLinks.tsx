import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localPages } from "@/content/site";
import { Container } from "./Container";

const core = [
  { href: "/work-with-me", label: "Services and how I work" },
  { href: "/website-audit", label: "Website audit with a fix list" },
  { href: "/work", label: "All case studies" },
];

/** Internal links block for local landing pages. Leaves out the current page. */
export function LocalPageLinks({ current }: { current: string }) {
  const links = [...core, ...localPages.filter((p) => p.href !== current)];
  return (
    <section aria-labelledby="related-title" className="pb-4">
      <Container>
        <div className="border-t border-line pt-10">
          <h2 id="related-title" className="eyebrow">
            Related pages
          </h2>
          <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex min-h-11 items-center gap-2 text-ink-2 hover:text-ink"
                >
                  <ArrowRight aria-hidden="true" className="size-4 text-accent-text transition-transform group-hover:translate-x-0.5" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
