import type { Metadata } from "next";
import HireMeClient from "./HireMeClient";

export const metadata: Metadata = {
  title: "Hire Me & Start a Project",
  description: "Schedule systems engineering consultations, SaaS prototyping projects, or agentic AI setups with Rishi Yadav, Founder of Reworks Studio.",
  alternates: {
    canonical: "/hire-me",
  },
};

export default function HireMePage() {
  return <HireMeClient />;
}

