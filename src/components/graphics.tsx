/**
 * Hand-made SVG graphics used around the site. All decorative (aria-hidden),
 * coloured with currentColor so they follow the theme. Lines that "draw in" use
 * pathLength={1} plus the .draw / .scribble classes in globals.css.
 */
import type { SVGProps } from "react";

type SvgProps = SVGProps<SVGSVGElement>;

/** Loose hand-drawn underline that draws itself in. */
export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      fill="none"
      className={`scribble pointer-events-none ${className}`}
    >
      <path
        d="M3 15 C 60 6, 120 4, 180 9 S 270 16, 297 7 M 40 20 C 110 13, 190 12, 260 17"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

/** Circular text badge that rotates slowly, with an arrow in the middle. Position it with className. */
export function RotatingBadge({
  text = "Websites · Web apps · AI tools · Narnaul · India · ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="relative size-full">
        <svg viewBox="0 0 120 120" className="spin-slow size-full">
          <defs>
            <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <circle cx="60" cy="60" r="59" className="fill-accent" />
          <text className="fill-accent-ink font-sans text-[10.5px] font-bold tracking-[0.12em] uppercase">
            <textPath href="#badge-circle">{text}</textPath>
          </text>
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="absolute inset-0 m-auto size-[34%] text-accent-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </div>
    </div>
  );
}

/** Large outlined eight-point star; pair with data-spin to rotate on scroll. */
export function Star({ className = "", ...rest }: SvgProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" fill="none" className={className} {...rest}>
      <path
        d="M50 2 L58 36 L92 22 L66 48 L98 58 L62 62 L72 96 L50 70 L28 96 L38 62 L2 58 L34 48 L8 22 L42 36 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small four-point sparkle. */
export function Sparkle({ className = "", ...rest }: SvgProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} {...rest}>
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" fill="currentColor" />
    </svg>
  );
}

/* ---------- Contour lines (topographic rings) ---------- */

// Deterministic pseudo-random so server and client render the same paths.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function contourPaths(rings: number, seed: number) {
  const rand = seeded(seed);
  const waves = Array.from({ length: 3 }, () => ({
    k: 2 + Math.floor(rand() * 4),
    a: 0.04 + rand() * 0.07,
    p: rand() * Math.PI * 2,
  }));
  const paths: string[] = [];
  for (let i = 0; i < rings; i++) {
    const r = 18 + i * (78 / rings);
    const pts: string[] = [];
    const steps = 96;
    for (let j = 0; j <= steps; j++) {
      const t = (j / steps) * Math.PI * 2;
      let f = 1;
      for (const w of waves) f += w.a * Math.sin(w.k * t + w.p + i * 0.18);
      const x = 100 + Math.cos(t) * r * f;
      const y = 100 + Math.sin(t) * r * f * 0.92;
      pts.push(`${j ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`);
    }
    paths.push(pts.join("") + "Z");
  }
  return paths;
}

/**
 * Organic contour rings. Generated, so every seed gives a new "map".
 * They fade in rather than draw in: these SVGs are large, and animating stroke
 * offsets repaints the whole area every frame on slow phones.
 */
export function Contours({ rings = 9, seed = 7, className = "", ...rest }: SvgProps & { rings?: number; seed?: number }) {
  const paths = contourPaths(rings, seed);
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" fill="none" className={`fade-in ${className}`} {...rest}>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={i === rings - 4 ? 1.1 : 0.5} />
      ))}
    </svg>
  );
}

