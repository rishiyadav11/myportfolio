import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Engineering: stack, architecture notes and GitHub, by Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Stack, architecture notes and code you can read", eyebrow: "Engineering" });
}
