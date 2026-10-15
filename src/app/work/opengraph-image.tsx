import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Case studies: websites and web apps by Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Websites and web apps for real businesses", eyebrow: "Case studies" });
}
