import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Rishi Yadav | Best Developer in Haryana",
  description: "Discover the engineering vision, professional history, and manifesto of Rishi Yadav (rishi yadav developer). Serving clients in Gurgaon, Rewari, Narnaul, and Delhi NCR.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <main className="w-full flex-grow">
        <About />
      </main>
    </div>
  );
}
