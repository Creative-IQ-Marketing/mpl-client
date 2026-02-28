import React from "react";
import { motion } from "framer-motion";
import {
  Swords,
  Search,
  Baby,
  ShieldAlert,
  BarChart,
  Target,
  Home,
  Briefcase,
  Banknote,
  Scale,
  Building,
  Phone,
  MapPin,
  Mail,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "../components/ConsultationForm";

const ContestedDivorce = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <ProcessSection />
      <RepresentationNeedsSection />
      <CTABanner />
      <ContactInfoSection />
      <FormSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-6 uppercase border border-mpl-blue/20">
            Aggressive Representation for Complex Divorce Cases
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Contested Divorce <br />
            <span className="text-mpl-blue italic">Attorney</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            When divorce disputes cannot be resolved amicably, you need an
            experienced contested divorce attorney who will fight for your
            rights. Our San Antonio contested divorce lawyers provide aggressive
            representation for complex cases involving property disputes, child
            custody battles, and support issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-mpl-navy text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-mpl-blue transition-all transform hover:-translate-y-1 text-lg"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:7262044044"
              className="bg-white text-mpl-navy border-2 border-mpl-navy px-8 py-4 rounded-full font-bold hover:bg-mpl-navy hover:text-white transition-all text-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call (726) 204-4044
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-mpl-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-mpl-gold/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Swords,
      title: "Aggressive Litigation",
      desc: "We fight aggressively for your rights in court, ensuring your interests are protected throughout the divorce process.",
    },
    {
      icon: Search,
      title: "Thorough Investigation",
      desc: "We conduct comprehensive investigations to uncover hidden assets and ensure fair property division.",
    },
    {
      icon: Users,
      title: "Child Custody Expertise",
      desc: "Our attorneys have extensive experience in complex child custody disputes and visitation arrangements.",
    },
    {
      icon: ShieldAlert,
      title: "Asset Protection",
      desc: "We protect your assets and ensure fair distribution of marital property and debts.",
    },
    {
      icon: BarChart,
      title: "Expert Witnesses",
      desc: "We work with financial experts, psychologists, and other professionals to strengthen your case.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      desc: "We develop comprehensive strategies tailored to your specific contested divorce situation.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Contested Divorce Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide aggressive, strategic representation for complex divorce
            cases in San Antonio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-mpl-blue/10 rounded-xl flex items-center justify-center text-mpl-blue mb-6 group-hover:bg-mpl-blue group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-mpl-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
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
      title: "Initial Filing",
      desc: "We file the divorce petition and serve the other party, beginning the contested divorce process.",
    },
    {
      id: 2,
      title: "Discovery Phase",
      desc: "We gather evidence through depositions, document requests, and financial investigations.",
    },
    {
      id: 3,
      title: "Mediation Attempts",
      desc: "We attempt mediation to resolve disputes before proceeding to trial, when appropriate.",
    },
    {
      id: 4,
      title: "Pre-Trial Motions",
      desc: "We file motions for temporary orders, protective orders, and other pre-trial relief.",
    },
    {
      id: 5,
      title: "Trial Preparation",
      desc: "We prepare witnesses, organize evidence, and develop trial strategies for court proceedings.",
    },
    {
      id: 6,
      title: "Court Trial",
      desc: "We present your case in court, advocating aggressively for your rights and interests.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Contested Divorce Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the complex steps involved in contested divorce
            proceedings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-mpl-navy text-white w-12 h-12 flex items-center justify-center rounded-bl-2xl font-serif font-bold text-xl">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-mpl-navy mb-4 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RepresentationNeedsSection = () => {
  const needs = [
    {
      icon: Home,
      title: "Complex Property Division",
      desc: "High-value assets, business interests, real estate, and complex financial portfolios require expert legal representation.",
    },
    {
      icon: Baby,
      title: "Child Custody Disputes",
      desc: "When parents cannot agree on custody arrangements, visitation schedules, or parenting time.",
    },
    {
      icon: Banknote,
      title: "Spousal Support Issues",
      desc: "Disputes over alimony, spousal maintenance, and financial support arrangements.",
    },
    {
      icon: Search,
      title: "Hidden Assets",
      desc: "Suspected concealment of assets, income, or property requires thorough investigation and legal action.",
    },
    {
      icon: Scale, // Replaced Domestic Violence (Shield) with Scale for justice/law focus or ShieldAlert is already used
      title: "Domestic Violence",
      desc: "Cases involving domestic violence require immediate legal protection and aggressive advocacy.",
    },
    {
      icon: Building,
      title: "Business Ownership",
      desc: "Divorce involving business interests, partnerships, and professional practices requires specialized expertise.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            When You Need Contested Divorce Representation
          </h2>
          <p className="text-lg text-gray-600">
            Complex divorce situations that require experienced legal advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((need, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mpl-blue shadow-sm">
                  <need.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-mpl-navy mb-2">
                  {need.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {need.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="bg-mpl-blue rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-mpl-navy/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              Facing a Contested Divorce?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Don't face complex divorce proceedings alone. Contact our
              experienced San Antonio contested divorce attorneys today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-mpl-blue px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:7262044044"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call (726) 204-4044
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  const contacts = [
    {
      icon: Phone,
      title: "Phone",
      content: "(726) 204-4044",
      link: "tel:7262044044",
      color: "text-red-500",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "45 NE Interstate 410 Loop Suite 307 San Antonio, TX 78216",
      link: "https://maps.google.com/?q=45+NE+Interstate+410+Loop+Suite+307+San+Antonio+TX+78216",
      color: "text-red-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@moralespadialaw.com",
      link: "mailto:info@moralespadialaw.com",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
            Contact Our Contested Divorce Attorneys
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 text-mpl-blue">
                <contact.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-mpl-navy mb-2">
                {contact.title}
              </h3>
              <a
                href={contact.link}
                className="text-mpl-blue hover:text-mpl-navy transition-colors font-medium"
              >
                {contact.content}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FormSection = () => {
  return (
    <section className="py-24 bg-mpl-navy text-white relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-mpl-navy">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 uppercase tracking-wide">
              Contact Us Today!
            </h2>
            <p className="text-gray-600 text-lg">
              To schedule a consultation with our team!
            </p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default ContestedDivorce;
