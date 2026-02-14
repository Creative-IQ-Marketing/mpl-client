import { useState, useEffect } from "react";
import { Users, Scale, FileText, Gavel } from "lucide-react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const PracticeAreas = () => {
  const [isVisible, setIsVisible] = useState(false);

  const practiceAreas = [
    {
      title: "Family Law",
      description:
        "Navigating divorce, child custody, support, adoption, and prenuptial agreements with sensitivity and strength.",
      icon: Users,
    },
    {
      title: "Estate Planning",
      description:
        "Preserving your legacy through wills, trusts, and power of attorney to ensure your wishes are honored.",
      icon: FileText,
    },
    {
      title: "Probate Law",
      description:
        "Guiding you through the probate process with expertise to settle estates efficiently and correctly.",
      icon: Scale,
    },
    {
      title: "Criminal Law",
      description:
        "Defending your rights in DWI, domestic violence, drug charges, and expungement cases.",
      icon: Gavel,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-mpl-blue/8 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-mpl-navy/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
            Legal Expertise Across All Matters
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal support tailored to your unique situation. We
            specialize in family law, estate planning, probate, and criminal
            defense.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <MotionDiv
                key={area.title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 + index * 0.08, type: "spring", stiffness: 140, damping: 18 }}
                whileHover={{ y: -6 }}
                className={`relative transition-all duration-500 group hover:shadow-2xl ${
                  isVisible ? "" : ""
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl z-0" />

                {/* Modern Glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-lg rounded-3xl border border-white/40 shadow-lg z-0" />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-mpl-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 z-0" />

                {/* Premium Gloss Sheen */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden z-10">
                  <div className="absolute -left-1/3 top-0 w-2/3 h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform rotate-12 translate-x-0 group-hover:translate-x-[180%] transition-transform duration-700" />
                </div>

                {/* Content */}
                <div
                  className={`relative z-10 h-full flex flex-col ${index === 0 ? "p-10 lg:p-12" : "p-8 lg:p-10"}`}
                >
                  {/* Icon - Elevated Design */}
                  <div className="mb-6 lg:mb-8 inline-flex">
                    <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-2xl bg-mpl-navy flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-2">
                      <Icon
                        className={`${index === 0 ? "w-8 h-8" : "w-7 h-7"} text-white`}
                      />
                    </div>
                  </div>

                  {/* Title - Premium Typography */}
                  <h3
                    className={`font-serif font-bold text-mpl-navy mb-3 lg:mb-4 group-hover:text-mpl-blue transition-colors duration-300 ${
                      index === 0
                        ? "text-3xl lg:text-4xl"
                        : "text-2xl lg:text-3xl"
                    }`}
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-gray-600 leading-relaxed flex-grow group-hover:text-gray-800 transition-colors duration-300 ${
                      index === 0
                        ? "text-base lg:text-lg"
                        : "text-sm lg:text-base"
                    }`}
                  >
                    {area.description}
                  </p>

                  {/* CTA - Minimalist */}
                  <div
                    className={`pt-6 lg:pt-8 border-t border-gray-100 group-hover:border-mpl-blue/30 transition-colors ${index === 0 ? "mt-8 lg:mt-10" : "mt-6"}`}
                  >
                    <a
                      href="#consultation"
                      className="inline-flex items-center text-mpl-navy font-semibold text-sm lg:text-base group-hover:text-mpl-blue transition-all duration-300 gap-2"
                    >
                      Learn More
                      <span className="transition-transform duration-300 transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Subtle Border Animation on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-mpl-blue/20 transition-colors duration-300 z-0" />
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
