import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  Home,
  Coins,
  Building2,
  Car,
  BarChart3,
  Scale,
  Gem,
  FileText,
  Phone,
  MapPin,
  Mail,
  Lightbulb,
  CreditCard,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "../components/ConsultationForm";

const PropertyDivision = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
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
            Fair Division of Marital Assets and Debts
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Property Division <br />
            <span className="text-mpl-blue italic">Attorney</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Property division is often one of the most complex aspects of divorce.
            Our experienced San Antonio property division attorneys help ensure
            fair and equitable distribution of marital assets, debts, and property
            according to Texas community property laws.
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
      icon: Home,
      title: "Real Estate Division",
      desc: "We help divide marital homes, investment properties, and other real estate assets fairly and efficiently.",
    },
    {
      icon: Coins,
      title: "Financial Assets",
      desc: "We assist with dividing bank accounts, investments, retirement accounts, and other financial assets.",
    },
    {
      icon: Building2,
      title: "Business Interests",
      desc: "We handle complex business valuations and division of business interests, partnerships, and professional practices.",
    },
    {
      icon: Car,
      title: "Personal Property",
      desc: "We help divide vehicles, furniture, jewelry, artwork, and other personal property items.",
    },
    {
      icon: BarChart3,
      title: "Asset Valuation",
      desc: "We work with financial experts to ensure accurate valuation of all marital assets and property.",
    },
    {
      icon: Scale,
      title: "Debt Division",
      desc: "We help fairly divide marital debts, including credit cards, loans, mortgages, and other obligations.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Property Division Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive property division representation to ensure
            fair distribution of assets and debts.
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
      title: "Asset Inventory",
      desc: "We identify and catalog all marital assets, including real estate, financial accounts, and personal property.",
    },
    {
      id: 2,
      title: "Asset Valuation",
      desc: "We work with experts to determine the fair market value of all marital assets and property.",
    },
    {
      id: 3,
      title: "Debt Assessment",
      desc: "We identify and assess all marital debts and determine how they should be divided between spouses.",
    },
    {
      id: 4,
      title: "Division Strategy",
      desc: "We develop a fair division strategy that considers Texas community property laws and your specific circumstances.",
    },
    {
      id: 5,
      title: "Negotiation",
      desc: "We negotiate with the other party to reach a fair property division agreement when possible.",
    },
    {
      id: 6,
      title: "Court Resolution",
      desc: "If negotiation fails, we present your case in court to ensure fair property division according to Texas law.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Property Division Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in property division during divorce
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

const TypesSection = () => {
  const types = [
    {
      icon: Home,
      title: "Real Estate",
      desc: "Marital homes, investment properties, vacation homes, and other real estate assets requiring fair division.",
    },
    {
      icon: Coins,
      title: "Financial Accounts",
      desc: "Bank accounts, investment accounts, retirement accounts, and other financial assets accumulated during marriage.",
    },
    {
      icon: Building2,
      title: "Business Assets",
      desc: "Business interests, partnerships, professional practices, and other business-related assets.",
    },
    {
      icon: Car,
      title: "Vehicles",
      desc: "Cars, trucks, motorcycles, boats, and other vehicles owned by the marital estate.",
    },
    {
      icon: Gem,
      title: "Personal Property",
      desc: "Furniture, jewelry, artwork, collectibles, and other personal property items.",
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      desc: "Patents, trademarks, copyrights, and other intellectual property rights acquired during marriage.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Types of Property We Handle
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive property division representation for all types of marital
            assets and debts.
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
          Protect Your Property Rights
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
          Ensure fair division of your marital assets. Contact our experienced
          San Antonio property division attorneys today.
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
      link: "https://maps.google.com/?q=45+NE+Interstate+410+Loop+Suite+207+San+Antonio+TX+78216",
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
            Contact Our Property Division Attorneys
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

export default PropertyDivision;
