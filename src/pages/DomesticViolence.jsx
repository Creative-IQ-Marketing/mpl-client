import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Phone,
  Shield,
  FileText,
  Gavel,
  Scale,
  Users,
  Home,
  FileSearch,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const DomesticViolence = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Domestic Violence Defense in San Antonio"
        subtitle="Legal support for complex family situations."
        opening={[
          "An accusation of assault or family violence can escalate quickly and affect every part of your life.",
          "These cases often involve heightened emotions, conflicting stories, and serious consequences.",
        ]}
        infoTitle="What This Means"
        infoDescription="Domestic violence allegations in Texas can range from misdemeanors to felonies. A conviction can impact your record, employment, and custody rights."
      />
      <BenefitsSection />
      <ProcessSection />
      <TypesSection />
      <CTA />
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Aggressive Defense",
      icon: Gavel,
      desc: "Strategic representation aimed at dismissal or reduction of charges.",
    },
    {
      title: "Defense Analysis",
      icon: FileSearch,
      desc: "Thorough review of evidence, reports, and procedures for weaknesses.",
    },
    {
      title: "False Accusation Defense",
      icon: AlertTriangle,
      desc: "Focused defense against false allegations and misinterpretations.",
    },
    {
      title: "Case Investigation",
      icon: FileText,
      desc: "Independent investigation, witness interviews, and documentation review.",
    },
    {
      title: "Strategic Defense",
      icon: Scale,
      desc: "Tailored strategy for negotiation or trial based on your situation.",
    },
    {
      title: "Rights Protection",
      icon: Shield,
      desc: "Advocacy to protect your constitutional rights at every stage.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Why Choose Our Domestic Violence Defense Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide aggressive domestic violence defense representation to
            protect your rights and reputation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <b.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-3">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Confidential Assessment",
      icon: Shield,
      desc: "We listen to your side of the story in a safe, confidential setting to understand the full context of the allegations.",
      bullets: [
        "Private consultation",
        "Fact-finding interview",
        "Review of charges",
        "Immediate legal advice",
      ],
    },
    {
      id: 2,
      title: "Protective Order Defense",
      icon: FileText,
      desc: "We represent you in hearings regarding Emergency Protective Orders (EPO) or final Protective Orders to minimize restrictions.",
      bullets: [
        "EPO hearing representation",
        "Modification requests",
        "Violation prevention",
        "Rights protection",
      ],
    },
    {
      id: 3,
      title: "Evidence Gathering",
      icon: FileSearch,
      desc: "We investigate the claims, interview witnesses, and gather evidence that supports your version of events.",
      bullets: [
        "Witness statements",
        "Digital evidence review",
        "Background investigation",
        "Character evidence",
      ],
    },
    {
      id: 4,
      title: "Resolution Strategy",
      icon: Scale,
      desc: "We work tirelessly to have charges dismissed, reduced, or to secure an acquittal at trial.",
      bullets: [
        "Dismissal negotiation",
        "Charge reduction",
        "Trial defense",
        "Record clearing options",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            The Domestic Violence Defense Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            The Domestic Violence Defense Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understanding the steps involved in domestic violence defense
            proceedings in Texas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                transition={{ delay: 0 }}
                className="relative flex flex-col md:flex-row gap-8 group"
              >
                {/* Step Number Bubble */}
                <div className="shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-mpl-blue text-mpl-blue flex items-center justify-center font-serif font-bold text-2xl shadow-lg group-hover:bg-mpl-blue group-hover:text-white transition-colors duration-300">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="grow bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-mpl-blue/10 p-3 rounded-lg text-mpl-blue">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-serif text-mpl-navy font-bold mt-1">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <span className="text-mpl-gold mr-2 text-xs">●</span>{" "}
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TypesSection = () => {
  const types = [
    {
      title: "Family Violence",
      icon: Home,
      desc: "Defense for allegations involving spouses, partners, or family members.",
    },
    {
      title: "False Accusations",
      icon: AlertTriangle,
      desc: "Strategic defense to counter false claims and protect your reputation.",
    },
    {
      title: "Assault Charges",
      icon: Gavel,
      desc: "Representation for misdemeanor and felony assault allegations.",
    },
    {
      title: "Harassment Charges",
      icon: FileText,
      desc: "Defense for harassment claims, including electronic communications.",
    },
    {
      title: "Child‑Related Charges",
      icon: Users,
      desc: "Sensitive representation in cases involving children and custody dynamics.",
    },
    {
      title: "Protective Order",
      icon: Shield,
      desc: "Assistance with protective order hearings and compliance guidance.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Types of Domestic Violence Cases We Handle
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive defense representation for all types of domestic
            violence charge situations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <motion.div
              key={i}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <t.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-3">
                {t.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-mpl-navy rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-mpl-blue/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Facing Domestic Violence Charges?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Don't face accusations of domestic violence alone. Contact our
              experienced defense team today for immediate guidance.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                <Shield size={18} /> Schedule Consultation
              </Link>
              <a
                href="tel:7262044044"
                className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                <Phone size={18} /> Call (726) 204-4044
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomesticViolence;
