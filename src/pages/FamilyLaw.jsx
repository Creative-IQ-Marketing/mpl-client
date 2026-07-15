import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";

import OverviewHero from "../components/OverviewHero";

const FamilyLaw = () => {
  return (
    <div className="bg-white">
      <OverviewHero
        category="Family Law"
        heading="San Antonio Family Law Attorney - Experienced Representation"
        description="Compassionate representation for divorce, custody, and all family legal matters. We're here to guide you through life's most important decisions."
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
      title: "Adoption",
      description:
        "Comprehensive adoption services including stepparent adoption and family adoptions",
      path: "/adoption",
    },
    {
      title: "Child Custody",
      description:
        "Protection of your parental rights and establishing custody arrangements",
      path: "/child-custody",
    },
    {
      title: "Child Support",
      description: "Establish, modify, and enforce child support arrangements",
      path: "/child-support",
    },
    {
      title: "Contested Divorce",
      description: "Aggressive representation in complex divorce disputes",
      path: "/contested-divorce",
    },
    {
      title: "Enforcement of Court Orders",
      description:
        "Ensure compliance with custody, visitation, and support orders",
      path: "/enforcement",
    },
    {
      title: "Modification of Orders",
      description:
        "Update custody, support, and other court orders when circumstances change",
      path: "/modification-of-previous-order",
    },
    {
      title: "Prenuptial Agreements",
      description: "Protect your interests with a clear prenuptial agreement",
      path: "/prenuptial-agreement",
    },
    {
      title: "Property Division",
      description: "Fair resolution of marital property and asset division",
      path: "/property-division",
    },
    {
      title: "Protective Orders",
      description:
        "Legal protection and representation in protective order matters",
      path: "/protective-orders",
    },
    {
      title: "Spousal Maintenance",
      description: "Guidance on spousal support and alimony matters",
      path: "/spousal-maintenance",
    },
    {
      title: "Uncontested Divorce",
      description: "Smooth, efficient divorce process when parties agree",
      path: "/uncontested-divorce",
    },
    {
      title: "Postnuptial Agreements",
      description:
        "Clarify property and financial arrangements during marriage",
      path: "/postnuptial-agreement",
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
            Our Family Law Services
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Experienced guidance across all aspects of family law matters,
            tailored to your unique situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    { title: "Initial Consultation & Assessment", duration: "1-2 weeks" },
    { title: "Case Evaluation & Strategy", duration: "1-3 weeks" },
    { title: "Discovery & Evidence Gathering", duration: "4-12 weeks" },
    { title: "Settlement Negotiation", duration: "2-8 weeks" },
    { title: "Trial Preparation (if needed)", duration: "2-4 weeks" },
    { title: "Final Resolution & Implementation", duration: "1-4 weeks" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
      <div className="container-custom max-w-3xl">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
          Process
        </span>
        <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
          How We Help You Navigate Family Law
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-12">
          Understanding the journey through family law matters.
        </p>

        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
    "Compassionate legal representation",
    "Strategic guidance and planning",
    "Strong negotiation skills",
    "Courtroom experience and advocacy",
    "Clear communication throughout",
    "Family-focused approach",
    "Efficient process management",
    "Comprehensive documentation",
    "Ethical and transparent service",
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
            Why Choose Our Family Law Services?
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Your family's future deserves experienced, compassionate legal
            guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 1, y: 0 }}
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
          Let us guide you through your family law matter with compassion,
          strategy, and skilled advocacy.
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

export default FamilyLaw;
