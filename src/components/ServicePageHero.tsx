import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { Contours } from "./graphics";

/**
 * Top of a services or local page: breadcrumbs, eyebrow, the page's single H1,
 * a lead paragraph and an optional row of actions.
 */
export function ServicePageHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  actions,
  aside,
}: {
  breadcrumbs: { name: string; path: string }[];
  eyebrow?: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  /** Optional right-hand column on desktop (e.g. key facts). */
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-8 pb-14 md:pt-12 md:pb-20">
      <Contours
        seed={19}
        className="pointer-events-none absolute -top-48 -right-72 size-[40rem] text-line-strong opacity-70 md:-right-48 md:size-[52rem]"
      />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className={aside ? "md:col-span-8" : "md:col-span-10"}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="text-4xl md:text-5xl">{title}</h1>
            <div className="mt-5 max-w-2xl text-lg text-ink-2 md:text-xl">{lead}</div>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside && <div className="md:col-span-4">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}

/** Small key-facts box used beside a hero. */
export function FactList({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline justify-between gap-4 px-5 py-4">
          <dt className="eyebrow">{item.label}</dt>
          <dd className="text-right font-semibold text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
