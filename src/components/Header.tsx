import Link from "next/link";
import { nav } from "@/content/site";
import { buttonClass } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { HeaderShell } from "./HeaderShell";
import { LocalClock } from "./LocalClock";

/** Floating header: hides on scroll down, returns on scroll up (see HeaderShell). */
export function Header() {
  return (
    <HeaderShell>
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 rounded-xl border border-line bg-bg/85 pr-2 pl-3 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.18)] backdrop-blur-md md:pl-4">
        <Link href="/" className="group flex min-h-11 items-center gap-3 text-ink no-underline">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-md bg-ink font-display text-sm font-extrabold tracking-tight text-bg transition-[transform,background-color,color] duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6 group-hover:bg-accent group-hover:text-accent-ink"
          >
            RY
          </span>
          <span className="font-display text-lg leading-none font-bold tracking-tight">
            Rishi Yadav
            <LocalClock className="mt-1 block text-[0.6875rem] font-normal tracking-normal text-muted" />
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-1 px-3 py-2 text-[0.9375rem] font-medium text-ink-2 no-underline hover:text-ink"
            >
              <span className="link-draw">{item.label}</span>
              <sup aria-hidden="true" className="mt-1 font-mono text-[0.625rem] text-muted group-hover:text-accent-text">
                0{i + 1}
              </sup>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link href="/contact" className={buttonClass("primary", "hidden min-h-11 py-2 lg:inline-flex")}>
            Let&rsquo;s talk
          </Link>
          <MobileMenu />
        </div>
      </div>
    </HeaderShell>
  );
}
