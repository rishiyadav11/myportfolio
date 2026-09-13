import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Tech Stack & Engineering Skills | Rishi Yadav Dev - Best Website Developer in Haryana & India",
  description: "Examine the technical stack and architecture systems mastered by Rishi Yadav (rishi yadav dev / rishi yadav developer): Next.js, React, TypeScript, Node.js, Tailwind CSS, LLMs, Vector DBs, and cloud serverless infrastructures in Haryana & India.",
  keywords: [
    "Rishi Yadav tech stack",
    "rishi yadav dev skills",
    "rishi yadav developer technologies",
    "best website developer in haryana",
    "best website developer in india",
    "Next.js developer India",
    "TypeScript expert Haryana",
    "React developer Gurgaon",
    "Full stack technologies",
    "Reworks Studio tech stack",
  ],
  alternates: {
    canonical: "/techstack",
  },
  openGraph: {
    title: "Tech Stack & Skills | Rishi Yadav Dev - Best Web Developer",
    description: "Next.js, TypeScript, AI LLMs, Vector DBs, and cloud architecture stack mastered by Rishi Yadav.",
    url: "https://rishiyadav.space/techstack",
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
