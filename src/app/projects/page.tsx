import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects & Live Works | Rishi Yadav Dev - Best Website Developer in Haryana & India",
  description: "Browse live portfolio projects, custom SaaS tools, e-commerce stores, and AI platforms developed by Rishi Yadav (rishi yadav dev / rishi yadav developer). Delivered for high-growth clients across Haryana, Delhi NCR, and India.",
  keywords: [
    "Rishi Yadav projects",
    "rishi yadav dev portfolio",
    "rishi yadav developer works",
    "best website developer in haryana",
    "best website developer in india",
    "SaaS projects India",
    "Next.js web projects",
    "E-commerce website developer Haryana",
    "AI SaaS examples",
    "Baemark",
    "Om Garments",
    "Chadni Resorts",
    "Saawwariya Hotels",
    "Reworks Studio projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Live Works | Rishi Yadav Dev - Best Web Developer",
    description: "Curated portfolio of production Next.js apps, AI workflows, and digital commerce architectures built by Rishi Yadav.",
    url: "https://rishiyadav.space/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <main className="w-full flex-grow">
        <Projects />
      </main>
    </div>
  );
}
