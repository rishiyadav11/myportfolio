import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume & Engineering History | Rishi Yadav Dev",
  description: "Review the professional resume of Rishi Yadav (rishi yadav dev), B.Tech computer science graduate specializing in Artificial Intelligence. Active in Gurgaon, Rewari, and Delhi NCR.",
  alternates: {
    canonical: "/resume",
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
