"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";
import { CONSENT_KEY, GA_ID } from "@/lib/analytics";

type Consent = "granted" | "denied" | null;

const listeners = new Set<() => void>();
function read(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}
function write(v: Exclude<Consent, null>) {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {}
  listeners.forEach((l) => l());
}
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/**
 * Minimal accept/reject banner. GA4 loads only after "Accept".
 * Renders nothing when NEXT_PUBLIC_GA_ID isn't set (no tracking, nothing to consent to).
 */
export function CookieConsent() {
  // "unset" on the server so the banner never flashes for people who already chose.
  const consent = useSyncExternalStore(subscribe, read, () => "unset" as const);
  if (!GA_ID) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === null && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-50 max-w-md rounded-xl border border-line bg-surface p-4 shadow-card sm:left-auto sm:right-4"
        >
          <p className="text-sm text-ink-2">
            I use Google Analytics to see which pages are useful. No ads, no selling data.{" "}
            <Link href="/privacy" className="underline">
              Privacy policy
            </Link>
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => write("granted")}
              className="btn btn-primary min-h-11 py-2 text-sm"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => write("denied")}
              className="btn btn-secondary min-h-11 py-2 text-sm"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
}
