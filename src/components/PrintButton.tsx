"use client";

import { Printer } from "lucide-react";
import { buttonClass } from "./Button";

/** Opens the browser print dialog (the resume page has print styles). */
export function PrintButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.print()} className={buttonClass("secondary", className)}>
      <Printer aria-hidden="true" className="size-4" />
      Print
    </button>
  );
}
