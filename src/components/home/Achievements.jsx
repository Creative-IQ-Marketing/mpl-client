import AchievementBestFirms from "../../assets/achievements/10 Best Law Firms Badge.jpg";
import AchievementBadge1 from "../../assets/achievements/Badge 1ab.png";
import AchievementUnnamed from "../../assets/achievements/unnamed.png";

const Achievements = () => {
  const badges = [
    {
      src: AchievementBestFirms,
      alt: "10 Best Law Firms badge",
    },
    {
      src: AchievementBadge1,
      alt: "Award badge",
    },
    {
      src: AchievementUnnamed,
      alt: "Recognition badge",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Recognized achievements.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            A sampling of the independent badges and honors our work has earned
            over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {badges.map((badge) => (
            <div
              key={badge.alt}
              className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm px-6 py-6 flex items-center justify-center"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="max-h-28 md:max-h-40 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
