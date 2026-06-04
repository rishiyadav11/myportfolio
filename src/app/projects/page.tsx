import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Software Projects Portfolio | Rishi Yadav Dev",
  description: "Explore the custom SaaS tools, web apps, and e-commerce platforms engineered by Rishi Yadav (rishi yadav developer) for clients in Gurgaon, Rewari, Narnaul, Haryana, and globally.",
  alternates: {
    canonical: "/projects",
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
