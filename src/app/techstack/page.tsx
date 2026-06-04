import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Technical Arsenal & Reworks Protocol | Rishi Yadav",
  description: "Examine the custom serverless setups, SVG network architectures, and development systems built by Rishi Yadav, a top software developer in Gurgaon, Rewari, Narnaul, Haryana.",
  alternates: {
    canonical: "/techstack",
  },
};

export default function TechStackPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <main className="w-full flex-grow">
        <TechStack />
      </main>
    </div>
  );
}
