import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Website Developer in Haryana: Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Website Developer in Haryana", eyebrow: "Rishi Yadav · Web developer" });
}
