import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    // WebSite Schema for Sitelinks Search Box and AI understanding
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Morales Padia Law",
      url: window.location.origin,
      description: "Expert legal representation in family law, criminal defense, probate, and estate planning.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${window.location.origin}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Morales Padia Law",
      url: window.location.origin,
      logo: `${window.location.origin}/mpl_logo.png`,
      image: `${window.location.origin}/mpl_logo.png`,
      description:
        "Morales Padia Law provides expert legal representation in family law, criminal defense, probate, and estate planning.",
      telephone: "+1-726-204-4044",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+1-726-204-4044",
        availableLanguage: "en",
      },
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": window.location.origin,
      name: "Morales Padia Law",
      image: `${window.location.origin}/mpl_logo.png`,
      description:
        "Experienced attorneys specializing in family law and criminal defense.",
      url: window.location.origin,
      telephone: "+1-726-204-4044",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "85",
      },
      knowsAbout: [
        "Family Law",
        "Criminal Defense",
        "Divorce",
        "Child Custody",
        "DWI Defense",
        "Estate Planning",
        "Probate Law"
      ],
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: window.location.origin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Family Law",
          item: `${window.location.origin}/family-law`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Criminal Defense",
          item: `${window.location.origin}/criminal-defense`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: `${window.location.origin}/contact`,
        },
      ],
    };

    // Services Schema
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Service",
          name: "Family Law",
          description: "Compassionate legal representation for divorce, child custody, and family matters.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Criminal Defense",
          description: "Aggressive defense for DWI, domestic violence, and other criminal charges.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Estate Planning",
          description: "Comprehensive planning for wills, trusts, and asset protection.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Probate Law",
          description: "Guidance through the probate process and estate administration.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
      ],
    };

    const schemas = [
      websiteSchema,
      organizationSchema,
      localBusinessSchema,
      breadcrumbSchema,
      servicesSchema,
    ];

    schemas.forEach((schema) => {
      let script = document.querySelector(
        `script[data-schema-type="${schema["@type"]}"]`,
      );

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-schema-type", schema["@type"]);
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    });
  }, []);

  return null;
}
