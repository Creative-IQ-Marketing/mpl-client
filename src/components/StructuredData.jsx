import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    // WebSite Schema for Sitelinks Search Box and AI understanding
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Morales Padia Law",
      url: window.location.origin,
      description:
        "San Antonio attorneys for family law, estate planning, probate, and criminal defense.",
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
        "San Antonio attorneys for family law, estate planning, probate, and criminal defense.",
      telephone: "+1-726-204-4044",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+1-726-204-4044",
        availableLanguage: "en",
      },
      award: [
        "Top Family Law Lawyer - San Antonio Scene Magazine (2017)",
        "Best S.A Female Lawyers - San Antonio Scene Magazine (2021)",
        "Top DUI/DWI Lawyer - San Antonio Scene Magazine (2023)",
        "Corporate Excellence Awards - Corporate Vision Magazine (2025)",
        "Featured Law Firm - City Lifestyle Magazine (2026)",
        "Top 10 Best Law Firm - Independent Recognition (2025)",
      ],
      sameAs: [
        "https://www.corporatevision-news.com/winners/morales-padia-law-pllc/",
        "https://citylifestyle.com/businesses/morales-padia-law-pllc-2704869",
        "https://localestateplannners.com/lawyers/san-antonio-estate-planning-attorney-trisha-morales-padia/",
      ],
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": window.location.origin,
      name: "Morales Padia Law",
      image: `${window.location.origin}/mpl_logo.png`,
      description:
        "San Antonio attorneys for family law, estate planning, probate, and criminal defense.",
      url: window.location.origin,
      telephone: "+1-726-204-4044",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "45 NE LOOP 410 ste 307",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78205",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "San Antonio" },
        { "@type": "AdministrativeArea", name: "Bexar County" },
        { "@type": "State", name: "Texas" },
      ],
      knowsAbout: [
        "Family Law",
        "Divorce",
        "Child Custody",
        "Child Support",
        "SAPCR",
        "Spousal Maintenance",
        "Protective Orders",
        "Adoption",
        "Criminal Defense",
        "DWI Defense",
        "Domestic Violence Defense",
        "Expungement",
        "Record Sealing",
        "Estate Planning",
        "Wills",
        "Trusts",
        "Power of Attorney",
        "Advance Directives",
        "Asset Protection",
        "Probate Law",
        "Heirship Proceedings",
        "Muniment of Title",
        "Probate Litigation",
        "Estate Affidavits",
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
          name: "Divorce",
          description: "Guidance through contested and uncontested divorce.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Child Custody",
          description: "Representation for custody and parenting time matters.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Child Support",
          description: "Help with child support establishment and enforcement.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Family Law",
          description:
            "Compassionate legal representation for divorce, child custody, and family matters.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Criminal Defense",
          description:
            "Aggressive defense for DWI, domestic violence, and other criminal charges.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Estate Planning",
          description:
            "Comprehensive planning for wills, trusts, and asset protection.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Wills",
          description: "Drafting wills to protect your family and legacy.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Trusts",
          description: "Trust planning for long-term protection and control.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Probate Law",
          description:
            "Guidance through the probate process and estate administration.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Heirship Proceedings",
          description:
            "Determination of legal heirs and title transfer support in probate matters.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Muniment of Title",
          description:
            "Streamlined probate option for qualifying estate and property transfers.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Probate Litigation",
          description:
            "Representation for will contests, fiduciary disputes, and probate conflict resolution.",
          provider: {
            "@type": "Organization",
            name: "Morales Padia Law",
          },
        },
        {
          "@type": "Service",
          name: "Estate Affidavits",
          description:
            "Assistance with small estate affidavits and related transfer documentation.",
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
