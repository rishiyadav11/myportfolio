import { Check, Minus } from "lucide-react";

type List = { title: string; items: string[]; tone?: "yes" | "no" };

/** Two side-by-side lists, e.g. "Included" vs "Not included". Stacks on mobile. */
export function ScopeLists({ left, right }: { left: List; right: List }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
      {[left, right].map((list) => {
        const Icon = list.tone === "no" ? Minus : Check;
        return (
          <div key={list.title} className="bg-surface p-6 md:p-8">
            <h3 className="text-xl">{list.title}</h3>
            <ul className="mt-5 space-y-3">
              {list.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink-2">
                  <Icon
                    aria-hidden="true"
                    className={`mt-1 size-4 shrink-0 ${list.tone === "no" ? "text-muted" : "text-accent-text"}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
