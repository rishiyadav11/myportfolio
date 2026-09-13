import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Rishi Yadav | Best Website Developer in Haryana & India",
  description: "Learn about Rishi Yadav (rishi yadav dev / rishi yadav developer), Founder of Reworks Studio and top software engineer in Haryana, Gurgaon, Rewari, Narnaul, and India. Discover his engineering philosophy, background in Artificial Intelligence, and scalable web architecture principles.",
  keywords: [
    "About Rishi Yadav",
    "Rishi Yadav biography",
    "rishi yadav dev",
    "rishi yadav developer",
    "best website developer in haryana",
    "best website developer in india",
    "top web developer haryana",
    "software engineer narnaul",
    "software developer rewari",
    "software developer gurgaon",
    "Reworks Studio founder",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Rishi Yadav | Best Website Developer in Haryana & India",
    description: "Engineering vision and portfolio background of Rishi Yadav (rishi yadav dev). Servicing Haryana, Delhi NCR, and worldwide clients with cutting-edge web & AI systems.",
    url: "https://rishiyadav.space/about",
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
