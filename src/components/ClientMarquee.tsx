import { Asterisk } from "lucide-react";

/**
 * Slow, endless band of real client names (CSS animation, pauses on hover).
 * The duplicate track is hidden from screen readers; the visible list is announced once.
 */
export function ClientMarquee({ names }: { names: string[] }) {
  const items = names.map((n) => (
    <li key={n} className="flex items-center gap-10 whitespace-nowrap">
      <span>{n}</span>
      <Asterisk aria-hidden="true" className="size-8 shrink-0 text-accent md:size-10" strokeWidth={2.5} />
    </li>
  ));
  return (
    <section aria-label="Clients I've built websites for" className="border-y-[1.5px] border-ink py-6 md:py-8">
      <div className="marquee font-display text-3xl font-bold tracking-tight md:text-5xl" style={{ "--marquee-speed": "60s" } as React.CSSProperties}>
        <ul className="marquee-track">{items}</ul>
        <ul className="marquee-track" aria-hidden="true">
          {items}
        </ul>
      </div>
    </section>
  );
}
