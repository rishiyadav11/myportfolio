import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

/** Button styles live in globals.css (.btn, .btn-primary…): squared, with an accent wipe on hover. */
export const buttonClass = (variant: Variant = "primary", className = "") =>
  `btn btn-${variant} ${className}`;

/** Internal or external link styled as a button. External links open in a new tab. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: { href: string; children: ReactNode; variant?: Variant; className?: string } & Omit<
  ComponentProps<"a">,
  "href" | "className"
>) {
  const cls = buttonClass(variant, className);
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
