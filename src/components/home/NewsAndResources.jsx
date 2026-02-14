import {
  PlayCircle,
  BookOpen,
  FileText,
  Download,
  ArrowRight,
} from "lucide-react";

const NewsAndResources = () => {
  const resources = [
    {
      title: "Family Blindsided",
      description:
        "Navigate unexpected family challenges with practical guidance",
      icon: BookOpen,
    },
    {
      title: "Divorce Guide",
      description:
        "Comprehensive roadmap for divorce proceedings and settlements",
      icon: FileText,
    },
    {
      title: "Estate Planning Guide",
      description:
        "Secure your legacy with proper estate organization strategies",
      icon: Download,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-mpl-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-mpl-navy/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Featured News - Premium Card */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
                Featured in the News
              </h2>
              <p className="text-gray-600 text-lg">
                Stay informed with our latest legal insights and media features
              </p>
            </div>

            <div className="group relative rounded-3xl overflow-hidden h-full">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-mpl-blue/8 to-mpl-lightBlue/5 z-0" />

              {/* Card Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-mpl-blue/30 p-10 lg:p-12 hover:border-mpl-blue/60 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center justify-center text-center">
                {/* Icon Circle */}
                <div className="mb-8 p-6 bg-gradient-to-br from-mpl-blue to-mpl-lightBlue rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-mpl-navy mb-4">
                  SA Living Interview
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                  Watch our exclusive interview discussing family law trends and
                  recent developments affecting San Antonio families.
                </p>

                {/* CTA Button */}
                <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-mpl-blue to-mpl-lightBlue text-white font-semibold rounded-full hover:from-mpl-navy hover:to-mpl-blue transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
                  Watch Interview
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
                Free Legal Resources
              </h2>
              <p className="text-gray-600 text-lg">
                Download guides to understand your legal options better
              </p>
            </div>

            <div className="space-y-5">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden"
                  >
                    {/* Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-mpl-blue/5 to-mpl-navy/5 group-hover:from-mpl-blue/10 group-hover:to-mpl-navy/10 transition-all duration-500 z-0" />

                    {/* Card */}
                    <div className="relative bg-white rounded-2xl border border-gray-200 group-hover:border-mpl-blue/40 hover:shadow-lg transition-all duration-300 p-6 lg:p-7 flex items-start gap-5">
                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-mpl-navy/10 to-mpl-blue/5 flex items-center justify-center group-hover:from-mpl-navy/20 group-hover:to-mpl-blue/10 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-mpl-navy group-hover:text-mpl-blue transition-colors" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="font-serif font-bold text-mpl-navy text-lg mb-1 group-hover:text-mpl-blue transition-colors">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {resource.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <button className="flex-shrink-0 w-10 h-10 rounded-full bg-mpl-blue/10 flex items-center justify-center text-mpl-navy group-hover:bg-mpl-blue group-hover:text-white transition-all duration-300 hover:shadow-md">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 lg:p-8 bg-gradient-to-br from-mpl-navy/5 to-mpl-blue/5 rounded-2xl border border-mpl-blue/20">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold text-mpl-navy">
                  All resources
                </span>{" "}
                are free to download and share. No registration required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndResources;
