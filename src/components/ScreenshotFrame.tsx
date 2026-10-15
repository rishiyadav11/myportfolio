import Image from "next/image";

/**
 * Real screenshot inside a minimal browser or phone frame.
 * Desktop shots are 1440x900; mobile shots are 780x1688 (390px @2x).
 */
export function ScreenshotFrame({
  src,
  alt,
  device = "browser",
  url,
  priority = false,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  device?: "browser" | "phone";
  url?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (device === "phone") {
    return (
      <div className={`overflow-hidden rounded-[1.75rem] border-[6px] border-ink bg-ink shadow-card ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={780}
          height={1688}
          priority={priority}
          sizes={sizes ?? "(min-width: 768px) 240px, 45vw"}
          className="block h-auto w-full rounded-[1.25rem] bg-surface-2"
        />
      </div>
    );
  }
  const host = url ? new URL(url).host.replace(/^www\./, "") : null;
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3 py-2" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        {host && (
          <span className="mx-auto truncate rounded-md bg-surface px-3 py-0.5 font-mono text-[0.6875rem] text-muted">
            {host}
          </span>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={priority}
        sizes={sizes ?? "(min-width: 1200px) 600px, (min-width: 768px) 50vw, 100vw"}
        className="block h-auto w-full bg-surface-2"
      />
    </div>
  );
}
