"use server";

import { site } from "@/content/site";
import {
  budgetOptions,
  MIN_FILL_MS,
  serviceOptions,
  type ContactField,
  type ContactState,
  type ContactValues,
} from "./form-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,19}$/;

const str = (fd: FormData, key: string) => {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
};

export async function sendContact(prev: ContactState, formData: FormData): Promise<ContactState> {
  const attempt = prev.attempt + 1;

  const values: ContactValues = {
    name: str(formData, "name"),
    email: str(formData, "email"),
    phone: str(formData, "phone"),
    company: str(formData, "company"),
    service: str(formData, "service"),
    budget: str(formData, "budget"),
    message: str(formData, "message"),
    consent: formData.get("consent") === "on",
  };

  // Spam checks. Honeypot hits get a fake success so bots learn nothing.
  if (str(formData, "website_url")) {
    return { status: "success", attempt, service: values.service ?? "" };
  }
  const startedAt = Number(str(formData, "started_at"));
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < MIN_FILL_MS) {
    return {
      status: "error",
      attempt,
      values,
      message: "That was very quick. Please wait a few seconds and send the form again.",
    };
  }

  const errors: Partial<Record<ContactField, string>> = {};
  const { name = "", email = "", phone = "", company = "", service = "", budget = "", message = "" } =
    values;

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Please keep your name under 100 characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 200 || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address, like name@example.com.";

  if (phone && !PHONE_RE.test(phone))
    errors.phone = "Please enter a valid phone number, like +91 98765 43210.";

  if (company.length > 150) errors.company = "Please keep this under 150 characters.";

  if (!(serviceOptions as readonly string[]).includes(service))
    errors.service = "Please choose what you need.";

  if (budget && !(budgetOptions as readonly string[]).includes(budget))
    errors.budget = "Please choose a budget from the list.";

  if (message.length < 10)
    errors.message = "Please tell me a little about your project (at least 10 characters).";
  else if (message.length > 5000) errors.message = "Please keep your message under 5,000 characters.";

  if (!values.consent) errors.consent = "Please confirm you're happy for me to contact you.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      attempt,
      values,
      fieldErrors: errors,
      message: "Please fix the highlighted fields and send the form again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; enquiry could not be sent.");
    return {
      status: "error",
      attempt,
      values,
      fallback: true,
      message:
        "Sorry, the form isn't working right now. Please email or WhatsApp me directly and I'll reply within one working day.",
    };
  }

  const text = [
    "New enquiry from rishiyadav.space",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not given"}`,
    `Business / company: ${company || "Not given"}`,
    `What they need: ${service}`,
    `Budget: ${budget || "Not given"}`,
    `Consent to contact: yes`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? site.email],
        reply_to: email,
        subject: `New enquiry: ${service} from ${name}`.slice(0, 200),
        text,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      // Log status only, never the visitor's message.
      console.error(`[contact] Resend responded with ${res.status}.`);
      throw new Error("send failed");
    }
  } catch {
    return {
      status: "error",
      attempt,
      values,
      fallback: true,
      message:
        "Sorry, your message couldn't be sent. Please try again in a minute, or email or WhatsApp me directly.",
    };
  }

  // Optional copy to a Google Sheet. Failures here never fail the submission.
  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (sheetUrl) {
    try {
      const res = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          name,
          email,
          phone,
          company,
          service,
          budget,
          message,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      });
      if (!res.ok) console.error(`[contact] Sheet webhook responded with ${res.status}.`);
    } catch {
      console.error("[contact] Sheet webhook request failed.");
    }
  }

  return { status: "success", attempt, service };
}
