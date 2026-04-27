import React from "react";
import { motion } from "framer-motion";
import { Phone, Shield, AlertTriangle, FileText, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const WeaponsCharges = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Weapons Charges Lawyer in San Antonio"
        subtitle="Defense for illegal weapons and firearms charges."
        opening="Weapons charges in Texas can carry serious penalties and long-term consequences."
        infoTitle="What This Means"
        infoDescription="Weapons charges can include illegal possession, unlicensed carry, or use of a weapon in a crime, with penalties varying based on circumstances."
      />
      <WhyChooseSection />
      <ProcessSection />
      <BenefitsSection />
      <CTABanner />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-mpl-blue/30 rounded-full blur-[100px] mix-blend-screen"
      />

      <div className="container-custom relative z-10 text-left">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 text-white drop-shadow-xl">
            Weapons Charges Defense
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
            Weapons charges can carry severe penalties and long-term
            consequences. We provide aggressive defense to protect your rights
            and freedom.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mpl-blue text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-mpl-lightBlue transition-all"
            >
              <Shield size={18} /> Schedule Consultation
            </Link>
            <a
              href="tel:7262044044"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> Call (726) 204-4044
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert Defense",
      desc: "Extensive experience defending weapons charges.",
    },
    {
      icon: FileText,
      title: "Evidence Analysis",
      desc: "Thorough examination of search and seizure procedures.",
    },
    {
      icon: Gavel,
      title: "Strong Advocacy",
      desc: "Aggressive representation in court and negotiations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-16 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-mpl-blue hover:shadow-lg transition-all"
            >
              <f.icon className="w-12 h-12 text-mpl-blue mb-4" />
              <h3 className="text-xl font-bold text-mpl-navy mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    "Case Assessment",
    "Evidence Review",
    "Strategy Development",
    "Court Representation",
    "Defense Presentation",
    "Resolution",
  ];

  return (
    <section className="py-24 bg-mpl-navy text-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
          Our Defense Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 border border-mpl-blue/30 rounded-lg hover:bg-mpl-blue/10 transition-all"
            >
              <div className="text-3xl font-bold text-mpl-blue mb-3">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold">{s}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-serif font-bold text-mpl-navy mb-6">
          What We Fight For
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Reduced charges, dismissals, and protection of your freedom and
          rights.
        </p>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-mpl-navy to-mpl-blue text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Don't face weapons charges alone
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-mpl-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
        >
          <Shield size={20} /> Schedule Consultation
        </Link>
      </div>
    </section>
  );
};

export default WeaponsCharges;
