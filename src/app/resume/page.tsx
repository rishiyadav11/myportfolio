import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume & Engineering Background | Rishi Yadav Dev - Best Website Developer in Haryana & India",
  description: "View the official resume and qualifications of Rishi Yadav (rishi yadav dev / rishi yadav developer). B.Tech in Computer Science & Artificial Intelligence, Founder of Reworks Studio, and leading full-stack software engineer in Haryana & India.",
  keywords: [
    "Rishi Yadav resume",
    "rishi yadav dev CV",
    "rishi yadav developer qualifications",
    "best website developer in haryana",
    "best website developer in india",
    "software engineer resume Haryana",
    "AI developer CV India",
    "Rishi Yadav education MDU",
    "Reworks Studio resume",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume & Credentials | Rishi Yadav Dev - Best Web Developer",
    description: "Official resume, engineering track record, and educational credentials of Rishi Yadav.",
    url: "https://rishiyadav.space/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <main className="w-full flex-grow">
        <Resume />
      </main>
    </div>
  );
}
