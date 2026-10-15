export function StackBadges({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies">
      {items.map((s) => (
        <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink-2">
          {s}
        </li>
      ))}
    </ul>
  );
}
