"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 200, max: 600, base: 300 },
  title: { min: 300, max: 900, base: 400 },
};

// Function to render characters with base font size class
const renderChars = (text: string, className: string, base: number) =>
  [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `"wght" ${base}`, display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const Welcome: React.FC = () => {
  const titleRef = useRef<HTMLElement | null>(null);
  const subRef = useRef<HTMLElement | null>(null);

  const setupHover = (container: HTMLElement | null, type: keyof typeof FONT_WEIGHTS) => {
    if (!container) return () => {};
    const letters = Array.from(container.querySelectorAll("span"));
    const { min, max, base } = FONT_WEIGHTS[type];

    const animateWeight = (el: HTMLElement, target: number) => {
      const curMatch = (el.style.fontVariationSettings || "").match(/(\d+\.?\d*)/);
      const current = curMatch ? parseFloat(curMatch[0]) : base;
      const proxy = { w: current };

      gsap.killTweensOf(proxy);
      gsap.to(proxy, {
        w: target,
        duration: 0.22,
        ease: "power2.out",
        onUpdate: () => {
          el.style.fontVariationSettings = `"wght" ${proxy.w.toFixed(1)}`;
        },
      });
    };

    const mouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const falloff = Math.max(200, rect.width / 6);

      letters.forEach((letter) => {
        const lr = letter.getBoundingClientRect();
        const centerX = lr.left - rect.left + lr.width / 2;
        const distance = Math.abs(mouseX - centerX);
        const t = Math.exp(-(distance * distance) / (falloff * falloff * 0.5));
        const w = min + (max - min) * t;
        animateWeight(letter as HTMLElement, w);
      });
    };

    const mouseLeave = () => letters.forEach((letter) => animateWeight(letter as HTMLElement, base));

    container.addEventListener("mousemove", mouseMove);
    container.addEventListener("mouseleave", mouseLeave);
    container.addEventListener("touchend", mouseLeave);

    return () => {
      container.removeEventListener("mousemove", mouseMove);
      container.removeEventListener("mouseleave", mouseLeave);
      container.removeEventListener("touchend", mouseLeave);
    };
  };

  useEffect(() => {
    document.fonts?.ready?.then(() => {
      const clean1 = setupHover(titleRef.current, "title");
      const clean2 = setupHover(subRef.current, "subtitle");
      (window as any).__welcomeCleanups = [clean1, clean2];
    });

    return () => {
      const [c1, c2] = (window as any).__welcomeCleanups || [];
      c1?.();
      c2?.();
    };
  }, []);

  return (
    <section id="welcome" className="p-6 sm:p-10 md:p-16" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <p
        ref={subRef as React.RefObject<HTMLParagraphElement>}
        className="inline-block cursor-default font-inter"
      >
        {renderChars(
          "Hey, I'm Rishi Yadav! Welcome to my ",
          "text-base sm:text-lg md:text-xl lg:text-2xl font-inter",
          FONT_WEIGHTS.subtitle.base
        )}
      </p>

      <h1
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className="mt-4 sm:mt-7 inline-block font-inter"
      >
        {renderChars(
          "Portfolio",
          "text-4xl sm:text-6xl md:text-7xl lg:text-9xl italic font-inter",
          FONT_WEIGHTS.title.base
        )}
      </h1>
    </section>
  );
};

export default Welcome;
