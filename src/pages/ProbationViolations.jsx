import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Shield,
  AlertTriangle,
  FileText,
  Gavel,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";

const ProbationViolations = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Probation Violation Lawyer in San Antonio"
        subtitle="Immediate defense if you've been accused of violating probation."
        opening={[
          "If you have been accused of violating probation, your freedom may be at risk again.",
          "These situations move quickly and require immediate attention.",
        ]}
        infoTitle="What This Means"
        infoDescription="A probation violation can lead to additional penalties, including jail time. Even minor violations can have serious consequences."
      />
      <WhyChooseSection />
      <ProcessSection />
      <BenefitsSection />
      <CTABanner />
      <ContactInfoSection />
      <FormSection />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

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
            Probation Violations
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            Protecting Your Freedom From Violation Charges
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
            If you have been accused of violating probation, your freedom may be
            at risk again. These situations move quickly and require immediate
            attention. We act quickly to protect your position.
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
        <ChevronDown className="w-5 h-5 animate-bounce text-white/60" />
      </motion.div>
    </section>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Immediate Response",
      desc: "Probation violations require fast action. We respond quickly to assess the situation and protect your interests.",
    },
    {
      icon: FileText,
      title: "Violation Analysis",
      desc: "We examine the alleged violation carefully to identify inconsistencies or procedural issues.",
    },
    {
      icon: Gavel,
      title: "Hearing Preparation",
      desc: "We thoroughly prepare you for violation hearings, presenting your case effectively to the court.",
    },
    {
      icon: Shield,
      title: "Freedom Protection",
      desc: "Our goal is to minimize consequences and keep you out of jail when possible.",
    },
    {
      icon: AlertTriangle,
      title: "Strategic Advocacy",
      desc: "We understand the probation system and know how to advocate effectively in violation proceedings.",
    },
    {
      icon: Phone,
      title: "Full Communication",
      desc: "We keep you informed every step of the way and explain all your options clearly.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why We're Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Probation violations need immediate, skilled attention.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-mpl-blue hover:shadow-lg transition-all"
            >
              <feature.icon className="w-12 h-12 text-mpl-blue mb-4" />
              <h3 className="text-xl font-bold text-mpl-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
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
      title: "Urgent Assessment",
      desc: "We immediately analyze the alleged violation and your probation conditions.",
    },
    {
      title: "Evidence Collection",
      desc: "We gather documentation and evidence to challenge or mitigate the violation claim.",
    },
    {
      title: "Hearing Preparation",
      desc: "We prepare you thoroughly for the probation violation hearing.",
    },
    {
      title: "Strategic Presentation",
      desc: "We present your case to the probation officer and court with confidence and clarity.",
    },
    {
      title: "Negotiation",
      desc: "We negotiate with prosecutors and probation officers to minimize consequences when possible.",
    },
    {
      title: "Protection & Resolution",
      desc: "We work toward keeping you out of jail and protecting your probation status.",
    },
  ];

  return (
    <section className="py-24 bg-mpl-navy text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Violation Defense Process
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Quick, strategic action to protect your freedom
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 border border-mpl-blue/30 rounded-lg hover:bg-mpl-blue/10 transition-all"
            >
              <div className="text-3xl font-bold text-mpl-blue mb-3">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    "Avoided or minimized jail time",
    "Preservation of probation status",
    "Clear understanding of your options",
    "Strong advocacy in violation hearings",
    "Protection of your rights",
    "Faster resolution when possible",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            What We Work Toward
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are the outcomes we fight for on your behalf
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all"
            >
              <Shield className="w-6 h-6 text-mpl-blue flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-mpl-navy to-mpl-blue text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          If you're facing a probation issue, act now
        </h2>
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
          The decisions you make in the next few days can significantly impact
          your freedom.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-mpl-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
        >
          <Shield size={20} /> Schedule Your Consultation
        </Link>
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Phone className="w-8 h-8 text-mpl-blue mx-auto mb-3" />
            <h3 className="font-bold text-lg text-mpl-navy mb-2">Call Us</h3>
            <a
              href="tel:7262044044"
              className="text-mpl-blue hover:text-mpl-lightBlue font-semibold"
            >
              (726) 204-4044
            </a>
          </div>
          <div>
            <AlertTriangle className="w-8 h-8 text-mpl-blue mx-auto mb-3" />
            <h3 className="font-bold text-lg text-mpl-navy mb-2">Urgent</h3>
            <p className="text-gray-600">Available 24/7 for urgent matters</p>
          </div>
          <div>
            <Clock className="w-8 h-8 text-mpl-blue mx-auto mb-3" />
            <h3 className="font-bold text-lg text-mpl-navy mb-2">Response</h3>
            <p className="text-gray-600">Same-day consultations available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-600">
            Reach out to discuss your probation matter and learn how we can
            help.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <p className="text-center text-gray-600 mb-6">
            Please call us at{" "}
            <a
              href="tel:7262044044"
              className="text-mpl-blue hover:text-mpl-lightBlue font-bold"
            >
              (726) 204-4044
            </a>{" "}
            for immediate assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

export default ProbationViolations;
