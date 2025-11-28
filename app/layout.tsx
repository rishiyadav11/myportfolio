// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishi Yadav — Full Stack Web Developer",
  description:
    "Rishi Yadav — Expert full-stack developer building scalable web and mobile applications with React, Node.js, TypeScript, tRPC, and more.",
  keywords:
    "Rishi Yadav, Full Stack Developer, React, Node.js, tRPC, TypeScript, Web Developer India, Portfolio, Best Developer",
  authors: [{ name: "Rishi Yadav", url: "https://rishiyadav.me/" }],
  creator: "Rishi Yadav",
  applicationName: "Rishi Yadav Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://rishiyadav.me"),
  openGraph: {
    title: "Rishi Yadav — Full Stack Web Developer",
    description:
      "Explore the portfolio of Rishi Yadav, a modern full-stack developer creating high-quality, scalable web and mobile applications.",
    url: "https://rishiyadav.me/",
    siteName: "Rishi Yadav Portfolio",
    images: [
      {
        url: "https://rishiyadav.me/proimg.webp",
        width: 1200,
        height: 630,
        alt: "Rishi Yadav — Full Stack Web Developer",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rishiyadav5911",
    creator: "@rishiyadav5911",
    title: "Rishi Yadav — Full Stack Web Developer",
    description:
      "Building scalable, modern full-stack applications with React, Node.js, TypeScript & more.",
    images: ["https://rishiyadav.me/proimg.webp"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rishi Yadav",
              alternateName: ["Rishi Yadav Developer", "Rishi Yadav Dev"],
              jobTitle: "Full Stack Web Developer",
              image: "https://rishiyadav.me/me.jpg",
              url: "https://rishiyadav.me/",
              sameAs: [
                "https://twitter.com/rishiyadav5911",
                "https://github.com/rishiyadavdev",
                "https://www.linkedin.com/in/rishi-yadav-dev/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Haryana",
                addressCountry: "India",
              },
              knowsAbout: [
                "Full Stack Development",
                "React",
                "Node.js",
                "TypeScript",
                "tRPC",
                "Web & Mobile Apps",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
