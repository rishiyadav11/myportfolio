import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Rishi Yadav, full-stack developer and web consultant in Narnaul, Haryana";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "I build fast, reliable websites and web apps for growing businesses." });
}
