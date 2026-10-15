import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Website Developer for Delhi NCR Businesses: Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Website Developer for Delhi NCR Businesses", eyebrow: "Rishi Yadav · Web developer" });
}
