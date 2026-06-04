"use client";

import React, { useEffect, useState } from "react";
import { Cpu, Database, Globe, ArrowRight, User, Terminal as TerminalIcon, ShieldAlert, Server } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function TechStack() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  const logs = [
    "$ npx turbo run build",
    "○ core:build: cache hit, replaying logs",
    "○ web:build: compiling...",
    "✓ Success: All 12 packages built [450ms]",
    "$ drizzle-kit push:pg",
    "✓ Schema synced with PostgreSQL instance",
    "Waiting for telemetry data on socket...",
  ];

  // Typing simulator for DX terminal mockup
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        const nextLine = logs[index];
        setTerminalLines((prev) => [...prev, nextLine]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="techstack" className="relative min-h-screen py-24 w-full bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full">
        {/* Hero Section of Tech Stack */}
        <div className="text-center mb-24">
          <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl text-primary uppercase mb-4 tracking-tight">
            THE ARCHITECTURAL <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">CORE</span>
          </h2>
          <p className="font-jetbrains-mono text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            Engineered for maximum scale, high availability, and sub-100ms response cycles. Fusing modern client workflows with resilient cloud routing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="liquid-glass border border-white/5 px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-jetbrains-mono text-[10px] font-bold text-tertiary uppercase tracking-wider">
                99.9% UPTIME PROMISE
              </span>
            </div>
            <div className="liquid-glass border border-white/5 px-6 py-3 rounded-xl flex items-center gap-3 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-jetbrains-mono text-[10px] font-bold text-tertiary uppercase tracking-wider">
                &lt;100MS COMPRESSION LATENCY
              </span>
            </div>
          </div>
        </div>

        {/* Technical Arsenal Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="font-anton text-xl uppercase tracking-wider text-primary">TECHNICAL ARSENAL</h3>
            <div className="h-px grow bg-white/10"></div>
            <span className="font-condiment text-tertiary neon-glow text-3xl -rotate-6 transform select-none">
              Mastery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.skills.map((cat, idx) => {
              const icons = {
                layers: <Globe className="w-6 h-6 text-primary" />,
                database: <Database className="w-6 h-6 text-primary" />,
                cpu: <Cpu className="w-6 h-6 text-tertiary" />,
                cloud_sync: <Cpu className="w-6 h-6 text-primary-fixed-dim rotate-90" />,
              };
              const activeIcon = icons[cat.icon as keyof typeof icons] || <Cpu className="w-6 h-6 text-primary" />;

              return (
                <div
                  key={cat.title}
                  className="liquid-glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 group hover:shadow-2xl shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
                      {activeIcon}
                    </div>
                    <h4 className="font-anton text-xl uppercase mb-6 text-on-surface">
                      {cat.title}
                    </h4>
                    <ul className="space-y-4 font-jetbrains-mono text-xs text-on-surface-variant">
                      {cat.skills.map((skill) => (
                        <li key={skill.name} className="flex flex-col gap-1">
                          <div className="flex justify-between items-center">
                            <span>{skill.name}</span>
                            <span className="text-[10px] text-tertiary font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                               className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full transition-all duration-1000"
                               style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Distributed Intelligence Architecture Diagram */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="font-jetbrains-mono text-[10px] font-bold text-tertiary tracking-[0.3em] uppercase">
              REWORKS PROTOCOL
            </span>
            <h3 className="font-anton text-3xl uppercase text-primary mt-2">
              Distributed Intelligence
            </h3>
          </div>

          <div className="relative min-h-[420px] flex items-center justify-center bg-surface-container-lowest/30 border border-white/5 p-8 rounded-3xl glass-stroke shadow-3xl">
            {/* SVG Network Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 400"
            >
              {/* Client to Edge */}
              <path
                className="text-tertiary/10"
                d="M132,200 L220,200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                className="text-tertiary animate-dash"
                d="M132,200 L220,200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 180"
              />

              {/* Edge to Gateway */}
              <path
                className="text-tertiary/10"
                d="M332,200 L376,200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                className="text-tertiary animate-dash"
                d="M332,200 L376,200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 180"
              />

              {/* Gateway to Backend Services */}
              <path
                className="text-primary/10"
                d="M504,200 L608,200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                className="text-primary animate-dash"
                d="M504,200 L608,200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 180"
              />

              {/* Backend Services to Database (Top Branch) */}
              <path
                className="text-primary/10"
                d="M752,200 L852,110"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                className="text-primary animate-dash"
                d="M752,200 L852,110"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 180"
              />

              {/* Backend Services to Telemetry Analysis (Bottom Branch) */}
              <path
                className="text-primary/10"
                d="M752,200 L852,290"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                className="text-primary animate-dash"
                d="M752,200 L852,290"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 180"
              />
            </svg>

            {/* Nodes overlaying the SVG */}
            <div className="relative w-full max-w-4xl h-[360px] flex items-center justify-between">
              {/* Node 1: Client */}
              <div className="absolute left-[2%] top-1/2 -translate-y-1/2 liquid-glass border border-white/10 p-4 rounded-2xl flex flex-col items-center shadow-lg text-center w-28">
                <User className="text-primary w-6 h-6 mb-2" />
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface">
                  Client
                </span>
              </div>

              {/* Node 2: Edge Router */}
              <div className="absolute left-[22%] top-1/2 -translate-y-1/2 liquid-glass border border-tertiary/30 p-4 rounded-2xl flex flex-col items-center shadow-lg text-center w-28 border-b-2 border-b-tertiary shadow-[0_0_25px_rgba(111,255,0,0.15)]">
                <Globe className="text-tertiary w-6 h-6 mb-2" />
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface">
                  Edge Router
                </span>
              </div>

              {/* Node 3: API Gateway */}
              <div className="absolute left-[44%] -translate-x-1/2 top-1/2 -translate-y-1/2 liquid-glass border border-primary/30 p-5 rounded-[2rem] flex flex-col items-center shadow-2xl text-center w-32 scale-105 shadow-[0_0_35px_rgba(188,197,237,0.15)]">
                <Cpu className="text-primary w-7 h-7 mb-2 animate-pulse" />
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface">
                  API Gateway
                </span>
              </div>

              {/* Node 4: Backend Services */}
              <div className="absolute left-[68%] -translate-x-1/2 top-1/2 -translate-y-1/2 liquid-glass border border-tertiary/30 p-5 rounded-[2rem] flex flex-col items-center shadow-2xl text-center w-36 scale-105 shadow-[0_0_35px_rgba(111,255,0,0.15)] border-b-2 border-b-tertiary">
                <Server className="text-tertiary w-7 h-7 mb-2 animate-pulse" />
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface">
                  Backend Services
                </span>
              </div>

              {/* Node 5: DB (Top right) */}
              <div className="absolute right-[2%] top-[10%] liquid-glass border border-white/10 p-4 rounded-2xl flex flex-col items-center shadow-lg text-center w-32">
                <Database className="text-on-surface-variant w-6 h-6 mb-2" />
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface">
                  Multi-Region DB
                </span>
              </div>

              {/* Node 6: Telemetry (Bottom right) */}
              <div className="absolute right-[2%] bottom-[10%] liquid-glass border border-white/10 p-4 rounded-2xl flex flex-col items-center shadow-lg text-center w-32">
                <ShieldAlert className="text-on-surface-variant w-6 h-6 mb-2" />
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface">
                  Monitor Log
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Experience Bento Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-anton text-3xl uppercase text-primary mb-6">
              DEVELOPER EXPERIENCE
            </h3>
            <p className="font-jetbrains-mono text-sm text-on-surface-variant leading-relaxed mb-8">
              Reliability stems from rigorous workflows. I maintain high development standards, implementing smart caching compilers, type-safe validations, automated builds, and instant continuous delivery edge routers.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["TURBOREPO", "ZOD", "DRIZZLE ORM", "VITEST", "PLAYWRIGHT", "CI/CD"].map((tool) => (
                <span
                  key={tool}
                  className="liquid-glass border border-white/10 px-4 py-2 rounded-full font-jetbrains-mono text-[10px] font-bold text-on-surface-variant/80 tracking-widest hover:text-tertiary transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="relative group">
            {/* Terminal Window Mockup */}
            <div className="aspect-video w-full liquid-glass rounded-2xl p-6 overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(188,197,237,0.06)]">
              {/* Header bars */}
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-error/70"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary/60"></div>
                <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                <span className="ml-4 font-jetbrains-mono text-[10px] text-outline tracking-wider flex items-center gap-1.5">
                  <TerminalIcon size={12} /> terminal — rishi@astral
                </span>
              </div>
              {/* Console log list */}
              <div className="font-jetbrains-mono text-xs text-on-surface-variant/90 space-y-2 select-none h-fit">
                {terminalLines.map((line, idx) => {
                  const isCmd = line.startsWith("$");
                  const isSuccess = line.startsWith("✓");
                  let colorClass = "text-on-surface-variant/80";
                  if (isCmd) colorClass = "text-tertiary font-bold";
                  if (isSuccess) colorClass = "text-primary font-bold";

                  return (
                    <p key={idx} className={`${colorClass} pl-2`}>
                      {line}
                    </p>
                  );
                })}
                {showCursor && (
                  <div className="h-4.5 w-2 bg-on-surface-variant animate-pulse inline-block ml-2 align-middle"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
