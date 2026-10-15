# rishiyadav.space

Personal site of Rishi Yadav, full-stack developer and web consultant in Narnaul, Haryana. It serves two audiences: business clients who need a website, and recruiters hiring an engineer.

Next.js 16 (App Router, fully static) · TypeScript · Tailwind CSS v4 with CSS-variable tokens · MDX · Lucide icons. Deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run lint
npm run format     # Prettier
```

Copy `.env.example` to `.env.local` and fill in the values. The contact form needs `RESEND_API_KEY`. Analytics and the cookie banner only appear once `NEXT_PUBLIC_GA_ID` is set.

## Where things live

| What | File |
| --- | --- |
| Name, email, phone, booking link, socials, availability | `src/content/site.ts` |
| Case studies | `src/content/projects.ts` + `public/work/` |
| Services and prices | `src/content/services.ts` |
| Articles | `src/content/posts.ts` + `src/content/writing/*.mdx` |
| Design tokens (colours, fonts, type scale) | `src/app/globals.css` (preview at `/styleguide`) |
| SEO helpers and JSON-LD | `src/lib/seo.ts`, `src/lib/schema.ts` |
| OG image template | `src/lib/og.tsx` |
| Security headers, CSP, redirects | `next.config.ts` |

Fields set to `null` in the content files are hidden on the site. Search the repo for `TODO` to see what still needs real information.

## Add a project

1. Capture screenshots of the live site: desktop at 1440x900 and mobile at 390x844 (@2x, saved as 780x1688). Save as WebP to `public/work/<slug>-desktop.webp` and `public/work/<slug>-mobile.webp`.
2. Add an object to the `projects` array in `src/content/projects.ts`. Only fill `results`, `quote`, `role` and `duration` with real, confirmed information; empty sections are hidden.
3. Set `featured: true` to show it on the home page, and `region` to list it on a local page.

The case-study page, OG image, sitemap entry and CreativeWork schema are generated automatically.

## Add an article

1. Add an entry to `posts` in `src/content/posts.ts` (slug, title, 140–160 character description, ISO date, reading time).
2. Create `src/content/writing/<slug>.mdx` with the article body (start at `##` headings; the page renders the title).

## Add a local page

Only add a city page when there is real work and something genuinely different to say about it. Thin city-swapped pages hurt rankings.

1. Copy one of the `src/app/website-developer-*` folders and rewrite the content from scratch.
2. Add the path to `localPages` in `src/content/site.ts` (footer links) and to `staticPages` in `src/app/sitemap.ts`.
3. Keep `professionalServiceSchema` and the FAQ on the page.

## Off-site SEO checklist

These steps are done outside this repo. Together they matter as much as the site itself for ranking on "Rishi Yadav" and "website developer in Narnaul".

- [ ] **Google Business Profile**: create and verify it as a service-area business in Narnaul. Hide the street address if working from home. Category "Website designer". Add services, photos of real work and the site link. Ask every past client for a Google review.
- [ ] **NAP consistency**: use the identical name, phone and website on Google Business Profile, Justdial, Sulekha, IndiaMART, Bing Places, Clutch, GoodFirms, LinkedIn and a Facebook page.
- [ ] **Profiles**: use the same name, photo, headline and link to rishiyadav.space on LinkedIn, GitHub and X.
- [ ] **Client credits**: with permission, add a "Website by Rishi Yadav" footer link on client sites you built.
- [ ] **Search consoles**: add the site to Google Search Console and Bing Webmaster Tools, submit `https://rishiyadav.space/sitemap.xml`, and request indexing for the home, local and case-study pages.
- [ ] **Writing**: publish one useful article a month and share it on LinkedIn.
- [ ] **Mentions**: get listed or mentioned in local Narnaul and Haryana business directories, college alumni pages, podcasts and guest posts.

## Accessibility and performance targets

- WCAG 2.1 AA in both themes, one H1 per page, visible focus, skip link, 44px tap targets.
- Lighthouse mobile ≥ 95 performance, 100 SEO, ≥ 95 accessibility and best practices.
- LCP < 2.0s, CLS < 0.05, INP < 200ms. Home page under 1 MB transferred.
