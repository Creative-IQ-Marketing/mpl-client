import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  BarChart3,
  RefreshCw,
  Scale,
  ShieldCheck,
  FileText,
  FileSignature,
  Gavel,
  Coins,
  LineChart,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const ChildSupport = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Child Support Attorney in San Antonio"
        subtitle="Ensuring children receive the financial support they deserve."
        opening="Child support decisions impact your child's stability and your financial future."
        infoTitle="What This Means"
        infoDescription="Child support ensures that both parents contribute to the financial needs of their child."
      />
      <WhyChooseSection />
      <ProcessSection />
      <ServicesSection />
      <CTABanner />
      <ContactInfoSection />
      <FormSection />
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Accurate Calculations",
      desc: "We ensure child support amounts are calculated correctly according to Texas guidelines, including income, expenses, and special circumstances.",
    },
    {
      icon: BarChart3,
      title: "Financial Analysis",
      desc: "We analyze both parents' financial situations to ensure fair and appropriate child support arrangements that serve the child's best interests.",
    },
    {
      icon: RefreshCw,
      title: "Modification Services",
      desc: "We help modify existing child support orders when circumstances change, such as income changes or additional children.",
    },
    {
      icon: Gavel,
      title: "Enforcement Actions",
      desc: "We take aggressive action to enforce child support orders when payments are not being made, including wage garnishment and contempt proceedings.",
    },
    {
      icon: ShieldCheck,
      title: "Protection of Rights",
      desc: "We protect both paying and receiving parents' rights while ensuring the child's financial needs are met.",
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      desc: "We prepare all necessary legal documents and ensure compliance with Texas child support laws and guidelines.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Child Support Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive child support representation to ensure your
            children receive the support they deserve.
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
      desc: "We review both parents' financial situations, including income, expenses, and special circumstances affecting child support.",
    },
    {
      id: 2,
      title: "Support Calculation",
      desc: "We calculate appropriate child support amounts using Texas guidelines and consider all relevant factors.",
    },
    {
      id: 3,
      title: "Petition Filing",
      desc: "We file the appropriate child support petition with the court and serve the other parent according to Texas law.",
    },
    {
      id: 4,
      title: "Discovery Process",
      desc: "We gather financial documentation and evidence to support the child support calculation and ensure accuracy.",
    },
    {
      id: 5,
      title: "Court Proceedings",
      desc: "We present your case in court, advocating for a fair support order that meets your child's needs.",
    },
    {
      id: 6,
      title: "Order Enforcement",
      desc: "We ensure child support orders are enforced and modifications are made when necessary.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Child Support Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in child support proceedings in
            Texas.
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

const ServicesSection = () => {
  const services = [
    {
      icon: FileSignature,
      title: "Initial Support Orders",
      desc: "Establishing new child support orders during divorce proceedings or when parents are not married.",
    },
    {
      icon: RefreshCw,
      title: "Support Modifications",
      desc: "Modifying existing child support orders when financial circumstances change significantly.",
    },
    {
      icon: Scale,
      title: "Enforcement Actions",
      desc: "Taking legal action to enforce child support orders when payments are not being made.",
    },
    {
      icon: Coins,
      title: "Arrears Collection",
      desc: "Collecting past-due child support payments and interest on unpaid amounts.",
    },
    {
      icon: LineChart,
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
            Child Support Services We Provide
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive child support representation for all types of support
            matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                  <service.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-mpl-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ensure Fair Child Support
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Protect your children's financial future. Contact our experienced
              San Antonio child support attorneys today.
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
      link: "https://maps.google.com/?q=29.52137717375601,-98.48965712995692",
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
            Contact Our Child Support Attorneys
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

export default ChildSupport;
