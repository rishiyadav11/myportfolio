"use client";

import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function WindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
  windowKey: string
) {
  const Wrapped: React.FC<P> = (props) => {
    const { FocusWindow, windows } = useWindowStore();
    const ref = React.useRef<HTMLDivElement>(null);

    const { isOpen, zIndex, isMinimized, isMaximized } = windows[windowKey];

    // Open animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return; // ignore if minimized

      el.style.display = "block";

      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.85, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, [isOpen, isMinimized]);

    // Make window draggable
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      const draggable = Draggable.create(el, {
        bounds: "body",
        onPress: () => FocusWindow(windowKey),
      });

      return () => draggable.forEach((d) => d.kill());
    }, [isOpen, isMinimized]);

    // Handle visibility & maximize
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (!isOpen || isMinimized) {
        el.style.display = "none"; // hide when closed or minimized
        return;
      }

      el.style.display = "block";

      // Maximize logic
      if (isMaximized) {
        el.style.top = "0";
        el.style.left = "0";
        el.style.width = "100vw";
        el.style.height = "100vh";
      } else {
        el.style.width = "";
        el.style.height = "";
        el.style.top = "";
        el.style.left = "";
      }
    }, [isOpen, isMinimized, isMaximized]);

    return (
      <section
        ref={ref}
        id={windowKey}
        className="absolute"
        style={{ zIndex }}
        onMouseDown={() => FocusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName =
    `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
}
