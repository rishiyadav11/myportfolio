import { Plus } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export type FaqItem = { q: string; a: string };

/**
 * Accessible accordion built on <details>/<summary> (keyboard and
 * screen-reader friendly with no JS). Emits FAQPage JSON-LD by default.
 */
export function FAQ({ items, schema = true }: { items: FaqItem[]; schema?: boolean }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <Plus aria-hidden="true" className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" />
          </summary>
          <p className="max-w-prose pb-5 text-ink-2">{item.a}</p>
        </details>
      ))}
      {schema && <JsonLd data={faqSchema(items)} />}
    </div>
  );
}
