import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Phone,
  Shield,
  FileText,
  Gavel,
  Scale,
  AlertTriangle,
  Users,
  Car,
  FileSearch,
  Ban,
  RefreshCcw,
  Baby,
  BarChart3,
  MessagesSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const DWI = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="DWI Lawyer in San Antonio"
        subtitle="Aggressive defense for driving while intoxicated charges."
        opening={[
          "A DWI arrest can happen in a moment, but the consequences can follow you for years.",
          "From license suspension to fines and possible jail time, it is important to understand your options immediately.",
        ]}
        infoTitle="What This Means"
        infoDescription="Driving While Intoxicated charges in Texas carry serious penalties, even for a first offense. You may also face administrative license suspension separate from your criminal case."
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
      desc: "Strategic defense to challenge evidence and protect your record.",
    },
    {
      title: "Defense Analysis",
      icon: FileSearch,
      desc: "Thorough review of stops, tests, and procedures for weaknesses.",
    },
    {
      title: "License Protection",
      icon: Ban,
      desc: "Guidance for ALR hearings and occupational licenses.",
    },
    {
      title: "Case Investigation",
      icon: FileText,
      desc: "Independent investigation, witness review, and evidence gathering.",
    },
    {
      title: "Strategic Defense",
      icon: Scale,
      desc: "Tailored strategy aimed at dismissal, reduction, or acquittal.",
    },
    {
      title: "Rights Protection",
      icon: Shield,
      desc: "Focused advocacy to safeguard your constitutional rights.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Why Choose Our DWI Defense Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide aggressive DWI defense representation to protect your
            rights and minimize consequences.
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
      title: "Initial Consultation",
      icon: Users,
      desc: "We discuss your case, goals, and immediate options to protect your license and future.",
      bullets: [
        "Case overview",
        "Immediate advice",
        "Timeline planning",
        "Rights explained",
      ],
    },
    {
      id: 2,
      title: "Case Investigation",
      icon: FileSearch,
      desc: "We obtain and scrutinize reports, videos, and tests to identify weaknesses.",
      bullets: [
        "Evidence collection",
        "Stop legality review",
        "Test protocol analysis",
        "Witness interviews",
      ],
    },
    {
      id: 3,
      title: "Evidence Analysis",
      icon: Scale,
      desc: "We analyze legal and scientific issues, preparing foundational strategy and technical support as needed.",
      bullets: [
        "Probable cause review",
        "Test reliability analysis",
        "Consultation support",
        "Strategy development",
      ],
    },
    {
      id: 4,
      title: "Motion Filing",
      icon: FileText,
      desc: "We file targeted motions to suppress or exclude improper evidence and procedures.",
      bullets: [
        "Motion to suppress",
        "Discovery enforcement",
        "Evidentiary challenges",
        "Procedure objections",
      ],
    },
    {
      id: 5,
      title: "Negotiation",
      icon: MessagesSquare,
      desc: "We pursue favorable resolutions where appropriate, aiming for dismissals or reductions.",
      bullets: [
        "Charge reduction",
        "Alternative sentencing",
        "Deferred options",
        "Program referrals",
      ],
    },
    {
      id: 6,
      title: "Trial Representation",
      icon: Gavel,
      desc: "If needed, we defend you at trial with strategic advocacy and evidence challenges.",
      bullets: [
        "Jury advocacy",
        "Cross‑examination",
        "Evidence challenges",
        "Closing arguments",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            The DWI Defense Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            The DWI Defense Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understanding the steps involved in DWI defense proceedings in
            Texas.
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
      title: "First‑Time DWI",
      icon: Car,
      desc: "Defense for first offenses, focusing on dismissal or reduction.",
    },
    {
      title: "Repeat DWI Offense",
      icon: RefreshCcw,
      desc: "Aggressive defense for repeat charges with enhanced penalties.",
    },
    {
      title: "Refusal Cases",
      icon: Ban,
      desc: "Defense when breath or blood tests were refused and ALR issues arise.",
    },
    {
      title: "DWI with Accident",
      icon: AlertTriangle,
      desc: "Strategic defense for cases involving accidents or property damage.",
    },
    {
      title: "DWI with Child Passenger",
      icon: Baby,
      desc: "Focused representation for elevated charges involving minors.",
    },
    {
      title: "High BAC Cases",
      icon: BarChart3,
      desc: "Challenging test procedures and results in elevated BAC allegations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Types of DWI Cases We Handle
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive DWI defense representation for all types of DWI charge
            situations.
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
              Facing DWI Charges?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Take control of the situation early. Schedule your consultation
              today.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-mpl-navy px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-gray-100"
              >
                <Shield size={18} /> Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DWI;
