import React from "react";
import {
  Shield,
  Building2,
  Umbrella,
  Home,
  PiggyBank,
  FileStack,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";
import CleanServiceHero from "../components/CleanServiceHero";

const AssetProtection = () => {
  const relatedLinks = [
    { label: "Estate Planning", to: "/estate-planning" },
    { label: "Power of Attorney", to: "/power-of-attorney" },
    { label: "Advance Directives", to: "/advance-directives" },
    { label: "Trust Services", to: "/trust" },
    { label: "Will Services", to: "/will" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Asset Protection"
        subtitle="Safeguard your wealth from financial threats."
        infoTitle="What is Asset Protection?"
        infoDescription="Asset protection uses legal planning tools to reduce risk from lawsuits, creditors, and financial disruption. The objective is to preserve your assets while remaining compliant with applicable laws."
      />
      <Strategies />
      <Threats />
      <PlanningProcess />
      <Tools />
      <Considerations />
      <ServiceSubpageCTA
        heading="Build an Asset Protection Plan"
        description="Protect your estate, your family, and your long-term financial goals with a tailored strategy."
        relatedTitle="Related Estate Planning Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const Hero = () => (
  <section className="pt-24 pb-12 bg-white mt-20">
    <div className="container-custom text-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-mpl-navy">
        Asset Protection
      </h1>
      <p className="mt-3 text-gray-600 text-lg">
        Safeguard your wealth from financial threats.
      </p>
      <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-5xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy">
          What is Asset Protection?
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Asset protection uses legal planning tools to reduce risk from
          lawsuits, creditors, and financial disruption. The objective is to
          preserve your assets while remaining compliant with applicable laws.
        </p>
      </div>
    </div>
  </section>
);

const Strategies = () => {
  const items = [
    {
      icon: Shield,
      title: "Trust Structures",
      desc: "Use trusts to separate and protect assets under defined legal terms.",
      listTitle: "Benefits",
      list: ["Creditor protection", "Tax planning support", "Privacy controls"],
    },
    {
      icon: Building2,
      title: "Business Entity Formation",
      desc: "Use entities to separate personal and business liabilities.",
      listTitle: "Advantages",
      list: [
        "Liability isolation",
        "Operational flexibility",
        "Potential tax efficiency",
      ],
    },
    {
      icon: Umbrella,
      title: "Insurance Coverage",
      desc: "Layered insurance helps mitigate sudden financial exposure.",
      listTitle: "Covers",
      list: ["General liability", "Professional claims", "Property losses"],
    },
    {
      icon: Home,
      title: "Homestead Exemptions",
      desc: "Applicable exemptions may protect qualifying equity interests.",
      listTitle: "Protection",
      list: [
        "Primary residence safeguards",
        "Exemption scope review",
        "State-specific rules",
      ],
    },
    {
      icon: PiggyBank,
      title: "Retirement Account Optimization",
      desc: "Certain retirement assets can receive stronger legal protections.",
      listTitle: "Why this helps",
      list: [
        "Tax-advantaged growth",
        "Retirement security",
        "Protection from some claims",
      ],
    },
    {
      icon: FileStack,
      title: "Offshore Planning",
      desc: "Advanced strategies may diversify risk under proper legal guidance.",
      listTitle: "Best for",
      list: [
        "Complex estates",
        "High-value portfolios",
        "Risk diversification",
      ],
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Asset Protection Strategies
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-mpl-blue text-white flex items-center justify-center">
                <item.icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
              <div className="mt-4 rounded-xl border border-mpl-blue/20 p-4">
                <p className="text-xs uppercase tracking-wide font-bold text-mpl-blue">
                  {item.listTitle}
                </p>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  {item.list.map((entry) => (
                    <li key={entry}>• {entry}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Threats = () => {
  const items = [
    "Lawsuits and litigation exposure",
    "Medical expense shocks",
    "Divorce proceedings",
    "Business liabilities and guarantees",
    "Economic downturns and debt pressure",
    "Predatory creditor actions",
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Common Asset Threats
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item}
              className="rounded-xl bg-white border border-mpl-blue/20 p-5"
            >
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

const PlanningProcess = () => {
  const steps = [
    "Asset and risk assessment",
    "Strategy development aligned with your goals",
    "Legal structure implementation",
    "Asset transfer and document execution",
    "Insurance integration and coverage alignment",
    "Ongoing monitoring and periodic updates",
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Asset Protection Planning Process
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

const Tools = () => {
  const tools = [
    "Domestic trusts",
    "Spendthrift provisions",
    "Limited liability entities",
    "Tenancy by entirety",
    "Prenuptial agreements",
    "Family limited partnerships",
    "International structures",
    "Captive insurance",
  ];
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Protection Tools & Techniques
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-xl border border-mpl-blue/20 bg-white p-5 text-gray-700"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Considerations = () => {
  const items = [
    "Plan early before risks materialize",
    "Stay compliant with legal and tax requirements",
    "Balance protection with practical business needs",
    "Customize strategy to family and business goals",
  ];
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Important Planning Considerations
        </h2>
        <div className="mt-8 rounded-2xl border border-mpl-blue/20 bg-white p-6 shadow-sm space-y-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 flex gap-2">
            <AlertTriangle className="mt-0.5" size={16} />
            <span>
              Asset protection is most effective when implemented before claims
              or disputes arise.
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

export default AssetProtection;
