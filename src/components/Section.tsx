import type { ReactNode } from "react";
import { Container } from "./Container";

/** Page section with consistent vertical rhythm and an optional heading block. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  headingLevel = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
}) {
  const H = headingLevel;
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} aria-labelledby={id && title ? `${id}-title` : undefined}>
      <Container>
        {(eyebrow || title || intro) && (
          <div data-reveal className="mb-10 max-w-3xl md:mb-14">
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            {title && (
              <H id={id ? `${id}-title` : undefined} className={H === "h1" ? "text-4xl md:text-5xl" : "text-4xl md:text-5xl"}>
                {title}
              </H>
            )}
            {intro && <div className="mt-4 text-lg text-muted">{intro}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
