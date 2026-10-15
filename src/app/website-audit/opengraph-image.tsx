import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Website audit by Rishi Yadav: speed, SEO, security and compliance";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Find out what's slowing your website down or losing you enquiries", eyebrow: "Website audit" });
}
