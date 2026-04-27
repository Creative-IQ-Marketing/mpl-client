import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle,
  FileCheck,
  FileSearch,
  FileText,
  Gavel,
  Home,
  Phone,
  School,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const ExpungementRecordSealing = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Expungement & Record Sealing in San Antonio"
        subtitle="Clear your record and move forward."
        opening="Your past should not continue to hold you back. If you qualify, you may be able to clear or seal your criminal record."
        infoTitle="What This Means"
        infoDescription="Expungement removes a record completely, while record sealing limits who can access it."
      />
      <OverviewSection />
      <OptionsSection />
      <EligibilitySection />
      <BenefitsSection />
      <ProcessSection />
      <ConsiderationsSection />
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-4">
            Understanding Record Clearing Options
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Expungement and record sealing are legal processes that allow you to
            clear a criminal record from public view. Each option has specific
            requirements in Texas and different outcomes. Our experienced
            criminal defense attorneys can help determine your eligibility and
            guide you through the complex process.
          </p>
        </div>
      </div>
    </section>
  );
};

const OptionsSection = () => {
  const options = [
    {
      title: "Expunction (Expungement)",
      icon: FileCheck,
      desc: "Complete removal of arrest records and related documents from public view.",
      label: "BENEFITS",
      bullets: [
        "Complete record destruction",
        "Legal right to deny arrest",
        "Restored rights and status",
        "Immediate background check relief",
      ],
    },
    {
      title: "Order of Nondisclosure",
      icon: Shield,
      desc: "Seals criminal records from public searches while allowing access to certain agencies.",
      label: "FEATURES",
      bullets: [
        "Seals records from public searches",
        "Still visible to government agencies",
        "Employment protection benefits",
        "Texas DPS processing",
      ],
    },
    {
      title: "Juvenile Record Sealing",
      icon: Users,
      desc: "Seals juvenile records to protect a young person’s future opportunities.",
      label: "BENEFITS",
      bullets: [
        "Protects future opportunities",
        "Prevents school record access",
        "Employment protection",
        "Military and licensing eligibility",
      ],
    },
    {
      title: "Governor’s Pardons",
      icon: Gavel,
      desc: "A pardon can restore rights and support additional record-clearing relief.",
      label: "REQUIREMENTS",
      bullets: [
        "Exceptional circumstances",
        "Criminal history review",
        "Demonstrated rehabilitation",
        "Documented supporting evidence",
      ],
    },
    {
      title: "Deferred Adjudication Sealing",
      icon: CheckCircle,
      desc: "Record sealing options after successful completion of deferred adjudication probation.",
      label: "ELIGIBILITY",
      bullets: [
        "Successful probation completion",
        "No new arrests",
        "Waiting period may apply",
        "Eligible offenses only",
      ],
    },
    {
      title: "Motion to Set Aside",
      icon: Scale,
      desc: "A court motion to set aside a disposition in qualifying situations.",
      label: "GROUNDS",
      bullets: [
        "Case dismissal or resolution",
        "Successful completion of terms",
        "No adjudication of guilt",
        "Court approval required",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold">
            Record Clearing Options
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <opt.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {opt.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{opt.desc}</p>
              <div className="text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">
                {opt.label}:
              </div>
              <div className="space-y-2">
                {opt.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-start text-sm text-gray-600"
                  >
                    <span className="text-mpl-blue mr-2">•</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  const items = [
    {
      title: "Dismissed Charges",
      icon: FileText,
      bullets: [
        "Charges dropped",
        "Not guilty verdict",
        "Charges never filed",
        "Case dismissed",
      ],
    },
    {
      title: "Completion Programs",
      icon: CheckCircle,
      bullets: [
        "Pretrial diversion completion",
        "Drug court completion",
        "Veterans court completion",
        "Community supervision completion",
      ],
    },
    {
      title: "Low‑Level Cases",
      icon: Shield,
      bullets: [
        "Certain Class C offenses",
        "Eligibility varies",
        "Non‑violent charges",
        "First‑time offenses",
      ],
    },
    {
      title: "Waiting Periods",
      icon: FileSearch,
      bullets: [
        "Class C: 180 days",
        "Class B: 1 year",
        "Class A: 2 years",
        "Felony: 3 years",
      ],
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-8 text-center">
            Expunction Eligibility Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((it, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-mpl-navy text-white flex items-center justify-center">
                    <it.icon size={18} />
                  </div>
                  <h3 className="text-lg font-serif text-mpl-navy font-bold">
                    {it.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {it.bullets.map((b, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="text-mpl-blue mr-2">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Employment Opportunities",
      icon: Users,
      desc: "Improves job prospects by removing record barriers.",
    },
    {
      title: "Housing Access",
      icon: Home,
      desc: "Helps qualify for apartments and rentals.",
    },
    {
      title: "Educational Benefits",
      icon: School,
      desc: "Supports admissions, scholarships, and advancement.",
    },
    {
      title: "Professional Licensing",
      icon: FileText,
      desc: "Assists with licensing and credential reviews.",
    },
    {
      title: "Restored Rights",
      icon: Shield,
      desc: "Removes restrictions and restores confidence.",
    },
    {
      title: "Peace of Mind",
      icon: CheckCircle,
      desc: "Lets you move forward without past mistakes resurfacing.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold">
            Benefits of Record Clearing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <b.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{b.desc}</p>
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
      title: "Case Evaluation",
      icon: Users,
      desc: "We review your background and case outcome to determine eligibility and the best option.",
      bullets: [
        "Eligibility review",
        "Option selection",
        "Timeline planning",
        "Next steps",
      ],
    },
    {
      id: 2,
      title: "Record Research",
      icon: FileSearch,
      desc: "We gather records from courts and agencies to ensure accuracy and completeness.",
      bullets: [
        "Court records",
        "Agency records",
        "Case confirmation",
        "Documentation review",
      ],
    },
    {
      id: 3,
      title: "Petition Preparation",
      icon: FileText,
      desc: "We draft and file the appropriate petition with supporting exhibits and legal authority.",
      bullets: [
        "Petition drafting",
        "Legal support",
        "Supporting exhibits",
        "Court filing",
      ],
    },
    {
      id: 4,
      title: "Notice to Agencies",
      icon: Shield,
      desc: "We provide required notice to law enforcement, prosecutors, and other agencies as needed.",
      bullets: [
        "Proper service",
        "Agency tracking",
        "Compliance checks",
        "Follow‑ups",
      ],
    },
    {
      id: 5,
      title: "Court Hearing",
      icon: Gavel,
      desc: "If required, we present your case and respond to objections in court.",
      bullets: [
        "Hearing prep",
        "Court advocacy",
        "Objection response",
        "Order request",
      ],
    },
    {
      id: 6,
      title: "Order Enforcement",
      icon: FileCheck,
      desc: "We ensure the signed order is processed and reflected across agencies and reports.",
      bullets: [
        "Order distribution",
        "Agency confirmation",
        "Record verification",
        "Client confirmation",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            The Record Clearing Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured, step‑by‑step approach to expungement and record
            sealing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
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
                <div className="flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-mpl-blue text-mpl-blue flex items-center justify-center font-serif font-bold text-2xl shadow-lg group-hover:bg-mpl-blue group-hover:text-white transition-colors duration-300">
                    {step.id}
                  </div>
                </div>

                <div className="flex-grow bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
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

const ConsiderationsSection = () => {
  const items = [
    {
      title: "Non‑Disclosure vs. Expunction",
      icon: Shield,
      desc: "Expunction destroys records; nondisclosure seals records from public searches.",
    },
    {
      title: "Complete Documentation",
      icon: FileText,
      desc: "Accurate case and agency information are required for successful filing.",
    },
    {
      title: "Waiting Period Compliance",
      icon: CheckCircle,
      desc: "Many options require strict waiting periods before eligibility begins.",
    },
    {
      title: "No Subsequent Offenses",
      icon: Users,
      desc: "Additional arrests or convictions can affect eligibility for record sealing.",
    },
    {
      title: "Court Procedures",
      icon: Gavel,
      desc: "Proper filing and compliance with court rules are essential.",
    },
    {
      title: "Proper Notice",
      icon: FileSearch,
      desc: "Some cases require notice to agencies, prosecutors, and other parties.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold text-center mb-8">
            Important Requirements &amp; Considerations
          </h2>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 flex items-start gap-3">
            <AlertTriangle
              className="text-red-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <div className="text-sm font-bold text-red-700">
                Non‑Disclosure Warning
              </div>
              <div className="text-sm text-gray-700">
                Eligibility depends on the outcome of your case, timing, and
                criminal history. A consultation helps avoid filing the wrong
                request.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {items.map((it, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-mpl-navy text-white flex items-center justify-center flex-shrink-0">
                    <it.icon size={16} />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-mpl-navy">
                      {it.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{it.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpungementRecordSealing;
