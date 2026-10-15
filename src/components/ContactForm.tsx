"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, type ReactNode } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { sendContact } from "@/app/contact/actions";
import {
  budgetOptions,
  initialContactState,
  serviceOptions,
  type ContactField,
} from "@/app/contact/form-config";
import { mailtoLink, site, whatsappLink } from "@/content/site";
import { track } from "@/lib/analytics";
import { buttonClass } from "./Button";
import { TrackedLink } from "./TrackedLink";

const fieldOrder: ContactField[] = [
  "name",
  "email",
  "phone",
  "company",
  "service",
  "budget",
  "message",
  "consent",
];

const inputClass =
  "mt-2 block min-h-11 w-full rounded-lg border border-line-strong bg-bg px-3 py-2.5 text-ink placeholder:text-muted aria-[invalid=true]:border-danger";

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/** Contact form backed by the sendContact Server Action. */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialContactState);
  const startedAt = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? (state.values ?? {}) : {};

  useEffect(() => {
    if (state.status === "success") {
      track("form_submit", { service: state.service });
      thanksRef.current?.focus();
    } else if (state.status === "error" && state.fieldErrors) {
      const first = fieldOrder.find((f) => state.fieldErrors?.[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    }
  }, [state]);

  const describedBy = (id: ContactField, hint = false) =>
    [hint ? `${id}-hint` : null, errors[id] ? `${id}-error` : null].filter(Boolean).join(" ") ||
    undefined;

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8" role="status">
        <CheckCircle2 aria-hidden="true" className="size-8 text-success" />
        <h2 ref={thanksRef} tabIndex={-1} className="mt-4 text-2xl md:text-3xl">
          Thank you. Your message is on its way.
        </h2>
        <p className="mt-4 text-ink-2">Here’s what happens next:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-ink-2">
          <li>I read every enquiry myself. {site.responseTime}</li>
          <li>I’ll reply by email with questions, honest advice and a rough timeline.</li>
          <li>If it’s a good fit, we set up a short call and I send a fixed-scope quote.</li>
        </ol>
        <p className="mt-6 text-sm text-muted">
          In a hurry? You can also{" "}
          <TrackedLink
            href={whatsappLink()}
            event="whatsapp_click"
            className="text-accent-text underline"
          >
            message me on WhatsApp
          </TrackedLink>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <div aria-live="polite" role="status">
        {state.status === "error" && (
          <div className="mb-6 rounded-xl border border-danger bg-surface p-4 sm:p-5">
            <p className="font-semibold text-ink">{state.message}</p>
            {state.fallback && (
              <div className="mt-4 flex flex-wrap gap-3">
                <TrackedLink href={mailtoLink()} event="email_click" variant="secondary">
                  <Mail aria-hidden="true" className="size-4" /> Email me directly
                </TrackedLink>
                <TrackedLink href={whatsappLink()} event="whatsapp_click" variant="secondary">
                  <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp me
                </TrackedLink>
              </div>
            )}
          </div>
        )}
      </div>

      <form
        key={state.attempt}
        ref={formRef}
        action={formAction}
        noValidate
        aria-busy={pending}
        className="space-y-6"
      >
        <p className="text-sm text-muted">
          Fields marked <span className="text-danger">*</span> are required.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="name" label="Your name" required error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              defaultValue={values.name}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={describedBy("name")}
              className={inputClass}
            />
          </Field>
          <Field id="email" label="Email" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              maxLength={200}
              defaultValue={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy("email")}
              className={inputClass}
            />
          </Field>
          <Field id="phone" label="Phone or WhatsApp" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={20}
              placeholder="+91"
              defaultValue={values.phone}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy("phone")}
              className={inputClass}
            />
          </Field>
          <Field id="company" label="Business or company" error={errors.company}>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={150}
              defaultValue={values.company}
              aria-invalid={errors.company ? true : undefined}
              aria-describedby={describedBy("company")}
              className={inputClass}
            />
          </Field>
          <Field id="service" label="What do you need?" required error={errors.service}>
            <select
              id="service"
              name="service"
              required
              defaultValue={values.service ?? ""}
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={describedBy("service")}
              className={inputClass}
            >
              <option value="" disabled>
                Choose one
              </option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
          <Field id="budget" label="Budget" error={errors.budget}>
            <select
              id="budget"
              name="budget"
              defaultValue={values.budget ?? ""}
              aria-invalid={errors.budget ? true : undefined}
              aria-describedby={describedBy("budget")}
              className={inputClass}
            >
              <option value="">Choose a range</option>
              {budgetOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field
          id="message"
          label="Tell me about your project"
          required
          hint="What does your business do, what do you need, and is there a deadline? Include your current website if you have one."
          error={errors.message}
        >
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={5000}
            defaultValue={values.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message", true)}
            className={`${inputClass} resize-y`}
          />
        </Field>

        <div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              defaultChecked={values.consent}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={describedBy("consent")}
              className="mt-1 size-5 shrink-0 accent-accent"
            />
            <label htmlFor="consent" className="text-ink-2">
              I’m happy for Rishi to contact me about this enquiry. My details are handled as
              described in the{" "}
              <Link href="/privacy" className="text-accent-text underline">
                privacy policy
              </Link>
              .
              <span className="text-danger" aria-hidden="true">
                {" "}
                *
              </span>
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="mt-2 text-sm font-medium text-danger">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Spam protection: a field people never see, plus the time the form was shown. */}
        <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
          <label htmlFor="website_url">Leave this field empty</label>
          <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <input
          type="hidden"
          name="started_at"
          ref={(el) => {
            if (!el) return;
            startedAt.current ??= Date.now();
            el.value = String(startedAt.current);
          }}
        />

        <button
          type="submit"
          disabled={pending}
          className={buttonClass("primary", "w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto")}
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
