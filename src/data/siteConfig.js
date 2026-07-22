/**
 * Canonical site config for Morales Padia Law.
 * Apex host matches Netlify primary domain (www → apex 301).
 */
export const SITE_URL = "https://moralespadialaw.com";

/** Strip trailing slash except for `/`. */
export function normalizePath(pathname = "/") {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

/** Absolute canonical URL (apex, no trailing slash except home). */
export function toCanonicalUrl(pathname = "/") {
  const path = normalizePath(pathname);
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * All SPA routes that must rewrite to index.html on Netlify.
 * Unknown paths fall through to 404.html (real HTTP 404).
 */
export const SPA_ROUTES = [
  "/services",
  "/service-area",
  "/firm-overview",
  "/family-law",
  "/criminal-defense",
  "/dwi",
  "/domestic-violence",
  "/protective-orders",
  "/theft-property-crimes",
  "/expungement-record-sealing",
  "/drug-charges",
  "/assault-family-violence",
  "/probation-violations",
  "/warrants-arrest",
  "/under-investigation",
  "/juvenile-defense",
  "/weapons-charges",
  "/felony-charges-defense",
  "/misdemeanor-defense",
  "/uncontested-divorce",
  "/flat-fee-divorce",
  "/contested-divorce",
  "/child-visitation-possession",
  "/child-custody",
  "/child-support",
  "/adoption",
  "/name-change",
  "/modification-of-previous-order",
  "/property-division",
  "/enforcement",
  "/spousal-maintenance",
  "/prenuptial-agreement",
  "/postnuptial-agreement",
  "/paternity-fathers-rights",
  "/grandparents-rights",
  "/mediation-collaborative-divorce",
  "/emergency-custody-orders",
  "/estate-planning",
  "/power-of-attorney",
  "/advance-directives",
  "/asset-protection",
  "/trust",
  "/will",
  "/probate-law",
  "/do-i-need-probate",
  "/how-to-start-probate",
  "/probating-a-will",
  "/probate-without-will",
  "/small-estate-affidavit",
  "/affidavit-of-heirship",
  "/transferring-property-after-death",
  "/probate-disputes-litigation",
  "/heirship-proceedings",
  "/muniment-of-title",
  "/probate-litigation",
  "/estate-affidavits",
  "/testimonials",
  "/contact",
  "/style-guide",
  "/resources/books",
  "/resources/books/family-blindsided",
  "/resources/books/divorce-guide",
  "/resources/blog",
  "/partners",
  "/resources/faq",
  "/newsletter/unsubscribe",
  "/privacy-policy",
  "/terms-of-service",
];

/** Indexable URLs for sitemap (exclude utility / robots-disallowed). */
export const SITEMAP_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/firm-overview", priority: "0.8", changefreq: "monthly" },
  { path: "/testimonials", priority: "0.7", changefreq: "monthly" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/service-area", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/partners", priority: "0.5", changefreq: "monthly" },

  // Family
  { path: "/family-law", priority: "0.9", changefreq: "monthly" },
  { path: "/adoption", priority: "0.8", changefreq: "monthly" },
  { path: "/spousal-maintenance", priority: "0.8", changefreq: "monthly" },
  { path: "/child-custody", priority: "0.9", changefreq: "monthly" },
  { path: "/child-support", priority: "0.9", changefreq: "monthly" },
  { path: "/child-visitation-possession", priority: "0.8", changefreq: "monthly" },
  { path: "/contested-divorce", priority: "0.9", changefreq: "monthly" },
  { path: "/modification-of-previous-order", priority: "0.8", changefreq: "monthly" },
  { path: "/emergency-custody-orders", priority: "0.8", changefreq: "monthly" },
  { path: "/enforcement", priority: "0.8", changefreq: "monthly" },
  { path: "/flat-fee-divorce", priority: "0.8", changefreq: "monthly" },
  { path: "/grandparents-rights", priority: "0.8", changefreq: "monthly" },
  { path: "/mediation-collaborative-divorce", priority: "0.8", changefreq: "monthly" },
  { path: "/name-change", priority: "0.7", changefreq: "monthly" },
  { path: "/paternity-fathers-rights", priority: "0.8", changefreq: "monthly" },
  { path: "/postnuptial-agreement", priority: "0.7", changefreq: "monthly" },
  { path: "/prenuptial-agreement", priority: "0.7", changefreq: "monthly" },
  { path: "/property-division", priority: "0.8", changefreq: "monthly" },
  { path: "/protective-orders", priority: "0.8", changefreq: "monthly" },
  { path: "/uncontested-divorce", priority: "0.9", changefreq: "monthly" },

  // Criminal
  { path: "/criminal-defense", priority: "0.9", changefreq: "monthly" },
  { path: "/assault-family-violence", priority: "0.8", changefreq: "monthly" },
  { path: "/domestic-violence", priority: "0.8", changefreq: "monthly" },
  { path: "/drug-charges", priority: "0.8", changefreq: "monthly" },
  { path: "/dwi", priority: "0.9", changefreq: "monthly" },
  { path: "/expungement-record-sealing", priority: "0.8", changefreq: "monthly" },
  { path: "/felony-charges-defense", priority: "0.8", changefreq: "monthly" },
  { path: "/misdemeanor-defense", priority: "0.7", changefreq: "monthly" },
  { path: "/probation-violations", priority: "0.7", changefreq: "monthly" },
  { path: "/theft-property-crimes", priority: "0.7", changefreq: "monthly" },
  { path: "/under-investigation", priority: "0.7", changefreq: "monthly" },
  { path: "/warrants-arrest", priority: "0.7", changefreq: "monthly" },
  { path: "/weapons-charges", priority: "0.7", changefreq: "monthly" },
  { path: "/juvenile-defense", priority: "0.7", changefreq: "monthly" },

  // Estate
  { path: "/estate-planning", priority: "0.9", changefreq: "monthly" },
  { path: "/advance-directives", priority: "0.8", changefreq: "monthly" },
  { path: "/asset-protection", priority: "0.8", changefreq: "monthly" },
  { path: "/estate-affidavits", priority: "0.7", changefreq: "monthly" },
  { path: "/power-of-attorney", priority: "0.8", changefreq: "monthly" },
  { path: "/trust", priority: "0.8", changefreq: "monthly" },
  { path: "/will", priority: "0.8", changefreq: "monthly" },

  // Probate
  { path: "/probate-law", priority: "0.9", changefreq: "monthly" },
  { path: "/affidavit-of-heirship", priority: "0.8", changefreq: "monthly" },
  { path: "/do-i-need-probate", priority: "0.8", changefreq: "monthly" },
  { path: "/how-to-start-probate", priority: "0.8", changefreq: "monthly" },
  { path: "/probate-without-will", priority: "0.8", changefreq: "monthly" },
  { path: "/probate-disputes-litigation", priority: "0.8", changefreq: "monthly" },
  { path: "/probating-a-will", priority: "0.8", changefreq: "monthly" },
  { path: "/small-estate-affidavit", priority: "0.8", changefreq: "monthly" },
  { path: "/transferring-property-after-death", priority: "0.8", changefreq: "monthly" },
  { path: "/heirship-proceedings", priority: "0.7", changefreq: "monthly" },
  { path: "/muniment-of-title", priority: "0.7", changefreq: "monthly" },
  { path: "/probate-litigation", priority: "0.7", changefreq: "monthly" },

  // Resources
  { path: "/resources/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/resources/books", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/books/family-blindsided", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/books/divorce-guide", priority: "0.6", changefreq: "monthly" },
  { path: "/resources/faq", priority: "0.7", changefreq: "monthly" },

  // Team
  { path: "/team/trisha-morales-padia", priority: "0.6", changefreq: "monthly" },
  { path: "/team/dorothy-dominguez", priority: "0.5", changefreq: "monthly" },
  { path: "/team/allyson-gilmore", priority: "0.5", changefreq: "monthly" },
  { path: "/team/veronica-ruvalcaba", priority: "0.5", changefreq: "monthly" },
  { path: "/team/elena-galaviz", priority: "0.5", changefreq: "monthly" },
  { path: "/team/alexandra-johnson", priority: "0.5", changefreq: "monthly" },
  { path: "/team/kayla-kim", priority: "0.5", changefreq: "monthly" },
  { path: "/team/linda-chapman", priority: "0.5", changefreq: "monthly" },
];

/** Old / mistaken paths → current destinations (301). */
export const LEGACY_REDIRECTS = [
  ["/about", "/firm-overview"],
  ["/about-us", "/firm-overview"],
  ["/schedule", "/contact"],
  ["/blog", "/resources/blog"],
  ["/faq", "/resources/faq"],
  ["/books", "/resources/books"],
  ["/services/family-law", "/family-law"],
  ["/services/criminal-defense", "/criminal-defense"],
  ["/services/estate-planning", "/estate-planning"],
  ["/services/probate", "/probate-law"],
];
