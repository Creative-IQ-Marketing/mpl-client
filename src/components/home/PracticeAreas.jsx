import { useState } from "react";

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
        "When family dynamics shift, you need a steady advocate at your side. Our team handles divorce, custody, child support, and adoption with a blend of strategy and compassion so you can move forward with confidence.",
      highlights: ["Divorce", "Child Custody", "Adoption", "Child Support"],
    },
    {
      id: "estate",
      title: "Estate Planning",
      description:
        "Thoughtful planning today protects the people and assets you care about tomorrow. We craft wills, trusts, and long-term strategies that reflect your values and provide clarity for your loved ones.",
      highlights: ["Wills", "Trusts", "Guardianship"],
    },
    {
      id: "probate",
      title: "Probate Law",
      description:
        "Losing a loved one is hard enough without the stress of legal procedures. We guide families through probate, estate administration, and disputes with clear communication and steady, respectful support.",
      highlights: [
        "Estate Administration",
        "Heirship Proceedings",
        "Will Contests",
      ],
    },
    {
      id: "criminal",
      title: "Criminal Law",
      description:
        "Your future should not be defined by a single charge or mistake. From DWI and drug offenses to more complex allegations, we build focused, strategic defenses to protect your rights and reputation.",
      highlights: ["DWI/DUI", "Drug Charges", "Domestic Violence"],
    },
  ];

  const [activeId, setActiveId] = useState(practiceAreas[0].id);
  const activeArea = practiceAreas.find((area) => area.id === activeId);

  return (
    <section className="py-24 bg-[#f5f7fb]" id="services">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Practice Areas
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Focused expertise across family, estate, probate, and criminal law
            to support you at every step.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full bg-white shadow-lg shadow-mpl-blue/10 p-1">
            {practiceAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setActiveId(area.id)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base transition-all ${
                  activeId === area.id
                    ? "bg-mpl-blue text-white shadow-md"
                    : "text-mpl-navy/70 hover:text-mpl-navy"
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
        </div>

        {activeArea && (
          <div className="bg-white rounded-3xl shadow-xl shadow-mpl-blue/10 border border-mpl-blue/10 p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-mpl-blue/10 via-mpl-lightBlue/20 to-mpl-blue/5 flex items-center justify-center">
                  {renderIllustration(activeArea.id)}
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-mpl-navy">
                  {activeArea.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {activeArea.description}
                </p>
                {activeArea.highlights && (
                  <>
                    <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-gray-500 mt-2">
                      Common matters we handle
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                      {activeArea.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-mpl-blue/5 text-mpl-navy text-sm px-3 py-2"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeAreas;
