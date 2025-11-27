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

    const { isOpen, zIndex } = windows[windowKey];
    const ref = React.useRef<HTMLDivElement>(null);

    // Open animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.85, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }, [isOpen]);

    // Make window draggable
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      const draggable = Draggable.create(el, {
        bounds: "body",
        onPress: () => FocusWindow(windowKey),
      });

      return () => draggable.forEach((d) => d.kill());
    }, [isOpen]);

    // Hide when closed
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

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
