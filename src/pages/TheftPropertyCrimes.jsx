import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  ChevronDown,
  Phone,
  Shield,
  FileText,
  Gavel,
  Scale,
  Users,
  FileSearch,
  Lock,
  Home,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const TheftPropertyCrimes = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Theft & Property Crime Lawyer in San Antonio"
        subtitle="Defense for theft and property crime charges."
        opening="A theft charge can impact your record, your employment opportunities, and your reputation."
        infoTitle="What This Means"
        infoDescription="Theft and property crimes can range from shoplifting to more serious offenses, with penalties increasing based on value and circumstances."
      />
      <OverviewSection />
      <TypesSection />
      <PenaltiesSection />
      <StrategiesSection />
      <ProcessSection />
      <RightsSection />
      <CTA />
      <RelatedServices />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590422144365-5c0a370e7041?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-mpl-blue/30 rounded-full blur-[100px] mix-blend-screen"
      />

      <div className="container-custom relative z-10 text-left">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4 text-white drop-shadow-xl">
            Theft & Property Crimes Defense
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            Aggressive Defense for Property Crime Charges
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
            We defend against theft, burglary, robbery, criminal mischief,
            fraud, and forgery with strategic, evidence‑driven advocacy.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-sm font-light tracking-widest uppercase text-white/80">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const OverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-4">
            Understanding Theft & Property Crimes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Theft and property crimes encompass a wide range of offenses
            involving the unlawful taking or damaging of another’s property.
            Penalties can vary based on value, prior history, and circumstances
            of the case. Our experienced theft defense attorneys provide
            aggressive representation to protect your rights and record.
          </p>
        </div>
      </div>
    </section>
  );
};

