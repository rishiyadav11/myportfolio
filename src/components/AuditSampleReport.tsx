/**
 * Anonymised sample of the audit report format.
 * These findings are typical issues used to show the layout of a report.
 * They are NOT measurements from a specific client's website.
 */

type Severity = "High" | "Medium" | "Low";

type Finding = {
  severity: Severity;
  area: string;
  finding: string;
  fix: string;
  effort: string;
};

const findings: Finding[] = [
  {
    severity: "High",
    area: "Speed",
    finding: "Hero image is 2.4 MB and served as an uncompressed JPEG, even on phones.",
    fix: "Resize to the size it is shown at, convert to WebP or AVIF, and lazy-load images below the fold.",
    effort: "1–2 hours",
  },
  {
    severity: "High",
    area: "Forms",
    finding: "Contact form shows a thank-you message, but test enquiries never reached the inbox.",
    fix: "Send form emails through a proper email service with SPF and DKIM set up. Add a monthly test enquiry to the checklist.",
    effort: "Half a day",
  },
  {
    severity: "High",
    area: "Compliance",
    finding: "No privacy policy, although the form collects name, phone number and email.",
    fix: "Publish a privacy policy that matches what you actually collect and link it beside the form. Review it with your adviser against the DPDP Act 2023.",
    effort: "Half a day, plus your review",
  },
  {
    severity: "Medium",
    area: "SEO",
    finding: "Most pages share the same title and meta description as the home page.",
    fix: "Write a unique title and description for each page, based on what people search for.",
    effort: "2–3 hours",
  },
  {
    severity: "Medium",
    area: "Speed",
    finding: "Page builder and plugins load scripts and fonts on every page, including ones the page does not use.",
    fix: "Remove unused plugins, host fonts locally and defer scripts that are not needed for the first view.",
    effort: "1 day",
  },
  {
    severity: "Medium",
    area: "Mobile",
    finding: "Phone number is plain text, so it cannot be tapped to call. Menu button is too small to tap easily.",
    fix: "Use tap-to-call links and make buttons at least 44 px tall.",
    effort: "1 hour",
  },
  {
    severity: "Medium",
    area: "Security",
    finding: "Basic security headers are missing (Content-Security-Policy, HSTS, X-Content-Type-Options).",
    fix: "Add the headers at the hosting or CDN level, then check that forms and analytics still work.",
    effort: "1–2 hours",
  },
  {
    severity: "Low",
    area: "Compliance",
    finding: "Analytics loads before the visitor has made a cookie choice.",
    fix: "Load analytics only after consent and add a short, clear cookie notice.",
    effort: "2–3 hours",
  },
  {
    severity: "Low",
    area: "Competitors",
    finding: "Two nearby competitors show timings and fees as text on the page. This site keeps them inside a PDF.",
    fix: "Move key information onto the page as text so it loads fast and can be found in search.",
    effort: "2 hours",
  },
];

const severityStyle: Record<Severity, string> = {
  High: "text-danger border-danger/40",
  Medium: "text-warning border-warning/40",
  Low: "text-muted border-line-strong",
};

function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide ${severityStyle[severity]}`}
    >
      {severity}
    </span>
  );
}

export function AuditSampleReport() {
  const counts = (["High", "Medium", "Low"] as Severity[]).map((s) => ({
    severity: s,
    count: findings.filter((f) => f.severity === s).length,
  }));

  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
      <div className="flex flex-col gap-4 border-b border-line bg-surface-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div>
          <p className="eyebrow">Sample report (anonymised)</p>
          <p className="mt-1 font-display text-xl text-ink">Website audit: summary of findings</p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Findings by severity">
          {counts.map((c) => (
            <li key={c.severity} className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-sm">
              <SeverityBadge severity={c.severity} />
              <span className="font-semibold text-ink">{c.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left text-[0.9375rem]">
          <caption className="sr-only">Sample audit findings with severity, area, finding, fix and effort</caption>
          <thead>
            <tr className="border-b border-line">
              {["Severity", "Area", "Finding", "Fix", "Effort"].map((h) => (
                <th key={h} scope="col" className="eyebrow px-5 py-3 font-normal first:pl-8 last:pr-8">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {findings.map((f) => (
              <tr key={f.finding} className="align-top">
                <td className="py-4 pr-5 pl-8">
                  <SeverityBadge severity={f.severity} />
                </td>
                <td className="px-5 py-4 font-semibold whitespace-nowrap text-ink">{f.area}</td>
                <td className="px-5 py-4 text-ink-2">{f.finding}</td>
                <td className="px-5 py-4 text-ink-2">{f.fix}</td>
                <td className="py-4 pr-8 pl-5 font-mono text-sm text-ink-2">{f.effort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile list */}
      <ol className="divide-y divide-line md:hidden">
        {findings.map((f) => (
          <li key={f.finding} className="px-5 py-5">
            <div className="flex items-center gap-3">
              <SeverityBadge severity={f.severity} />
              <span className="font-semibold text-ink">{f.area}</span>
              <span className="ml-auto font-mono text-xs text-muted">{f.effort}</span>
            </div>
            <p className="mt-3 text-ink-2">{f.finding}</p>
            <p className="mt-2 text-ink-2">
              <span className="font-semibold text-ink">Fix: </span>
              {f.fix}
            </p>
          </li>
        ))}
      </ol>

      <figcaption className="border-t border-line px-5 py-4 text-sm text-muted md:px-8">
        Illustrative of the report format. These are typical issues found on small business websites, not
        measurements from a specific client. A real report also includes screenshots, mobile and desktop speed
        scores with the date tested, and notes for each page.
      </figcaption>
    </figure>
  );
}
