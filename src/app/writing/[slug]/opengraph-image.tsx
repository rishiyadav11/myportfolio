import { getPost, posts } from "@/content/posts";
import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Article by Rishi Yadav";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogImage({ title: post?.title ?? "Writing", eyebrow: "Writing" });
}
