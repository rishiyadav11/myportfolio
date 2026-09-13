import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, Brain, Database, Mail, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Reworks Studio Ventures & Services | Rishi Yadav Dev - Best Web Developer in Haryana & India",
  description: "Explore services by Reworks Studio, founded by Rishi Yadav (rishi yadav developer). End-to-end custom website development, SaaS prototyping 0-to-1, agentic AI systems, and cloud architectures in Haryana, Delhi NCR, and India.",
  keywords: [
    "Reworks Studio",
    "Rishi Yadav services",
    "rishi yadav dev",
    "rishi yadav developer",
    "best website developer in haryana",
    "best website developer in india",
    "web development services Haryana",
    "SaaS agency India",
    "AI development company Gurgaon",
    "Next.js agency Delhi NCR",
    "custom web app development India",
  ],
  alternates: {
    canonical: "/ventures",
  },
  openGraph: {
    title: "Reworks Studio Ventures | Rishi Yadav Dev - Best Web Developer",
    description: "SaaS prototyping, custom web engineering, and AI integrations by Rishi Yadav (Reworks Studio).",
    url: "https://rishiyadav.space/ventures",
  },
};

export default function VenturesPage() {
  const services = [
    {
      title: "SaaS Development 0->1",
      description: "Rapid prototyping and development of scalable software architectures designed for immediate market impact and long-term stability.",
      icon: <Rocket className="w-8 h-8 text-primary group-hover:text-tertiary transition-colors" />,
      tags: ["#Deployment", "#Scale"],
    },
    {
      title: "AI Integration",
      description: "Seamlessly embedding LLMs, agentic chains, and semantic search vectors into workflows to automate decision-making processes.",
      icon: <Brain className="w-8 h-8 text-primary group-hover:text-tertiary transition-colors" />,
      tags: ["#Intelligence", "#Automation"],
    },
    {
      title: "Scalable Systems",
      description: "High-availability distributed systems capable of processing millions of telemetry events without breaking a sweat.",
      icon: <Database className="w-8 h-8 text-primary group-hover:text-tertiary transition-colors" />,
      tags: ["#Performance", "#Architecture"],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Defining technical requirements and market feasibility.",
    },
    {
      num: "02",
      title: "Architecture",
      desc: "Crafting robust, distributed system designs.",
    },
    {
      num: "03",
      title: "Build",
      desc: "High-fidelity development with continuous integration.",
    },
    {
      num: "04",
      title: "Scale",
      desc: "Optimization for peak performance and growth.",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Sidebar />
      
      {/* Background Decorative Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-tertiary/5 blur-[140px] rounded-full"></div>
      </div>

      <main className="relative z-10 pt-40">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center mb-32">
          <div className="relative inline-block">
            <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl text-on-surface tracking-tighter leading-none uppercase">
              REWORKS STUDIO / VENTURES
            </h1>
            <span className="absolute -bottom-6 right-2 font-condiment text-tertiary transform rotate-[-6deg] text-3xl md:text-5xl select-none neon-glow">
              What we build
            </span>
          </div>
          <p className="mt-12 max-w-2xl mx-auto font-jetbrains-mono text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Engineering the next generation of digital infrastructure. We specialize in turning complex technological concepts into high-performance market leaders.
          </p>
        </section>

        {/* Service Offerings */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="liquid-glass glass-stroke p-8 rounded-2xl flex flex-col items-start gap-6 border border-white/5 shadow-xl hover:glow-purple group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tertiary/10 transition-colors">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-anton text-xl text-on-surface mb-3 uppercase tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="font-jetbrains-mono text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5 w-full flex gap-3 font-jetbrains-mono text-[10px] font-bold text-tertiary">
                  {svc.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Workflow */}
        <section className="bg-primary-container/40 py-24 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
              <h2 className="font-anton text-3xl uppercase text-on-surface">
                The Reworks Protocol
              </h2>
              <span className="font-jetbrains-mono text-[10px] font-bold text-tertiary bg-tertiary-container/30 border border-tertiary/20 px-4 py-2 rounded-full tracking-widest uppercase">
                EST. 2026 // SYSTEM_INIT
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
              {/* Connector line on desktop */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-primary/10 via-tertiary/30 to-primary/10"></div>
              
              {steps.map((step) => (
                <div key={step.num} className="relative group">
                  <div className="w-20 h-20 mb-6 rounded-full bg-background border-4 border-white/10 flex items-center justify-center font-anton text-xl text-primary group-hover:border-tertiary group-hover:text-tertiary transition-all duration-300 relative z-10">
                    {step.num}
                  </div>
                  <h4 className="font-jetbrains-mono text-xs font-bold text-on-surface mb-2 uppercase tracking-widest">
                    {step.title}
                  </h4>
                  <p className="font-jetbrains-mono text-xs text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner with Us CTA */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-32">
          <div className="liquid-glass glass-stroke p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden border border-white/5 shadow-3xl">
            {/* Background circuit board simulation image */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlUb_iVHl530rZxaTSHuQr0CAa1DlWSTztcV5KOEuazI_YVOf1cp_IL8RiUgUlFUfTwH8UE4l52pL-pt8xbCcaLKtvOcJRqvL7p4gkM6WQsx9SW7BObYauhIn1wCUl-cys-3r4epnuOntZoQ-A0D5PfyFZIf5vsSZBz70-0za0iXr7Raws5FV0G9rlVkJFfIV4XGHs9D5u_MwEYaxYy3xm_9xRriW4FKYl0Dgi944zn8E69pSDXcjoIKjtZeprD9FSns0qPXX7LQw"
                alt="Silicon Circuit Paths"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="relative z-10">
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase text-on-surface mb-8 tracking-tight">
                READY TO <span className="text-tertiary neon-glow">ASCEND?</span>
              </h2>
              <p className="font-jetbrains-mono text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
                We are currently accepting selective partnerships. Let's discuss how Reworks can accelerate your technical vision and ship secure SaaS ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-12 py-5 rounded-full bg-gradient-to-br from-[#70789d] to-[#3d4567] font-jetbrains-mono text-xs font-bold uppercase text-white shadow-2xl hover:scale-105 active:scale-95 transition-all hover:shadow-[0_0_25px_rgba(112,120,157,0.4)]"
                >
                  Partner With Us
                </Link>
                <div className="flex gap-4">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="w-14 h-14 rounded-full border border-white/10 glass-stroke flex items-center justify-center hover:bg-white/10 transition-colors text-on-surface hover:text-tertiary hover:scale-105"
                    title="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full border border-white/10 glass-stroke flex items-center justify-center hover:bg-white/10 transition-colors text-on-surface hover:text-tertiary hover:scale-105"
                    title="Visit GitHub"
                  >
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-margin-desktop text-center border-t border-white/5 bg-black/20 backdrop-blur-md">
        <p className="font-jetbrains-mono text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
