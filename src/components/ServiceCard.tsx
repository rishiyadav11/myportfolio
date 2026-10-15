import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/content/services";

/**
 * compact: name + one line + link (home page grid).
 * full: adds price, timeline and deliverables (services page).
 */
export function ServiceCard({ service, variant = "compact" }: { service: Service; variant?: "compact" | "full" }) {
  if (variant === "compact") {
    return (
      <Link
        href={service.href}
        className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
      >
        <h3 className="text-xl">{service.name}</h3>
        <p className="mt-2 flex-1 text-ink-2">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text">
          Learn more <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    );
  }
  return (
    <article id={service.slug} className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 md:p-8">
      <h3 className="text-2xl">{service.name}</h3>
      <p className="mt-2 text-ink-2">{service.short}</p>
      <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-line py-4 text-sm">
        <div>
          <dt className="eyebrow">Starting from</dt>
          <dd className="mt-1 font-semibold text-ink">{service.price ?? "Price on request"}</dd>
        </div>
        <div>
          <dt className="eyebrow">Timeline</dt>
          <dd className="mt-1 font-semibold text-ink">{service.timeline}</dd>
        </div>
      </dl>
      <ul className="mt-5 flex-1 space-y-2">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-2.5 text-ink-2">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-text" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
