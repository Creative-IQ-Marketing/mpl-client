import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";

import OverviewHero from "../components/OverviewHero";

const ProbateLaw = () => {
  return (
    <div className="bg-white">
      <OverviewHero
        category="Probate Law"
        heading="San Antonio Probate Attorney"
        description="From determining if probate is necessary to resolving complex estate disputes, we provide comprehensive guidance tailored to your situation."
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
      title: "Affidavit of Heirship",
      description:
        "Establish legal heirship and transfer property without full probate",
      path: "/affidavit-of-heirship",
    },
    {
      title: "Do I Need Probate in Texas?",
      description:
        "Understand whether your estate requires probate or qualifies for alternatives",
      path: "/do-i-need-probate",
    },
    {
      title: "How to Start Probate",
      description:
        "Step-by-step guidance through the probate filing and court process",
      path: "/how-to-start-probate",
    },
    {
      title: "No Will? Probate Options",
      description:
        "Explore solutions for intestate estates and succession without a will",
      path: "/probate-without-will",
    },
    {
      title: "Probate Disputes & Litigation",
      description:
        "Aggressive representation in will contests and estate conflicts",
      path: "/probate-disputes-litigation",
    },
    {
      title: "Probating a Will",
      description:
        "Ensure proper will validation and estate distribution through probate",
      path: "/probating-a-will",
    },
    {
      title: "Small Estate Affidavit",
      description: "Simplified estate settlement for estates under $75,000",
      path: "/small-estate-affidavit",
    },
    {
      title: "Transferring Property After Death",
      description:
        "Guide to different methods of transferring property to heirs and beneficiaries",
      path: "/transferring-property-after-death",
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
            Our Probate Services
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            From determining if probate is necessary to resolving complex estate
            disputes, we provide comprehensive guidance tailored to your
            situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.4,
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
    { title: "Initial Consultation & Assessment", duration: "1-2 weeks" },
    { title: "Probate Petition", duration: "2-4 weeks" },
    { title: "Court Hearing & Appointment", duration: "4-8 weeks" },
    { title: "Asset Inventory & Valuation", duration: "2-6 weeks" },
    { title: "Creditor Notification & Claims", duration: "4-12 weeks" },
    { title: "Final Distribution & Closing", duration: "2-8 weeks" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
      <div className="container-custom max-w-3xl">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
          Process
        </span>
        <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
          The Probate Process Explained
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-12">
          Understanding the steps of your journey through probate
          administration.
        </p>

        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
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
    "Legal protection and compliance",
    "Efficient process management",
    "Family dispute reduction",
    "Tax optimization strategy",
    "Asset preservation planning",
    "Compassionate client support",
    "Comprehensive documentation",
    "Court representation strength",
    "Clear communication",
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
            Why Choose Our Probate Services?
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Experience the advantages of working with skilled probate attorneys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
          Ready to Get Started?
        </h2>
        <p className="mt-6 text-base text-white/60 leading-relaxed">
          Don't navigate probate alone. We are here to guide you through every
          step with strategic legal support.
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

export default ProbateLaw;
