import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Motion = motion;
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

const DWI = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <TypesSection />
      <CTA />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464039397811-37aa0f837e0e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>


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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 text-white drop-shadow-xl">
            DWI Attorney
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            Aggressive DWI Defense for San Antonio Drivers
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
            Facing DWI charges can have serious consequences for your license, career, and future. Our experienced team provides aggressive representation to protect your rights and pursue the best possible outcome.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mpl-blue text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-mpl-lightBlue transition-all"
            >
              <Shield size={18} /> Schedule Consultation
            </Link>
            <a
              href="tel:7262044044"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> Call (726) 204-4044
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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

const BenefitsSection = () => {
  const benefits = [
    { title: "Aggressive Defense", icon: Gavel, desc: "Strategic defense to challenge evidence and protect your record." },
    { title: "Defense Analysis", icon: FileSearch, desc: "Thorough review of stops, tests, and procedures for weaknesses." },
    { title: "License Protection", icon: Ban, desc: "Guidance for ALR hearings and occupational licenses." },
    { title: "Case Investigation", icon: FileText, desc: "Independent investigation, witness review, and evidence gathering." },
    { title: "Strategic Defense", icon: Scale, desc: "Tailored strategy aimed at dismissal, reduction, or acquittal." },
    { title: "Rights Protection", icon: Shield, desc: "Focused advocacy to safeguard your constitutional rights." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-4">
            Why Choose Our DWI Defense Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide aggressive DWI defense representation to protect your rights and minimize consequences.
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
      desc: "We discuss your case, goals, and immediate options to protect your license and future.",
      bullets: ["Case overview", "Immediate advice", "Timeline planning", "Rights explained"],
    },
    {
      id: 2,
      title: "Case Investigation",
      icon: FileSearch,
      desc: "We obtain and scrutinize reports, videos, and tests to identify weaknesses.",
      bullets: ["Evidence collection", "Stop legality review", "Test protocol analysis", "Witness interviews"],
    },
    {
      id: 3,
      title: "Evidence Analysis",
      icon: Scale,
      desc: "We analyze legal and scientific issues, preparing foundational strategy and experts as needed.",
      bullets: ["Probable cause review", "Test reliability analysis", "Expert consultation", "Strategy development"],
    },
    {
      id: 4,
      title: "Motion Filing",
      icon: FileText,
      desc: "We file targeted motions to suppress or exclude improper evidence and procedures.",
      bullets: ["Motion to suppress", "Discovery enforcement", "Evidentiary challenges", "Procedure objections"],
    },
    {
      id: 5,
      title: "Negotiation",
      icon: MessagesSquare,
      desc: "We pursue favorable resolutions where appropriate, aiming for dismissals or reductions.",
      bullets: ["Charge reduction", "Alternative sentencing", "Deferred options", "Program referrals"],
    },
    {
      id: 6,
      title: "Trial Representation",
      icon: Gavel,
      desc: "If needed, we defend you at trial with strategic advocacy and expert challenges.",
      bullets: ["Jury advocacy", "Cross‑examination", "Expert challenges", "Closing arguments"],
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
            Understanding the steps involved in DWI defense proceedings in Texas.
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
            Comprehensive DWI defense representation for all types of DWI charge situations.
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-mpl-blue/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Facing DWI Charges?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Don’t face DWI charges alone. Contact our experienced San Antonio DWI defense team immediately for guidance.
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

export default DWI;
