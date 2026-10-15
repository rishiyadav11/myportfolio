"use client";

import type { ComponentProps } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { buttonClass } from "./Button";

/**
 * <a> that fires a GA4 event on click (only after cookie consent).
 * Use for WhatsApp, email, phone, booking and resume links.
 */
export function TrackedLink({
  event,
  params,
  variant,
  className = "",
  href,
  children,
  ...rest
}: ComponentProps<"a"> & {
  href: string;
  event: AnalyticsEvent;
  params?: Record<string, unknown>;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const newTab = href.startsWith("http");
  return (
    <a
      href={href}
      className={variant ? buttonClass(variant, className) : className}
      onClick={() => track(event, { link_url: href, ...params })}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
