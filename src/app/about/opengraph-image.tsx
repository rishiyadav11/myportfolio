import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Rishi Yadav, full-stack developer in Narnaul, Haryana";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "I build websites and web apps from Narnaul, Haryana", eyebrow: "About" });
}
