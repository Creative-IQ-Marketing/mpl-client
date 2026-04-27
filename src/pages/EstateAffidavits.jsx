import React from "react";
import {
  FileText,
  Users,
  Package,
  ScrollText,
  Mountain,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const EstateAffidavits = () => {
  const relatedLinks = [
    { label: "Probate Law", to: "/probate-law" },
    { label: "Heirship Proceedings", to: "/heirship-proceedings" },
    { label: "Muniment of Title", to: "/muniment-of-title" },
    { label: "Probate Litigation", to: "/probate-litigation" },
    { label: "Estate Planning", to: "/estate-planning" },
    { label: "Will Services", to: "/will" },
    { label: "Trust Services", to: "/trust" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Types />
      <Eligibility />
      <Process />
      <Advantages />
      <ServiceSubpageCTA
        heading="Simplify Your Estate Transfer"
        description="Determine if estate affidavits are right for your situation. We can help you navigate requirements and filing steps."
        relatedTitle="Related Estate Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const Hero = () => (
  <section className="pt-24 pb-12 bg-white mt-20">
    <div className="container-custom text-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-mpl-navy">
        Estate Affidavits
      </h1>
      <p className="mt-3 text-gray-600 text-lg">
        Simplified asset transfer for small estates.
      </p>

      <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-5xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy">
          What are Estate Affidavits?
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Estate affidavits are legal documents that can simplify transfer of
          assets in certain situations without a full probate administration.
          When available, they can reduce time, cost, and court involvement.
        </p>
      </div>
    </div>
  </section>
);

const Types = () => {
  const cards = [
    {
      icon: FileText,
      title: "Small Estate Affidavit",
      desc: "Used to transfer certain property from a qualifying small estate without a full probate administration.",
      listTitle: "Often covers",
      list: ["Personal property", "Wages and salary", "Insurance proceeds"],
    },
    {
      icon: Users,
      title: "Affidavit of Heirship",
      desc: "Establishes family history and heir relationships to support certain property transfers.",
      listTitle: "Used for",
      list: ["Real estate transfers", "Title resolution support", "Property ownership clarification"],
    },
    {
      icon: Package,
      title: "Collection of Personal Property",
      desc: "Affidavits can assist with collecting personal property assets under certain conditions.",
      listTitle: "Includes",
      list: ["Vehicles", "Household items", "Personal belongings"],
    },
    {
      icon: ScrollText,
      title: "Spousal Property Affidavit",
      desc: "Helps document and transfer certain property between spouses in qualifying scenarios.",
      listTitle: "Transfers",
      list: ["Community property", "Joint bank accounts", "Household property"],
    },
    {
      icon: Mountain,
      title: "Mineral Interest Affidavit",
      desc: "Used to support transfer or clarification of mineral interests in certain estates.",
      listTitle: "Covers",
      list: ["Oil and gas rights", "Royalty payments", "Mineral ownership"],
    },
    {
      icon: CreditCard,
      title: "Bank Account Affidavit",
      desc: "May be used for limited bank account transfers depending on the institution and circumstances.",
      listTitle: "Applies to",
      list: ["Checking accounts", "Savings accounts", "Certificate of deposit"],
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Types of Estate Affidavits
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-mpl-blue text-white flex items-center justify-center">
                <card.icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-600">{card.desc}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Eligibility = () => {
  const items = [
    "Days must pass after death (varies by affidavit type)",
    "Estate value must meet specific size thresholds",
    "No probate administration has been commenced",
    "Proper legal documentation and sworn statements are required",
  ];

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          General Eligibility Requirements
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-mpl-blue/20 bg-white p-5 text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    "Eligibility review based on the estate and affidavit type",
    "Document preparation and required sworn statements",
    "Witness requirements (if applicable)",
    "Notarization and proper execution",
    "Filing or recording where required",
    "Asset transfer based on accepted documentation",
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          The Affidavit Process
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step}
              className="rounded-xl border border-mpl-blue/20 p-5 shadow-sm bg-white"
            >
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

const Advantages = () => {
  const items = [
    "Speed",
    "Cost-effective",
    "Simplified process",
    "Privacy",
    "Targeted solutions",
    "No court supervision in some cases",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Advantages of Estate Affidavits
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white border border-mpl-blue/20 p-5"
            >
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

export default EstateAffidavits;
