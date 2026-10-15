"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site, whatsappLink, mailtoLink } from "@/content/site";

/** Full-screen menu for small screens. Links slide up in sequence when it opens. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close on navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Escape closes and returns focus; lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const links = [...nav, { href: "/contact", label: "Contact" }];

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 inline-flex size-11 items-center justify-center rounded-md bg-ink text-bg"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>
      {open &&
        createPortal(
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-0 z-[35] flex flex-col overflow-y-auto bg-bg px-6 pt-24 pb-8"
        >
          <ol className="flex-1">
            {links.map((item, i) => (
              <li key={item.href} className="overflow-hidden border-b border-line">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="rise-in flex min-h-16 items-baseline gap-4 py-3 font-display text-[2.5rem] leading-none font-bold tracking-tight text-ink no-underline aria-[current=page]:text-accent-text"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="font-mono text-xs font-normal text-muted">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-1 text-ink-2">
            <a href={whatsappLink()} className="inline-flex min-h-11 items-center gap-2">
              WhatsApp {site.phone.display} <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a href={mailtoLink()} className="inline-flex min-h-11 items-center gap-2 break-all">
              {site.email}
            </a>
          </div>
        </nav>,
          document.body,
        )}
    </div>
  );
}
