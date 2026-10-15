"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

/** Fires case_study_view once per mount. Renders nothing. */
export function CaseStudyView({ slug, client }: { slug: string; client: string }) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    track("case_study_view", { project_slug: slug, project_name: client });
  }, [slug, client]);
  return null;
}
