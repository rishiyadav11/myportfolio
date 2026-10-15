/** A real client quote. Only render when the quote is confirmed (see projects.ts). */
export function Testimonial({
  text,
  author,
  title,
  className = "",
}: {
  text: string;
  author: string;
  title?: string;
  className?: string;
}) {
  return (
    <figure className={`border-l-2 border-accent pl-6 md:pl-8 ${className}`}>
      <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl">
        <p>&ldquo;{text}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-5 text-[0.9375rem] text-ink-2">
        <span className="font-semibold text-ink">{author}</span>
        {title && <span className="text-muted">, {title}</span>}
      </figcaption>
    </figure>
  );
}
