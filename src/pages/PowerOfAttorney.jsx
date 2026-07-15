import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  Shield,
  Wallet,
  HeartPulse,
  FileText,
  Flame,
  Globe,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";
import CleanServiceHero from "../components/CleanServiceHero";

const PowerOfAttorney = () => {
  const relatedLinks = [
    { label: "Estate Planning", to: "/estate-planning" },
    { label: "Advance Directives", to: "/advance-directives" },
    { label: "Will Services", to: "/will" },
    { label: "Trust Services", to: "/trust" },
    { label: "Asset Protection", to: "/asset-protection" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Power of Attorney"
        subtitle="Protect your interests when you can't act for yourself."
        infoTitle="What is a Power of Attorney?"
        infoDescription="A Power of Attorney (POA) is a legal document that authorizes a trusted person to act on your behalf for financial, legal, or medical matters if you become unable to make decisions."
      />
      <TypesSection />
      <BenefitsSection />
      <StepsSection />
      <ConsiderationsSection />
      <ServiceSubpageCTA
        heading="Put Your Power of Attorney in Place"
        description="Make sure your legal and medical decision-making authority is clear before an emergency happens."
        relatedTitle="Related Estate Planning Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const TypesSection = () => {
  const cards = [
    {
      icon: Shield,
      title: "Durable Power of Attorney",
      description:
        "Remains effective if you become incapacitated and provides long-term protection.",
      listTitle: "Key Features",
      list: [
        "Survives incapacity",
        "Comprehensive authority",
        "Financial and legal matters",
      ],
    },
    {
      icon: Wallet,
      title: "Financial Power of Attorney",
      description:
        "Specifically authorizes handling finances, accounts, and transactions.",
      listTitle: "Covers",
      list: [
        "Banking and investments",
        "Tax and business matters",
        "Real estate transactions",
      ],
    },
    {
      icon: HeartPulse,
      title: "Medical Power of Attorney",
      description:
        "Allows a trusted person to make healthcare decisions when needed.",
      listTitle: "Includes",
      list: [
        "Treatment choices",
        "Provider communication",
        "End-of-life directives",
      ],
    },
    {
      icon: FileText,
      title: "Limited Power of Attorney",
      description:
        "Grants authority for specific tasks or for a specific period.",
      listTitle: "Examples",
      list: [
        "Single sale closing",
        "Specific legal filing",
        "Temporary travel needs",
      ],
    },
    {
      icon: Flame,
      title: "Springing Power of Attorney",
      description: "Becomes active only when predefined conditions are met.",
      listTitle: "Characteristics",
      list: [
        "Triggered by incapacity",
        "Defined activation events",
        "Automatic activation",
      ],
    },
    {
      icon: Globe,
      title: "General Power of Attorney",
      description:
        "Broad authority over routine legal and financial decisions.",
      listTitle: "Scope",
      list: [
        "Legal matters handling",
        "Asset management",
        "Business operations",
      ],
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Types of Power of Attorney
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Motion.div
              key={card.title}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
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
  const benefits = [
    "Avoid guardianship proceedings",
    "Immediate access to important decisions",
    "Personal choice over who acts for you",
    "Asset protection and continuity",
    "Healthcare decisions aligned with your wishes",
    "Peace of mind for families",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Why Power of Attorney is Essential
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <div
              key={benefit}
              className="rounded-xl bg-white border border-mpl-blue/20 p-5"
            >
              <p className="text-gray-700">
                <span className="font-bold text-mpl-blue mr-2">{i + 1}.</span>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  const steps = [
    "Consultation and planning based on your priorities",
    "Choose your primary and backup agents",
    "Define powers and limitations clearly",
    "Prepare and review legal documents",
    "Execute with proper signatures and notarization",
    "Distribute copies and store originals safely",
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Creating Your Power of Attorney
        </h2>
        <div className="mt-10 space-y-4">
          {steps.map((step, i) => (
            <div key={step} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-mpl-navy text-white text-sm font-bold flex items-center justify-center mt-1">
                {i + 1}
              </div>
              <div className="flex-1 rounded-xl border border-mpl-blue/20 bg-white p-5 shadow-sm text-gray-700">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsiderationsSection = () => {
  const items = [
    "Choose an agent you trust and who can act reliably",
    "Define scope clearly: broad vs. limited authority",
    "Set trigger conditions for springing POA if needed",
    "Review and update regularly as life changes",
    "Coordinate with wills and trusts for consistency",
    "Keep copies accessible for emergencies",
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Important Considerations
        </h2>
        <div className="mt-8 rounded-2xl border border-mpl-blue/20 bg-white p-6 shadow-sm space-y-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 flex gap-2">
            <AlertTriangle className="mt-0.5" size={16} />
            <span>
              A poorly drafted Power of Attorney can cause delays and disputes.
            </span>
          </div>
          {items.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-mpl-blue/20 p-4 text-gray-700 flex gap-2"
            >
              <CheckCircle className="text-mpl-blue mt-0.5" size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerOfAttorney;
