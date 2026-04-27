import React from "react";
import { CheckCircle } from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const HeirshipProceedings = () => {
  const relatedLinks = [
    { label: "Probate Law", to: "/probate-law" },
    { label: "Muniment of Title", to: "/muniment-of-title" },
    { label: "Probate Litigation", to: "/probate-litigation" },
    { label: "Will Services", to: "/will" },
    { label: "Trust Services", to: "/trust" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Process />
      <Requirements />
      <ServiceSubpageCTA
        heading="Need Help with Heirship Proceedings?"
        description="Heirship proceedings can be complex. We guide clients through each step to protect ownership rights."
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
        Heirship Proceedings
      </h1>
      <p className="mt-3 text-gray-600 text-lg">
        Establish legal ownership of inherited property.
      </p>
      <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-5xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy">
          What are Heirship Proceedings?
        </h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Heirship proceedings determine rightful heirs when someone passes away
          without a valid will. The court confirms ownership rights in order to
          transfer property and settle estate issues.
        </p>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { title: "File Petition", desc: "A petition is filed to begin the heirship case in probate court." },
    { title: "Court Investigation", desc: "The court appoints an attorney ad litem to review records and identify heirs." },
    { title: "Notice to Heirs", desc: "All potential heirs are notified and given a chance to participate." },
    { title: "Court Hearing", desc: "Evidence and testimony are presented before the court." },
    { title: "Judgment", desc: "The court signs an order declaring legal heirs and ownership interests." },
    { title: "Property Transfer", desc: "The judgment supports title transfer and estate distribution." },
  ];
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          The Heirship Process
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-mpl-navy text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Requirements = () => {
  const items = [
    "Death certificate",
    "Family history and heir information",
    "Property ownership records",
    "Supporting legal documents",
    "Witness testimony",
    "Probate legal representation",
  ];

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Common Requirements
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

export default HeirshipProceedings;
