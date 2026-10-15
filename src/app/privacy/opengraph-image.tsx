import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Privacy policy for rishiyadav.space";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Privacy policy: what this site collects and why", eyebrow: "Privacy" });
}
