"use client";

import React from "react";
import { Download, School, Briefcase, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Resume() {

  return (
    <section id="resume" className="relative min-h-screen py-24 w-full bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-tertiary/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full">
        {/* Section Header */}
        <header className="flex flex-col items-center text-center mb-24 relative">
          <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl relative uppercase text-on-surface">
            RESUME
            <span className="font-condiment text-tertiary absolute -bottom-4 -right-12 md:-right-16 -rotate-12 text-3xl md:text-5xl select-none">
              Engineered
            </span>
          </h2>
          <p className="font-jetbrains-mono text-sm sm:text-base text-on-surface-variant mt-10 max-w-2xl leading-relaxed">
            Full-Stack Engineer specialized in architecting high-performance distributed systems and fluid, responsive interfaces.
          </p>

          <a
            href="/Rishi_Yadav_Resume.pdf"
            download="Rishi_Yadav_Resume.pdf"
            className="mt-8 flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-br from-[#70789d] to-[#3d4567] font-jetbrains-mono text-xs font-bold uppercase text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_25px_rgba(112,120,157,0.4)]"
          >
            <Download size={14} />
            Download PDF
          </a>
        </header>

        {/* Experience Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-12">
            <h3 className="font-anton text-2xl uppercase inline-block relative text-on-surface mb-6">
              Experience
              <div className="h-1 w-24 bg-tertiary mt-2 rounded"></div>
            </h3>
          </div>

          {/* Job 1: Reworks Studio */}
          <div className="md:col-span-7 liquid-glass glass-stroke p-8 rounded-2xl flex flex-col justify-between group hover:border-tertiary/50 transition-all duration-300 border border-white/5 shadow-xl">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-jetbrains-mono text-[9px] font-bold text-tertiary bg-tertiary-container/30 border border-tertiary/20 px-3 py-1 rounded-full uppercase tracking-widest">
                    CURRENT INITIATIVE
                  </span>
                  <h4 className="font-anton text-2xl uppercase mt-4 text-on-surface">
                    Founder @ Reworks Studio
                  </h4>
                </div>
                <Briefcase className="text-tertiary w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <ul className="font-jetbrains-mono text-xs text-on-surface-variant space-y-4 list-disc pl-4 leading-relaxed">
                {portfolioData.experience[0].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {portfolioData.experience[0].tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-jetbrains-mono text-[8px] font-bold bg-white/3 border border-white/10 px-2 py-0.5 rounded text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Job 2: Fact Industries */}
          <div className="md:col-span-5 liquid-glass glass-stroke p-8 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition-all duration-300 border border-white/5 shadow-xl">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-jetbrains-mono text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">
                    2021 - 2023
                  </span>
                  <h4 className="font-anton text-2xl uppercase mt-4 text-on-surface">
                    Full Stack Engineer @ Fact Industries
                  </h4>
                </div>
              </div>
              <ul className="font-jetbrains-mono text-xs text-on-surface-variant space-y-4 list-disc pl-4 leading-relaxed">
                {portfolioData.experience[1].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {portfolioData.experience[1].tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-jetbrains-mono text-[8px] font-bold bg-white/3 border border-white/10 px-2 py-0.5 rounded text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Qualifications and Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card: Education details */}
          <div className="md:col-span-8 liquid-glass glass-stroke p-8 rounded-2xl border border-white/5 hover:border-on-surface-variant/30 transition-all duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div>
                <h4 className="font-anton text-2xl uppercase text-on-surface">
                  Education Credential
                </h4>
                <p className="font-jetbrains-mono text-base text-primary mt-3">
                  {portfolioData.education.school}
                </p>
                <p className="font-jetbrains-mono text-xs text-on-surface-variant mt-1 leading-relaxed">
                  {portfolioData.education.degree}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-on-surface-variant bg-white/5 border border-white/10 px-6 py-4 rounded-xl">
                <School className="text-primary w-10 h-10" />
                <div className="h-10 w-px bg-white/10"></div>
                <div>
                  <p className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Graduated
                  </p>
                  <p className="font-jetbrains-mono text-xs font-bold text-on-surface mt-1">
                    {portfolioData.education.period}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Break Image Card */}
          <div className="md:col-span-4 h-56 md:h-auto overflow-hidden rounded-2xl glass-stroke relative group border border-white/5 shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Kc0e95o8La8LRRDV7yky2jCq2v9GlCynFV6JtsRscSTtucQIvZ9qRXsX0SDACMjBmLmF6LmBaoUWeioTyMOM5T32vK1kTl3l2Bovq_dY1AtuTIC-T3_6kKSInUHHLewKP33GuwZ1jHtH6Mee1fIN1UGsRa2FeZL2JF0FGRdxsbz3STg7W9VEoc8Om-bYthtHNk2vT_TRqsChMdCHPxaQOPzaea-jlV7fAn8rzjRjsz8qx2enCpG-0qkpZT9v8IxF3Z0CRk3yfR4"
              alt="System Architecture Motherboard"
              className="w-full h-full object-cover img-grayscale-hover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex flex-col justify-end p-6 pointer-events-none">
              <span className="font-jetbrains-mono text-[10px] font-bold text-tertiary uppercase tracking-wider">
                SYSTEM DESIGN
              </span>
              <h4 className="font-anton text-lg uppercase text-on-surface mt-1">
                COMPUTE LAYER
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
