import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  Coins,
  BarChart3,
  RefreshCw,
  Scale,
  ShieldCheck,
  FileText,
  Phone,
  MapPin,
  Mail,
  Gavel,
  Calculator,
  Search,
  Banknote,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const SpousalMaintenance = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Alimony & Spousal Maintenance in San Antonio"
        subtitle="Financial support arrangements that reflect your situation."
        opening="Financial support after a divorce can have a lasting impact on your future."
        infoTitle="What This Means"
        infoDescription="Spousal maintenance may be awarded to provide financial support under certain circumstances."
      />
      <WhyChooseSection />
      <ProcessSection />
      <TypesSection />
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
            Establishing Fair Spousal Support Arrangements
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Alimony & Spousal Maintenance <br />
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Financial support after a divorce can have a lasting impact on your
            future. Spousal maintenance may be awarded to provide financial
            support under certain circumstances.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            We help you determine eligibility, negotiate fair arrangements, and
            address disputes regarding spousal support.
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
      icon: Coins,
      title: "Support Calculation",
      desc: "We calculate appropriate spousal maintenance amounts based on Texas guidelines and your specific circumstances.",
    },
    {
      icon: BarChart3,
      title: "Financial Analysis",
      desc: "We analyze both spouses' financial situations to determine fair and appropriate spousal maintenance arrangements.",
    },
    {
      icon: RefreshCw,
      title: "Modification Services",
      desc: "We help modify existing spousal maintenance orders when circumstances change significantly.",
    },
    {
      icon: Scale,
      title: "Enforcement Actions",
      desc: "We take aggressive action to enforce spousal maintenance orders when payments are not being made.",
    },
    {
      icon: ShieldCheck,
      title: "Rights Protection",
      desc: "We protect both paying and receiving spouses' rights while ensuring fair support arrangements.",
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      desc: "We prepare all necessary legal documents and ensure compliance with Texas spousal maintenance laws.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Spousal Maintenance Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive spousal maintenance representation to
            ensure fair support arrangements.
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
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
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
      title: "Financial Assessment",
      desc: "We review both spouses' financial situations, including income, expenses, and ability to pay or need for support.",
    },
    {
      id: 2,
      title: "Support Calculation",
      desc: "We calculate appropriate spousal maintenance amounts using Texas guidelines and relevant factors.",
    },
    {
      id: 3,
      title: "Petition Filing",
      desc: "We file the appropriate spousal maintenance petition with the court and serve the other party.",
    },
    {
      id: 4,
      title: "Discovery Process",
      desc: "We gather financial documentation and evidence to support the spousal maintenance calculation.",
    },
    {
      id: 5,
      title: "Court Proceedings",
      desc: "We present your case in court, advocating for fair spousal maintenance arrangements.",
    },
    {
      id: 6,
      title: "Order Enforcement",
      desc: "We ensure spousal maintenance orders are properly enforced and take action when payments are not made.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Spousal Maintenance Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in spousal maintenance proceedings
            in Texas.
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

const TypesSection = () => {
  const types = [
    {
      icon: FileText,
      title: "Initial Support Orders",
      desc: "Establishing new spousal maintenance orders during divorce proceedings based on financial need and ability to pay.",
    },
    {
      icon: RefreshCw,
      title: "Support Modifications",
      desc: "Modifying existing spousal maintenance orders when financial circumstances change significantly.",
    },
    {
      icon: Scale,
      title: "Enforcement Actions",
      desc: "Taking legal action to enforce spousal maintenance orders when payments are not being made as ordered.",
    },
    {
      icon: Coins,
      title: "Arrears Collection",
      desc: "Collecting past-due spousal maintenance payments and interest on unpaid amounts.",
    },
    {
      icon: BarChart3,
      title: "Income Verification",
      desc: "Verifying income sources and ensuring accurate financial information for support calculations.",
    },
    {
      icon: ShieldCheck,
      title: "Defense Against Modifications",
      desc: "Defending against inappropriate modification requests that could harm your financial stability.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Spousal Maintenance Services We Provide
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive spousal maintenance representation for all types of
            support matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
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
                  <type.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-mpl-navy mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.desc}
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
    <section className="bg-mpl-blue py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-mpl-navy/20 mix-blend-multiply"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Protect Your Financial Future
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
          Ensure fair spousal maintenance arrangements. Contact our experienced
          San Antonio spousal maintenance attorneys today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-mpl-blue px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 text-lg"
          >
            Schedule Consultation
          </Link>
          <a
            href="tel:7262044044"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-lg"
          >
            Call (726) 204-4044
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(726) 204-4044",
      link: "tel:7262044044",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "45 NE Interstate 410 Loop Suite 207 San Antonio, TX 78216",
      link: "https://maps.google.com/?q=29.52137717375601,-98.48965712995692",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@moralespadialaw.com",
      link: "mailto:info@moralespadialaw.com",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Contact Our Spousal Maintenance Attorneys
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:border-mpl-blue/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-mpl-blue/10 rounded-full flex items-center justify-center text-mpl-blue mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-mpl-navy mb-4">
                {item.title}
              </h3>
              <a
                href={item.link}
                className="text-mpl-blue hover:underline text-lg"
              >
                {item.content}
              </a>
            </motion.div>
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

export default SpousalMaintenance;
