/** Shared between the contact form (client) and its Server Action. */
export const serviceOptions = [
  "New website",
  "Website redesign",
  "Web app or dashboard",
  "Website audit",
  "Care plan / maintenance",
  "Something else",
] as const;

export const budgetOptions = ["₹30k–60k", "₹60k–1.5L", "₹1.5L–4L", "₹4L+", "Not sure"] as const;

/** Submissions faster than this are treated as bots. */
export const MIN_FILL_MS = 3000;

export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "service"
  | "budget"
  | "message"
  | "consent";

export type ContactValues = Partial<Record<Exclude<ContactField, "consent">, string>> & {
  consent?: boolean;
};

export type ContactState =
  | { status: "idle"; attempt: number }
  | { status: "success"; attempt: number; service: string }
  | {
      status: "error";
      attempt: number;
      message: string;
      fieldErrors?: Partial<Record<ContactField, string>>;
      values?: ContactValues;
      /** True when the problem is on our side; show email/WhatsApp fallback. */
      fallback?: boolean;
    };

export const initialContactState: ContactState = { status: "idle", attempt: 0 };
