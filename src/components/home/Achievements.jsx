import AchievementBestFirms from "../../assets/achievements/10 Best Law Firms Badge.jpg";
import AchievementBadge1 from "../../assets/achievements/Badge 1ab.png";
import AchievementUnnamed from "../../assets/achievements/unnamed.png";

const Achievements = () => {
  const badges = [
    {
      src: AchievementBestFirms,
      title: "10 Best Law Firms",
      subtitle: "American Institute of Family Law Attorneys",
      alt: "10 Best Family Law Firms Award — American Institute of Family Law Attorneys 2025",
    },
    {
      src: AchievementBadge1,
      title: "Top San Antonio Attorney",
      subtitle: "San Antonio Scene Magazine",
      alt: "Top San Antonio Attorney Award — San Antonio Scene Magazine",
    },
    {
      src: AchievementUnnamed,
      title: "Corporate Excellence",
      subtitle: "Corporate Vision Magazine",
      alt: "Corporate Excellence Award — Corporate Vision Magazine 2025 — Morales Padia Law",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 w-[520px] h-[520px] bg-mpl-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 right-0 w-[520px] h-[520px] bg-mpl-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Recognized Achievements
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Recognition that reflects our commitment to clear guidance and
            strong advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {badges.map((badge) => (
            <div
              key={badge.alt}
              className="group bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                {badge.subtitle}
              </div>
              <img
                src={badge.src}
                alt={badge.alt}
                width="160"
                height="112"
                className="mt-5 max-h-28 md:max-h-40 w-auto object-contain"
               loading="lazy" decoding="async" />
              <div className="mt-5 font-serif text-mpl-navy text-lg">
                {badge.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
