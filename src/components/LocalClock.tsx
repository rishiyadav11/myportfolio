"use client";

import { useSyncExternalStore } from "react";

const fmt = () =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date());

// Re-render once a minute.
const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 30_000);
  return () => clearInterval(id);
};

/** Current time in Narnaul (IST). Renders a static label on the server to avoid a mismatch. */
export function LocalClock({ className = "" }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, fmt, () => null);
  return (
    <span className={className}>
      Narnaul{time ? `, ${time} IST` : ", India"}
    </span>
  );
}
