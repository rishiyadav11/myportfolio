import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/** Small "written by" card shown at the end of each article. */
export function AuthorBox() {
  return (
    <aside
      aria-label="About the author"
      className="flex items-start gap-4 rounded-xl border border-line bg-surface p-5 sm:gap-5 sm:p-6"
    >
      <Image
        src={site.photo.src}
        alt={site.photo.alt}
        width={site.photo.width}
        height={site.photo.height}
        sizes="64px"
        className="size-16 shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-ink">Written by {site.name}</p>
        <p className="mt-1 text-ink-2">
          Full-stack developer and web consultant in Narnaul, Haryana. I build and audit websites
          and web apps for businesses across India.
        </p>
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <Link href="/about" className="inline-flex min-h-11 items-center text-accent-text underline">
            More about me
          </Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center text-accent-text underline">
            Get in touch
          </Link>
        </p>
      </div>
    </aside>
  );
}
