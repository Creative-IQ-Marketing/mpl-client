import React from "react";
import CleanServiceHero from "../components/CleanServiceHero";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const Trust = () => {
  const relatedLinks = [
    { label: "Estate Planning", to: "/estate-planning" },
    { label: "Will Services", to: "/will" },
    { label: "Asset Protection", to: "/asset-protection" },
    { label: "Power of Attorney", to: "/power-of-attorney" },
    { label: "Advance Directives", to: "/advance-directives" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Understanding Trusts in Estate Planning"
        subtitle="Secure your assets and protect your legacy."
        infoTitle="What is a Trust?"
        infoDescription="A trust is a legal arrangement that holds and manages assets for beneficiaries according to your specific instructions. Trusts can help avoid probate, strengthen control, and improve continuity across generations."
      />
      <TrustTypes />
      <FamilyScenario />
      <FAQ />
      <ServiceSubpageCTA
        heading="Want to Work with Us?"
        description="Trust planning is complex, but you do not have to navigate it alone."
        relatedTitle="Related Estate Planning Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const TrustTypes = () => {
  const types = [
    {
      title: "Revocable Living Trust",
      desc: "Can be changed during your lifetime and provides flexibility for ongoing management.",
    },
    {
      title: "Irrevocable Trust",
      desc: "Typically cannot be changed easily and may provide stronger tax or asset protection advantages.",
    },
    {
      title: "Testamentary Trust",
      desc: "Created through a will and becomes active upon death to manage distributions over time.",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Types of Trusts
        </h2>
        <div className="mt-8 space-y-4">
          {types.map((type) => (
            <div
              key={type.title}
              className="rounded-xl border border-mpl-blue/20 p-5 shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold text-mpl-navy">
                {type.title}
              </h3>
              <p className="mt-2 text-gray-600">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FamilyScenario = () => (
  <section className="py-12 bg-gray-50">
    <div className="container-custom max-w-4xl">
      <div className="rounded-2xl border border-mpl-blue/20 bg-white p-7 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-mpl-navy text-center">
          Common Family Scenario
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Families with multiple children often use trusts to control timing of
          distributions, protect inherited assets, and provide continuity if
          beneficiaries are minors.
        </p>
        <div className="mt-5 rounded-lg border border-mpl-blue/20 p-4 text-gray-700">
          By adding a trust, parents can direct staged distributions and appoint
          a trusted person to manage assets until beneficiaries are ready.
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const items = [
    {
      q: "What are the benefits of having a trust?",
      a: "Trusts can provide control over distributions, privacy, potential probate avoidance, and structured management for beneficiaries.",
    },
    {
      q: "Do I still need a will if I have a trust?",
      a: "Yes. A will can work alongside a trust and can address assets not transferred into the trust during your lifetime.",
    },
    {
      q: "How do I set up a trust?",
      a: "The process starts with planning goals, selecting the right trust type, drafting documents, and transferring assets appropriately.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {items.map((item, i) => (
            <div
              key={item.q}
              className="rounded-xl border border-mpl-blue/20 p-5 shadow-sm"
            >
              <h3 className="text-lg font-serif font-bold text-mpl-navy">
                {i + 1}. {item.q}
              </h3>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