const TypesSection = () => {
  const types = [
    {
      title: "Theft",
      icon: Lock,
      desc: "Unlawful appropriation of property with intent to deprive the owner.",
      bullets: [
        "Shoplifting",
        "Employee theft",
        "Receiving stolen property",
        "Concealment",
      ],
    },
    {
      title: "Burglary",
      icon: Home,
      desc: "Entering a habitation or building without consent to commit a felony, theft, or assault.",
      bullets: [
        "Residential burglary",
        "Commercial burglary",
        "Vehicle burglary",
        "Burglary of coin‑operated machines",
      ],
    },
    {
      title: "Robbery",
      icon: Users,
      desc: "Taking property through force, threats, or intimidation from another person.",
      bullets: [
        "Simple robbery",
        "Aggravated robbery",
        "Carjacking",
        "Complicity",
      ],
    },
    {
      title: "Criminal Mischief",
      icon: FileText,
      desc: "Intentionally or knowingly damaging or tampering with property.",
      bullets: [
        "Vandalism",
        "Graffiti",
        "Tampering",
        "Interference with property",
      ],
    },
    {
      title: "Fraud Crimes",
      icon: FileSearch,
      desc: "Deception‑based offenses involving misrepresentation or unethical schemes.",
      bullets: [
        "Check fraud",
        "Credit card fraud",
        "Identity theft",
        "Insurance fraud",
      ],
    },
    {
      title: "Forgery",
      icon: Gavel,
      desc: "Creating, altering, or using false documents with intent to defraud.",
      bullets: [
        "Check alteration",
        "Signature forging",
        "Fake documents",
        "Counterfeit instruments",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Types of Theft & Property Crimes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <t.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {t.title}
              </h3>
              <p className="text-gray-600 mb-4">{t.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {t.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-500 flex items-center"
                  >
                    <span className="text-mpl-gold mr-2 text-xs">●</span> {b}
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

const PenaltiesSection = () => {
  const penalties = [
    {
      title: "Class C Misdemeanor",
      desc: "Fine up to $500",
      note: "Property value: < $100",
    },
    {
      title: "Class B Misdemeanor",
      desc: "Up to 180 days in jail + $2,000 fine",
      note: "Property value: $100–$750",
    },
    {
      title: "Class A Misdemeanor",
      desc: "Up to 1 year in jail + $4,000 fine",
      note: "Property value: $750–$2,500",
    },
    {
      title: "State Jail Felony",
      desc: "180 days–2 years + $10,000 fine",
      note: "Property value: $2,500–$30,000",
    },
    {
      title: "3rd Degree Felony",
      desc: "2–10 years + $10,000 fine",
      note: "Property value: $30,000–$150,000",
    },
    {
      title: "2nd Degree Felony",
      desc: "2–20 years + $10,000 fine",
      note: "Property value: $150,000–$300,000+",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-6">
            Potential Penalties in Texas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {penalties.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-red-200 bg-red-50 p-6"
              >
                <h3 className="text-mpl-navy font-serif font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-red-700 font-semibold">{p.desc}</p>
                <p className="text-gray-600 text-sm mt-1">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategiesSection = () => {
  const strategies = [
    {
      title: "Lack of Intent",
      desc: "Challenging the prosecution’s proof of intent to deprive.",
    },
    {
      title: "Mistaken Identity",
      desc: "Disputing identification through evidence and alibi.",
    },
    {
      title: "Ownership Rights",
      desc: "Establishing lawful ownership or permission.",
    },
    {
      title: "Insufficient Evidence",
      desc: "Highlighting gaps and inconsistencies in proof.",
    },
    {
      title: "Constitutional Violations",
      desc: "Suppressing evidence gained through unlawful procedures.",
    },
    {
      title: "Value Disputes",
      desc: "Arguing valuation errors to reduce charge severity.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Common Defense Strategies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-10 h-10 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-4">
                <Shield size={18} />
              </div>
              <h3 className="text-lg font-serif text-mpl-navy font-bold mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
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
      icon: FileSearch,
      desc: "We assess the case details, property, witness statements, and charges to identify defense opportunities.",
      bullets: [
        "Evidence analysis",
        "Charge review",
        "Value assessment",
        "Defense mapping",
      ],
    },
    {
      id: 2,
      title: "Investigation",
      icon: Users,
      desc: "Independent investigation to gather additional evidence, witness accounts, and documentation.",
      bullets: [
        "Witness interviews",
        "Video review",
        "Document collection",
        "Background checks",
      ],
    },
    {
      id: 3,
      title: "Legal Strategy",
      icon: Scale,
      desc: "We build a tailored legal strategy to challenge the elements of the offense and suppress unlawful evidence.",
      bullets: [
        "Motions practice",
        "Suppression challenges",
        "Ownership claims",
        "Intent rebuttal",
      ],
    },
    {
      id: 4,
      title: "Negotiation",
      icon: Users,
      desc: "We pursue dismissal or reduction through negotiations, diversion programs, or restitution when appropriate.",
      bullets: [
        "Charge reduction",
        "Diversion options",
        "Restitution plans",
        "Dismissal pursuit",
      ],
    },
    {
      id: 5,
      title: "Trial Preparation",
      icon: FileText,
      desc: "If trial is necessary, we prepare thoroughly with motions, exhibits, witnesses, and cross‑examination planning.",
      bullets: [
        "Pretrial motions",
        "Exhibit preparation",
        "Witness prep",
        "Jury strategy",
      ],
    },
    {
      id: 6,
      title: "Advocacy",
      icon: Gavel,
      desc: "We present a powerful defense in court and fight for the best possible outcome.",
      bullets: [
        "Opening/closing",
        "Cross‑examination",
        "Witness testimony",
        "Verdict advocacy",
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
            Our Defense Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A clear, step‑by‑step approach to defending against theft and
            property crime charges.
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

const RightsSection = () => {
  const rights = [
    {
      title: "Right to Remain Silent",
      desc: "You are not required to answer questions or provide statements.",
    },
    {
      title: "Right to an Attorney",
      desc: "Request an attorney immediately; avoid making statements during questioning.",
    },
    {
      title: "Protection from Illegal Search/Seizure",
      desc: "Police must follow proper procedures; unlawful evidence can be excluded.",
    },
    {
      title: "Right to Phone Call",
      desc: "You have the right to contact a lawyer or a trusted individual.",
    },
    {
      title: "Speedy Trial Rights",
      desc: "You have the right to a speedy trial and cannot be held without cause.",
    },
    {
      title: "Jury Trial Rights",
      desc: "For many charges, you have the right to have your case decided by a jury.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 flex-shrink-0" size={22} />
            <div>
              <h3 className="text-mpl-navy font-serif font-bold text-lg">
                Important Legal Reminders
              </h3>
              <p className="text-gray-600 text-sm">
                If you are arrested or questioned about a property crime,
                exercise your rights. Avoid self‑incrimination and seek legal
                counsel immediately.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {rights.map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <h4 className="text-mpl-navy font-serif font-semibold">
                  {r.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{r.desc}</p>
              </div>
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-mpl-blue/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Facing Theft or Property Crime Charges?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Don’t face these charges alone. Our experienced criminal defense
              attorneys fight aggressively to protect your rights and freedom.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg transform hover:-translate-y-1"
            >
              <Shield size={20} />
              <span>Start Legal Strategy Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const RelatedServices = () => {
  const links = [
    { label: "Criminal Defense", to: "/criminal-defense" },
    { label: "DWI Defense", to: "/dwi" },
    { label: "Domestic Violence", to: "/domestic-violence" },
    { label: "Protective Orders", to: "/protective-orders" },
    { label: "Drug Charges", to: "/drug-charges" },
    { label: "Contact Us", to: "/contact" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold">
            Related Criminal Defense Services
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              className="px-5 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-mpl-navy font-semibold shadow-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheftPropertyCrimes;
