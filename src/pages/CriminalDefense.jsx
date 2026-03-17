import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Motion = motion;
import {
  Gavel,
  Users,
  Scale,
  DollarSign,
  Heart,
  FileText,
  Shield,
  Home,
  CreditCard,
  FileSignature,
  FileCheck,
  ChevronRight,
  ChevronDown,
  Phone,
  Briefcase,
  MessagesSquare,
  Landmark,
  Lock,
  AlertTriangle,
  Ban,
  FileSearch,
  UserX,
} from "lucide-react";
import { Link } from "react-router-dom";

const CriminalDefense = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <CTA />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632152862899-798838332156?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

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
            Fight for Your Rights
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            Criminal defense attorneys protecting your future
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
            When you're facing criminal charges, your freedom and future are at stake. Our experienced criminal defense attorneys provide aggressive representation, ensuring your rights are protected and you receive the best possible outcome in your case.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="tel:7262044044"
              className="inline-flex items-center gap-2 bg-mpl-blue text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-mpl-lightBlue transition-all"
            >
              <Phone size={18} /> Schedule a Call
            </a>
            <Link
              to="/criminal-defense#services"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
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

const ServicesSection = () => {
  const services = [
    {
      title: "DWI",
      icon: Ban,
      desc: "Aggressive defense against Driving While Intoxicated charges to protect your license and record.",
      bullets: [
        "License Suspension Hearings",
        "Sobriety Test Challenges",
        "Blood/Breath Test Defense",
        "Record Protection",
      ],
      link: "/dwi"
    },
    {
      title: "Domestic Violence",
      icon: Home,
      desc: "Sensitive and strategic handling of domestic violence allegations to protect your rights and family.",
      bullets: [
        "Assault Charges",
        "Family Violence Defense",
        "Protective Order Violations",
        "False Allegation Defense",
      ],
      link: "/domestic-violence"
    },
    {
      title: "Protective Orders",
      icon: Shield,
      desc: "Legal assistance with filing for or defending against protective orders and restraining orders.",
      bullets: [
        "Application Filing",
        "Defense Representation",
        "Hearing Preparation",
        "Order Modifications",
      ],
      link: "/protective-orders"
    },
    {
      title: "Theft & Property Crimes",
      icon: Lock,
      desc: "Defense against theft, burglary, and property damage charges, aiming for dismissal or reduction.",
      bullets: [
        "Shoplifting Defense",
        "Burglary Charges",
        "Property Damage",
        "Theft by Check",
      ],
      link: "/theft-property-crimes"
    },
    {
      title: "Juvenile Defense",
      icon: UserX,
      desc: "Dedicated defense for minors facing criminal charges, focusing on rehabilitation and future protection.",
      bullets: [
        "Detention Hearings",
        "School Disciplinary Issues",
        "Record Sealing",
        "Probation Negotiation",
      ],
      link: "/juvenile-defense"
    },
    {
      title: "Expungement & Record Sealing",
      icon: FileSearch,
      desc: "Clearing your criminal record to open up opportunities for employment, housing, and education.",
      bullets: [
        "Eligibility Review",
        "Expunction Petitions",
        "Non-Disclosure Orders",
        "Record Clearing",
      ],
      link: "/expungement-record-sealing"
    },
    {
      title: "Drug Charges",
      icon: AlertTriangle,
      desc: "Defense against drug possession, manufacturing, and distribution charges with a focus on your rights.",
      bullets: [
        "Possession Defense",
        "Search & Seizure Challenges",
        "Drug Court Options",
        "Sentencing Mitigation",
      ],
      link: "/drug-charges"
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-mpl-blue/10 rounded-full text-mpl-blue font-semibold uppercase tracking-wider text-sm border border-mpl-blue/20 mb-8">
            Comprehensive Criminal Defense Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            Comprehensive Criminal Defense Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-4">
            We handle all types of criminal charges with aggressive representation and strategic results.
          </p>
          <div className="w-24 h-1 bg-mpl-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col group h-full"
            >
              <div className="bg-mpl-navy text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-mpl-blue transition-colors">
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-4 group-hover:text-mpl-blue transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <ul className="space-y-2 mb-8">
                {service.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs text-gray-500 font-medium"
                  >
                    <span className="text-mpl-blue mr-2">✓</span> {bullet}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="inline-flex items-center text-mpl-blue font-bold text-sm hover:translate-x-1 transition-transform mt-auto"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Constitutional Rights Protection",
      icon: Shield,
      desc: "Focused defense that protects your constitutional rights at every stage.",
    },
    {
      title: "24/7 Emergency Support",
      icon: Phone,
      desc: "Rapid response when urgent situations arise and immediate guidance is needed.",
    },
    {
      title: "Aggressive Trial Representation",
      icon: Gavel,
      desc: "Strategic courtroom advocacy aimed at dismissal, reduction, or acquittal.",
    },
    {
      title: "Strategic Plea Negotiations",
      icon: MessagesSquare,
      desc: "Negotiation aimed at favorable outcomes when trial is not the best path.",
    },
    {
      title: "Thorough Case Investigation",
      icon: FileSearch,
      desc: "Independent investigation to uncover weaknesses in the prosecution’s case.",
    },
    {
      title: "Personalized Attention",
      icon: Users,
      desc: "Clear communication and tailored strategy based on your unique situation.",
    },
    {
      title: "Pre‑Trial Motion Strategy",
      icon: FileText,
      desc: "Targeted motions to suppress and exclude improper evidence.",
    },
    {
      title: "Appeals & Post‑Conviction",
      icon: Landmark,
      desc: "Guidance and representation beyond trial when necessary.",
    },
    {
      title: "Immediate Response Team",
      icon: AlertTriangle,
      desc: "Swift action to protect your rights from the outset.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            Why Choose Our Criminal Defense?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the advantage of a strategic team with aggressive criminal defense advocacy.
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
      title: "Case Evaluation",
      icon: Users,
      desc: "We analyze the charges against you, review police reports, and explain the potential consequences and your legal options.",
      bullets: [
        "Confidential consultation",
        "Charge analysis",
        "Rights explanation",
        "Immediate advice",
      ],
    },
    {
      id: 2,
      title: "Investigation",
      icon: FileSearch,
      desc: "We conduct our own investigation, gathering evidence, interviewing witnesses, and identifying weaknesses in the prosecution's case.",
      bullets: [
        "Evidence collection",
        "Witness interviews",
        "Police procedure review",
        "Consultation support",
      ],
    },
    {
      id: 3,
      title: "Strategic Defense",
      icon: Scale,
      desc: "We build a tailored defense strategy aimed at dismissal, reduction of charges, or acquittal.",
      bullets: [
        "Custom defense plan",
        "Motion filing",
        "Plea negotiation (if appropriate)",
        "Trial preparation",
      ],
    },
    {
      id: 4,
      title: "Court Representation",
      icon: Gavel,
      desc: "We stand by your side in court, vigorously advocating for your rights and challenging the prosecution's evidence.",
      bullets: [
        "Arraignment representation",
        "Pre-trial hearings",
        "Jury trial advocacy",
        "Sentencing mitigation",
      ],
    },
    {
      id: 5,
      title: "Resolution",
      icon: Shield,
      desc: "We strive for the best possible outcome, whether that means a dismissal, a favorable plea, or a not-guilty verdict.",
      bullets: [
        "Case dismissal",
        "Charge reduction",
        "Alternative sentencing",
        "Record clearing advice",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            The Criminal Defense Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            The Criminal Defense Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understand your options and the legal process when facing criminal charges.
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
              Don't Wait — Get Help Today
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              When facing criminal charges, every moment counts. Our experienced team is ready to defend your rights now.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg transform hover:-translate-y-1"
            >
              <Shield size={20} />
              <span>Call Now for Emergency Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriminalDefense;
