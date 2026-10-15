/**
 * FAQ copy for the services, audit and local pages.
 * Answers are plain text (they also go into FAQPage JSON-LD).
 * No rupee figures here: prices live in services.ts and are still TODO.
 */
import type { FaqItem } from "@/components/FAQ";

export const workWithMeFaqs: FaqItem[] = [
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages, the features you need and how much of the content is ready. After a short call I send a written scope with a fixed quote, so the price only changes if the scope changes, and I tell you before that happens. Where a starting price is set, you will see it on the service cards above.",
  },
  {
    q: "How long will it take?",
    a: "A business website usually takes 2 to 4 weeks from the first call to launch. Web apps and dashboards take 4 to 10 weeks depending on what they need to do. The biggest cause of delay is waiting for content and photos, so having those ready helps more than anything else.",
  },
  {
    q: "Where will my website be hosted, and who pays for it?",
    a: "I set up hosting on a reliable provider that suits your site, in an account that belongs to you. The provider bills you directly for hosting and the domain, so you are never dependent on me to keep the site online. I explain the running costs in the quote before you commit.",
  },
  {
    q: "Who owns the code and the domain?",
    a: "You do. Once the project is paid for, the code, the design files, the domain and the hosting account are yours. I hand over the repository and all logins, and you can take the site to another developer at any time.",
  },
  {
    q: "What happens after launch? Who maintains the site?",
    a: "You can update simple things yourself if we build that in, or take a monthly care plan where I handle updates, backups, uptime checks and small changes. The care plan can be cancelled any time. If you prefer, you can also hand the site to your own team with the handover guide.",
  },
  {
    q: "Should I choose WordPress or Next.js?",
    a: "WordPress makes sense if your team will edit lots of pages every week and wants plugins for everything. Next.js makes sense if you want a fast, secure site with custom features and fewer things to keep updated. I work with both, and I also migrate slow WordPress sites to Next.js. I will recommend one on our first call and explain why.",
  },
  {
    q: "Is SEO included?",
    a: "Basic on-page SEO is included in every website: clear page titles and descriptions, a sitemap, structured data, fast loading, mobile layout and Google Search Console setup. Ongoing SEO campaigns, link building and regular blog writing are not included unless we agree and quote them separately.",
  },
  {
    // TODO(Rishi): confirm payment terms before publishing.
    q: "What are the payment terms?",
    a: "Usually 50% upfront to book the project and 50% on launch. For larger web apps the payment is split across agreed milestones. The terms are written into the quote, so there are no surprises.",
  },
  {
    // TODO(Rishi): confirm the number of revision rounds.
    q: "How many revisions do I get?",
    a: "Usually two rounds of changes on the design, plus small corrections during the build. You review everything on a private preview link on your own phone. If you want something new that was not in the agreed scope, I tell you the extra cost and time before starting it.",
  },
  {
    // TODO(Rishi): confirm the post-launch fix period.
    q: "What support do I get after launch?",
    a: "If something I built does not work as agreed, I fix it. That is part of the job, not an extra. For the first few weeks after launch I keep an eye on forms, speed and Search Console with you. After that, ongoing changes come under a care plan or are quoted as small jobs.",
  },
];

export const auditFaqs: FaqItem[] = [
  {
    q: "Do you need my website login for the audit?",
    a: "No, most of the audit works from the outside, the same way Google and your visitors see the site. Read-only access to Google Search Console or Analytics helps if you have it, but it is optional.",
  },
  {
    q: "Will the audit change anything on my website?",
    a: "No. The audit only looks and tests. Nothing on your live site is changed. Where I test a contact form, I tell you first so you know a test enquiry is coming.",
  },
  {
    q: "Is the compliance check legal advice?",
    a: "No. I check basic hygiene, such as whether you have a privacy policy, a cookie notice and the disclosure pages your sector usually expects. I point out gaps, but for legal wording you should speak to your lawyer or compliance adviser.",
  },
  {
    q: "Can you fix the issues you find?",
    a: "Yes, if you want me to. Each finding comes with an effort estimate, so you can give the list to your current developer, fix the simple items yourself, or ask me for a quote. There is no obligation either way.",
  },
  {
    q: "My site is on WordPress, Wix or Shopify. Can you still audit it?",
    a: "Yes. The audit covers what visitors and search engines experience, which applies to any platform. The fix list is written for your platform, so the suggestions are practical for it.",
  },
];

