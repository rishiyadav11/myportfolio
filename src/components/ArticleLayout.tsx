import type { ReactNode } from "react";
import { formatDate, type Post } from "@/content/posts";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { AuthorBox } from "./AuthorBox";

/** Long-form article shell: breadcrumbs, title block, prose body and author box. */
export function ArticleLayout({ post, children }: { post: Post; children: ReactNode }) {
  return (
    <Container as="article" className="pt-10 pb-4 md:pt-16">
      <div className="mx-auto max-w-prose">
        <Breadcrumbs
          items={[
            { name: "Writing", path: "/writing" },
            { name: post.title, path: `/writing/${post.slug}` },
          ]}
        />
        <header className="mb-10 border-b border-line pb-8">
          <h1 className="text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-ink-2">{post.description}</p>
          <p className="mt-5 font-mono text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true"> · </span>
            <span>{post.readingTime} min read</span>
            {post.updated && (
              <>
                <span aria-hidden="true"> · </span>
                <span>
                  Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              </>
            )}
          </p>
        </header>
        <div className="prose">{children}</div>
        <div className="mt-14">
          <AuthorBox />
        </div>
      </div>
    </Container>
  );
}
