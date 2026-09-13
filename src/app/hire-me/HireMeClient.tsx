"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { portfolioData } from "@/data/portfolioData";
import { Shield, Mail, Phone } from "lucide-react";

export default function HireMeClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("Website / Web App");
  const [budget, setBudget] = useState("$200 - $1,000");
  const [details, setDetails] = useState("");
  const [channel, setChannel] = useState<"email" | "whatsapp">("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !details.trim()) {
      alert("Please fill out all required fields.");
      return;
    }

    if (channel === "email") {
      const subject = encodeURIComponent(`New Project Specs from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject Scope: ${scope}\nProject Budget: ${budget}\n\nProject Details:\n${details}`
      );
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    } else {
      const text = encodeURIComponent(
        `*New Project Spec Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Scope:* ${scope}\n*Budget:* ${budget}\n\n*Project Details:*\n${details}`
      );
      const phoneNum = portfolioData.personal.phone || "+918708905369";
      // Format to digits only for WhatsApp (omit +, spaces, brackets, or dashes)
      const cleanPhone = phoneNum.replace(/[^\d]/g, "");
      window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Sidebar />
      
      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-tertiary/5 blur-[130px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 pt-40 pb-section-gap px-6 md:px-margin-desktop max-w-4xl mx-auto w-full">
        <section className="liquid-glass glass-stroke p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5 relative">
          
          {/* Header */}
          <div className="relative inline-block mb-10">
            <h1 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-on-surface">
              Hire Me
            </h1>
            <span className="font-condiment text-tertiary absolute -bottom-4 -right-12 rotate-[-8deg] text-2xl md:text-4xl select-none neon-glow">
              Partnership
            </span>
          </div>

          <p className="font-jetbrains-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-12 max-w-xl">
            Looking to prototype a high-performance SaaS, design a custom website, build internal tools, or deploy agentic workflows? Fill out the parameters below and transmit directly.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 font-jetbrains-mono text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-primary font-bold uppercase tracking-wider block">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-primary font-bold uppercase tracking-wider block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Scope selection */}
              <div className="space-y-2">
                <label className="text-primary font-bold uppercase tracking-wider block">
                  Project Scope
                </label>
                <select 
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all appearance-none cursor-pointer"
                >
                  <option value="Website / Web App">Website / Web App</option>
                  <option value="Custom Mobile App">Custom Mobile App</option>
                  <option value="Internal Business Tool">Internal Business Tool</option>
                  <option value="AI / Agentic Workflow Systems">AI / Agentic Workflow Systems</option>
                  <option value="Other Custom Solution">Other Custom Solution</option>
                </select>
              </div>

              {/* Budget selection */}
              <div className="space-y-2">
                <label className="text-primary font-bold uppercase tracking-wider block">
                  Project Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all appearance-none cursor-pointer"
                >
                  <option value="$200 - $1,000">$200 - $1,000 (Min. Tier)</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                </select>
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label className="text-primary font-bold uppercase tracking-wider block">
                Project Metrics &amp; Scope Details
              </label>
              <textarea
                rows={5}
                placeholder="Detail the technical specifications, goals, and legacy parameters of your project..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                className="w-full bg-[#010828] border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
              />
            </div>

            {/* Dispatch Channel Radio Toggles */}
            <div className="space-y-3">
              <label className="text-primary font-bold uppercase tracking-wider block">
                Choose Dispatch Method
              </label>
              <div className="flex flex-wrap gap-6 text-on-surface">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="dispatchChannel"
                    value="email"
                    checked={channel === "email"}
                    onChange={() => setChannel("email")}
                    className="accent-tertiary w-4.5 h-4.5 cursor-pointer"
                  />
                  <span className="flex items-center gap-1.5 font-bold">
                    <Mail size={16} className="text-primary" /> Email Client
                  </span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="dispatchChannel"
                    value="whatsapp"
                    checked={channel === "whatsapp"}
                    onChange={() => setChannel("whatsapp")}
                    className="accent-tertiary w-4.5 h-4.5 cursor-pointer"
                  />
                  <span className="flex items-center gap-1.5 font-bold">
                    <Phone size={16} className="text-tertiary" /> WhatsApp Direct
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-6">
              <span className="text-[10px] text-on-surface-variant/70 flex items-center gap-1.5 order-2 sm:order-1">
                <Shield size={12} className="text-tertiary" /> Secure direct transmission routing.
              </span>
              <button
                type="submit"
                className={`w-full sm:w-auto order-1 sm:order-2 px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all ${
                  channel === "whatsapp"
                    ? "bg-[#25D366] text-[#052e16] shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
                    : "bg-tertiary text-on-tertiary shadow-[0_0_20px_rgba(111,255,0,0.3)] hover:shadow-[0_0_30px_rgba(111,255,0,0.5)]"
                }`}
              >
                {channel === "email" ? "DISPATCH EMAIL" : "SEND WHATSAPP"}
              </button>
            </div>
          </form>

          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-tertiary/5 blur-[60px] pointer-events-none rounded-full"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-margin-desktop text-center border-t border-white/5 bg-black/20 backdrop-blur-md mt-auto">
        <p className="font-jetbrains-mono text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
