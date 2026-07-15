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
  Syringe,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const DrugCharges = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Drug Charges Defense in San Antonio"
        subtitle="Strategic defense for possession, distribution, and manufacturing charges."
        opening="Being charged with a drug offense can leave you uncertain about what happens next and how it could affect your future."
        infoTitle="What This Means"
        infoDescription="Drug charges can include possession, distribution, or manufacturing. Penalties vary depending on the type and amount involved."
      />
      <ImmediateHelpBanner />
      <OverviewSection />
      <TypesSection />
      <PenaltyGroupsSection />
      <DefenseStrategiesSection />
      <ConsequencesSection />
      <AlternativeTreatmentSection />
      <ProcessSection />
      <CTA />
      <RelatedServices />
    </div>
  );
};

const ImmediateHelpBanner = () => {
  return (
    <section className="bg-mpl-blue py-16 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-linear-to-r from-mpl-navy/50 to-transparent"></div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-white font-bold mb-3">
            Arrested for Drugs?
          </h2>
          <p className="text-white/80 max-w-2xl text-lg">
            Drug charges carry harsh penalties. Immediate legal representation
            is essential to protect your rights.
          </p>
        </div>

        <Link
          to="/contact"
          className="bg-white text-mpl-blue hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap"
        >
          <Phone size={20} className="fill-current" />
          <span>Case Consultation</span>
        </Link>
      </div>
    </section>
  );
};

