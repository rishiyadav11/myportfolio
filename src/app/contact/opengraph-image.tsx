import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Contact Rishi Yadav, full-stack developer in Narnaul, Haryana";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Let’s talk about your project", eyebrow: "Contact" });
}
