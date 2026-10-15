import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rishi Yadav: Full-Stack Developer & Web Consultant",
    short_name: "Rishi Yadav",
    description: "Fast, reliable websites and web apps for growing businesses. Narnaul, Haryana.",
    start_url: "/",
    display: "browser",
    background_color: "#f3efe6",
    theme_color: "#141312",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
