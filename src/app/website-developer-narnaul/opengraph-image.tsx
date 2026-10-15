import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Website Developer in Narnaul, Haryana: Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Website Developer in Narnaul, Haryana", eyebrow: "Rishi Yadav · Web developer" });
}
