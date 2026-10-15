import { process as defaultSteps } from "@/content/services";

type Step = { step: string; time: string; text: string };

export function ProcessSteps({ steps = defaultSteps }: { steps?: Step[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.step} className="flex flex-col bg-surface p-6">
          <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-xl">{s.step}</h3>
          <p className="eyebrow mt-1">{s.time}</p>
          <p className="mt-3 text-ink-2">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
