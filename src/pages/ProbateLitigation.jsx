import React from "react";
import { FileWarning, UserX, Users, ScrollText, Handshake, Home, Scale, Shield, Clock3 } from "lucide-react";
import ServiceSubpageCTA from "../components/ServiceSubpageCTA";

const ProbateLitigation = () => {
  const relatedLinks = [
    { label: "Probate Law", to: "/probate-law" },
    { label: "Heirship Proceedings", to: "/heirship-proceedings" },
    { label: "Muniment of Title", to: "/muniment-of-title" },
    { label: "Will Services", to: "/will" },
    { label: "Trust Services", to: "/trust" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Disputes />
      <LitigationProcess />
      <ProtectingRights />
      <ServiceSubpageCTA
        heading="Facing a Probate Dispute?"
        description="Our probate litigation attorneys work to protect your rights and interests in contested matters."
        relatedTitle="Related Legal Services"
        relatedLinks={relatedLinks}
      />
    </div>
  );
};

const Hero = () => (
  <section className="pt-24 pb-12 bg-white mt-20">
    <div className="container-custom text-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-mpl-navy">
        Probate Litigation
      </h1>
      <p className="mt-3 text-gray-600 text-lg">Resolve estate disputes and protect your rights.</p>
      <div className="mt-10 rounded-2xl border border-mpl-blue/20 p-6 text-left max-w-5xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy">What is Probate Litigation?</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Probate litigation addresses disputes during probate, including will contests,
          fiduciary concerns, inheritance issues, and property conflicts.
        </p>
      </div>
    </div>
  </section>
);

const Disputes = () => {
  const cards = [
    { icon: FileWarning, title: "Will Contests", list: ["Invalid execution", "Undue influence", "Lack of capacity"] },
    { icon: UserX, title: "Executor Misconduct", list: ["Mismanagement of assets", "Self-dealing", "Failure to account"] },
    { icon: Users, title: "Inheritance Disputes", list: ["Disputed heir claims", "Family conflicts", "Ambiguous provisions"] },
    { icon: ScrollText, title: "Trust Disputes", list: ["Trust administration issues", "Breach of duty", "Trust validity disputes"] },
    { icon: Handshake, title: "Guardianship Disputes", list: ["Competing appointments", "Alleged exploitation", "Court intervention"] },
    { icon: Home, title: "Property Disputes", list: ["Real property ownership", "Transfer disputes", "Asset distribution conflicts"] },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Common Types of Probate Disputes
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-mpl-blue/20 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-mpl-blue text-white flex items-center justify-center">
                <card.icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">{card.title}</h3>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                {card.list.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LitigationProcess = () => {
  const steps = [
    "Case evaluation and claim strategy",
    "Filing legal action and responsive pleadings",
    "Discovery process and document exchange",
    "Mediation and settlement negotiations",
    "Trial preparation and witness development",
    "Trial and resolution",
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          The Litigation Process
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

const ProtectingRights = () => {
  const cards = [
    { icon: Scale, title: "Document Everything", desc: "Maintain records to support your claims and defenses." },
    { icon: Clock3, title: "Act Quickly", desc: "Deadlines in probate disputes are strict." },
    { icon: Shield, title: "Expert Representation", desc: "Strategic advocacy can materially affect outcomes." },
  ];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          Protecting Your Rights
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="rounded-xl border border-mpl-blue/20 p-5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-mpl-blue text-white flex items-center justify-center">
                <card.icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-serif font-bold text-mpl-navy">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProbateLitigation;
