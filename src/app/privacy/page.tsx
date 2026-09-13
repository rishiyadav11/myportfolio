import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Privacy Policy | Rishi Yadav Dev - Reworks Studio",
  description: "Privacy policy and client data protection commitments for Rishi Yadav (Reworks Studio), website developer and AI software engineer based in Haryana, India.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Sidebar />
      
      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 pt-40 pb-section-gap px-6 md:px-margin-desktop max-w-4xl mx-auto w-full">
        <section className="liquid-glass glass-stroke p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5">
          <div className="relative inline-block mb-10">
            <h1 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-on-surface">
              Privacy Policy
            </h1>
            <span className="font-condiment text-tertiary absolute -bottom-4 -right-10 rotate-[-8deg] text-2xl md:text-3xl select-none">
              Security
            </span>
          </div>

          <div className="font-jetbrains-mono text-xs sm:text-sm text-on-surface-variant space-y-8 leading-relaxed">
            <p>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p>
              This Privacy Policy explains how we collect, protect, and use information when you browse our developer portfolio website and coordinate services with <strong>Reworks Studio</strong>.
            </p>

            <div className="space-y-4">
              <h2 className="font-anton text-lg sm:text-xl uppercase text-primary tracking-wide">
                1. Information Collection
              </h2>
              <p>
                We do not collect any personal identifier details when you browse this website statically. If you choose to contact us directly via email (at <a href={`mailto:${portfolioData.personal.email}`} className="text-tertiary hover:underline">{portfolioData.personal.email}</a>) or through social channels, we store the details you voluntarily submit to coordinate communications and agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-lg sm:text-xl uppercase text-primary tracking-wide">
                2. Data Usage
              </h2>
              <p>
                Any submitted information is used exclusively to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to project inquiries, freelance queries, and partnership requests.</li>
                <li>Coordinate ongoing systems engineering service scopes.</li>
                <li>Verify structural code compilations and edge deployments.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-lg sm:text-xl uppercase text-primary tracking-wide">
                3. Security Measures
              </h2>
              <p>
                We execute security workflows to protect information. Telemetry pipelines, server routing endpoints, and client databases are integrated using standard transport-layer security and token authorizations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-anton text-lg sm:text-xl uppercase text-primary tracking-wide">
                4. Contacts &amp; Inquiries
              </h2>
              <p>
                If you have questions regarding privacy operations or want to request deleting communication records, please contact us at:
              </p>
              <p className="border-l-2 border-tertiary pl-4 text-on-surface font-bold">
                Email: {portfolioData.personal.email}
                <br />
                Address: Haryana, India
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-margin-desktop text-center border-t border-white/5 mt-auto">
        <p className="font-jetbrains-mono text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
