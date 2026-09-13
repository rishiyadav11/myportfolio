import type { Metadata } from "next";
import HireMeClient from "./HireMeClient";

export const metadata: Metadata = {
  title: "Hire Rishi Yadav | Best Website Developer & AI SaaS Architect in Haryana & India",
  description: "Hire Rishi Yadav (rishi yadav dev / rishi yadav developer), Founder of Reworks Studio. Specialized in custom website development, SaaS prototyping 0-to-1, and AI systems in Haryana, Gurgaon, Rewari, Narnaul, Delhi NCR, and globally across India.",
  keywords: [
    "Hire Rishi Yadav",
    "hire website developer Haryana",
    "hire website developer India",
    "hire rishi yadav dev",
    "hire rishi yadav developer",
    "best website developer in haryana",
    "best website developer in india",
    "freelance web developer Gurgaon",
    "hire Next.js developer India",
    "hire full stack engineer Rewari",
    "Reworks Studio hire",
  ],
  alternates: {
    canonical: "/hire-me",
  },
  openGraph: {
    title: "Hire Rishi Yadav | Best Website Developer in Haryana & India",
    description: "Transmit project parameters to Rishi Yadav (Reworks Studio). Rapid delivery of high-performance websites and AI SaaS platforms.",
    url: "https://rishiyadav.space/hire-me",
  },
};

export default function HireMePage() {
  return <HireMeClient />;
}

