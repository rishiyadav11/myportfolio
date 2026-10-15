/**
 * Single source of truth for personal and contact details.
 * Anything marked TODO still needs a real value from Rishi.
 * `null` means "don't render this yet".
 */
export const site = {
  name: "Rishi Yadav",
  url: "https://rishiyadav.space",
  role: "Full-stack developer & web consultant",
  shortBio:
    "Full-stack developer and web consultant in Narnaul, Haryana. I build fast, reliable websites and web apps for growing businesses.",
  location: {
    locality: "Narnaul",
    district: "Mahendragarh",
    region: "Haryana",
    country: "IN",
    countryName: "India",
    // TODO: confirm PIN code before publishing the ProfessionalService schema.
    postalCode: "123001",
    label: "Narnaul, Haryana, India",
  },
  email: "photonics54yadav@gmail.com",
  phone: {
    e164: "+918708905369",
    display: "+91 87089 05369",
    whatsapp: "918708905369",
  },
  // TODO: Calendly / Cal.com booking link. Booking buttons hide while this is null.
  bookingUrl: null as string | null,
  workingHours: "Mon–Sat, 10:00–19:00 IST",
  responseTime: "I reply within one working day.",
  resumePdf: "/rishi-yadav-resume.pdf",
  photo: {
    src: "/rishi.jpeg",
    width: 1023,
    height: 1537,
    alt: "Rishi Yadav, full-stack developer, Narnaul",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/rishiyadav11/",
    github: "https://github.com/rishiyadav11",
    x: "https://x.com/RishiYadav5911",
  },
  // From the resume PDF. TODO: the old site said "Maharshi Dayanand University";
  // confirm whether to add "affiliated to MDU".
  education: {
    degree: "B.Tech, Computer Science (AI & ML)",
    school: "Ch. Ranbir Singh State Institute of Engineering & Technology",
    period: "2023–2027",
  },
  // TODO: years of experience and number of live projects. Hidden while null.
  yearsExperience: null as number | null,
  liveProjects: null as number | null,
  // TODO: "Currently taking N projects for MONTH". Hidden while null.
  availability: null as string | null,
} as const;

export const whatsappLink = (
  message = "Hi Rishi, I found your website and would like to discuss a project.",
) => `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject = "Project enquiry from rishiyadav.space") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const telLink = `tel:${site.phone.e164}`;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/work-with-me", label: "Services" },
  { href: "/engineering", label: "Engineering" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
] as const;

export const localPages = [
  { href: "/website-developer-narnaul", label: "Website developer in Narnaul" },
  { href: "/website-developer-haryana", label: "Website developer in Haryana" },
  { href: "/website-developer-delhi", label: "Website developer in Delhi NCR" },
] as const;
