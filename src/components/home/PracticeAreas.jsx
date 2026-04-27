import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const renderIllustration = (id) => {
  if (id === "family") {
    return (
      <svg
        viewBox="0 0 160 120"
        className="w-full h-full text-mpl-blue"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect
            x="12"
            y="18"
            width="60"
            height="40"
            rx="10"
            className="opacity-60"
          />
          <rect
            x="28"
            y="30"
            width="60"
            height="40"
            rx="12"
            className="opacity-90"
          />
          <circle cx="48" cy="40" r="8" />
          <path d="M33 62c2.5-7 7.5-11 15-11s12.5 4 15 11" />
          <circle cx="94" cy="40" r="7" className="opacity-80" />
          <path d="M84 60c2-5.5 6-9 10-9s8 3.5 10 9" className="opacity-8" />
          <path d="M72 76c4-4.5 8-7 13-7s9 2.5 13 7" />
          <path d="M44 19l6-8 6 8" className="opacity-70" />
          <path d="M70 18h22" className="opacity-40" />
          <path d="M18 82h108" className="opacity-35" />
        </g>
        <path
          d="M118 26c6.5 3.5 10 8.5 10 14s-3.5 10.5-10 14l-6 4-6-4c-6.5-3.5-10-8.5-10-14s3.5-10.5 10-14c4-2.2 8-2.2 12 0z"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path
          d="M104 46l6.2 5.5L122 41"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "estate") {
    return (
      <svg
        viewBox="0 0 160 120"
        className="w-full h-full text-mpl-blue"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect
            x="26"
            y="18"
            width="68"
            height="84"
            rx="10"
            className="opacity-80"
          />
          <path d="M26 36h68" className="opacity-40" />
          <path d="M40 29h22" className="opacity-80" />
          <path d="M40 50h34" />
          <path d="M40 62h30" className="opacity-80" />
          <path d="M40 74h26" className="opacity-70" />
          <path d="M40 86h18" className="opacity-60" />
          <path d="M78 18l16 14h-16z" className="opacity-85" />
        </g>
        <g transform="translate(90 30)">
          <path
            d="M32 4L16 0 0 4v16c0 13 7 22 16 26 9-4 16-13 16-26z"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <path
            d="M16 4L6 7v11c0 9 4.5 15.7 10 18.4 5.5-2.7 10-9.4 10-18.4V7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M11 18.5l4 4 8-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }

  if (id === "probate") {
    return (
      <svg
        viewBox="0 0 160 120"
        className="w-full h-full text-mpl-blue"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M80 20v54" />
          <path d="M52 38h56" />
          <path d="M46 92h68" />
          <circle cx="80" cy="30" r="6" className="opacity-85" />
          <path d="M40 40l-10 22c-2 4.5 1.2 9.5 6.2 9.5H64c5 0 8.2-5 6.2-9.5L60 40z" />
          <path d="M39 60h26" className="opacity-75" />
          <path d="M96 40l-10 22c-2 4.5 1.2 9.5 6.2 9.5h27.8c5 0 8.2-5 6.2-9.5L116 40z" />
          <path d="M95 60h26" className="opacity-75" />
          <path d="M72 88h16" className="opacity-80" />
        </g>
        <path
          d="M24 104h112"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-40"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 160 120"
      className="w-full h-full text-mpl-blue"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect
          x="24"
          y="24"
          width="72"
          height="64"
          rx="10"
          className="opacity-85"
        />
        <path d="M36 40h48" />
        <path d="M36 52h44" className="opacity-85" />
        <path d="M36 64h30" className="opacity-75" />
        <path d="M36 76h24" className="opacity-65" />
      </g>
      <g transform="translate(92 34)">
        <path
          d="M8 44l30-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M26 4l6 16-18 7-6-15z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle cx="22" cy="4" r="4" fill="currentColor" fillOpacity="0.12" />
      </g>
    </svg>
  );
};

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: "family",
      title: "Family Law",
      description:
        "Guiding you through divorce, custody, and life-changing decisions with clarity, strategy, and your family’s future in mind.",
      to: "/family-law",
      services: [
        { label: "Contested Divorce", to: "/contested-divorce" },
        { label: "Uncontested Divorce", to: "/uncontested-divorce" },
        { label: "Child Custody", to: "/child-custody" },
        { label: "Child Support", to: "/child-support" },
        {
          label: "Custody & Support Modifications",
          to: "/modification-of-previous-order",
        },
        { label: "Enforcement of Court Orders", to: "/enforcement" },
      ],
    },
    {
      id: "criminal",
      title: "Criminal Law",
      description:
        "When your future is on the line, we provide strong, strategic defense you can rely on.",
      to: "/criminal-defense",
      services: [
        { label: "Assault & Domestic Violence", to: "/domestic-violence" },
        { label: "Protective Orders", to: "/protective-orders" },
        { label: "DWI / DUI Defense", to: "/dwi" },
        { label: "Drug Charges", to: "/drug-charges" },
        {
          label: "Expungement & Record Sealing",
          to: "/expungement-record-sealing",
        },
        { label: "Juvenile Defense", to: "/juvenile-defense" },
      ],
    },
    {
      id: "estate",
      title: "Estate Planning",
      description:
        "Helping you create a clear plan so your family is protected and your wishes are honored.",
      to: "/estate-planning",
      services: [
        { label: "Wills & Trusts", to: "/will" },
        { label: "Revocable Living Trusts", to: "/trust" },
        { label: "Powers of Attorney", to: "/power-of-attorney" },
        { label: "Medical Directives", to: "/advance-directives" },
        { label: "Probate & Estate Administration", to: "/probate-law" },
        { label: "Asset Protection", to: "/asset-protection" },
      ],
    },
    {
      id: "probate",
      title: "Probate Law",
      description:
        "Supporting you through the legal process after a loss with clarity and steady guidance.",
      to: "/probate-law",
      services: [
        { label: "Do You Need Probate?", to: "/do-i-need-probate" },
        { label: "How to Start Probate", to: "/how-to-start-probate" },
        { label: "Probating a Will", to: "/probating-a-will" },
        { label: "Probate Without a Will", to: "/probate-without-will" },
        { label: "Small Estate Affidavit", to: "/small-estate-affidavit" },
        { label: "Affidavit of Heirship", to: "/affidavit-of-heirship" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            How We Help You
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our services and go directly to the page you need.
          </p>
        </div>

        <div className="space-y-6">
          {practiceAreas.map((area) => {
            const displayServices = area.services.slice(0, 6);

            return (
              <div
                key={area.id}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 aspect-[4/3] rounded-2xl bg-mpl-blue/10 text-mpl-blue p-2 flex items-center justify-center">
                        <div className="w-full h-full opacity-90">
                          {renderIllustration(area.id)}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                          Practice area
                        </div>
                        <h3 className="mt-1 text-2xl md:text-3xl font-serif text-mpl-navy">
                          <Link
                            to={area.to}
                            className="hover:text-mpl-blue transition-colors"
                          >
                            {area.title}
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
                      {area.description}
                    </p>

                    <div className="mt-6">
                      <Link
                        to={area.to}
                        className="inline-flex items-center gap-2 font-bold text-mpl-blue hover:text-mpl-navy transition-colors"
                      >
                        View more <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      Services
                    </div>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                      {displayServices.map((service) => (
                        <li key={`${area.id}-${service.to}-${service.label}`}>
                          <Link
                            to={service.to}
                            className="group/link inline-flex items-start gap-2 text-sm text-gray-700 hover:text-mpl-blue transition-colors"
                          >
                            <ChevronRight
                              size={16}
                              className="mt-0.5 text-gray-300 group-hover/link:text-mpl-blue transition-colors"
                            />
                            <span className="leading-snug">
                              {service.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
