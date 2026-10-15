import { ogImage, ogSize, ogContentType } from "@/lib/og";
import { getProject, projects } from "@/content/projects";

export const alt = "Case study by Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return ogImage({
    title: p ? `${p.client}: ${p.summary}` : "Case study",
    eyebrow: p ? `Case study · ${p.industry}` : "Case study",
  });
}
