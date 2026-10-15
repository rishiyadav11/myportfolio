import Link from "next/link";
import { Lock } from "lucide-react";

/**
 * Note about client work that can't be shown publicly (internal dashboards and software).
 * Keep it factual: no client names, counts or metrics unless Rishi confirms them.
 */
export function PrivateWork() {
  return (
    <aside
      aria-labelledby="private-work-title"
      className="mt-16 grid gap-6 rounded-xl border border-line bg-surface p-6 sm:p-8 md:mt-20 md:grid-cols-12 md:gap-10"
    >
      <div className="md:col-span-5">
        <p className="eyebrow flex items-center gap-2">
          <Lock aria-hidden="true" className="size-3.5" /> Not shown here
        </p>
        <h2 id="private-work-title" className="mt-3 text-2xl md:text-3xl">
          Internal dashboards and business software
        </h2>
      </div>
      <div className="space-y-4 text-ink-2 md:col-span-7">
        <p>
          A good part of my work never appears on a public website. These are internal dashboards and software
          that teams use every day behind a login, so I can&apos;t share screenshots or client names.
        </p>
        {/* TODO: Rishi to confirm he's happy to offer walkthroughs on a call. */}
        <p>
          If you&apos;re hiring me for something similar, I&apos;m happy to talk through the problem, how I
          approached it and the stack on a call, without showing any client data.{" "}
          <Link href="/contact" className="font-semibold text-accent-text underline">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
