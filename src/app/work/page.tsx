import { projects, industries } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectGrid, type GridProject } from "@/components/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { PrivateWork } from "@/components/PrivateWork";
import { Contours } from "@/components/graphics";

export const metadata = pageMetadata({
  title: "Case studies",
  description:
    "Case studies from Rishi Yadav: websites and web apps for hospitals, institutes, hotels, shops, gyms and AI products. Live sites you can open and judge yourself.",
  path: "/work",
});

export default function WorkPage() {
  const items: GridProject[] = projects.map(({ slug, client, industry, city, year, url, summary, screenshots }) => ({
    slug,
    client,
    industry,
    city,
    year,
    url,
    summary,
    screenshots,
  }));

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
        <Contours
          seed={5}
          className="pointer-events-none absolute -top-56 -right-72 size-[44rem] text-line-strong opacity-70 md:-right-40 md:size-[56rem]"
        />
        <Container className="relative">
          <Breadcrumbs items={[{ name: "Work", path: "/work" }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Selected work</p>
            <h1 className="text-5xl md:text-7xl">
              Websites and web apps for <em className="text-accent-text">real businesses</em>
            </h1>
            <p className="mt-5 text-lg text-ink-2 md:text-xl">
              Each one is live, so you can open it on your own phone and judge for yourself. Read what the client
              needed, what I built and the stack behind it.
            </p>
          </div>
          <div className="mt-12 md:mt-14">
            <ProjectGrid projects={items} industries={industries} />
          </div>
          <PrivateWork />
        </Container>
      </section>
      <CTASection
        title="Need something similar?"
        text="Tell me about your business and what the website needs to do. I'll reply with honest advice, a rough timeline and a price range."
      />
    </>
  );
}