/** Hand-drawn curly arrow, pointing right-down. */
export function CurlyArrow({ className = "", ...rest }: SvgProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 110" fill="none" className={className} {...rest}>
      <path
        className="draw"
        pathLength={1}
        d="M6 18 C 40 2, 78 10, 82 38 C 86 62, 52 70, 50 52 C 48 34, 90 30, 112 52 C 126 66, 134 80, 140 96"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className="draw"
        pathLength={1}
        style={{ "--i": 6 } as React.CSSProperties}
        d="M126 90 L141 99 L148 82"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Gentle hand-drawn connector between process steps. */
export function StepArrow({ className = "", ...rest }: SvgProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 40" fill="none" className={className} {...rest}>
      <path d="M4 26 C 30 6, 70 4, 104 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 5" />
      <path d="M96 12 L106 21 L94 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Wavy hand-drawn divider line. */
export function Squiggle({ className = "", ...rest }: SvgProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 24" preserveAspectRatio="none" fill="none" className={className} {...rest}>
      <path
        d="M0 12 Q 25 2 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12 T 350 12 T 400 12 T 450 12 T 500 12 T 550 12 T 600 12 T 650 12 T 700 12 T 750 12 T 800 12 T 850 12 T 900 12 T 950 12 T 1000 12 T 1050 12 T 1100 12 T 1150 12 T 1200 12"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ---------- Service illustrations (line drawings, animate on group hover) ---------- */

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Browser window with a layout sketched inside. */
function IlloWebsite() {
  return (
    <>
      <rect x="6" y="10" width="68" height="50" rx="4" {...line} />
      <path d="M6 20h68" {...line} />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
      <circle cx="17" cy="15" r="1.4" fill="currentColor" />
      <path d="M14 30h28M14 36h20" {...line} />
      <rect x="14" y="43" width="16" height="7" rx="2" className="fill-accent" stroke="none" />
      <rect
        x="50"
        y="28"
        width="17"
        height="24"
        rx="2"
        {...line}
        className="origin-[58px_40px] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6"
      />
    </>
  );
}

/** Dashboard with bars that grow on hover. */
function IlloApp() {
  return (
    <>
      <rect x="6" y="10" width="68" height="50" rx="4" {...line} />
      <path d="M22 10v50" {...line} />
      <path d="M10 18h8M10 24h8M10 30h8" {...line} />
      {[
        [30, 28],
        [40, 18],
        [50, 34],
        [60, 24],
      ].map(([x, h], i) => (
        <rect
          key={x}
          x={x}
          y={52 - h}
          width="6"
          height={h}
          rx="1"
          className={`origin-bottom transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-110 ${i === 1 ? "fill-accent" : "fill-current opacity-25"}`}
          style={{ transformBox: "fill-box", transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </>
  );
}

/** Magnifier over a speed line. */
function IlloAudit() {
  return (
    <>
      <path d="M6 48 L20 48 L26 36 L34 56 L42 26 L48 48 L74 48" {...line} />
      <g className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-x-2 group-hover:-translate-y-1">
        <circle cx="52" cy="26" r="13" {...line} className="fill-bg" />
        <circle cx="52" cy="26" r="4" className="fill-accent" />
        <path d="M61.5 35.5 L71 45" {...line} strokeWidth={3} />
      </g>
    </>
  );
}

/** Calendar with a check mark and a leaf for "care". */
function IlloCare() {
  return (
    <>
      <rect x="10" y="14" width="46" height="44" rx="4" {...line} />
      <path d="M10 24h46M20 9v9M46 9v9" {...line} />
      <path d="M22 41 l7 7 l13 -15" {...line} strokeWidth={2.4} className="text-accent" />
      <path
        d="M58 56 C 58 40, 70 34, 76 34 C 76 48, 68 56, 58 56 Z M58 56 L70 42"
        {...line}
        className="origin-[58px_56px] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-12"
      />
    </>
  );
}

const illos = { websites: IlloWebsite, "web-apps": IlloApp, audits: IlloAudit, care: IlloCare } as const;

export function ServiceIllo({ slug, className = "" }: { slug: string; className?: string }) {
  const Illo = illos[slug as keyof typeof illos];
  if (!Illo) return null;
  return (
    <svg aria-hidden="true" viewBox="0 0 80 70" className={className}>
      <Illo />
    </svg>
  );
}
