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
  metadataBase: new URL("https://rishiyadav.space"),
  title: {
    default: "Rishi Yadav | Best Website Developer in Haryana & India | Full-Stack AI Engineer",
    template: "%s | Rishi Yadav - Best Website Developer in Haryana & India",
  },
  description: "Official portfolio of Rishi Yadav (Rishi Yadav Dev / Rishi Yadav Developer), Founder of Reworks Studio. Top-rated website developer and AI software architect in Haryana, Gurgaon, Rewari, Narnaul, and across India. Building ultra-fast Next.js websites, scalable SaaS applications, and custom agentic AI systems.",
  keywords: [
    "Rishi Yadav",
    "rishi yadav dev",
    "rishi yadav developer",
    "rishi yadav devloper",
    "rishi dev",
    "best website developer in haryana",
    "best website developer in india",
    "best web developer in haryana",
    "best web developer in india",
    "best software developer in haryana",
    "best software developer in india",
    "website developer in gurgaon",
    "website developer in rewari",
    "website developer in narnaul",
    "website developer in delhi ncr",
    "web developer haryana",
    "full stack developer haryana",
    "full stack developer india",
    "freelance website developer in india",
    "top web designer in haryana",
    "SaaS Architect Haryana",
    "Next.js Developer Haryana",
    "React Engineer Gurgaon",
    "Software Developer Rewari",
    "Reworks Studio",
    "Reworks Studio Rishi Yadav",
    "AI SaaS Developer India",
    "Fact Industries",
  ],
  authors: [{ name: "Rishi Yadav", url: "https://rishiyadav.space" }],
  creator: "Rishi Yadav",
  publisher: "Reworks Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/LOGO.png",
    shortcut: "/LOGO.png",
    apple: "/LOGO.png",
  },
  openGraph: {
    title: "Rishi Yadav | Best Website Developer in Haryana & India",
    description: "Official portfolio of Rishi Yadav (Rishi Yadav Dev / Rishi Yadav Developer). Specialized in ultra-fast Next.js websites, high-performance AI SaaS, RAG engines, and custom digital systems in Haryana and India.",
    url: "https://rishiyadav.space",
    siteName: "Rishi Yadav Portfolio - Best Website Developer in Haryana & India",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/OG.jpg",
        width: 1200,
        height: 630,
        alt: "Rishi Yadav | Best Website Developer in Haryana & India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Yadav | Best Website Developer in Haryana & India",
    description: "Portfolio of Rishi Yadav (Rishi Yadav Dev). High-performance websites, AI SaaS, and custom software engineering based in Haryana, servicing India & global clients.",
    creator: "@RishiYadav5911",
    images: ["/OG.jpg"],
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
  // Comprehensive Structured Data (JSON-LD) for Search Engines
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rishiyadav.space/#person",
        "name": "Rishi Yadav",
        "alternateName": [
          "Rishi Yadav Dev",
          "Rishi Yadav Developer",
          "rishi yadav devloper",
          "Rishi Dev",
          "Best Website Developer in Haryana",
          "Best Web Developer in India"
        ],
        "jobTitle": "Full-Stack AI Developer & SaaS Architect",
        "description": "Founder of Reworks Studio and recognized as the best website developer in Haryana and India. Specializing in Next.js web applications, agentic AI workflows, and distributed SaaS systems.",
        "url": "https://rishiyadav.space",
        "image": "https://rishiyadav.space/me.jpeg",
        "email": portfolioData.personal.email,
        "telephone": portfolioData.personal.phone,
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
        "knowsAbout": [
          "Web Development",
          "Website Design",
          "Next.js",
          "React.js",
          "TypeScript",
          "Node.js",
          "Tailwind CSS",
          "Artificial Intelligence",
          "SaaS Architecture",
          "RAG Systems",
          "Full-Stack Development"
        ],
        "sameAs": [
          portfolioData.personal.github,
          portfolioData.personal.linkedin,
          portfolioData.personal.twitter
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://rishiyadav.space/#website",
        "url": "https://rishiyadav.space",
        "name": "Rishi Yadav | Best Website Developer in Haryana & India",
        "alternateName": "Rishi Yadav Dev Portfolio & Reworks Studio",
        "publisher": {
          "@id": "https://rishiyadav.space/#person"
        },
        "inLanguage": "en"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://rishiyadav.space/#service",
        "name": "Rishi Yadav - Web Development & AI SaaS Engineering",
        "url": "https://rishiyadav.space",
        "image": "https://rishiyadav.space/OG.jpg",
        "telephone": portfolioData.personal.phone,
        "email": portfolioData.personal.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Narnaul",
          "addressRegion": "Haryana",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.0444",
          "longitude": "76.1084"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Haryana" },
          { "@type": "City", "name": "Gurgaon" },
          { "@type": "City", "name": "Rewari" },
          { "@type": "City", "name": "Narnaul" },
          { "@type": "City", "name": "Delhi NCR" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software & Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Development",
                "description": "High-performance, modern responsive website development using Next.js and Tailwind CSS."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS Architecture & Full-Stack Development",
                "description": "0-to-1 scalable SaaS platforms, database design, and API engineering."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & Agentic Systems Integration",
                "description": "Custom LLM integrations, RAG telemetry pipelines, and vector database deployments."
              }
            }
          ]
        }
      }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