export const narnaulFaqs: FaqItem[] = [
  {
    q: "Can we meet in person in Narnaul?",
    a: "Yes. I am based in Narnaul, so I can come to your clinic, institute, shop or hotel at a time that suits you, including after OPD hours or after the evening batch. Most of the work after the first meeting happens over WhatsApp and calls, with another meeting at launch.",
  },
  {
    q: "Do I really need a website if I already have a Google listing?",
    a: "Not always. A small shop with walk-in customers can do well with a complete Google Business Profile and a WhatsApp number. A website starts to matter when people compare options before visiting: patients choosing a doctor, parents choosing a coaching institute, families booking a venue. If you do not need one yet, I will tell you.",
  },
  {
    q: "Can my website be in Hindi?",
    a: "Yes. I can build pages in Hindi, English or both. A bilingual site takes a little longer because every page has two versions, but it often makes sense for clinics and coaching institutes whose visitors are more comfortable in Hindi.",
  },
  {
    q: "Someone made our website years ago and we have no login. Can you help?",
    a: "This is common. First we find out who holds the domain and hosting, usually from the domain registrar records and old emails or invoices. In most cases access can be recovered and moved into your name. Then we decide whether to fix the old site or rebuild it.",
  },
  {
    q: "Will my website show up when people search for my business in Narnaul?",
    a: "I set up the basics that help: correct business name, address and phone on every page, local structured data, a fast mobile site and Google Search Console. Your Google Business Profile and reviews matter a lot for local searches too, and those are best managed by you or your staff. I cannot promise a ranking, and you should be wary of anyone who does.",
  },
];

export const haryanaFaqs: FaqItem[] = [
  {
    q: "Do you visit businesses in Gurugram, Rohtak or Jhajjar?",
    a: "Yes, when a meeting will genuinely help, such as the first workshop for a web app or a launch walkthrough with your staff. For a typical website, video calls work well and save you the travel cost. Any travel is agreed and quoted before the project starts.",
  },
  {
    q: "Is a developer from Narnaul cheaper than a Gurugram agency?",
    a: "Often, yes, mainly because you are not paying for an office, account managers and a sales team. But price should not be the only reason to choose. Compare what is included, who does the work and what happens after launch.",
  },
  {
    q: "Can you work with our existing IT person or vendor?",
    a: "Yes. Many businesses have someone who handles computers, email or billing software. I can work alongside them, share access properly and leave them clear notes, so nothing breaks when the project ends.",
  },
  {
    q: "Do you only work with businesses in Haryana?",
    a: "No. Most of my work is remote, so I work with businesses across India. Haryana clients simply have the option of meeting in person more easily.",
  },
  {
    q: "We need a website before admission season or the wedding season. Is that possible?",
    a: "Usually, if we start early enough. A focused website takes 2 to 4 weeks once content is ready. Tell me your deadline on the first call and I will say honestly whether it is realistic, and what we could launch first if time is short.",
  },
];

export const delhiFaqs: FaqItem[] = [
  {
    q: "Will we ever meet in person?",
    a: "If it helps, yes. A kickoff meeting in Gurugram, Delhi or Noida can be useful for a larger web app. For most websites, video calls and a shared preview link work just as well and keep the project moving faster.",
  },
  {
    // TODO(Rishi): confirm you are happy to sign NDAs by default.
    q: "Can you sign an NDA and work with our compliance team?",
    a: "Yes. I am happy to sign a reasonable NDA before we discuss details. For regulated businesses, such as investment advisers or clinics, I can share the page plan and wording with your compliance team for review before anything goes live.",
  },
  {
    q: "What happens if you are unavailable?",
    a: "This is the real limit of working with one person, so I plan for it. Your code, hosting and logins are in your name, the project is documented, and any planned leave is shared in advance. If you need guaranteed cover at all hours, an agency or an in-house team is a better fit.",
  },
  {
    q: "Can you work on our existing codebase or with our in-house team?",
    a: "Yes. I can join an existing Next.js, React or Node.js project, review it first and agree the scope with your team. I work through your Git repository and follow your review process.",
  },
  {
    q: "Can you host on our company's cloud account?",
    a: "Yes. If you already use a cloud provider, I can deploy there under your account and your billing. If not, I suggest a simpler host that fits the size of the site.",
  },
];
