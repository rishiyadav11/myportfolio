import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ScreenshotFrame } from "./ScreenshotFrame";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const meta = [project.industry, project.city, project.year].filter(Boolean).join(" · ");
  return (
    <article className="group relative flex flex-col">
      <ScreenshotFrame
        src={project.screenshots.desktop}
        alt={project.screenshots.desktopAlt}
        url={project.url}
        priority={priority}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl">
            <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0">
              {project.client}
            </Link>
          </h3>
          <p className="eyebrow mt-1">{meta}</p>
          <p className="mt-2 text-ink-2">{project.summary}</p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-muted transition-colors group-hover:text-accent-text"
        />
      </div>
    </article>
  );
}
