"use client";

import React from "react";
import { Mail } from "lucide-react";
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
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
        <span className="font-condiment text-tertiary neon-glow text-5xl md:text-7xl block mb-8 select-none">
          Let's build
        </span>

        {/* Large Heading */}
        <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl lg:text-[80px] uppercase leading-[0.9] tracking-tighter text-on-surface mb-16">
          LET'S CONNECT.
          <br />
          BUILD SOMETHING AMBITIOUS.
          <br />
          SHIP IT FAST. REACH OUT.
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-full sm:w-auto px-12 py-5 rounded-full bg-tertiary text-on-tertiary font-jetbrains-mono text-base font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(111,255,0,0.4)]"
          >
            EMAIL ME
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 rounded-full liquid-glass glass-stroke font-jetbrains-mono text-base font-bold uppercase tracking-wider text-on-surface hover:bg-white/10 active:scale-95 transition-all"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="absolute bottom-0 left-0 w-full py-12 px-6 md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 bg-black/20 backdrop-blur-md z-10">
        <p className="font-jetbrains-mono text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {portfolioData.personal.name}. Engineered for the void.
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-on-surface-variant hover:text-tertiary transition-colors font-jetbrains-mono text-xs"
          >
            Privacy Policy
          </a>
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
      <div className="absolute bottom-36 left-4 md:left-margin-desktop flex flex-col gap-4 hidden lg:flex">
        <div className="h-28 w-[1px] bg-tertiary ml-6 mb-2"></div>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-tertiary hover:scale-115 transition-all"
          href={`mailto:${portfolioData.personal.email}`}
        >
          <Mail size={16} />
        </a>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-tertiary hover:scale-115 transition-all"
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          className="liquid-glass glass-stroke p-4 rounded-full text-on-surface hover:text-tertiary hover:scale-115 transition-all"
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </section>
  );
}
