"use client";

import { CONSENT_KEY } from "@/lib/analytics";
import { buttonClass } from "./Button";

/**
 * Clears the saved cookie choice and reloads, so the consent banner asks again
 * and Google Analytics stops loading until the visitor accepts.
 */
export function ResetConsentButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          localStorage.removeItem(CONSENT_KEY);
        } catch {}
        window.location.reload();
      }}
      className={buttonClass("secondary", className)}
    >
      Reset my cookie choice
    </button>
  );
}
