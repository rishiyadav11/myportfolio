import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Condiment } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const condiment = Condiment({
  variable: "--font-condiment",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rishiyadav.dev"), // fallback base URL for canonicals
  title: {
    default: "Rishi Yadav | Best Developer in Haryana | Full-Stack Software Engineer in Gurgaon, Rewari, Narnaul",
    template: "%s | Rishi Yadav - Best Developer in Haryana",
  },
  description: "Portfolio of Rishi Yadav, Founder of Reworks Studio. Recognized as the best developer in Haryana, specializing in building high-performance AI SaaS, RAG systems, and custom internal tools in Gurgaon, Rewari, Narnaul, and Delhi NCR.",
  keywords: [
    "Rishi Yadav",
    "rishi yadav developer",
    "rishi yadav dev",
    "rishi dev",
    "best developer in haryana",
    "fullstack engineer in narnaul",
    "fullstack engineer in rewari",
    "fullstack engineer in gurgaon",
    "SaaS Architect Haryana",
    "Next.js Developer Narnaul",
    "React Engineer Gurgaon",
    "Software Developer Rewari",
    "Reworks Studio",
    "Fact Industries",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/LOGO.png",
    shortcut: "/LOGO.png",
    apple: "/LOGO.png",
  },
  openGraph: {
    title: "Rishi Yadav | Best Developer in Haryana | Full-Stack Software Engineer",
    description: "Portfolio of Rishi Yadav. Specialized in high-performance AI workflows, RAG engines, and scalable distributed SaaS applications in Gurgaon, Rewari, Narnaul, and Delhi NCR.",
    url: "https://www.rishiyadav.dev",
    siteName: "Rishi Yadav Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Rishi Yadav | Best Developer in Haryana | Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Yadav | Best Developer in Haryana | Full-Stack Software Engineer",
    description: "Portfolio of Rishi Yadav. Specialized in building high-performance AI workflows, RAG engines, and scalable distributed SaaS applications.",
    creator: "@RishiYadav5911",
    images: ["/OG.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.personal.name,
    "jobTitle": portfolioData.personal.title,
    "url": "https://github.com/rishiyadav11",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Narnaul",
      "addressRegion": "Haryana",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": portfolioData.education.school
    },
    "sameAs": [
      portfolioData.personal.github,
      portfolioData.personal.linkedin,
      portfolioData.personal.twitter
    ]
  };

  return (
    <html
      lang="en"
      className={`${anton.variable} ${jetbrainsMono.variable} ${condiment.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        {/* Stardust texture overlay */}
        <div className="fixed inset-0 z-50 texture-overlay bg-repeat"></div>
        {children}
      </body>
    </html>
  );
}
