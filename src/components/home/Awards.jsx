import { Award, Star, Crown, Medal } from "lucide-react";
import { motion as Motion } from "framer-motion";

const Awards = () => {
  const awards = [
    {
      title: "Top Family Law Lawyer",
      year: "2017",
      icon: Award,
    },
    {
      title: "Best S.A Female Lawyers",
      year: "2021",
      icon: Crown,
    },
    {
      title: "Top DUI/DWI Lawyer",
      year: "2023",
      icon: Medal,
    },
    {
      title: "Top 10 Best Law Firm",
      year: "2025",
      icon: Star,
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

        {/* Sliding Awards Row */}
        <div className="overflow-hidden">
          <Motion.div
            className="flex gap-7 md:gap-9"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...awards, ...awards].map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div
                  key={`${award.title}-${index}`}
                  className="group min-w-[300px] md:min-w-[360px] bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md px-7 py-6 flex items-center gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-mpl-blue/40 hover:bg-white"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-mpl-navy/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-mpl-navy/10">
                      <IconComponent className="w-7 h-7 text-mpl-navy group-hover:text-mpl-blue" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-gray-500 mb-1">
                      Recognition
                    </p>
                    <p className="font-serif text-mpl-navy text-sm md:text-lg leading-snug">
                      {award.title}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {award.year}
                    </p>
                  </div>
                </div>
              );
            })}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
