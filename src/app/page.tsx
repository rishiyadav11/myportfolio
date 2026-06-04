"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, User, Folder, Calendar, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  // Atmospheric particles floating generator
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "fixed rounded-full pointer-events-none bg-white opacity-20 z-40";
      const size = Math.random() * 3 + 1 + "px";
      particle.style.width = size;
      particle.style.height = size;
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.top = Math.random() * 100 + "vh";
      particle.style.transition = `all ${Math.random() * 10 + 10}s linear`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${
          Math.random() * 200 - 100
        }px)`;
        particle.style.opacity = "0";
      }, 100);

      setTimeout(() => {
        particle.remove();
      }, 20000);
    };

    const interval = setInterval(createParticle, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {/* Shared Navigations */}
      <Navbar />
      <Sidebar />

      {/* Main Pages */}
      <main className="w-full flex-grow">
        <Hero />

        {/* Portfolio Gateway Bento Board */}
        <section className="relative py-24 w-full bg-background px-6 md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-container-max mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="font-condiment text-tertiary neon-glow text-3xl select-none">
                  Core Portal
                </span>
                <h2 className="font-anton text-4xl sm:text-5xl uppercase text-on-surface">
                  Explore Selected Modules
                </h2>
              </div>
              <div className="h-px grow bg-white/10 hidden md:block ml-8"></div>
            </div>

            {/* Bento Gateway Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* About card */}
              <Link
                href="/about"
                className="group relative liquid-glass glass-stroke p-8 rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-between hover:glow-purple transition-all duration-300 border border-white/5"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-primary group-hover:text-tertiary transition-colors">
                    <User size={22} />
                  </div>
                  <ArrowUpRight size={20} className="text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-on-surface mb-2">
                    About &amp; Vision
                  </h3>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    Engineering philosophy, bio highlights, and smart automation manifesto based in India.
                  </p>
                </div>
              </Link>

              {/* Projects card */}
              <Link
                href="/projects"
                className="group relative liquid-glass glass-stroke p-8 rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-between hover:glow-purple transition-all duration-300 border border-white/5"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-tertiary transition-colors">
                    <Folder size={22} />
                  </div>
                  <ArrowUpRight size={20} className="text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-on-surface mb-2">
                    Selected Works
                  </h3>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    Filterable portfolio showcasing SaaS products, AI integration APIs, and retail ecosystems.
                  </p>
                </div>
              </Link>

              {/* Ventures card */}
              <Link
                href="/ventures"
                className="group relative liquid-glass glass-stroke p-8 rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-between hover:glow-purple transition-all duration-300 border border-white/5 shadow-[0_0_25px_rgba(111,255,0,0.02)] border-b border-b-tertiary/10"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-tertiary transition-colors">
                    <Cpu size={22} />
                  </div>
                  <ArrowUpRight size={20} className="text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-on-surface mb-2">
                    Ventures &amp; Services
                  </h3>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    Reworks Studio catalog outlining SaaS construction protocols and custom AI models.
                  </p>
                </div>
              </Link>

              {/* Tech Stack card */}
              <Link
                href="/techstack"
                className="group relative liquid-glass glass-stroke p-8 rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-between hover:glow-purple transition-all duration-300 border border-white/5"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-primary group-hover:text-tertiary transition-colors">
                    <Cpu size={22} className="rotate-90" />
                  </div>
                  <ArrowUpRight size={20} className="text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-on-surface mb-2">
                    System Architecture
                  </h3>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    Interactive network diagram packets simulator and live terminal compiler mockup.
                  </p>
                </div>
              </Link>

              {/* Resume card */}
              <Link
                href="/resume"
                className="group relative liquid-glass glass-stroke p-8 rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-between hover:glow-purple transition-all duration-300 border border-white/5"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-primary-fixed-dim group-hover:text-tertiary transition-colors">
                    <Calendar size={22} />
                  </div>
                  <ArrowUpRight size={20} className="text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-on-surface mb-2">
                    Timeline &amp; Skills
                  </h3>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    B.Tech degree logs, SaaS engineering roles, and prompt workflows certifications.
                  </p>
                </div>
              </Link>

              {/* Contact card */}
              <Link
                href="/contact"
                className="group relative liquid-glass glass-stroke p-8 rounded-3xl overflow-hidden min-h-[250px] flex flex-col justify-between hover:glow-purple transition-all duration-300 border border-white/5 shadow-[0_0_20px_rgba(111,255,0,0.05)] border-b border-b-tertiary/20"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-primary group-hover:text-tertiary transition-colors">
                    <Mail size={22} />
                  </div>
                  <ArrowUpRight size={20} className="text-on-surface-variant group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <div>
                  <h3 className="font-anton text-xl uppercase text-on-surface mb-2">
                    Start a Project
                  </h3>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    Ready to build something ambitious? Reach out directly via secure channels to ship high-throughput digital legacies.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Root Page Footer */}
      <footer className="w-full py-12 px-6 md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <p className="font-jetbrains-mono text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="/privacy" className="text-on-surface-variant hover:text-tertiary transition-colors font-jetbrains-mono text-xs">
            Privacy Policy
          </Link>
          <Link href="/ventures" className="text-on-surface-variant hover:text-tertiary transition-colors font-jetbrains-mono text-xs">
            Ventures &amp; Services
          </Link>
        </div>
      </footer>
    </div>
  );
}
