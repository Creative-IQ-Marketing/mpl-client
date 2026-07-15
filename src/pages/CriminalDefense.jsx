import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";

import OverviewHero from "../components/OverviewHero";

const CriminalDefense = () => {
  return (
    <div className="bg-white">
      <OverviewHero
        category="Criminal Law"
        heading="Criminal Defense Attorney in San Antonio"
        description="If you are facing criminal charges or think you may be under investigation, the situation can feel overwhelming fast. The decisions you make right now can impact your freedom, your record, and your future."
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
      title: "Assault & Family Violence",
      description:
        "Aggressive defense against assault and family violence charges",
      path: "/assault-family-violence",
    },
    {
      title: "Domestic Violence Defense",
      description: "Strategic representation for domestic violence allegations",
      path: "/domestic-violence",
    },
    {
      title: "Drug Charges",
      description:
        "Defense for possession, distribution, and drug-related offenses",
      path: "/drug-charges",
    },
    {
      title: "DWI / Drunk Driving",
      description:
        "Comprehensive DWI defense to protect your license and future",
      path: "/dwi",
    },
    {
      title: "Expungement & Record Sealing",
      description: "Clear your criminal record when possible to move forward",
      path: "/expungement-record-sealing",
    },
    {
      title: "Felony Charges",
      description: "Aggressive representation for serious felony allegations",
      path: "/felony-charges-defense",
    },
    {
      title: "Misdemeanor Defense",
      description: "Strategic defense for misdemeanor charges and violations",
      path: "/misdemeanor-defense",
    },
    {
      title: "Probation Violations",
      description:
        "Skilled representation if you face probation violation charges",
      path: "/probation-violations",
    },
    {
      title: "Protective Orders",
      description: "Defense and representation in protective order hearings",
      path: "/protective-orders",
    },
    {
      title: "Theft & Property Crimes",
      description: "Defense for theft, burglary, and property crime charges",
      path: "/theft-property-crimes",
    },
    {
      title: "Under Investigation",
      description:
        "Pre-charge defense and guidance if under criminal investigation",
      path: "/under-investigation",
    },
    {
      title: "Warrants & Arrest Defense",
      description: "Defense against warrant and arrest procedures",
      path: "/warrants-arrest",
    },
    {
      title: "Weapons Charges",
      description:
        "Legal representation for firearm and weapons offense charges",
      path: "/weapons-charges",
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
            Our Criminal Defense Services
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Strategic, aggressive defense across all criminal matters to protect
            your rights and future.
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
    { title: "Case Assessment & Investigation", duration: "1-2 weeks" },
    { title: "Strategy Development", duration: "1-3 weeks" },
    { title: "Evidence Review & Motion Practice", duration: "2-8 weeks" },
    {
      title: "Plea Negotiation & Prosecution Discussions",
      duration: "2-12 weeks",
    },
    { title: "Trial Preparation (if needed)", duration: "2-4 weeks" },
    { title: "Court Representation & Resolution", duration: "Ongoing" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
      <div className="container-custom max-w-3xl">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
          Process
        </span>
        <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
          Our Criminal Defense Approach
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-12">
          Strategic steps to protect your rights and achieve the best possible
          outcome.
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
    "Experienced criminal defense attorneys",
    "Aggressive courtroom advocacy",
    "Thorough case investigation",
    "Strategic motion practice",
    "Proven negotiation skills",
    "Trial-ready preparation",
    "Clear communication throughout",
    "Protection of your constitutional rights",
    "Focused on best possible outcome",
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-serif font-bold text-mpl-navy tracking-tight mb-6">
            Why Choose Our Criminal Defense Services?
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Your defense deserves experienced, strategic legal representation.
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
          Don't face criminal charges alone. We're here to provide aggressive,
          strategic defense for your case.
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

export default CriminalDefense;
