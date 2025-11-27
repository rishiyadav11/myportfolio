"use client";

import { dockApps } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Dock = () => {
  const dockRef = useRef<HTMLDivElement | null>(null);

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
        const intensity = Math.exp(-(distance ** 2) / 250); // smooth falloff

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

  const toggleApp = (app: string) => {
    console.log("Open", app);
  };

  return (
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
  );
};

export default Dock;
    