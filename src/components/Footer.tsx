import Link from "next/link";
import { localPages, mailtoLink, nav, site, whatsappLink } from "@/content/site";
import { Container } from "./Container";
import { TrackedLink } from "./TrackedLink";

const linkCls = "inline-flex min-h-11 items-center text-ink-2 hover:text-ink hover:underline";

export function Footer() {
  const year = new Date().getFullYear();
  const pages = [...nav, { href: "/website-audit", label: "Website audit" }, ...localPages];
  return (
    <footer className="mt-auto overflow-hidden border-t-[1.5px] border-ink bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-display text-xl text-ink">Rishi Yadav</p>
          <p className="mt-3 max-w-sm text-ink-2">{site.shortBio}</p>
          <p className="mt-4 text-sm text-muted">{site.location.label}</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow mb-3 font-mono">Contact</h2>
          <ul className="text-[0.9375rem]">
            <li>
              <TrackedLink href={mailtoLink()} event="email_click" className={linkCls}>
                {site.email}
              </TrackedLink>
            </li>
            <li>
              <TrackedLink href={whatsappLink()} event="whatsapp_click" className={linkCls}>
                WhatsApp {site.phone.display}
              </TrackedLink>
            </li>
            <li>
              <a href={site.social.linkedin} className={linkCls} rel="me noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.github} className={linkCls} rel="me noopener noreferrer" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.social.x} className={linkCls} rel="me noopener noreferrer" target="_blank">
                X
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h2 className="eyebrow mb-3 font-mono">Pages</h2>
          <ul className="text-[0.9375rem]">
            {pages.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Rishi Yadav. Narnaul, Haryana, India.</p>
        <p className="flex gap-4">
          <Link href="/privacy" className={linkCls}>
            Privacy
          </Link>
          <Link href="/resume" className={linkCls}>
            Resume
          </Link>
        </p>
      </Container>
      <div aria-hidden="true" className="overflow-hidden">
        <p className="-mb-[0.18em] text-center font-display text-[18.5vw] leading-[0.8] font-extrabold tracking-[-0.06em] text-ink select-none">
          Rishi Yadav
        </p>
      </div>
    </footer>
  );
}
