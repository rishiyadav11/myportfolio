"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Inline Custom Brand SVGs to replace deprecated Lucide brand icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.808.478 3.513 1.319 5.006L2 22l5.127-1.306A9.972 9.972 0 0 0 12.031 22C17.568 22 22 17.506 22 12.031S17.568 2 12.031 2zm5.83 14.18c-.244.689-1.218 1.272-1.748 1.348-.52.073-1.187.102-1.921-.133-.446-.142-1.02-.336-1.758-.657-3.1-1.353-5.118-4.494-5.275-4.704-.154-.21-1.26-1.68-1.26-3.205 0-1.526.8-2.278 1.084-2.585.283-.307.618-.385.823-.385.205 0 .411.002.59.011.19.009.444-.072.693.528.258.621.879 2.148.956 2.304.077.157.129.34.025.547-.103.21-.154.34-.307.52-.154.18-.325.402-.464.54-.154.153-.314.32-.135.628.18.307.798 1.317 1.71 2.13 1.173 1.045 2.16 1.368 2.467 1.522.307.153.487.128.667-.077.18-.205.77-0.898.976-1.206.205-.307.411-.256.693-.153.282.103 1.796.847 2.104 1.001.308.154.513.23.59.359.077.128.077.743-.167 1.432z" />
  </svg>
);

export default function Contact() {
  const cleanPhone = (portfolioData.personal.phone || "+918708905369").replace(/[^\d]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Rishi, I'd like to discuss a new project with you.")}`;

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-20"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.2] contrast-[1.2]"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
          type="video/mp4"
        />
      </video>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Let's build cursive accent */}
        <span className="font-condiment text-tertiary neon-glow text-5xl md:text-7xl block mb-6 select-none">
          Let's build
        </span>

        {/* Large Heading */}
        <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl lg:text-[76px] uppercase leading-[0.95] tracking-tighter text-on-surface mb-12">
          LET'S CONNECT.
          <br />
          BUILD SOMETHING AMBITIOUS.
          <br />
          SHIP IT FAST. REACH OUT.
        </h2>

        {/* Primary Dispatch CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 flex-wrap">
          {/* Email Button */}
          <a
            href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent("Project Inquiry / Connect")}`}
            className="w-full sm:w-auto px-8 sm:px-10 py-4.5 rounded-full bg-tertiary text-on-tertiary font-jetbrains-mono text-sm sm:text-base font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(111,255,0,0.4)] flex items-center justify-center gap-2.5"
          >
            <Mail size={18} />
            <span>EMAIL ME</span>
          </a>

          {/* WhatsApp Direct Dispatch */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-10 py-4.5 rounded-full bg-[#25D366] text-[#052e16] font-jetbrains-mono text-sm sm:text-base font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2.5"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#052e16]" />
            <span>WHATSAPP DIRECT</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-10 py-4.5 rounded-full liquid-glass glass-stroke font-jetbrains-mono text-sm sm:text-base font-bold uppercase tracking-wider text-on-surface hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2.5"
          >
            <LinkedinIcon />
            <span>LINKEDIN</span>
          </a>
        </div>

        {/* Detailed Spec Form Prompt */}
        <div className="inline-flex items-center gap-2">
          <Link
            href="/hire-me"
            className="text-on-surface-variant hover:text-tertiary font-jetbrains-mono text-xs sm:text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            Or submit detailed project scope via Hire Me Form <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="absolute bottom-0 left-0 w-full py-8 px-6 md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 bg-black/20 backdrop-blur-md z-10">
        <p className="font-jetbrains-mono text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {portfolioData.personal.name}. Engineered for the void.
        </p>
        <div className="flex gap-8">
          <Link
            href="/privacy"
            className="text-on-surface-variant hover:text-tertiary transition-colors font-jetbrains-mono text-xs"
          >
            Privacy Policy
          </Link>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-tertiary transition-colors font-jetbrains-mono text-xs"
          >
            Source Code
          </a>
        </div>
      </footer>

      {/* Vertical Social overlay specifically for Contact Section bottom left */}
      <div className="absolute bottom-28 left-4 md:left-margin-desktop flex flex-col gap-4 hidden lg:flex">
        <div className="h-20 w-[1px] bg-tertiary ml-6 mb-2"></div>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-tertiary hover:scale-115 transition-all"
          href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent("Project Inquiry")}`}
          title="Email"
        >
          <Mail size={16} />
        </a>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-[#25D366] hover:scale-115 transition-all"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp (+91 87089 05369)"
        >
          <WhatsAppIcon className="w-4 h-4" />
        </a>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-tertiary hover:scale-115 transition-all"
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-tertiary hover:scale-115 transition-all"
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GithubIcon />
        </a>
      </div>
    </section>
  );
}

