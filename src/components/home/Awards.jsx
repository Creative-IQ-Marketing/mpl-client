import { Award, Star, Crown, Medal } from "lucide-react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

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
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Recognized excellence in legal practice and client advocacy
          </p>
        </div>

        {/* Awards Grid - Premium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <MotionDiv
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.06,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-mpl-blue/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0" />

                  {/* Glassmorphism Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md z-0" />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mpl-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                  {/* Content */}
                  <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col items-center text-center">
                    {/* Icon Container - Premium Badge */}
                    <div className="mb-6 p-4 bg-gradient-to-br from-mpl-navy/10 to-mpl-blue/5 rounded-full group-hover:from-mpl-navy/15 group-hover:to-mpl-blue/10 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-mpl-navy group-hover:text-mpl-blue transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-mpl-navy text-lg lg:text-xl mb-2 group-hover:text-mpl-blue transition-colors duration-300">
                      {award.title}
                    </h3>

                    {/* Year - Subtle */}
                    <p className="text-gray-500 font-medium text-sm">
                      {award.year}
                    </p>

                    {/* Accent Line */}
                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-transparent via-mpl-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
