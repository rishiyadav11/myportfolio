"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.35] contrast-[1.15]"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          type="video/mp4"
        />
      </video>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none z-0"></div>

      {/* Main Hero Container */}
      <div className="relative z-10 text-center px-4 max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter uppercase text-on-surface">
            BUILDING FAST,
            <br />
            SCALABLE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed-dim to-tertiary neon-glow">
              ( DIGITAL )
            </span>
            <br />
            PRODUCTS
          </h1>

          {/* Accent Handwriting Overlay */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 12, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            className="absolute -right-6 -top-6 md:-right-16 md:-top-8 origin-bottom-left"
          >
            <span className="font-condiment text-4xl md:text-6xl text-tertiary neon-glow select-none">
              Full-Stack Dev
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 sm:gap-16 md:gap-32 w-full justify-center text-center px-6"
      >
        {portfolioData.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="font-jetbrains-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              {stat.label}
            </span>
            <span className="font-jetbrains-mono text-xs sm:text-sm text-on-surface mt-1">
              {stat.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
