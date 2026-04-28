import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const origin = window.location.origin;

    // WebSite Schema with sitelinks search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Morales Padia Law",
      url: origin,
      description:
        "Award-winning San Antonio attorneys for family law, estate planning, probate, and criminal defense.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${origin}/resources/faq?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Attorney / Person Schema
    const attorneySchema = {
      "@context": "https://schema.org",
      "@type": "Attorney",
      name: "Trisha Morales Padia",
      jobTitle: "Founder & Lead Attorney",
      worksFor: {
        "@type": "LegalService",
        name: "Morales Padia Law",
      },
      url: origin,
      image: `${origin}/mpl_logo.png`,
      knowsAbout: [
        "Family Law",
        "Divorce",
        "Child Custody",
        "Child Support",
        "Estate Planning",
        "Wills",
        "Trusts",
        "Power of Attorney",
        "Probate Law",
        "Criminal Defense",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Licensed Attorney",
        credentialCategory: "Texas State Bar",
      },
      award: [
        "Top Family Law Lawyer - San Antonio Scene Magazine (2017)",
        "Best S.A Female Lawyers - San Antonio Scene Magazine (2021)",
        "Top DUI/DWI Lawyer - San Antonio Scene Magazine (2023)",
        "Corporate Excellence Awards - Corporate Vision Magazine (2025)",
        "Top 10 Best Law Firm - American Institute of Family Law Attorneys (2025)",
        "Featured Law Firm - City Lifestyle Magazine (2026)",
      ],
      sameAs: [
        "https://www.corporatevision-news.com/winners/morales-padia-law-pllc/",
        "https://citylifestyle.com/businesses/morales-padia-law-pllc-2704869",
      ],
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": `${origin}/#organization`,
      name: "Morales Padia Law",
      alternateName: "Morales Padia Law PLLC",
      url: origin,
      logo: `${origin}/mpl_logo.png`,
      image: `${origin}/mpl_logo.png`,
      description:
        "Award-winning San Antonio attorneys for family law (divorce, child custody, child support), estate planning (wills, trusts, power of attorney), probate, and criminal defense (DWI). Serving Bexar County, New Braunfels, and Boerne.",
      telephone: "+1-726-204-4044",
      email: "info@moralespadialaw.com",
      foundingDate: "2015",
      founder: {
        "@type": "Person",
        name: "Trisha Morales Padia",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+1-726-204-4044",
          email: "info@moralespadialaw.com",
          availableLanguage: ["English", "Spanish"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "150",
        reviewCount: "150",
      },
      award: [
        "Top Family Law Lawyer - San Antonio Scene Magazine (2017)",
        "Best S.A Female Lawyers - San Antonio Scene Magazine (2021)",
        "Top DUI/DWI Lawyer - San Antonio Scene Magazine (2023)",
        "Corporate Excellence Awards - Corporate Vision Magazine (2025)",
        "Top 10 Best Law Firm - American Institute of Family Law Attorneys (2025)",
        "Featured Law Firm - City Lifestyle Magazine (2026)",
      ],
      sameAs: [
        "https://www.facebook.com/moralespadialaw",
        "https://www.instagram.com/moralespadialaw",
        "https://www.linkedin.com/company/morales-padia-law",
        "https://www.corporatevision-news.com/winners/morales-padia-law-pllc/",
        "https://citylifestyle.com/businesses/morales-padia-law-pllc-2704869",
        "https://localestateplannners.com/lawyers/san-antonio-estate-planning-attorney-trisha-morales-padia/",
      ],
    };

    // LocalBusiness Schema with full NAP + geo
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": `${origin}/#local`,
      name: "Morales Padia Law",
      image: `${origin}/mpl_logo.png`,
      description:
        "Award-winning San Antonio law firm. Family law, estate planning, probate, and criminal defense attorneys serving Bexar County, New Braunfels, and Boerne.",
      url: origin,
      telephone: "+1-726-204-4044",
      email: "info@moralespadialaw.com",
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Check",
      address: {
        "@type": "PostalAddress",
        streetAddress: "45 NE Loop 410 Suite 307",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78216",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "29.5194",
        longitude: "-98.4815",
      },
      hasMap: "https://maps.google.com/?q=Morales+Padia+Law+San+Antonio+TX",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "San Antonio", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "AdministrativeArea", name: "Bexar County" },
        { "@type": "City", name: "New Braunfels" },
        { "@type": "City", name: "Boerne" },
        { "@type": "City", name: "Converse" },
        { "@type": "City", name: "Schertz" },
        { "@type": "City", name: "Leon Valley" },
        { "@type": "City", name: "Helotes" },
        { "@type": "City", name: "Live Oak" },
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
        "Name Change",
        "Prenuptial Agreements",
        "Postnuptial Agreements",
        "Property Division",
        "Grandparents Rights",
        "Emergency Custody Orders",
        "Criminal Defense",
        "DWI Defense",
        "Domestic Violence Defense",
        "Drug Charges Defense",
        "Assault Defense",
        "Expungement",
        "Record Sealing",
        "Nondisclosure",
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
        "Small Estate Affidavit",
        "Affidavit of Heirship",
      ],
    };

    // BreadcrumbList based on current path
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const breadcrumbItems = [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
    ];
    let cumulativePath = origin;
    pathSegments.forEach((segment, index) => {
      cumulativePath += `/${segment}`;
      const name = segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2,
        name,
        item: cumulativePath,
      });
    });
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };

    // FAQ Schema with high-value questions
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I find a good divorce attorney in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for a Texas-licensed attorney with experience in Bexar County family courts, strong client reviews, and clear communication. Morales Padia Law has been recognized as a top San Antonio family law firm and offers consultations at (726) 204-4044.",
          },
        },
        {
          "@type": "Question",
          name: "How long does divorce take in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Texas requires a minimum 60-day waiting period after filing for divorce. Uncontested divorces can be finalized in 60–90 days. Contested divorces may take 6–12 months or longer depending on the complexity of issues like property division and child custody.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need probate in Texas if there is a will?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. If the estate qualifies, a muniment of title may be used instead of full probate. Small estates under $75,000 may use a small estate affidavit. An experienced San Antonio probate attorney can advise on the best approach for your situation.",
          },
        },
        {
          "@type": "Question",
          name: "What is a SAPCR in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SAPCR stands for Suit Affecting the Parent-Child Relationship. It is the legal process used in Texas to establish or modify custody, visitation, and child support. An experienced SAPCR attorney in San Antonio can guide you through the process.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a DWI expunged in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DWI convictions generally cannot be expunged in Texas, but arrests that did not result in conviction may qualify for expunction. Orders of nondisclosure may be available for certain DWI cases after completing deferred adjudication. A San Antonio expungement attorney can evaluate your eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "What does an estate planning attorney do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An estate planning attorney helps you prepare wills, trusts, powers of attorney, and advance directives to protect your assets and ensure your wishes are carried out. In San Antonio, Morales Padia Law creates comprehensive estate plans for families at all asset levels.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a divorce cost in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An uncontested divorce in Texas can cost as little as $1,500–$3,000 with a flat fee attorney. Contested divorces involving property disputes or custody battles typically cost $5,000–$20,000+. Morales Padia Law offers flat fee options for uncontested divorces in San Antonio.",
          },
        },
        {
          "@type": "Question",
          name: "What is community property in Texas divorce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Texas is a community property state, meaning most property acquired during the marriage is owned equally by both spouses and subject to 'just and right' division in divorce. Separate property (owned before marriage or received as a gift/inheritance) is generally not divided.",
          },
        },
      ],
    };

    // Services Schema
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Legal Services at Morales Padia Law",
      description: "Full-service San Antonio law firm offering family law, estate planning, probate, and criminal defense.",
      itemListElement: [
        { "@type": "Service", position: 1, name: "Contested Divorce", description: "Aggressive representation for complex divorces involving property, custody, and support disputes in San Antonio TX.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 2, name: "Uncontested Divorce", description: "Affordable flat fee uncontested divorce attorney in San Antonio TX.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 3, name: "Child Custody", description: "SAPCR and child custody representation protecting your parental rights in Bexar County.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 4, name: "Child Support", description: "Child support establishment, modification, and enforcement in San Antonio TX.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 5, name: "DWI Defense", description: "Aggressive DWI defense attorney in San Antonio TX for first offense and felony DWI charges.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 6, name: "Estate Planning", description: "Wills, trusts, power of attorney, and advance directives from a San Antonio estate planning attorney.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 7, name: "Probate Law", description: "Probate administration and litigation from a Bexar County probate attorney.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 8, name: "Expungement & Record Sealing", description: "Clear your criminal record with an expunction or order of nondisclosure in Texas.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 9, name: "Protective Orders", description: "Protective order attorney in San Antonio TX for family violence victims and defense.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
        { "@type": "Service", position: 10, name: "Adoption", description: "Stepparent and private adoption attorney in San Antonio TX.", provider: { "@type": "Organization", name: "Morales Padia Law" } },
      ],
    };

    const schemas = [
      websiteSchema,
      attorneySchema,
      organizationSchema,
      localBusinessSchema,
      breadcrumbSchema,
      faqSchema,
      servicesSchema,
    ];

    schemas.forEach((schema, index) => {
      const schemaId = `mpl-schema-${index}`;
      let script = document.querySelector(`script[data-mpl-schema="${schemaId}"]`);

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-mpl-schema", schemaId);
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    });
  }, []);

  return null;
}

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
