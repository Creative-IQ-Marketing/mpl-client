import { Award, Star, Crown, Medal, Trophy, Newspaper } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Top Family Law Lawyer",
      year: "2017",
      org: "San Antonio Scene Magazine",
      icon: Award,
      link: null,
    },
    {
      title: "Best S.A Female Lawyers",
      year: "2021",
      org: "San Antonio Scene Magazine",
      icon: Crown,
      link: null,
    },
    {
      title: "Top DUI/DWI Lawyer",
      year: "2023",
      org: "San Antonio Scene Magazine",
      icon: Medal,
      link: null,
    },
    {
      title: "Corporate Excellence Awards",
      year: "2025",
      org: "Corporate Vision Magazine",
      icon: Trophy,
      link: "https://www.corporatevision-news.com/winners/morales-padia-law-pllc/",
    },
    {
      title: "Featured Law Firm",
      year: "2026",
      org: "City Lifestyle Magazine",
      icon: Newspaper,
      link: "https://citylifestyle.com/businesses/morales-padia-law-pllc-2704869",
    },
    {
      title: "Top 10 Best Law Firm",
      year: "2025",
      org: "Independent Recognition",
      icon: Star,
      link: null,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mpl-blue/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-0 w-full h-24 bg-gradient-to-r from-transparent via-mpl-blue/5 to-transparent opacity-60" />
        <div className="absolute -top-10 left-0 w-full h-24 bg-gradient-to-r from-transparent via-mpl-navy/5 to-transparent opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Recognized by clients, peers, and independent organizations for
            excellence in advocacy and service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => {
            const IconComponent = award.icon;
            const CardContent = (
              <>
                <div className="w-16 h-16 rounded-full bg-mpl-navy/5 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-mpl-navy" />
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-gray-500">
                  {award.org}
                </div>
                <div className="mt-2 font-serif text-mpl-navy text-lg leading-snug">
                  {award.title}
                </div>
                <div className="mt-2 inline-flex items-center justify-center rounded-full bg-mpl-blue/10 text-mpl-navy px-3 py-1 text-xs font-semibold">
                  {award.year}
                </div>
              </>
            );

            const containerClass =
              "bg-white border border-gray-200 rounded-3xl shadow-sm p-7 flex flex-col items-center text-center transition-all duration-300";

            return award.link ? (
              <a
                key={`${award.title}-${award.year}`}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${containerClass} hover:shadow-lg hover:border-mpl-blue hover:-translate-y-1 group`}
              >
                {CardContent}
                <div className="mt-3 text-xs text-mpl-blue font-semibold transition-opacity">
                  View Award →
                </div>
              </a>
            ) : (
              <div
                key={`${award.title}-${award.year}`}
                className={containerClass}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
