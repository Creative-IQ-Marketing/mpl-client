import { useEffect } from "react";

export default function SEO({
  title = "Morales Padia Law | San Antonio Family Law, Estate Planning & Criminal Defense",
  description = "San Antonio and Bexar County attorneys for family law (divorce, custody, child support), estate planning (wills, trusts, power of attorney), probate, and criminal defense (DWI). Serving New Braunfels, Boerne, and surrounding areas.",
  keywords = "San Antonio family law attorney, family lawyer San Antonio, divorce lawyer San Antonio, child custody attorney, child support attorney, spousal maintenance, SAPCR, adoption attorney, protective orders, estate planning attorney San Antonio, New Braunfels, Boerne, Bexar County Guadalupe County, wills, trusts, power of attorney, probate lawyer San Antonio, criminal defense attorney San Antonio, DWI lawyer, domestic violence defense, expungement, record sealing",
  ogImage = "/mpl_logo.png",
  canonical = window.location.origin + window.location.pathname,
  pageType = "website",
}) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Morales Padia Law" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "bingbot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      // AI Agent Specific Allowances
      { name: "OAI-SearchBot", content: "index, follow" },
      { name: "CCBot", content: "index, follow" },
      { name: "PerplexityBot", content: "index, follow" },
      { name: "ClaudeBot", content: "index, follow" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Morales Padia Law" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: pageType },
      { property: "og:image", content: window.location.origin + ogImage },
      {
        property: "og:image:secure_url",
        content: window.location.origin + ogImage,
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { property: "og:url", content: window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: window.location.origin + ogImage },
      { name: "twitter:domain", content: window.location.hostname },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "format-detection", content: "telephone=no" },
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

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let langLink = document.querySelector(
      'link[rel="alternate"][hreflang="en"]',
    );
    if (!langLink) {
      langLink = document.createElement("link");
      langLink.setAttribute("rel", "alternate");
      langLink.setAttribute("hreflang", "en");
      langLink.setAttribute("href", window.location.href);
      document.head.appendChild(langLink);
    }
  }, [title, description, keywords, ogImage, canonical, pageType]);

  return null;
}
