import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Rishi Yadav | Hire Software Developer in Gurgaon, Rewari",
  description: "Connect with Rishi Yadav, the best software developer in Haryana, to engineer custom web apps, scalable SaaS, or AI workflows. Available in Gurgaon, Rewari, Narnaul, and Delhi NCR.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <main className="w-full flex-grow">
        <Contact />
      </main>
    </div>
  );
}
