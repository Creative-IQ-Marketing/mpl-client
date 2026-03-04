import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Phone,
  Shield,
  FileText,
  Gavel,
  Scale,
  Users,
  FileSearch,
  UserX,
  School
} from "lucide-react";
import { Link } from "react-router-dom";

const JuvenileDefense = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <ImmediateHelpBanner />
      <ProcessSection />
      <CTA />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

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

      <div className="container-custom relative z-10 text-center">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
            PROTECTING YOUNG FUTURES
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 text-white drop-shadow-xl">
            Juvenile <br />
            <span className="italic text-mpl-lightBlue relative inline-block">
              Defense.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-2 left-0 h-1 bg-white/30"
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Specialized legal representation for minors, focusing on rehabilitation and protecting their future opportunities.
          </p>
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

const ImmediateHelpBanner = () => {
  return (
    <section className="bg-mpl-blue py-16 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-mpl-navy/50 to-transparent"></div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-white font-bold mb-3">
            Is Your Child Facing Charges?
          </h2>
          <p className="text-white/80 max-w-2xl text-lg">
            A juvenile record can have lasting impacts. We work to ensure one mistake doesn't define their life.
          </p>
        </div>

        <Link
          to="/contact"
          className="bg-white text-mpl-blue hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap"
        >
          <Phone size={20} className="fill-current" />
          <span>Consult with Us</span>
        </Link>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Case Assessment",
      icon: Users,
      desc: "We meet with you and your child to understand the situation, explaining the juvenile justice process clearly.",
      bullets: [
        "Family consultation",
        "Process explanation",
        "Rights overview",
        "Initial strategy",
      ],
    },
    {
      id: 2,
      title: "School & Court Advocacy",
      icon: School,
      desc: "We represent your child in both court proceedings and school disciplinary hearings if necessary.",
      bullets: [
        "Detention hearings",
        "School board hearings",
        "Court representation",
        "Probation meetings",
      ],
    },
    {
      id: 3,
      title: "Rehabilitation Focus",
      icon: Shield,
      desc: "We emphasize rehabilitation over punishment, working with prosecutors to find alternatives to detention.",
      bullets: [
        "Diversion programs",
        "Community service",
        "Counseling options",
        "Probation negotiation",
      ],
    },
    {
      id: 4,
      title: "Record Sealing",
      icon: FileText,
      desc: "We guide you through the process of sealing juvenile records to protect your child's future opportunities.",
      bullets: [
        "Eligibility review",
        "Sealing petitions",
        "Hearing representation",
        "Future protection",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            Our Juvenile Defense Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            Defending Your Child's Future
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We approach juvenile cases with a focus on rehabilitation and second chances, not just legal defense.
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
              Give Your Child a Second Chance
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Don't let a juvenile charge derail their life. Contact us today for compassionate and effective defense.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg transform hover:-translate-y-1"
            >
              <UserX size={20} />
              <span>Contact Us Today</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuvenileDefense;
