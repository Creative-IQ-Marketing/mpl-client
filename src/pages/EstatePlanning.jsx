import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";

import OverviewHero from "../components/OverviewHero";

const EstatePlanning = () => {
  return (
    <div className="bg-white">
      <OverviewHero
        category="Estate Planning"
        heading="San Antonio Estate Planning Attorney"
        description="Strategic estate planning to protect your assets, honor your wishes, and provide clarity for your loved ones. We advocate estate planning to avoid probate complications."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="View Services"
      />
      <Services />
      <Process />
      <WhyChoose />
      <FinalCTA />
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Advance Directives",
      description:
        "Plan your healthcare decisions with living wills and medical directives",
      path: "/advance-directives",
    },
    {
      title: "Asset Protection",
      description:
        "Protect your wealth with strategic legal structures and planning",
      path: "/asset-protection",
    },
    {
      title: "Estate Affidavits",
      description:
        "Simplified estate settlement with small estate and heirship affidavits",
      path: "/estate-affidavits",
    },
    {
      title: "Power of Attorney",
      description:
        "Create durable, medical, or limited powers of attorney for your needs",
      path: "/power-of-attorney",
    },
    {
      title: "Trust Planning",
      description:
        "Revocable, irrevocable, and testamentary trusts tailored to your goals",
      path: "/trust",
    },
    {
      title: "Will Preparation",
      description:
        "Create a legally sound will to direct assets and protect your family",
      path: "/will",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white border-b border-gray-100"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
            Our Estate Planning Services
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Comprehensive planning strategies to protect your estate and ensure
            your wishes are honored.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              transition={{
                delay: 0,
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-gray-100 rounded-sm p-7 hover:border-gray-200 transition-colors"
            >
              <Link to={service.path} className="block group">
                <h3 className="text-lg font-bold text-mpl-navy mb-3 group-hover:text-mpl-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-mpl-blue text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Initial Planning Consultation", duration: "1-2 weeks" },
    { title: "Goals & Family Discussion", duration: "1-2 weeks" },
    { title: "Document Preparation", duration: "2-4 weeks" },
    { title: "Review & Revisions", duration: "1-2 weeks" },
    { title: "Execution & Notarization", duration: "1 week" },
    { title: "Ongoing Review & Updates", duration: "As needed" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
      <div className="container-custom max-w-3xl">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
          Process
        </span>
        <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
          Estate Planning Made Simple
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-12">
          Our straightforward process guides you to a comprehensive estate plan.
        </p>

        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                transition={{ delay: i * 0.06, duration: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-mpl-navy text-white text-xs font-bold flex items-center justify-center relative z-10 shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 border border-gray-200 rounded-sm p-5 bg-white hover:border-gray-300 transition-colors">
                  <h3 className="text-base font-bold text-mpl-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-400 font-medium tracking-wide uppercase">
                    {step.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const items = [
    "Comprehensive planning expertise",
    "Tax-efficient strategies",
    "Family-focused approach",
    "Clear document preparation",
    "Probate avoidance focus",
    "Regular plan updates",
    "Personalized guidance",
    "Professional execution support",
    "Peace of mind for your family",
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
            Why Choose Our Estate Planning Services?
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Protect your legacy with experienced, thoughtful estate planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <motion.div
              key={item}
              className="border border-gray-100 rounded-sm p-5 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-mpl-blue flex-shrink-0 mt-0.5"
                  size={16}
                />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-mpl-navy border-t border-white/5">
    <div className="container-custom">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
          Start Your Estate Plan Today
        </h2>
        <p className="mt-6 text-base text-white/60 leading-relaxed">
          Protect your family and secure your legacy with a comprehensive estate
          plan.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-white text-mpl-navy px-8 py-3.5 rounded-sm text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          Schedule Your Consultation <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  </section>
);

export default EstatePlanning;
