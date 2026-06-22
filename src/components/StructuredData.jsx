import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function StructuredData() {
  const location = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const pathname = window.location.pathname;

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
        ratingValue: 5.0,
        bestRating: 5,
        worstRating: 1,
        ratingCount: 150,
        reviewCount: 150,
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
        // ── Counties ──────────────────────────────────────────────────
        {
          "@type": "AdministrativeArea",
          name: "Bexar County",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        {
          "@type": "AdministrativeArea",
          name: "Comal County",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        {
          "@type": "AdministrativeArea",
          name: "Kendall County",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        {
          "@type": "AdministrativeArea",
          name: "Atascosa County",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        {
          "@type": "AdministrativeArea",
          name: "Wilson County",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        {
          "@type": "AdministrativeArea",
          name: "Medina County",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        // ── Bexar County Cities ────────────────────────────────────────
        { "@type": "City", name: "San Antonio" },
        { "@type": "City", name: "Alamo Heights" },
        { "@type": "City", name: "Balcones Heights" },
        { "@type": "City", name: "Castle Hills" },
        { "@type": "City", name: "Converse" },
        { "@type": "City", name: "Fair Oaks Ranch" },
        { "@type": "City", name: "Helotes" },
        { "@type": "City", name: "Hill Country Village" },
        { "@type": "City", name: "Hollywood Park" },
        { "@type": "City", name: "Kirby" },
        { "@type": "City", name: "Leon Valley" },
        { "@type": "City", name: "Live Oak" },
        { "@type": "City", name: "Olmos Park" },
        { "@type": "City", name: "Sandy Oaks" },
        { "@type": "City", name: "Schertz" },
        { "@type": "City", name: "Selma" },
        { "@type": "City", name: "Shavano Park" },
        { "@type": "City", name: "Somerset" },
        { "@type": "City", name: "St. Hedwig" },
        { "@type": "City", name: "Terrell Hills" },
        { "@type": "City", name: "Universal City" },
        { "@type": "City", name: "Windcrest" },
        // ── Comal County ──────────────────────────────────────────────
        { "@type": "City", name: "New Braunfels" },
        { "@type": "City", name: "Canyon Lake" },
        // ── Kendall County ────────────────────────────────────────────
        { "@type": "City", name: "Boerne" },
        // ── Atascosa County ───────────────────────────────────────────
        { "@type": "City", name: "Pleasanton" },
        { "@type": "City", name: "Lytle" },
        // ── Wilson County ─────────────────────────────────────────────
        { "@type": "City", name: "Floresville" },
        { "@type": "City", name: "La Vernia" },
        // ── Medina County ─────────────────────────────────────────────
        { "@type": "City", name: "Castroville" },
        { "@type": "City", name: "Hondo" },
        // ── Extended SEO reach (search intent area) ───────────────────
        { "@type": "City", name: "Cibolo" },
        { "@type": "City", name: "Marion" },
        { "@type": "City", name: "Seguin" },
        { "@type": "City", name: "China Grove" },
        { "@type": "City", name: "Garden Ridge" },
        { "@type": "City", name: "Bulverde" },
        { "@type": "City", name: "Spring Branch" },
        { "@type": "City", name: "Timberwood Park" },
        { "@type": "City", name: "Von Ormy" },
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
      description:
        "Full-service San Antonio law firm offering family law, estate planning, probate, and criminal defense.",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Contested Divorce",
          description:
            "Aggressive representation for complex divorces involving property, custody, and support disputes in San Antonio TX.",
          url: `${origin}/contested-divorce`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 2,
          name: "Uncontested Divorce",
          description:
            "Affordable flat fee uncontested divorce attorney in San Antonio TX.",
          url: `${origin}/uncontested-divorce`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 3,
          name: "Child Custody",
          description:
            "SAPCR and child custody representation protecting your parental rights in Bexar County.",
          url: `${origin}/child-custody`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 4,
          name: "Child Support",
          description:
            "Child support establishment, modification, and enforcement in San Antonio TX.",
          url: `${origin}/child-support`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 5,
          name: "DWI Defense",
          description:
            "Aggressive DWI defense attorney in San Antonio TX for first offense and felony DWI charges.",
          url: `${origin}/dwi`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 6,
          name: "Estate Planning",
          description:
            "Wills, trusts, power of attorney, and advance directives from a San Antonio estate planning attorney.",
          url: `${origin}/estate-planning`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 7,
          name: "Probate Law",
          description:
            "Probate administration and litigation from a Bexar County probate attorney.",
          url: `${origin}/probate-law`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 8,
          name: "Expungement & Record Sealing",
          description:
            "Clear your criminal record with an expunction or order of nondisclosure in Texas.",
          url: `${origin}/expungement-record-sealing`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 9,
          name: "Protective Orders",
          description:
            "Protective order attorney in San Antonio TX for family violence victims and defense.",
          url: `${origin}/protective-orders`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
        {
          "@type": "Service",
          position: 10,
          name: "Adoption",
          description:
            "Stepparent and private adoption attorney in San Antonio TX.",
          url: `${origin}/adoption`,
          priceRange: "Low to High",
          provider: { "@type": "Organization", name: "Morales Padia Law" },
        },
      ],
    };

    // Review Schema - For homepage and service pages
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Morales Padia Law provided exceptional legal representation and compassionate guidance throughout my case. Highly recommended.",
      author: {
        "@type": "Person",
        name: "Satisfied Client",
      },
      itemReviewed: {
        "@type": "LegalService",
        name: "Morales Padia Law",
        url: origin,
      },
    };

    // BlogPosting Schema - For blog content
    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Legal Insights from San Antonio Attorneys",
      description:
        "Comprehensive legal guides and insights on family law, estate planning, probate, and criminal defense in Texas.",
      image: `${origin}/mpl_logo.png`,
      // Fixed publication date - deployment date
      datePublished: "2025-07-12",
      // Current date for modification tracking
      dateModified: new Date().toISOString().split("T")[0],
      author: {
        "@type": "Person",
        name: "Trisha Morales Padia",
      },
      publisher: {
        "@type": "Organization",
        name: "Morales Padia Law",
        logo: {
          "@type": "ImageObject",
          url: `${origin}/mpl_logo.png`,
        },
      },
    };

    const isOnFaqPage = pathname === "/resources/faq";
    // Only render BlogPosting on actual blog post pages, not the listing page
    const isOnBlogPage =
      pathname !== "/resources/blog" && pathname.includes("/resources/blog");

    const childCustodyFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of child custody arrangements are available in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Texas recognizes joint managing conservatorship, sole managing conservatorship, and possessory conservatorship. Courts also consider visitation rights, parenting plans, and supervised visitation based on the child's best interests.",
          },
        },
        {
          "@type": "Question",
          name: "What is the child custody process in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process involves an initial consultation, case evaluation, filing a custody petition, a discovery phase, mediation attempts, and court proceedings if mediation fails. Each step is designed to reach an outcome in the child's best interests.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I hire a child custody attorney in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A child custody attorney provides child-focused advocacy, comprehensive documentation, thorough investigation of relevant factors, and aggressive representation in court to protect your parental rights and your children's best interests.",
          },
        },
      ],
    };

    const contestedDivorceFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When do I need a contested divorce attorney in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need a contested divorce attorney when you and your spouse disagree on property division, child custody, spousal support, or other issues — including cases involving complex property, hidden assets, business interests, or domestic violence.",
          },
        },
        {
          "@type": "Question",
          name: "How does the contested divorce process work in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The contested divorce process involves initial filing, a discovery phase, mediation attempts, pre-trial motions, trial preparation, and a court trial. An experienced attorney guides you through each step to protect your rights.",
          },
        },
        {
          "@type": "Question",
          name: "What issues are typically disputed in a contested divorce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contested divorces often involve complex property division, child custody disputes, spousal support disagreements, hidden assets, business ownership interests, and cases involving domestic violence.",
          },
        },
      ],
    };

    const dwiFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of DWI cases do you handle in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We handle first-time DWI, repeat DWI offenses, refusal cases, DWI with accidents, DWI with a child passenger, and high BAC cases. Each situation requires a tailored defense strategy aimed at dismissal, reduction, or acquittal.",
          },
        },
        {
          "@type": "Question",
          name: "What is the DWI defense process in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The DWI defense process includes an initial consultation, thorough case investigation, evidence analysis, motion filing to suppress improper evidence, negotiation for favorable outcomes, and trial representation if necessary.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I need a DWI attorney in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A DWI attorney provides aggressive defense, analyzes evidence for weaknesses in stops and tests, protects your license through ALR hearings, and works toward dismissal, reduction, or acquittal of DWI charges in Bexar County.",
          },
        },
      ],
    };

    const estatePlanningFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What estate planning services does Morales Padia Law offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer advance directives, asset protection planning, estate affidavits, power of attorney, trust planning, and will preparation to create a comprehensive estate plan tailored to your goals.",
          },
        },
        {
          "@type": "Question",
          name: "What is the estate planning process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our process includes an initial planning consultation, goals and family discussion, document preparation, review and revisions, execution and notarization, and ongoing review and updates as your situation changes.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I choose an estate planning attorney in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A San Antonio estate planning attorney provides comprehensive planning expertise, tax-efficient strategies, probate avoidance focus, personalized guidance, and professional execution support to protect your legacy and provide peace of mind.",
          },
        },
      ],
    };

    const probateLawFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What probate services does Morales Padia Law offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer affidavit of heirship, do-I-need-probate assessments, probate initiation guidance, probate options for estates without wills, probate dispute litigation, probating a will, small estate affidavits, and transferring property after death.",
          },
        },
        {
          "@type": "Question",
          name: "What is the probate process in Texas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Texas probate process includes an initial consultation, filing a probate petition, a court hearing and appointment, asset inventory and valuation, creditor notification and claims processing, and final distribution and estate closing.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I need a probate attorney in San Antonio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A probate attorney provides legal protection and compliance, efficient process management, family dispute reduction, tax optimization, and comprehensive documentation to guide you through every step of the probate process in Bexar County.",
          },
        },
      ],
    };

    const schemas = [
      websiteSchema,
      attorneySchema,
      organizationSchema,
      localBusinessSchema,
      breadcrumbSchema,
      reviewSchema,
      ...(isOnFaqPage ? [faqSchema] : []),
      ...(isOnBlogPage ? [blogPostingSchema] : []),
      ...(pathname === "/" ? [servicesSchema] : []),
      ...(pathname === "/child-custody" ? [childCustodyFaqSchema] : []),
      ...(pathname === "/contested-divorce" ? [contestedDivorceFaqSchema] : []),
      ...(pathname === "/dwi" ? [dwiFaqSchema] : []),
      ...(pathname === "/estate-planning" ? [estatePlanningFaqSchema] : []),
      ...(pathname === "/probate-law" ? [probateLawFaqSchema] : []),
    ];

    schemas.forEach((schema, index) => {
      const schemaId = `mpl-schema-${index}`;
      let script = document.querySelector(
        `script[data-mpl-schema="${schemaId}"]`,
      );

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-mpl-schema", schemaId);
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    });
  }, [location.pathname]);

  return null;
}