const OverviewSection = () => {
  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute -top-20 -left-24 w-96 h-96 rounded-full bg-mpl-lightBlue/20 blur-3xl"
        />
        <div className="relative bg-white rounded-2xl border border-gray-200 shadow-md p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-4 text-center">
            Understanding Drug Charges in Texas
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Drug charges in Texas range from simple possession to trafficking
            offenses, with penalties that can escalate depending on the type,
            amount, and circumstances. Texas Controlled Substances Act
            categorizes drugs into penalty groups, which influence the severity
            of punishment. Each case is unique, and defense strategies typically
            involve the suppression of evidence, challenging chain of custody,
            and asserting constitutional rights. Understanding the specific
            classification of the drug and a full legal assessment prepares your
            case with sound strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

const TypesSection = () => {
  const items = [
    {
      title: "Drug Possession",
      desc: "Having illegal substances in your control, whether on your person, in your vehicle, or residence. Severity depends on amount and drug type.",
      label: "POTENTIAL PENALTIES",
      bullets: [
        "Fines and jail time",
        "Probation eligibility",
        "Criminal record implications",
        "License consequences",
      ],
    },
    {
      title: "Manufacturing or Delivery",
      desc: "Manufacturing, processing, or delivering controlled substances can result in severe penalties. Charges vary based on quantity, location, and intent.",
      label: "CHARGES",
      bullets: [
        "Felony offenses",
        "10+ degree felony ranges",
        "Asset forfeiture risks",
        "Enhanced penalties near schools",
      ],
    },
    {
      title: "Drug Trafficking",
      desc: "Large‑scale distribution or transportation. Law enforcement focuses on controlled buys, surveillance, and interstate activity.",
      label: "RISKY PRACTICES",
      bullets: [
        "Undercover operations",
        "Conspiracy allegations",
        "Sentencing enhancements",
        "Federal involvement possible",
      ],
    },
    {
      title: "Prescription Drug Crimes",
      desc: "Unlawful obtaining or distribution of prescription drugs, including ‘doctor shopping’, forging scripts, or selling pills.",
      label: "CHARGES INCLUDE",
      bullets: [
        "Fraud allegations",
        "Possession by misrepresentation",
        "Tampering accusations",
        "Insurance issues",
      ],
    },
    {
      title: "Drug Paraphernalia",
      desc: "Possessing, manufacturing, or delivering equipment to use, package, or distribute controlled substances.",
      label: "EXAMPLES",
      bullets: [
        "Pipes, scales, baggies",
        "Manufacturing tools",
        "Distribution materials",
        "Intent considerations",
      ],
    },
    {
      title: "DWI with Controlled Substances",
      desc: "Driving while intoxicated by narcotics or controlled substances. Involves blood tests, impairment evidence, and statutory penalties.",
      label: "ADDITIONAL CONSEQUENCES",
      bullets: [
        "License suspension",
        "Ignition interlock",
        "Probation conditions",
        "Treatment requirements",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold">
            Types of Drug Charges
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-md p-8 overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <Syringe size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{card.desc}</p>
              <div className="text-xs font-bold tracking-wider text-gray-500 mb-2 uppercase">
                {card.label}:
              </div>
              <div className="space-y-2">
                {card.bullets.map((b, idx) => (
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

const PenaltyGroupsSection = () => {
  const groups = [
    {
      title: "Penalty Group 1",
      bullets: [
        "Heroin, cocaine, methamphetamine",
        "Severe felony ranges",
        "Strict weight thresholds",
      ],
    },
    {
      title: "Penalty Group 1‑A",
      bullets: [
        "LSD and derivatives",
        "Measured in dosage units",
        "Unique penalty scheme",
      ],
    },
    {
      title: "Penalty Group 2",
      bullets: [
        "MDMA, PCP, synthetic cannabinoids",
        "Enhanced for quantity",
        "Aggravating factors apply",
      ],
    },
    {
      title: "Penalty Group 3",
      bullets: [
        "Prescription depressants",
        "Potential fraud charges",
        "Doctor shopping issues",
      ],
    },
    {
      title: "Penalty Group 4",
      bullets: [
        "Certain compounds with active narcotics",
        "Complex classification",
        "Lower ranges possible",
      ],
    },
    {
      title: "Penalty Group 2‑A",
      bullets: [
        "Synthetic marijuana classes",
        "Constant legislative updates",
        "Lab testing disputes",
      ],
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-8 text-center">
            Texas Controlled Substances Penalty Groups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups.map((g, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-mpl-navy text-white flex items-center justify-center">
                    <Scale size={18} />
                  </div>
                  <h3 className="text-lg font-serif text-mpl-navy font-bold">
                    {g.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {g.bullets.map((b, idx) => (
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

const DefenseStrategiesSection = () => {
  const strategies = [
    {
      title: "Illegal Search & Seizure",
      desc: "Challenging unconstitutional searches and seizures under the Fourth Amendment.",
    },
    {
      title: "Lack of Knowledge",
      desc: "Arguing the accused was unaware of the presence or nature of the substance.",
    },
    {
      title: "Lack of Possession",
      desc: "Disputing actual care, custody, control, or management of the substance.",
    },
    {
      title: "Entrapment",
      desc: "Arguing law enforcement induced conduct the accused was not predisposed to commit.",
    },
    {
      title: "Lab Testing Issues",
      desc: "Challenging reliability, chain of custody, or testing method validity.",
    },
    {
      title: "Valid Prescription",
      desc: "Establishing lawful possession under a valid medical prescription.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold">
            Common Defense Strategies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strategies.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsequencesSection = () => {
  const items = [
    {
      title: "Lifetime Impact",
      desc: "A drug conviction creates lasting consequences that extend well beyond court penalties.",
    },
    {
      title: "Employment Barriers",
      desc: "Many employers conduct background checks; drug charges can limit job opportunities.",
    },
    {
      title: "Professional Licensing",
      desc: "Licensing boards may deny, suspend, or revoke licenses following convictions.",
    },
    {
      title: "Housing Discrimination",
      desc: "Landlords often deny rentals when drug convictions appear on background checks.",
    },
    {
      title: "Educational Impact",
      desc: "Scholarships, admissions, and financial aid decisions may be affected.",
    },
    {
      title: "Immigration Consequences",
      desc: "Some charges may trigger deportation, denial of status, or inadmissibility.",
    },
    {
      title: "Loss of Benefits",
      desc: "Drug convictions can limit government benefits, including housing assistance.",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-6 text-center">
            Long‑Term Consequences of Drug Convictions
          </h2>
          <div className="space-y-4">
            {items.map((it, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-4 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={16} />
                </div>
                <div>
                  <div className="font-serif font-semibold text-mpl-navy">
                    {it.title}
                  </div>
                  <div className="text-sm text-gray-700">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AlternativeTreatmentSection = () => {
  const items = [
    {
      title: "Drug Court Programs",
      desc: "Structured accountability programs focused on treatment and rehabilitation.",
    },
    {
      title: "Pre‑Trial Diversion",
      desc: "Alternatives that can lead to dismissal upon successful completion.",
    },
    {
      title: "Deferred Adjudication",
      desc: "Probation‑based outcome that may avoid a conviction on record.",
    },
    {
      title: "Rehabilitation Programs",
      desc: "Inpatient or outpatient treatment supporting recovery and mitigation.",
    },
    {
      title: "Community Service",
      desc: "Court‑approved service hours that can provide constructive benefits.",
    },
    {
      title: "House Arrest/Monitoring",
      desc: "Electronic monitoring options where available, reducing jail exposure.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold">
            Alternative Treatment Options
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {c.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{c.desc}</p>
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
      title: "Evidence Analysis",
      icon: FileSearch,
      desc: "We scrutinize the circumstances of your arrest, including search and seizure procedures, to find any violation of your rights.",
      bullets: [
        "Search warrant review",
        "Probable cause analysis",
        "Lab result verification",
        "Chain of custody check",
      ],
    },
    {
      id: 2,
      title: "Strategy Development",
      icon: Scale,
      desc: "We develop a defense strategy tailored to your specific case, whether it involves suppression of evidence or challenging intent.",
      bullets: [
        "Motion to suppress",
        "Negotiation strategy",
        "Trial preparation",
        "Diversion options",
      ],
    },
    {
      id: 3,
      title: "Plea Negotiation",
      icon: Users,
      desc: "When appropriate, we negotiate aggressively for reduced charges, probation, or participation in drug court programs.",
      bullets: [
        "Charge reduction",
        "Sentencing alternatives",
        "Drug court referral",
        "Deferred adjudication",
      ],
    },
    {
      id: 4,
      title: "Court Defense",
      icon: Gavel,
      desc: "We stand ready to defend you at trial, challenging the prosecution's case and advocating for your acquittal.",
      bullets: [
        "Jury trial advocacy",
        "Witness cross-examination",
        "Closing arguments",
        "Verdict defense",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            Our Defense Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            Defending Your Freedom
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We understand the intricacies of drug laws and leverage our
            experience to achieve the best possible outcome for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 group"
              >
                {/* Step Number Bubble */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-mpl-blue text-mpl-blue flex items-center justify-center font-serif font-bold text-2xl shadow-lg group-hover:bg-mpl-blue group-hover:text-white transition-colors duration-300">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
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
              Don't Risk Your Freedom
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Drug convictions can have life-long consequences. Contact us today
              for a strong defense.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg transform hover:-translate-y-1"
            >
              <AlertTriangle size={20} />
              <span>Get Defense Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const RelatedServices = () => {
  const services = [
    { label: "Criminal Defense", link: "/criminal-defense" },
    { label: "DWI Defense", link: "/dwi" },
    { label: "Domestic Violence", link: "/domestic-violence" },
    { label: "Protective Orders", link: "/protective-orders" },
    { label: "Expungement & Sealing", link: "/expungement-record-sealing" },
    { label: "Contact Us", link: "/contact" },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="container-custom text-center">
        <div className="text-mpl-navy font-serif text-2xl font-bold mb-6">
          Related Criminal Defense Services
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="px-5 py-2 rounded-full border border-gray-200 text-mpl-navy bg-white hover:bg-gray-50 font-semibold shadow-sm"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrugCharges;
