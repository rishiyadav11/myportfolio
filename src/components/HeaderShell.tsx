"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sticky wrapper for the floating header. Slides up out of view when scrolling down
 * and back in when scrolling up. Always visible near the top of the page and while
 * anything inside it has keyboard focus.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const focusedInside = ref.current?.contains(document.activeElement);
        if (y < 120 || focusedInside) setHidden(false);
        else if (Math.abs(y - lastY) > 6) setHidden(y > lastY);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      onFocus={() => setHidden(false)}
      className={`sticky top-3 z-40 mx-3 transition-transform duration-500 ease-[var(--ease-out-expo)] md:mx-5 ${
        hidden ? "-translate-y-[calc(100%+1rem)]" : ""
      }`}
    >
      {children}
    </header>
  );
}
