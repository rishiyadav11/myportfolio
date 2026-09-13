"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Layers, Lock, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "SaaS & AI",
    "E-commerce & Retail",
    "Healthcare & Education",
    "Hospitality & Fitness",
  ];

  // Flatten projects data into a single list
  const allProjects: Project[] = [
    ...portfolioData.projects.saas,
    ...portfolioData.projects.ecommerce,
    ...portfolioData.projects.healthcare,
    ...portfolioData.projects.hospitality,
  ];

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative min-h-screen py-24 w-full bg-background overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full">
        {/* Section Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-condiment text-tertiary neon-glow text-3xl md:text-4xl select-none">
                Selected
              </span>
              <h2 className="font-anton text-4xl sm:text-5xl uppercase text-on-surface">
                Projects
              </h2>
            </div>
            <p className="font-jetbrains-mono text-sm text-on-surface-variant max-w-lg mt-4 leading-relaxed">
              A curated selection of high-performance digital products engineered for scalability, raw performance, and aesthetic precision.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-2xl liquid-glass">
            <span className="font-jetbrains-mono text-[10px] font-bold text-primary uppercase px-3 tracking-wider">
              Works Registry
            </span>
          </div>
        </header>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-jetbrains-mono text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-tertiary text-on-tertiary border-tertiary shadow-[0_0_20px_rgba(111,255,0,0.3)] hover:scale-105"
                  : "bg-white/3 text-on-surface-variant border-white/5 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative liquid-glass glass-stroke rounded-[2rem] overflow-hidden flex flex-col justify-between min-h-[480px] hover:glow-purple transition-all duration-500 hover:-translate-y-2 border border-white/5"
              >
                {/* Background Image / Placeholder Video Simulation */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none z-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-primary-container to-secondary-container"></div>
                  )}
                </div>

                {/* Card Top */}
                <div className="p-8 relative z-10">
                  <span className="font-jetbrains-mono text-[10px] font-bold text-tertiary uppercase tracking-widest bg-tertiary-container/30 border border-tertiary/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>

                  <h3 className="font-anton text-2xl uppercase mt-6 text-on-surface group-hover:text-tertiary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-jetbrains-mono text-xs text-on-surface-variant/95 mt-4 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom */}
                <div className="p-8 relative z-10 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-jetbrains-mono text-[9px] font-bold bg-white/3 px-2.5 py-1 rounded border border-white/10 text-on-surface-variant/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow flex items-center justify-center gap-2 bg-primary text-on-primary font-jetbrains-mono text-[11px] font-bold uppercase py-3 rounded-full hover:scale-[1.03] active:scale-95 transition-all duration-200"
                    >
                      <ExternalLink size={12} />
                      Live Project
                    </a>
                    {project.caseStudyLink && (
                      <a
                        href={project.caseStudyLink}
                        className="flex items-center justify-center border border-white/20 p-3 rounded-full hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all duration-200"
                        title="View Case Study"
                      >
                        <BookOpen size={14} className="text-on-surface-variant" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Confidentiality & Upcoming Projects Notice */}
        {portfolioData.projects.notice && (
          <div className="mt-20 relative liquid-glass glass-stroke p-8 sm:p-12 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-tertiary/10 border border-tertiary/30 px-3.5 py-1.5 rounded-full">
                  <Lock size={12} className="text-tertiary" />
                  <span className="font-jetbrains-mono text-[11px] font-bold text-tertiary uppercase tracking-wider">
                    {portfolioData.projects.notice.badge}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  <Sparkles size={12} className="text-primary" />
                  <span className="font-jetbrains-mono text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                    Private &amp; Incubation Queue
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-anton text-2xl sm:text-4xl uppercase text-on-surface tracking-tight mb-4 max-w-3xl">
                {portfolioData.projects.notice.title}
              </h3>
              <p className="font-jetbrains-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-4xl mb-8">
                {portfolioData.projects.notice.description}
              </p>

              {/* 3 Pillars / Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {portfolioData.projects.notice.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#010828]/60 border border-white/5 flex flex-col justify-between hover:border-tertiary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      <h4 className="font-jetbrains-mono text-xs font-bold uppercase tracking-wider text-on-surface">
                        {item.label}
                      </h4>
                    </div>
                    <p className="font-jetbrains-mono text-[11px] text-on-surface-variant/80 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
                <span className="font-jetbrains-mono text-xs text-on-surface-variant/70 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-tertiary shrink-0" />
                  Direct verification &amp; private architecture walkthroughs available upon inquiry.
                </span>

                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={portfolioData.projects.notice.ctaLink}
                    className="px-8 py-3.5 rounded-full bg-tertiary text-on-tertiary font-jetbrains-mono text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(111,255,0,0.3)] inline-flex items-center justify-center gap-2"
                  >
                    <span>{portfolioData.projects.notice.ctaText}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-full liquid-glass glass-stroke font-jetbrains-mono text-xs font-bold uppercase tracking-wider text-on-surface hover:bg-white/10 active:scale-95 transition-all inline-flex items-center justify-center"
                  >
                    Contact Directly
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
