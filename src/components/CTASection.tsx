import { Calendar, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink, mailtoLink } from "@/content/site";
import { Container } from "./Container";
import { TrackedLink } from "./TrackedLink";
import { Magnetic } from "./motion/Magnetic";

/** Closing call to action used at the bottom of most pages. */
export function CTASection({
  title = "Have a project in mind?",
  text = "Tell me what you need. I'll reply with honest advice, a rough timeline and a price range.",
  whatsappMessage,
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="border-t-[1.5px] border-ink py-20 md:py-28" aria-labelledby="cta-title">
      <Container className="grid gap-10 md:grid-cols-12 md:items-end">
        <div data-reveal className="md:col-span-7">
          <h2 id="cta-title" className="text-4xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-2">{text}</p>
          <p className="mt-3 text-sm text-muted">{site.responseTime}</p>
        </div>
        <div data-reveal className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <Magnetic>
            <TrackedLink href={whatsappLink(whatsappMessage)} event="whatsapp_click" variant="primary" className="min-h-14 px-6">
              <MessageCircle aria-hidden="true" className="size-5" /> WhatsApp me
            </TrackedLink>
          </Magnetic>
          <TrackedLink href={mailtoLink()} event="email_click" variant="secondary" className="min-h-14 px-6">
            <Mail aria-hidden="true" className="size-5" /> Email me
          </TrackedLink>
          {site.bookingUrl && (
            <TrackedLink href={site.bookingUrl} event="booking_click" variant="secondary" className="min-h-14 px-6">
              <Calendar aria-hidden="true" className="size-5" /> Book a call
            </TrackedLink>
          )}
        </div>
      </Container>
    </section>
  );
}
