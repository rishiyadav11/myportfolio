import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ResetConsentButton } from "@/components/ResetConsentButton";
import { TrackedLink } from "@/components/TrackedLink";
import { site, mailtoLink } from "@/content/site";
import { CONSENT_KEY } from "@/lib/analytics";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How rishiyadav.space handles your data under India's DPDP Act 2023: what the contact form collects, consent-based analytics, who receives it and your rights.",
  path: "/privacy",
});

// TODO: Rishi to review this policy (ideally with a lawyer) before launch, and update the date on any change.
const LAST_UPDATED = "15 Oct 2026";

export default function PrivacyPage() {
  const grievanceMail = mailtoLink("Privacy request");
  return (
    <Container className="pt-10 pb-16 md:pt-14 md:pb-24">
      <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
      <p className="eyebrow mb-3">Last updated {LAST_UPDATED}</p>
      <h1 className="text-4xl md:text-5xl">Privacy policy</h1>

      <div className="prose mt-8">
        <p>
          This policy explains what personal data this website collects, why, who it is shared with, and what you can
          do about it. It is written with India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) in mind. If
          anything here is unclear, email me and I&apos;ll explain.
        </p>

        <h2>Who is responsible for your data</h2>
        <p>
          {site.name}, {site.location.label}, is the data fiduciary for this website (rishiyadav.space). That means I
          decide what is collected and how it is used, and I am responsible for protecting it. You can reach me at{" "}
          <a href={grievanceMail}>{site.email}</a>.
        </p>

        <h2>What I collect</h2>
        <ul>
          <li>
            <strong>Contact form.</strong> Your name, email, phone number, business or company name, what you need,
            your budget range and your message. Some fields are optional; share only what you need to get a useful
            reply.
          </li>
          <li>
            <strong>Analytics, only if you accept.</strong> If you click &quot;Accept&quot; on the cookie banner,
            Google Analytics 4 records which pages you visit, roughly where you are (city level), your device and
            browser type, and clicks on links such as WhatsApp, email or the resume download. IP addresses are
            anonymised. If you click &quot;Reject&quot; or ignore the banner, Google Analytics does not load at all.
          </li>
          <li>
            <strong>Server logs.</strong> The hosting provider (Vercel) automatically records technical data for every
            request, such as IP address, browser, the page requested and the time. This is needed to run and secure
            the site.
          </li>
        </ul>
        <p>
          I don&apos;t run advertising, I don&apos;t use tracking pixels from social networks, and I don&apos;t sell or
          rent personal data to anyone.
        </p>

        <h2>Why I use it, and on what basis</h2>
        <ul>
          <li>Contact form data is used only to reply to your enquiry and, if we work together, to run the project.</li>
          <li>Analytics data is used to see which pages are useful and which need improving.</li>
          <li>Server logs are used to keep the site running, fix errors and block abuse.</li>
        </ul>
        <p>
          The legal basis is your consent. You give it by ticking the consent box on the contact form, or by clicking
          &quot;Accept&quot; on the cookie banner. Server logs are processed as a legitimate use needed to provide the
          website you asked to load.
        </p>

        <h2>How long I keep it</h2>
        {/* TODO: Rishi to confirm these retention periods match practice. */}
        <ul>
          <li>
            Enquiries that don&apos;t lead to a project: deleted within 12 months of our last conversation.
          </li>
          <li>Client project correspondence: kept for as long as needed for the project, accounts and tax records.</li>
          {/* TODO: set GA4 data retention to 14 months in the GA admin (default is 2). */}
          <li>Google Analytics data: kept for up to 14 months, then deleted automatically by Google.</li>
          <li>Hosting logs: kept for a short period set by Vercel, then deleted.</li>
        </ul>

        <h2>Who it is shared with</h2>
        <p>Only with the services needed to run this site:</p>
        <ul>
          <li>
            <strong>Resend</strong> delivers contact form messages to my inbox.
          </li>
          <li>
            <strong>Google (Google Analytics 4)</strong> receives analytics data, only if you accepted analytics.
          </li>
          <li>
            <strong>Vercel</strong> hosts the website and processes server logs.
          </li>
        </ul>
        <p>
          These providers may store data on servers outside India. I don&apos;t share your data with anyone else unless
          the law requires it.
        </p>

        <h2>Your rights</h2>
        <p>Under the DPDP Act you can:</p>
        <ul>
          <li>ask what personal data I hold about you and how it has been used (access);</li>
          <li>ask me to correct or complete it (correction);</li>
          <li>ask me to delete it, unless I must keep it by law (erasure);</li>
          <li>withdraw your consent at any time, as easily as you gave it;</li>
          <li>nominate someone to exercise these rights for you if you are unable to;</li>
          <li>raise a grievance with me, and if you&apos;re not satisfied, with the Data Protection Board of India.</li>
        </ul>
        <p>
          {/* TODO: Rishi to confirm these response times. */}
          To use any of these rights, email <a href={grievanceMail}>{site.email}</a>. I&apos;ll reply within 7 days
          and resolve the request within 30 days.
        </p>

        <h2>Withdrawing cookie consent</h2>
        <p>
          Your choice on the cookie banner is saved in your browser under the key <code>{CONSENT_KEY}</code>. To change
          it, use the button below. It clears your choice and reloads the page so the banner asks again. You can also
          clear this site&apos;s data in your browser settings.
        </p>
      </div>
      <div className="mt-6">
        <ResetConsentButton />
      </div>

      <div className="prose mt-10">
        <h2>Grievances and contact</h2>
        <p>
          For any privacy question or complaint, contact {site.name}, {site.location.label}, at{" "}
          <TrackedLink href={grievanceMail} event="email_click">
            {site.email}
          </TrackedLink>
          .
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If I change how data is handled, I&apos;ll update this page and the date at the top. Significant changes will
          also be noted here.
        </p>
      </div>
    </Container>
  );
}
