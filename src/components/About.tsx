"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 w-full bg-background overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.25] contrast-[1.1] opacity-40 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
          type="video/mp4"
        />
      </video>

      {/* Main Container */}
      <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full">
        {/* Section 1: Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center mb-32">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="relative inline-block mb-8">
              <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl uppercase leading-none text-on-surface">
                HELLO! I'M
                <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  RISHI
                </span>
              </h2>
              {/* Handwritten overlay */}
              <span className="absolute top-1/2 left-2 -translate-y-1/2 font-condiment text-tertiary neon-glow text-6xl md:text-8xl -rotate-6 select-none">
                Rishi
              </span>
            </div>

            <div className="liquid-glass glass-stroke p-6 sm:p-8 rounded-2xl max-w-xl shadow-2xl">
              <p className="font-jetbrains-mono text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                {portfolioData.bio.text1}
              </p>
              <p className="font-jetbrains-mono text-xs sm:text-sm text-on-surface-variant/80 border-l-2 border-tertiary pl-6 italic">
                {portfolioData.bio.text2}
              </p>
            </div>
          </div>

          {/* Right Column (Portrait) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-[300px] h-[380px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] rounded-[30px] sm:rounded-[40px] liquid-glass glass-stroke overflow-hidden relative group">
              <img
                src="/me.jpeg"
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover img-grayscale-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-65 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="font-jetbrains-mono text-[10px] sm:text-xs font-bold text-tertiary uppercase tracking-wider">
                  Full-Stack Engineer
                </span>
                <div className="h-1 w-12 bg-tertiary mt-2 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: The Vision */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center mb-32">
          {/* Left Visual Bento Grid */}
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-48 sm:h-56 md:h-64 rounded-2xl bg-surface-container-high glass-stroke flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
                  <Brain className="text-tertiary w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                </div>
                <div className="h-36 sm:h-44 md:h-48 rounded-2xl bg-primary-container glass-stroke overflow-hidden relative group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOggbDc-laBt45O4rPQdiBKcUTYjjPu36Ts-Z2PHsvWGifkbi-JQULFdaVc2s-BmfNXk3cOaGNCWiqJ9g4VpDXH5ufjtTl6NfXml-59svMxN570GOfppWiDygGh8SQHJ3zMFgVr5DC_-R3kRmfh3TkKiLOx_gb59xqGadqFHzPiC1HWg3OnIlRmrncg4MPhTLC5UnY1aZ6lJ0cpmoHVLssVay3miFqAnA41EH6pFbvgHkMpNY3c3aH_wkiBMM7XgNhOgElBfKeHEw"
                    alt="Silicon Chip Circuit"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-36 sm:h-44 md:h-48 rounded-2xl bg-surface-container-low glass-stroke flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
                  <Rocket className="text-primary w-12 h-12 md:w-16 md:h-16" />
                </div>
                <div className="h-48 sm:h-56 md:h-64 rounded-2xl bg-surface-container-highest glass-stroke overflow-hidden relative group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTTFt2xRXbI0kt2yBlGvYE9er6PcRYdkKnnjrTBz30yUn-akOuxLOjrYMhQQspfKjW4X5AEbZMEXq5FdfwKrYyYPunJ0P2z0-pJVYy7oYef75S3fqGkIPinSSpRT-uB1IPSl2Gre77JlFeYNtQsFTRSOG4NF4XDPt1hYdgWV9kZrg1bo3smWiGBk31i1xcIV6xO8zY_qap1I2DAVDcdZWInqdt9M1zxhnUPufL-bjejAtwIpqD2925SqBrbMJomgXt7SgScpmQ7tg"
                    alt="Space Galaxy Nebula"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-65 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="md:col-span-6 order-1 md:order-2 flex flex-col justify-center">
            <h3 className="font-anton text-4xl sm:text-5xl uppercase text-on-surface mb-6 neon-underline inline-block w-fit">
              The Vision
            </h3>
            <div className="relative mt-8">
              <span className="font-condiment text-primary absolute -top-8 left-12 rotate-3 opacity-80 text-4xl select-none">
                Manifesto
              </span>
              <p className="font-jetbrains-mono text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                I founded <span className="text-on-surface font-bold">Reworks Studio</span> with a singular obsession: to weaponize AI for practical, enterprise-grade SaaS solutions. My journey started during my B.Tech in AI, where I realized that the true power of neural networks isn't in research papers—it's in the hands of users.
              </p>
              <p className="font-jetbrains-mono text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Through <span className="text-on-surface font-bold">Fact Industries</span>, I explore the industrial applications of smart automation, ensuring that every line of code I write contributes to a more efficient, autonomous future.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Founder's Note Quote Card */}
        <div className="bg-surface-container-lowest/80 border border-white/5 py-12 px-6 sm:px-12 md:px-16 rounded-[2.5rem] glass-stroke relative overflow-hidden text-center max-w-4xl mx-auto shadow-3xl">
          <span className="font-anton text-6xl md:text-8xl text-tertiary/20 select-none block -mb-4">
            “
          </span>
          <h4 className="font-anton text-2xl md:text-3xl uppercase text-on-surface mb-6 tracking-tight">
            Founder's Note
          </h4>
          <p className="font-jetbrains-mono text-sm sm:text-base md:text-lg text-on-surface-variant italic leading-relaxed max-w-2xl mx-auto">
            "{portfolioData.bio.note}"
          </p>
          <div className="mt-8 flex flex-col items-center">
            <span className="font-condiment text-3xl md:text-4xl text-on-surface">
              {portfolioData.personal.name}
            </span>
            <span className="font-jetbrains-mono text-[10px] md:text-xs font-bold text-primary uppercase mt-1 tracking-widest">
              Founder, Reworks Studio
            </span>
          </div>

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-tertiary/5 blur-[80px] pointer-events-none rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
