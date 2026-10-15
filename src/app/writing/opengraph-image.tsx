import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Writing by Rishi Yadav on website speed, audits and costs";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Notes on building better websites", eyebrow: "Writing" });
}
