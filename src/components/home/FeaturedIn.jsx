import { motion as Motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const FeaturedIn = () => {
  const features = [
    {
      title: "Divorce can be tough, but Morales Padia Law is here to help",
      publication: "Watch Daytime",
      link: "https://watchdaytime.com/lifestyle/divorce-can-be-tough-but-morales-padia-law-is-here-to-help",
      date: "Mar 2026",
      category: "Family Law",
    },
    {
      title: "Don't face divorce alone with Morales Padia Law",
      publication: "Watch Daytime",
      link: "https://watchdaytime.com/lifestyle/dont-face-divorce-alone-with-morales-padia-law",
      date: "Feb 2026",
      category: "Divorce",
    },
    {
      title:
        "Morales Padia Law Gives Tips on Estate Planning and Why Everyone Should Have a Will",
      publication: "Watch Daytime",
      link: "https://watchdaytime.com/lifestyle/trisha-morales-padia-gives-us-tips-on-how-estate-planning-can-be-easy-and-accessible-08-20-2025",
      date: "Aug 2025",
      category: "Estate Planning",
    },
    {
      title: "Morales Padia Law, Estate Planning and Family Law",
      publication: "Watch Daytime",
      link: "https://watchdaytime.com/lifestyle/morales-padia-law-estate-planning-and-family-law-09-09-2024",
      date: "Sep 2024",
      category: "Estate Planning",
    },
    {
      title: "What to Know Before Taking the Next Step",
      publication: "News 4 San Antonio",
      link: "https://news4sanantonio.com/sa-living/what-to-know-before-taking-the-next-step",
      date: "Feb 2026",
      category: "Estate Planning",
    },
    {
      title: "2025 Winner: Corporate Excellence Awards",
      publication: "Corporate Vision Magazine",
      link: "https://www.corporatevision-news.com/winners/morales-padia-law-pllc/",
      date: "Jan 2026",
      category: "Awards",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <Motion.div
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-3">
              Featured In
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Recognized by leading publications and media outlets
            </p>
          </Motion.div>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <Motion.a
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 rounded-lg p-5 md:p-6 hover:border-mpl-blue hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-mpl-blue uppercase tracking-wide">
                      {feature.publication}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      {feature.date}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-mpl-navy group-hover:text-mpl-blue transition-colors line-clamp-2">
                    {feature.title}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-mpl-blue transition-colors flex-shrink-0 mt-1" />
              </div>
            </Motion.a>
          ))}
        </div>

        {/* Also Featured In */}
        <Motion.div
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-600 mb-4 font-medium">
            Also featured in:
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://localestateplannners.com/lawyers/san-antonio-estate-planning-attorney-trisha-morales-padia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-mpl-navy font-medium transition-colors"
            >
              Local Estate Planners Directory
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
