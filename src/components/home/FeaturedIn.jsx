import { motion as Motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const FeaturedIn = () => {
  const features = [
    {
      title: "What to Know Before Taking the Next Step",
      publication: "News 4 San Antonio",
      description: "Expert insights on planning for major life transitions",
      link: "https://news4sanantonio.com/sa-living/what-to-know-before-taking-the-next-step",
      date: "Feb 2026",
      category: "Estate Planning",
    },
    {
      title: "2025 Winner: Corporate Excellence Awards",
      publication: "Corporate Vision Magazine",
      description:
        "Recognized for outstanding legal services and client advocacy",
      link: "https://www.corporatevision-news.com/winners/morales-padia-law-pllc/",
      date: "Jan 2026",
      category: "Awards",
    },
    {
      title: "Featured Law Firm Profile",
      publication: "City Lifestyle Magazine",
      description:
        "Spotlight on San Antonio's trusted family law and estate planning firm",
      link: "https://citylifestyle.com/businesses/morales-padia-law-pllc-2704869",
      date: "Mar 2026",
      category: "Feature",
    },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-mpl-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-mpl-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-mpl-blue/10 text-mpl-navy px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Newspaper className="w-4 h-4" />
            Press & Media
          </Motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
            Featured In
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Our work and insights have been recognized by leading publications
            and media outlets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Motion.a
              key={feature.title}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-3xl shadow-sm p-8 hover:shadow-xl hover:border-mpl-blue hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category & Date */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-mpl-blue/10 text-mpl-navy">
                  {feature.category}
                </span>
                <span className="text-xs text-gray-500">{feature.date}</span>
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-mpl-blue mb-2 flex items-center gap-2">
                  {feature.publication}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif font-bold text-mpl-navy mb-3 leading-snug group-hover:text-mpl-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-sm font-semibold text-mpl-blue group-hover:gap-3 transition-all">
                Read Article
                <ExternalLink className="w-4 h-4" />
              </div>
            </Motion.a>
          ))}
        </div>

        {/* Additional Mentions */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Also featured in:</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://localestateplannners.com/lawyers/san-antonio-estate-planning-attorney-trisha-morales-padia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-mpl-navy font-medium transition-colors"
            >
              Local Estate Planners Directory
            </a>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">San Antonio Scene Magazine</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">Independent Legal Reviews</span>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
