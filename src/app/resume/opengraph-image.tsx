import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Resume of Rishi Yadav, full-stack developer";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({ title: "Resume: full-stack developer and web consultant", eyebrow: "Resume" });
}
