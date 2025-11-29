"use client";

import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const MOBILE_QUERY = "(max-width: 640px)";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(MOBILE_QUERY);
    const updateMatch = () => setIsMobile(media.matches);
    updateMatch();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateMatch);
      return () => media.removeEventListener("change", updateMatch);
    }

    media.addListener(updateMatch);
    return () => media.removeListener(updateMatch);
  }, []);

  return isMobile;
};

export default function WindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
  windowKey: string
) {
  const Wrapped: React.FC<P> = (props) => {
    const { FocusWindow, windows } = useWindowStore();
    const ref = React.useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

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
      if (!el || !isOpen || isMinimized || isMobile) return;

      const draggable = Draggable.create(el, {
        bounds: "body",
        onPress: () => FocusWindow(windowKey),
      });

      return () => draggable.forEach((d) => d.kill());
    }, [isOpen, isMinimized, isMobile]);

    // Handle visibility & maximize
useLayoutEffect(() => {
  const el = ref.current;
  if (!el) return;

  if (!isOpen || isMinimized) {
    el.style.display = "none";
    return;
  }

  el.style.display = "block";

  // ⭐ PRIORITY: Photos window custom layout for mobile
 if (isMobile && windowKey === "photos") {
  const navHeight =
    document.querySelector("nav")?.getBoundingClientRect().height ?? 64;

  const availableHeight = `calc(var(--app-height) - ${navHeight}px)`;

  el.style.position = "fixed";
  el.style.left = "5%";
  el.style.top = `calc(${navHeight}px + 50%)`;
  el.style.transform = "translate(-50%, -50%)";
  
  el.style.width = "92vw"; // centered and not full screen
  el.style.maxWidth = "92vw";
  el.style.height = availableHeight;
  el.style.maxHeight = availableHeight;
  el.style.minHeight = "auto";

  el.style.margin = "0 auto";
  el.style.overflow = "hidden";

  return;
}


  // ⭐ Default mobile layout for other windows
  if (isMobile) {
    const navHeight =
      document.querySelector("nav")?.getBoundingClientRect().height ?? 64;

    const availableHeight = `calc(var(--app-height) - ${navHeight}px)`;

    el.style.position = "fixed";
    el.style.top = `${navHeight}px`;
    el.style.left = "0";
    el.style.right = "0";
    el.style.width = "100vw";
    el.style.height = availableHeight;
    el.style.maxHeight = availableHeight;
    el.style.minHeight = availableHeight;
    el.style.margin = "0 auto";
    el.style.overflow = "hidden";

    return;
  }

  // Desktop reset
  el.style.position = "";
  el.style.right = "";
  el.style.bottom = "";
  el.style.maxWidth = "";
  el.style.margin = "";
  el.style.overflow = "";
  el.style.height = "";
  el.style.minHeight = "";
  el.style.maxHeight = "";

  if (isMaximized) {
    el.style.top = "0";
    el.style.left = "0";
    el.style.width = "100vw";
    el.style.height = "100dvh";
  } else {
    el.style.width = "";
    el.style.height = "";
    el.style.top = "";
    el.style.left = "";
  }
}, [isOpen, isMinimized, isMaximized, isMobile]);


    const shouldSkipFocus = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      return Boolean(
        target.closest(
          "button, a, input, textarea, select, [data-skip-window-focus]"
        )
      );
    };

    const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
      if (shouldSkipFocus(event.target)) return;
      FocusWindow(windowKey);
    };

    const sectionStyle: React.CSSProperties = {
      zIndex,
      height: isMobile ? "var(--app-height)" : undefined,
      minHeight: isMobile ? "var(--app-height)" : undefined,
    };

  if (!isOpen || isMinimized) return null;

return (
  <section
    ref={ref}
    id={windowKey}  
    className="absolute"
    style={sectionStyle}
    onPointerDown={handlePointerDown}
  >
    <Component {...props} />
  </section>
);

  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
}
