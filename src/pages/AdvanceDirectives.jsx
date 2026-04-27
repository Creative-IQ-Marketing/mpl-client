import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  ScrollText,
  Stethoscope,
  FileHeart,
  BrainCircuit,
  ClipboardCheck,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const AdvanceDirectives = () => {
  const relatedLinks = [
    { label: "Estate Planning", to: "/estate-planning" },
    { label: "Power of Attorney", to: "/power-of-attorney" },
    { label: "Will Services", to: "/will" },
    { label: "Trust Services", to: "/trust" },
    { label: "Asset Protection", to: "/asset-protection" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <TypesSection />
      <BenefitsSection />
      <HealthcareChoices />
      <StepsSection />
      <ConsiderationsSection />
      <ServiceSubpageCTA
        heading="Plan for Your Healthcare Future"
        description="Make your medical preferences clear and legally enforceable with properly prepared directives."
        relatedTitle="Related Estate Planning Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 bg-white mt-20">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-mpl-navy">
          Advance Directives
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Ensure your healthcare wishes are honored.
        </p>
        <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-mpl-navy">
            What are Advance Directives?
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Advance directives are legal documents that communicate your medical
            preferences and appoint trusted decision-makers if you cannot speak
            for yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

const TypesSection = () => {
  const cards = [
    {
      icon: ScrollText,
      title: "Living Will",
      description:
        "Specifies preferences for end-of-life treatment and life-sustaining care.",
      listTitle: "Covers",
      list: ["Life support", "Artificial nutrition", "Pain management"],
    },
    {
      icon: Stethoscope,
      title: "Medical Power of Attorney",
      description:
        "Appoints a trusted person to make healthcare decisions if needed.",
      listTitle: "Authorizes",
      list: ["Treatment choices", "Medical record access", "Provider communication"],
    },
    {
      icon: ClipboardCheck,
      title: "HIPAA Authorization",
      description:
        "Allows selected people to access protected health information.",
      listTitle: "Permits",
      list: ["Medical record access", "Coordination with providers", "Insurance communication"],
    },
    {
      icon: FileHeart,
      title: "Do Not Resuscitate (DNR)",
      description:
        "States when life-saving interventions should or should not be used.",
      listTitle: "Specifies",
      list: ["No CPR", "Resuscitation preferences", "Emergency instructions"],
    },
    {
      icon: HeartHandshake,
      title: "POLST Forms",
      description:
        "Medical orders that convert treatment preferences into actionable instructions.",
      listTitle: "Includes",
      list: ["CPR preferences", "Hospital transfer wishes", "Nutrition decisions"],
    },
    {
      icon: BrainCircuit,
      title: "Mental Health Directive",
      description:
        "Outlines mental health treatment preferences during critical episodes.",
      listTitle: "Addresses",
      list: ["Treatment options", "Medication preferences", "Emergency psychiatric care"],
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Types of Advance Directives
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-mpl-blue text-white flex items-center justify-center">
                <card.icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-600">{card.description}</p>
              <div className="mt-4 rounded-xl border border-mpl-blue/20 p-4">
                <p className="text-xs uppercase tracking-wide font-bold text-mpl-blue">
                  {card.listTitle}
                </p>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  {card.list.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const items = [
    "Honor your wishes with written instructions",
    "Reduce family burden during crises",
    "Guide healthcare providers clearly",
    "Strengthen legal protection for your preferences",
    "Support cost management and decision consistency",
    "Provide peace of mind for your family",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Why Advance Directives Are Essential
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={item} className="rounded-xl bg-white border border-mpl-blue/20 p-5">
              <p className="text-gray-700">
                <span className="font-bold text-mpl-blue mr-2">{i + 1}.</span>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HealthcareChoices = () => {
  const decisions = [
    "Ventilator use and breathing support",
    "CPR and emergency interventions",
    "Tube feeding and hydration",
    "Pain management preferences",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="rounded-2xl border border-mpl-blue/20 bg-white p-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-mpl-navy text-center">
            Healthcare Decisions to Consider
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {decisions.map((decision) => (
              <div key={decision} className="rounded-lg border border-mpl-blue/20 p-4 text-gray-700">
                {decision}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  const steps = [
    "Consultation to identify your care priorities",
    "Personal reflection on values and treatment goals",
    "Choose a trusted healthcare agent",
    "Document preferences with compliant forms",
    "Execution with proper signatures and witnesses",
    "Distribute copies to agents and providers",
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Creating Your Advance Directives
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div key={step} className="rounded-xl border border-mpl-blue/20 p-5 shadow-sm bg-white">
              <div className="w-8 h-8 rounded-full bg-mpl-blue text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <p className="mt-3 text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsiderationsSection = () => {
  const items = [
    "Discuss directives with family members and your healthcare agent",
    "Review and update documents after major life events",
    "Ensure accessibility so key people can find them quickly",
    "Confirm legal compliance with Texas requirements",
    "Coordinate with your doctors to align records",
    "Keep emergency copies available in critical moments",
  ];

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Important Considerations
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item} className="rounded-xl border border-mpl-blue/20 bg-white p-5">
              <div className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-mpl-blue mt-0.5" size={16} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvanceDirectives;
