import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Work with Rishi Yadav: websites and web apps for businesses";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Websites and web apps for clinics, institutes and growing businesses", eyebrow: "Work with me" });
}
