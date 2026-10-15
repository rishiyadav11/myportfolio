/**
 * GA4 event helper. Events are no-ops until the visitor accepts analytics
 * cookies (CookieConsent loads gtag only after consent).
 */
export type AnalyticsEvent =
  | "whatsapp_click"
  | "email_click"
  | "call_click"
  | "booking_click"
  | "form_submit"
  | "resume_download"
  | "case_study_view";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

export const CONSENT_KEY = "ry-consent";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-C5HJTTMSN6";
