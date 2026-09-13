import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Rishi Yadav | Best Website Developer in Haryana & India",
  description: "Get in touch with Rishi Yadav (rishi yadav dev / rishi yadav developer), Founder of Reworks Studio. Reach out directly via WhatsApp (+91 87089 05369) or Email (photonics54yadav@gmail.com) for website development and SaaS engineering in Haryana, Delhi NCR, and India.",
  keywords: [
    "Contact Rishi Yadav",
    "rishi yadav contact",
    "rishi yadav dev",
    "rishi yadav developer phone",
    "rishi yadav email",
    "best website developer in haryana",
    "best website developer in india",
    "contact web developer Gurgaon",
    "web development consultation Rewari",
    "Reworks Studio contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Rishi Yadav | Best Website Developer in Haryana & India",
    description: "Direct contact channels (WhatsApp & Email) for Rishi Yadav (Reworks Studio).",
    url: "https://rishiyadav.space/contact",
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
