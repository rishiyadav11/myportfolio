import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/schema";
import { ArticleLayout } from "@/components/ArticleLayout";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/writing/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = (await import(`@/content/writing/${slug}.mdx`)) as {
    default: ComponentType;
  };

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <ArticleLayout post={post}>
        <Content />
      </ArticleLayout>
      <CTASection
        title="Want me to look at your website?"
        text="Send me your site's address and what's bothering you about it. I'll reply with honest advice and, if it helps, a fixed-price quote."
        whatsappMessage={`Hi Rishi, I read "${post.title}" and would like to talk about my website.`}
      />
    </>
  );
}
