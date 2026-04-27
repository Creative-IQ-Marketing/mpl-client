import React from "react";
import { Zap, Wallet, FileText, ShieldCheck, Shield, CheckCircle } from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const MunimentOfTitle = () => {
  const relatedLinks = [
    { label: "Probate Law", to: "/probate-law" },
    { label: "Heirship Proceedings", to: "/heirship-proceedings" },
    { label: "Probate Litigation", to: "/probate-litigation" },
    { label: "Will Services", to: "/will" },
    { label: "Trust Services", to: "/trust" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Benefits />
      <Requirements />
      <Comparison />
      <ServiceSubpageCTA
        heading="Need Help with Muniment of Title?"
        description="When a full probate is unnecessary, muniment of title can simplify transfer of property rights."
        relatedTitle="Related Probate Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const Hero = () => (
  <section className="pt-24 pb-12 bg-white mt-20">
    <div className="container-custom text-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-mpl-navy">
        Muniment of Title
      </h1>
      <p className="mt-3 text-gray-600 text-lg">
        Simplified probate process for property transfer.
      </p>
      <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-5xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy">
          What is Muniment of Title?
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Muniment of title is a streamlined probate option that allows a will
          to be recognized without full administration when legal requirements
          are met.
        </p>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const cards = [
    { icon: Zap, title: "Faster Process", desc: "Often quicker than traditional probate administration." },
    { icon: Wallet, title: "Lower Cost", desc: "Usually requires less court involvement and fewer filings." },
    { icon: FileText, title: "Simplified Procedure", desc: "No executor administration in many qualifying cases." },
    { icon: Shield, title: "More Privacy", desc: "Reduced need for extensive public probate activity." },
    { icon: ShieldCheck, title: "Property Focus", desc: "Well-suited for title transfer and property-related estates." },
    { icon: CheckCircle, title: "No Ongoing Administration", desc: "Typically no continuing supervision once granted." },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Benefits of Muniment of Title
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-mpl-blue text-white flex items-center justify-center">
                <card.icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">{card.title}</h3>
              <p className="mt-3 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Requirements = () => {
  const items = [
    "Valid will",
    "No unpaid debts (other than secured liens)",
    "Will must dispose of all estate property",
    "Applicant is an interested person",
    "Court receives required proof and testimony",
    "No need for full administration",
  ];

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Requirements for Muniment of Title
        </h2>
        <div className="mt-8 rounded-2xl border border-mpl-blue/20 bg-white p-6 shadow-sm space-y-3">
          {items.map((item) => (
            <div key={item} className="rounded-lg border border-mpl-blue/20 p-4 text-gray-700 flex gap-2">
              <CheckCircle className="text-mpl-blue mt-0.5" size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const rows = [
    ["Timeline", "30-60 days", "6-12 months"],
    ["Cost", "Lower", "Higher"],
    ["Court Supervision", "Minimal", "Ongoing"],
    ["Debt Payment Process", "Not required in many cases", "Required"],
    ["Executor Role", "Often limited", "Required"],
  ];
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-custom max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Muniment of Title vs. Traditional Probate
        </h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-mpl-blue/20 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-mpl-navy text-white">
              <tr>
                <th className="px-4 py-3">Aspect</th>
                <th className="px-4 py-3">Muniment of Title</th>
                <th className="px-4 py-3">Traditional Probate</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-t border-gray-200">
                  <td className="px-4 py-3 font-semibold text-mpl-navy">{row[0]}</td>
                  <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MunimentOfTitle;
