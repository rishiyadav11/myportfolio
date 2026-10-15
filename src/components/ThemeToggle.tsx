"use client";

import type { MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Flips between light and dark, overriding the OS preference.
 * Where the View Transitions API exists, the new theme spreads out in a circle from
 * the button; otherwise (or with reduced motion) it switches instantly.
 * The initial theme is applied by an inline script in the root layout to avoid a flash.
 */
export function ThemeToggle() {
  function apply() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return apply();

    // Start the circle from the click point (or the button centre for keyboard presses).
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex size-11 items-center justify-center rounded-md text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
    >
      <Sun aria-hidden="true" className="theme-icon-sun size-5" />
      <Moon aria-hidden="true" className="theme-icon-moon size-5" />
    </button>
  );
}
