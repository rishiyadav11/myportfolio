import { Calendar, Clock, Mail, MapPin, MessageCircle, Phone, Reply } from "lucide-react";
import { mailtoLink, site, telLink, whatsappLink } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell me about your website, web app or audit. Use the form, email or WhatsApp Rishi Yadav in Narnaul, Haryana. I reply within one working day.",
  path: "/contact",
});

const linkClass =
  "inline-flex min-h-11 items-center font-semibold text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink";

export default function ContactPage() {
  return (
    <Container className="pt-10 pb-16 md:pt-16 md:pb-24">
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <header className="max-w-2xl">
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="text-4xl md:text-5xl">Let’s talk about your project</h1>
        <p className="mt-5 text-lg text-ink-2">
          Tell me what you need, even if it’s rough. I’ll reply with honest advice, a rough
          timeline and a price range. No sales calls, no pressure.
        </p>
      </header>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
        <section aria-labelledby="form-title" className="md:col-span-7">
          <h2 id="form-title" className="sr-only">
            Send me a message
          </h2>
          <ContactForm />
        </section>

        <aside aria-labelledby="direct-title" className="md:col-span-5">
          <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <h2 id="direct-title" className="text-2xl">
              Prefer to reach me directly?
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-3 size-5 shrink-0 text-accent-text" />
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <TrackedLink href={mailtoLink()} event="email_click" className={linkClass}>
                    {site.email}
                  </TrackedLink>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle aria-hidden="true" className="mt-3 size-5 shrink-0 text-accent-text" />
                <div>
                  <p className="text-sm text-muted">WhatsApp</p>
                  <TrackedLink href={whatsappLink()} event="whatsapp_click" className={linkClass}>
                    {site.phone.display}
                  </TrackedLink>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-3 size-5 shrink-0 text-accent-text" />
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <TrackedLink href={telLink} event="call_click" className={linkClass}>
                    {site.phone.display}
                  </TrackedLink>
                </div>
              </li>
              {site.bookingUrl && (
                <li className="flex gap-3">
                  <Calendar aria-hidden="true" className="mt-3 size-5 shrink-0 text-accent-text" />
                  <div>
                    <p className="text-sm text-muted">Video call</p>
                    <TrackedLink href={site.bookingUrl} event="booking_click" className={linkClass}>
                      Book a 20-minute call
                    </TrackedLink>
                  </div>
                </li>
              )}
            </ul>

            <ul className="mt-8 space-y-4 border-t border-line pt-6 text-ink-2">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-muted" />
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p>Narnaul, Haryana. Working with clients across Delhi NCR and India.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-muted" />
                <div>
                  <p className="text-sm text-muted">Working hours</p>
                  <p>{site.workingHours}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Reply aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-muted" />
                <div>
                  <p className="text-sm text-muted">Response time</p>
                  <p>{site.responseTime}</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Container>
  );
}
