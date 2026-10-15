"use client";

import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "./gsap";

/**
 * Site-wide scroll motion, driven by data attributes so server components can opt in:
 *
 *   data-reveal            fade + rise when it scrolls into view
 *   data-reveal-stagger    same, for each direct child, staggered
 *   data-parallax="0.15"   drifts vertically while scrolling (fraction of its height)
 *   data-progress          scales from 0 to 1 on the x axis as its parent scrolls through
 *   data-spin              rotates as its parent scrolls past
 *
 * Only elements still below the fold are hidden, and only after JS runs, so nothing
 * on the first screen waits for JavaScript and the page reads fine without it.
 */
export function ScrollMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      // Set up after the page is idle so it doesn't compete with first paint and hydration.
      let mm: gsap.MatchMedia | undefined;
      const setup = () => {
        mm = gsap.matchMedia();
        mm.add(MOTION_OK, () => {
          const belowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.92;

          const singles = gsap.utils.toArray<HTMLElement>("main [data-reveal]").filter(belowFold);
          gsap.set(singles, { opacity: 0, y: 32 });
          ScrollTrigger.batch(singles, {
            start: "top 88%",
            once: true,
            onEnter: (els) =>
              gsap.to(els, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "expo.out",
                stagger: 0.08,
                overwrite: true,
              }),
          });

          gsap.utils.toArray<HTMLElement>("main [data-reveal-stagger]").forEach((group) => {
            const items = Array.from(group.children).filter(belowFold);
            if (!items.length) return;
            gsap.set(items, { opacity: 0, y: 40 });
            ScrollTrigger.batch(items, {
              start: "top 90%",
              once: true,
              onEnter: (els) =>
                gsap.to(els, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "expo.out",
                  stagger: 0.09,
                  overwrite: true,
                }),
            });
          });

          gsap.utils.toArray<HTMLElement>("main [data-parallax]").forEach((el) => {
            const amount = parseFloat(el.dataset.parallax || "0.15");
            gsap.fromTo(
              el,
              { yPercent: -amount * 50 },
              {
                yPercent: amount * 50,
                ease: "none",
                scrollTrigger: {
                  trigger: el.parentElement ?? el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>("main [data-progress]").forEach((el) => {
            gsap.fromTo(
              el,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                transformOrigin: "left center",
                scrollTrigger: {
                  trigger: el.parentElement ?? el,
                  start: "top 75%",
                  end: "bottom 60%",
                  scrub: 0.6,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>("main [data-spin]").forEach((el) => {
            gsap.to(el, {
              rotation: 180,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });
        });
        // Fonts and images can shift layout after load; recalculate trigger positions.
        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      };
      const idle = "requestIdleCallback" in window;
      const id = idle ? window.requestIdleCallback(setup, { timeout: 1200 }) : window.setTimeout(setup, 250);
      return () => {
        if (idle) window.cancelIdleCallback(id);
        else window.clearTimeout(id);
        mm?.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
