import {
  SITEMAP_ROUTES,
  SITE_URL,
  toCanonicalUrl,
} from "../src/data/siteConfig.js";

export const SITE_NAME = "Morales Padia Law";
export const LEGAL_NAME = "Morales Padia Law PLLC";
export { SITE_URL };
export const PHONE_TEL = "+17262044044";
export const EMAIL = "info@moralespadialaw.com";
export const LOGO = `${SITE_URL}/mpl_logo.png`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-default.svg`;

const TEAM = {
  "trisha-morales-padia": ["Trisha Morales Padia", "Founder and Attorney"],
  "dorothy-dominguez": ["Dorothy Dominguez", "Paralegal"],
  "allyson-gilmore": ["Allyson Gilmore", "Operations Director"],
  "veronica-ruvalcaba": ["Veronica Ruvalcaba", "Outreach Coordinator"],
  "elena-galaviz": ["Elena Galaviz", "Family Law Paralegal"],
  "alexandra-johnson": ["Alexandra Johnson", "Client Services Director"],
  "kayla-kim": ["Kayla Kim", "File Clerk"],
  "miranda-partida": ["Miranda Partida", "Post Bar Law Clerk"],
};

const PAGE_OVERRIDES = {
  "/": {
    title: "San Antonio Family Law Attorney | Morales Padia Law",
    description:
      "Award-winning San Antonio attorneys for family law, estate planning, probate and criminal defense. Serving Bexar, Comal, Kendall and surrounding counties.",
    keywords:
      "San Antonio attorney, family law, estate planning, probate, criminal defense, Morales Padia Law",
    schemaType: "WebPage",
  },
  "/firm-overview": {
    title: "San Antonio Law Firm Overview | Morales Padia Law",
    description:
      "Learn about Morales Padia Law, a women-led San Antonio law firm serving families, estates and people facing criminal charges.",
    schemaType: "AboutPage",
  },
  "/services": {
    title: "Legal Services in San Antonio | Morales Padia Law",
    description:
      "Explore family law, estate planning, probate and criminal defense services from Morales Padia Law in San Antonio, Texas.",
    schemaType: "CollectionPage",
  },
  "/service-area": {
    title: "San Antonio Law Firm Service Area | Morales Padia Law",
    description:
      "Morales Padia Law serves Bexar, Comal, Kendall, Atascosa, Wilson and Medina Counties from its San Antonio office.",
  },
  "/contact": {
    title: "Contact a San Antonio Attorney | Morales Padia Law",
    description:
      "Contact Morales Padia Law to schedule a consultation about family law, estate planning, probate or criminal defense.",
    schemaType: "ContactPage",
  },
  "/testimonials": {
    title: "Client Testimonials | Morales Padia Law",
    description:
      "Read client testimonials about working with the attorneys and legal team at Morales Padia Law in San Antonio.",
  },
  "/resources/blog": {
    title: "San Antonio Legal Blog | Morales Padia Law",
    description:
      "Read legal insights about Texas family law, estate planning, probate and criminal defense from Morales Padia Law.",
    schemaType: "CollectionPage",
  },
  "/resources/books": {
    title: "Free Legal Books and Guides | Morales Padia Law",
    description:
      "Explore legal books and guides from Morales Padia Law about divorce, family law and planning for major life changes.",
    schemaType: "CollectionPage",
  },
  "/resources/faq": {
    title: "Texas Legal FAQ | Morales Padia Law",
    description:
      "Find answers to common questions about family law, estate planning, probate and criminal defense in Texas.",
    schemaType: "FAQPage",
  },
};

const NON_SERVICE_PATHS = new Set([
  "/",
  "/firm-overview",
  "/testimonials",
  "/services",
  "/service-area",
  "/contact",
  "/partners",
  "/resources/blog",
  "/resources/books",
  "/resources/books/family-blindsided",
  "/resources/books/divorce-guide",
  "/resources/faq",
]);

function titleFromPath(path) {
  if (path === "/") return "Home";
  return path
    .split("/")
    .filter(Boolean)
    .at(-1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\bDwi\b/g, "DWI")
    .replace(/\bFaq\b/g, "FAQ");
}

function categoryFor(path) {
  if (path.startsWith("/team/")) return "team";
  if (
    /(criminal|dwi|violence|drug|assault|probation|warrant|investigation|juvenile|weapon|felony|misdemeanor|theft|expungement)/.test(
      path,
    )
  ) {
    return "criminal defense";
  }
  if (
    /(estate|probate|will|trust|affidavit|heirship|muniment|power-of-attorney|advance-directives|asset-protection)/.test(
      path,
    )
  ) {
    return "estate planning and probate";
  }
  if (
    /(family|divorce|custody|support|adoption|name-change|modification|property-division|enforcement|spousal|prenuptial|postnuptial|paternity|grandparents|mediation|protective-orders)/.test(
      path,
    )
  ) {
    return "family law";
  }
  return "legal services";
}

function ogImageFor(path) {
  const category = categoryFor(path);
  if (category === "family law") return `${SITE_URL}/og/og-family-law.svg`;
  if (category === "criminal defense") {
    return `${SITE_URL}/og/og-criminal-defense.svg`;
  }
  if (category === "estate planning and probate") {
    return `${SITE_URL}/og/og-estate-probate.svg`;
  }
  return DEFAULT_OG_IMAGE;
}

function makePage(route) {
  const override = PAGE_OVERRIDES[route.path] ?? {};
  const teamId = route.path.startsWith("/team/") ? route.path.split("/").at(-1) : null;
  const team = teamId ? TEAM[teamId] : null;
  const label = team?.[0] ?? titleFromPath(route.path);
  const category = categoryFor(route.path);
  const title =
    override.title ??
    (team
      ? `${team[0]}, ${team[1]} | Morales Padia Law`
      : `${label} Attorney San Antonio | Morales Padia Law`);
  const description =
    override.description ??
    (team
      ? `Meet ${team[0]}, ${team[1]} at Morales Padia Law, serving clients and families across San Antonio and South Texas.`
      : `Get experienced ${label.toLowerCase()} guidance from Morales Padia Law, a San Antonio firm serving clients across Bexar County and South Texas.`);

  return {
    ...route,
    path: route.path,
    title,
    description,
    keywords:
      override.keywords ??
      `${label}, ${category} attorney San Antonio, Morales Padia Law, Bexar County lawyer`,
    pageType: "website",
    schemaType:
      override.schemaType ??
      (team ? "Person" : NON_SERVICE_PATHS.has(route.path) ? "WebPage" : "Service"),
    ogImage: ogImageFor(route.path),
    ogImageAlt: `${label} — Morales Padia Law`,
    ...(route.path === "/"
      ? {}
      : {
          breadcrumbs: [
            { label, href: route.path },
          ],
        }),
    ...(team ? { person: { name: team[0], jobTitle: team[1] } } : {}),
  };
}

export const SEO_PAGES = SITEMAP_ROUTES.map(makePage);

export const IMAGE_SITEMAP = [
  {
    path: "/",
    images: [
      { loc: DEFAULT_OG_IMAGE, title: "Morales Padia Law" },
      { loc: LOGO, title: "Morales Padia Law logo" },
      {
        loc: `${SITE_URL}/hero/hero-1280.webp`,
        title: "Morales Padia Law San Antonio attorneys",
      },
    ],
  },
  {
    path: "/family-law",
    images: [{ loc: `${SITE_URL}/og/og-family-law.svg`, title: "Family law services" }],
  },
  {
    path: "/criminal-defense",
    images: [
      {
        loc: `${SITE_URL}/og/og-criminal-defense.svg`,
        title: "Criminal defense services",
      },
    ],
  },
  {
    path: "/estate-planning",
    images: [
      {
        loc: `${SITE_URL}/og/og-estate-probate.svg`,
        title: "Estate planning and probate services",
      },
    ],
  },
];

export const toCanonical = toCanonicalUrl;
