import Link from "next/link";
import { formatDate, posts } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Practical notes on website speed, audits, costs and building for the web in India. Written by Rishi Yadav, full-stack developer in Narnaul, Haryana.",
  path: "/writing",
});

export default function WritingPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Container className="pt-10 md:pt-16">
        <Breadcrumbs items={[{ name: "Writing", path: "/writing" }]} />
        <header className="max-w-2xl">
          <p className="eyebrow mb-3">Writing</p>
          <h1 className="text-4xl md:text-5xl">Notes on building better websites</h1>
          <p className="mt-5 text-lg text-ink-2">
            Plain answers to the questions clients ask me most: why a site is slow, what an audit
            finds, and what a website really costs in India.
          </p>
        </header>
        <ul className="mt-12 divide-y divide-line border-y border-line md:mt-16">
          {sorted.map((post) => (
            <li key={post.slug}>
              <article className="group relative grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-sm text-muted md:col-span-3 md:pt-1.5">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true"> · </span>
                  {post.readingTime} min read
                </p>
                <div className="md:col-span-9">
                  <h2 className="text-2xl md:text-3xl">
                    <Link
                      href={`/writing/${post.slug}`}
                      className="after:absolute after:inset-0 group-hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-ink-2">{post.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
      <CTASection
        title="Have a question about your website?"
        text="If something here sounds like your site, send me a message. I'll tell you honestly what's worth fixing."
      />
    </>
  );
}
