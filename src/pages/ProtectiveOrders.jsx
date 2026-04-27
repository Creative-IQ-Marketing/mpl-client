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
  FileSearch,
  AlertTriangle,
  Ban,
  Home,
  RefreshCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const ProtectiveOrders = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Protective Orders in San Antonio"
        subtitle="Seeking protection or defending your rights."
        opening={[
          "When your safety or your child's safety is at risk, you need to act quickly.",
          "Whether you are seeking protection or responding to an order, the decisions you make now can have immediate and lasting consequences.",
        ]}
        infoTitle="What This Means"
        infoDescription="A protective order is a legal tool designed to prevent contact and provide safety in situations involving family violence or threats."
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
      title: "Victim Protection",
      icon: Shield,
      desc: "Immediate representation to secure safety and legal protection.",
    },
    {
      title: "Defense Representation",
      icon: Gavel,
      desc: "Aggressive defense when you are falsely accused or overcharged.",
    },
    {
      title: "Emergency Orders",
      icon: AlertTriangle,
      desc: "Guidance on emergency protective orders and urgent filings.",
    },
    {
      title: "Comprehensive Documentation",
      icon: FileText,
      desc: "Meticulous preparation of affidavits and supporting records.",
    },
    {
      title: "Strategic Approach",
      icon: Scale,
      desc: "Tailored strategy based on your situation and long‑term goals.",
    },
    {
      title: "Enforcement Support",
      icon: Ban,
      desc: "Assistance with compliance, enforcement, and modification issues.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Why Choose Our Protective Orders Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive, practical representation for both filing
            and defending against protective orders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
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
      desc: "We discuss your situation, whether you are seeking protection or have been served with an order, and explain your options.",
      bullets: [
        "Confidential assessment",
        "Review of evidence",
        "Explanation of order types",
        "Strategy planning",
      ],
    },
    {
      id: 2,
      title: "Filing & Response",
      icon: FileText,
      desc: "We prepare and file all necessary legal documents, including applications for protective orders or responses to existing ones.",
      bullets: [
        "Application drafting",
        "Affidavit preparation",
        "Filing with the court",
        "Service of process",
      ],
    },
    {
      id: 3,
      title: "Hearing Preparation",
      icon: FileSearch,
      desc: "We gather evidence, prepare witnesses, and build a strong case for your hearing.",
      bullets: [
        "Evidence organization",
        "Witness preparation",
        "Legal argument drafting",
        "Courtroom strategy",
      ],
    },
    {
      id: 4,
      title: "Court Representation",
      icon: Gavel,
      desc: "We advocate for you in court to ensure your safety is prioritized or your rights are protected against false claims.",
      bullets: [
        "Hearing representation",
        "Cross-examination",
        "Argument presentation",
        "Order negotiation",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            The Protective Orders Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            The Protective Orders Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understanding the steps involved in protective order proceedings in
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
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
      title: "Emergency Protective Orders (EPO)",
      icon: AlertTriangle,
      desc: "Immediate protection following arrests or urgent situations.",
    },
    {
      title: "Family Violence Protective Orders",
      icon: Home,
      desc: "Representation in cases involving spouses, partners, or relatives.",
    },
    {
      title: "Harassment Protective Order",
      icon: FileText,
      desc: "Addressing harassment allegations, including electronic communications.",
    },
    {
      title: "False Accusation Defense",
      icon: Gavel,
      desc: "Challenging unfounded claims and protecting your reputation.",
    },
    {
      title: "Restraining Order Violations",
      icon: Ban,
      desc: "Defense and guidance when accused of violating orders.",
    },
    {
      title: "Protective Order Modifications",
      icon: RefreshCcw,
      desc: "Seeking changes to existing orders to reflect new circumstances.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Types of Protective Orders We Handle
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive representation for various protective order
            situations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
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
              Need Help with Protective Orders?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Whether you need protection or are facing false accusations,
              contact our experienced protective orders attorneys now.
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

export default ProtectiveOrders;
