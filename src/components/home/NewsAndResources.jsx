import { Monitor, ExternalLink } from "lucide-react";
import { motion as Motion } from "framer-motion";

const NewsAndResources = () => {
  const newsItems = [
    {
      badge: "NEWS4SAN ANTONIO",
      title: "Morales Padia Law Featured on SA Living",
      description:
        "Attorney Trisha Morales Padia discusses the importance of estate planning and family law services, sharing expert insights on protecting your family's future and navigating legal challenges.",
      icon: Monitor,
      details: [
        { label: "SA Living Interview", icon: "📅" },
        { label: "News4San Antonio", icon: "📍" },
      ],
      link: "https://news4sanantonio.com/sa-living/morales-padia-law-estate-planning-and-family-law",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-mpl-blue/3 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* News Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-2">
            Featured In The News
          </h2>
          <div className="w-16 h-1 bg-mpl-blue mb-12" />
        </div>

        {/* Featured News Cards - Horizontal Layout */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-lg hover:border-mpl-blue/20 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                {/* Icon Circle - Left */}
                <Motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-mpl-blue/15 flex items-center justify-center">
                    <item.icon className="w-12 h-12 md:w-14 md:h-14 text-mpl-blue" />
                  </div>
                </Motion.div>

                {/* Content - Right */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  {/* Top Section */}
                  <div>
                    <div className="inline-flex mb-4">
                      <span className="text-xs font-bold text-white bg-mpl-blue px-4 py-1.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-mpl-navy mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* Details */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      {item.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span>{detail.icon}</span>
                          <span>{detail.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-mpl-blue text-white font-bold rounded-full hover:bg-mpl-navy transition-colors group"
                    >
                      Watch Interview
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Resources Link */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            Explore our{" "}
            <a
              href="/resources/books"
              className="text-mpl-blue font-bold hover:text-mpl-navy transition-colors"
            >
              guides and resources
            </a>{" "}
            to empower yourself with legal knowledge.
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default NewsAndResources;
