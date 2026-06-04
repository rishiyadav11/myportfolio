"use client";

import React from "react";
import Link from "next/link";
import { Mail, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Inline Custom Brand SVGs to replace deprecated Lucide brand icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

export default function Sidebar() {
  return (
    <aside className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 sm:gap-4 items-center bg-white/3 backdrop-blur-2xl rounded-full py-5 px-2 sm:py-6 sm:px-3 glass-stroke shadow-2xl">
      <a
        className="text-on-surface-variant hover:text-tertiary p-2 sm:p-3 hover:-translate-x-1 transition-all duration-300 hover:scale-110"
        href={`mailto:${portfolioData.personal.email}`}
        title="Mail"
      >
        <Mail size={18} />
      </a>
      <a
        className="text-on-surface-variant hover:text-tertiary p-2 sm:p-3 hover:-translate-x-1 transition-all duration-300 hover:scale-110"
        href={portfolioData.personal.twitter}
        title="Twitter / X"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        className="text-on-surface-variant hover:text-tertiary p-2 sm:p-3 hover:-translate-x-1 transition-all duration-300 hover:scale-110"
        href={portfolioData.personal.linkedin}
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
      <a
        className="text-on-surface-variant hover:text-tertiary p-2 sm:p-3 hover:-translate-x-1 transition-all duration-300 hover:scale-110"
        href={portfolioData.personal.github}
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <Link
        className="text-on-surface-variant hover:text-tertiary p-2 sm:p-3 hover:-translate-x-1 transition-all duration-300 hover:scale-110"
        href="/ventures"
        title="Ventures &amp; Services"
      >
        <Cpu size={18} />
      </Link>
    </aside>
  );
}
