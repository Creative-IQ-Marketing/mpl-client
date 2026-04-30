import React from "react";
import CleanServiceHero from "../components/CleanServiceHero";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const Will = () => {
  const relatedLinks = [
    { label: "Estate Planning", to: "/estate-planning" },
    { label: "Trust Services", to: "/trust" },
    { label: "Asset Protection", to: "/asset-protection" },
    { label: "Power of Attorney", to: "/power-of-attorney" },
    { label: "Advance Directives", to: "/advance-directives" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="San Antonio Will Attorney — Why a Will Matters"
        subtitle="Protect your legacy and your family's future."
        infoTitle="What is a Will?"
        infoDescription="A will is a legal document that directs how your property should be distributed after death. It names an executor to handle your estate and can specify guardians for minor children."
      />
      <Protections />
      <ServiceSubpageCTA
        heading="Protect Your Family’s Future Today"
        description="Start planning now so your wishes are documented and enforceable."
        relatedTitle="Related Estate Planning Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const Protections = () => {
  const cards = [
    {
      title: "Distributes Assets",
      desc: "A will identifies how your property should pass to beneficiaries.",
      example:
        "A parent can direct specific property to a child while naming equal shares of remaining assets.",
    },
    {
      title: "Appoints an Executor",
      desc: "A will names the person responsible for handling your estate administration.",
      example:
        "A trusted family member can be appointed to manage filings, notices, and distributions.",
    },
    {
      title: "Facilitates Probate",
      desc: "A valid will helps streamline probate by clarifying your intentions.",
      example:
        "Clear instructions may reduce confusion and avoid avoidable delays in court.",
    },
    {
      title: "Names Guardians for Minors",
      desc: "Parents can nominate guardians to care for minor children.",
      example:
        "If both parents pass away, the nominated guardian can provide continuity for children.",
    },
    {
      title: "Minimizes Family Disputes",
      desc: "Written instructions can reduce conflict and uncertainty.",
      example:
        "When heirs understand your directions, disagreements are less likely to escalate.",
    },
    {
      title: "Helps Reduce Legal Risk",
      desc: "A properly drafted will supports compliance and legal clarity.",
      example:
        "Clear language and execution formalities lower risk of will contests.",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Essential Estate Planning Protection
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          A will is a foundational estate planning tool that helps ensure your
          wishes are honored.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold text-mpl-navy">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-600">{card.desc}</p>
              <div className="mt-4 rounded-xl border border-mpl-blue/20 p-4">
                <p className="text-xs uppercase tracking-wide font-bold text-mpl-blue">
                  Example
                </p>
                <p className="mt-2 text-sm text-gray-700">{card.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Will;
