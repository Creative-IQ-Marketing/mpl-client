import React from "react";
import { motion } from "framer-motion";
import { Award, Building2, Tv, Globe } from "lucide-react";
import SEO from "../components/SEO";

const Partners = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Our Credentials & Partnerships | Morales Padia Law"
        description="Recognized partnerships and credentials. Member of Chamber of Commerce, featured in SA Living, Daytime, and more."
        keywords="San Antonio law firm credentials, professional memberships, media features, partnerships"
        canonical={window.location.origin + "/partners"}
        pageType="website"
      />
      <Hero />
      <Credentials />
      <Media />
      <Organizations />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white border-b border-gray-100">
      <div className="container-custom py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Award size={18} className="text-mpl-navy" />
            <span className="text-xs font-bold tracking-wider uppercase text-gray-500">
              Credentials
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-mpl-navy leading-tight mb-6">
            Trusted, recognized, and featured
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Our team has earned recognition from leading organizations and media
            outlets throughout South Texas. We're committed to serving our
            community with excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Credentials = () => {
  const credentials = [
    {
      icon: Building2,
      title: "Member of Chamber of Commerce",
      description: "Active participant in San Antonio's business community",
    },
    {
      icon: Award,
      title: "Member of SACDLA",
      description: "San Antonio Criminal Defense Lawyers Association",
    },
    {
      icon: Award,
      title: "Member of NAWBO",
      description: "National Association of Women Business Owners",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-gray-500">
              Memberships
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-mpl-navy">
              Professional Organizations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-8 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-mpl-navy/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-mpl-navy" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-mpl-navy mb-3">
                    {cred.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cred.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Media = () => {
  const mediaFeatures = [
    {
      icon: Tv,
      name: "SA Living",
      label: "As seen on",
      color: "text-red-600",
    },
    {
      icon: Tv,
      name: "Daytime",
      label: "As seen on",
      color: "text-purple-600",
    },
    {
      icon: Globe,
      name: "San Antonio Women",
      label: "As seen on",
      color: "text-pink-600",
    },
    {
      icon: Globe,
      name: "Stone Oak Living",
      label: "As seen on",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-gray-500">
              Media
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-mpl-navy">
              Featured in the News
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center flex flex-col items-center justify-center min-h-40"
                >
                  <Icon className={`w-8 h-8 ${feature.color} mb-3`} />
                  <p className="text-xs text-gray-500 mb-2">{feature.label}</p>
                  <p className="text-sm font-semibold text-mpl-navy">
                    {feature.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Organizations = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-mpl-navy mb-4">
              Recognized Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Our recognition in these organizations and media outlets reflects
              our commitment to providing excellent legal services, staying
              current with best practices, and contributing meaningfully to our
              San Antonio community.
            </p>
            <p className="text-sm text-gray-500">
              Building on the professional, minimal UI you expect from us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
