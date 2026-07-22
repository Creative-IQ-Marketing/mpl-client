import { useEffect } from "react";
import { SITE_URL, toCanonicalUrl } from "../data/siteConfig";

const getOgImage = (pathname) => {
  if (
    pathname.includes("family") ||
    pathname.includes("custody") ||
    pathname.includes("divorce") ||
    pathname.includes("adoption") ||
    pathname.includes("spousal") ||
    pathname.includes("paternity") ||
    pathname.includes("grandparent") ||
    pathname.includes("modification") ||
    pathname.includes("enforcement") ||
    pathname.includes("visitation") ||
    pathname.includes("protective-order")
  )
    return "/og/og-family-law.svg";
  if (
    pathname.includes("criminal") ||
    pathname.includes("dwi") ||
    pathname.includes("juvenile") ||
    pathname.includes("drug") ||
    pathname.includes("felony") ||
    pathname.includes("misdemeanor") ||
    pathname.includes("assault") ||
    pathname.includes("domestic-violence") ||
    pathname.includes("expungement") ||
    pathname.includes("weapons") ||
    pathname.includes("theft") ||
    pathname.includes("probation") ||
    pathname.includes("warrants") ||
    pathname.includes("under-investigation")
  )
    return "/og/og-criminal-defense.svg";
  if (
    pathname.includes("estate") ||
    pathname.includes("probate") ||
    pathname.includes("will") ||
    pathname.includes("trust") ||
    pathname.includes("affidavit") ||
    pathname.includes("heirship") ||
    pathname.includes("muniment") ||
    pathname.includes("power-of-attorney") ||
    pathname.includes("advance-directives") ||
    pathname.includes("asset-protection")
  )
    return "/og/og-estate-probate.svg";
  return "/og/og-default.svg";
};

const INDEXABLE_ROBOTS =
  "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
const NOINDEX_ROBOTS = "noindex, nofollow";

export default function SEO({
  title = "Morales Padia Law | San Antonio Family Law, Estate Planning & Criminal Defense",
  description = "San Antonio and Bexar County attorneys for family law (divorce, custody, child support), estate planning (wills, trusts, power of attorney), probate, and criminal defense (DWI). Serving New Braunfels, Boerne, and surrounding areas.",
  keywords = "Morales Padia Law, San Antonio attorney, family law, divorce, child custody, estate planning, probate, criminal defense, DWI, adoption, award-winning law firm",
  ogImage,
  canonical,
  pageType = "website",
  noindex = false,
}) {
  useEffect(() => {
    const path = window.location.pathname;
    const resolvedCanonical = canonical || toCanonicalUrl(path);
    const resolvedOgImage = ogImage || getOgImage(path);
    const absoluteOg = resolvedOgImage.startsWith("http")
      ? resolvedOgImage
      : `${SITE_URL}${resolvedOgImage}`;
    const robots = noindex ? NOINDEX_ROBOTS : INDEXABLE_ROBOTS;

    document.title = title;

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Morales Padia Law" },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { name: "bingbot", content: robots },
      { name: "OAI-SearchBot", content: noindex ? "noindex, nofollow" : "index, follow" },
      { name: "CCBot", content: noindex ? "noindex, nofollow" : "index, follow" },
      { name: "PerplexityBot", content: noindex ? "noindex, nofollow" : "index, follow" },
      { name: "ClaudeBot", content: noindex ? "noindex, nofollow" : "index, follow" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Morales Padia Law" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: pageType },
      { property: "og:image", content: absoluteOg },
      { property: "og:image:secure_url", content: absoluteOg },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { property: "og:url", content: resolvedCanonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@moralespadialaw" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: absoluteOg },
      { name: "twitter:domain", content: "moralespadialaw.com" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "San Antonio, Texas" },
      { name: "geo.position", content: "29.5194;-98.4815" },
      { name: "ICBM", content: "29.5194, -98.4815" },
      { name: "DC.title", content: title },
      { name: "DC.language", content: "en-US" },
      { name: "classification", content: "Legal Services" },
      { name: "category", content: "Attorney, Lawyer, San Antonio TX" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? "name" : "property";
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", resolvedCanonical);

    let langLink = document.querySelector(
      'link[rel="alternate"][hreflang="en"]',
    );
    if (!langLink) {
      langLink = document.createElement("link");
      langLink.setAttribute("rel", "alternate");
      langLink.setAttribute("hreflang", "en");
      document.head.appendChild(langLink);
    }
    langLink.setAttribute("href", resolvedCanonical);

    let langLinkUS = document.querySelector(
      'link[rel="alternate"][hreflang="en-US"]',
    );
    if (!langLinkUS) {
      langLinkUS = document.createElement("link");
      langLinkUS.setAttribute("rel", "alternate");
      langLinkUS.setAttribute("hreflang", "en-US");
      document.head.appendChild(langLinkUS);
    }
    langLinkUS.setAttribute("href", resolvedCanonical);
  }, [title, description, keywords, ogImage, canonical, pageType, noindex]);

  return null;
}
