"use client";

import { dockApps } from "@/constants";
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Dock = () => {
  const { windows, openWindow, CloseWindow } = useWindowStore();

  const toggleApp = (id: string) => {
    const app = dockApps.find((a) => a.id === id);
    if (!app || !app.canOpen) return;

    const win = windows[id];

    if (win?.isOpen) CloseWindow(id);
    else openWindow(id);
  };

  const dockRef = useRef<HTMLDivElement | null>(null);
const mobileRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = Array.from(dock.querySelectorAll(".dock-icon"));

    const animateIcons = (e: MouseEvent) => {
      const rect = dock.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      icons.forEach((icon) => {
        const iconRect = icon.getBoundingClientRect();
        const centerX = iconRect.left - rect.left + iconRect.width / 2;
        const distance = Math.abs(mouseX - centerX);
        const intensity = Math.exp(-(distance ** 2) / 250);

        gsap.to(icon, {
          scale: 1 + 0.5 * intensity,
          y: -20 * intensity,
          duration: 0.25,
          ease: "power2.out",
        });
      });
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      });
    };

    dock.addEventListener("mousemove", animateIcons);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", animateIcons);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  // First-time mobile tooltip animation
  useEffect(() => {
    if (window.innerWidth > 640) return; // only mobile (max-sm)

    mobileRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(el, { opacity: 0, y: -10, duration: 0.5, delay: 2 });
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Desktop & Tablet Dock */}
      <section id="dock">
        <div className="dock-container" ref={dockRef}>
          {dockApps.map(({ id, icon, name, canOpen }) => (
            <div key={id} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp(id)}
              >
                <img
                  src={`/images/${icon}`}
                  alt={name}
                  className={canOpen ? "" : "opacity-50"}
                />
              </button>
            </div>
          ))}

          <Tooltip id="dock-tooltip" place="top" className="tooltip" />
        </div>
      </section>

      {/* Mobile Dock */}
      <section
        id="dock-mobile"
        className="hidden max-sm:flex fixed bottom-3 left-0 right-0 z-50 justify-center pointer-events-auto"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-3 mx-4 shadow-lg">
          {dockApps.map(({ id, icon, name, canOpen }, i) => (
            <div key={`mobile-${id}`} className="flex flex-col items-center">
              <button
                onClick={() => toggleApp(id)}
                aria-label={name}
                disabled={!canOpen}
                className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center"
              >
                <img
                  src={`/images/${icon}`}
                  alt={name}
                  className={canOpen ? "w-6 h-6" : "w-6 h-6 opacity-50"}
                />
              </button>
              {/* Tooltip element for first-time animation */}
        <span
  ref={(el: HTMLSpanElement | null) => {
    mobileRefs.current[i] = el!;
  }}
  className="absolute -top-8 text-xs text-white opacity-0 pointer-events-none"
>
  {name}
</span>


            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dock;
