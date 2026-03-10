import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  ShieldCheck,
  Coins,
  Building2,
  FileText,
  Scale,
  HeartHandshake,
  Users,
  Search,
  PenTool,
  MessageCircle,
  Gavel,
  FileCheck,
  Home,
  Diamond,
  CreditCard,
  PieChart,
  Phone,
  MapPin,
  Mail,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "../components/ConsultationForm";

const PostnuptialAgreement = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <ProcessSection />
      <AddressableItemsSection />
      <CTABanner />
      <ContactInfoSection />
      <FreeResourceSection />
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
            Protecting Your Assets After Marriage
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Postnuptial Agreement <br />
            <span className="text-mpl-blue italic">Attorney</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A postnuptial agreement allows married couples to address property division, spousal support, and other important matters after marriage. Our experienced San Antonio postnuptial agreement attorneys help couples create comprehensive postnups that protect their interests and provide clarity for their financial future.
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
      icon: ShieldCheck,
      title: "Asset Protection",
      desc: "We help protect your assets, business interests, and inheritance from potential division in divorce.",
    },
    {
      icon: Coins,
      title: "Financial Planning",
      desc: "We address spousal support, debt responsibility, and financial arrangements to provide clarity and protection.",
    },
    {
      icon: Building2,
      title: "Business Protection",
      desc: "We protect business interests, professional practices, and intellectual property from marital property claims.",
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      desc: "We prepare detailed postnuptial agreements that address all relevant issues and comply with Texas law.",
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      desc: "We ensure your postnuptial agreement meets all legal requirements and will be enforceable in court.",
    },
    {
      icon: HeartHandshake,
      title: "Fair Negotiation",
      desc: "We help both parties reach fair agreements that protect interests while maintaining relationship harmony.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Postnuptial Agreement Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive postnuptial agreement representation to protect your interests and assets.
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
      icon: Users,
      title: "Initial Consultation",
      desc: "We discuss your assets, goals, and concerns to determine what should be included in your postnuptial agreement.",
    },
    {
      id: 2,
      icon: Search,
      title: "Asset Disclosure",
      desc: "We help you identify and document all assets, debts, and financial interests to be addressed in the agreement.",
    },
    {
      id: 3,
      icon: PenTool,
      title: "Agreement Drafting",
      desc: "We draft a comprehensive postnuptial agreement that addresses your specific needs and complies with Texas law.",
    },
    {
      id: 4,
      icon: MessageCircle,
      title: "Review & Negotiation",
      desc: "We review the agreement with both parties and facilitate negotiations to reach mutually acceptable terms.",
    },
    {
      id: 5,
      icon: Gavel,
      title: "Legal Review",
      desc: "We ensure both parties have independent legal representation and the agreement meets all legal requirements.",
    },
    {
      id: 6,
      icon: FileCheck,
      title: "Execution",
      desc: "We oversee the proper execution of the postnuptial agreement to ensure legal validity and enforceability.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Postnuptial Agreement Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in creating a comprehensive postnuptial agreement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="absolute top-0 right-0 bg-mpl-blue/5 text-mpl-blue/20 text-8xl font-serif font-bold leading-none -mr-4 -mt-4 group-hover:text-mpl-blue/10 transition-colors">
                {step.id}
              </div>
              <div className="w-12 h-12 bg-mpl-navy text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10 shadow-md group-hover:bg-mpl-blue transition-colors">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-mpl-navy mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 relative z-10 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AddressableItemsSection = () => {
  const items = [
    {
      icon: Home,
      title: "Property Division",
      desc: "Define how property will be divided in case of divorce, including separate assets and marital property.",
    },
    {
      icon: Coins,
      title: "Spousal Support",
      desc: "Address spousal maintenance, alimony, and financial support arrangements in case of divorce.",
    },
    {
      icon: Building2,
      title: "Business Interests",
      desc: "Protect business ownership, professional practices, and intellectual property from marital property claims.",
    },
    {
      icon: Diamond,
      title: "Inheritance Protection",
      desc: "Protect inheritance rights and ensure family assets remain separate from marital property.",
    },
    {
      icon: CreditCard,
      title: "Debt Responsibility",
      desc: "Define responsibility for existing debts and how marital debts will be handled.",
    },
    {
      icon: PieChart,
      title: "Financial Planning",
      desc: "Address retirement accounts, investments, and other financial planning considerations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            What Postnuptial Agreements Can Address
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive postnuptial agreement representation for all types of marital and financial matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-mpl-gold/10 rounded-full flex items-center justify-center text-mpl-gold">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-mpl-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
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
    <section className="py-20 bg-mpl-navy text-white relative overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Protect Your Assets After Marriage
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          It's never too late to protect your interests. Contact our experienced San Antonio postnuptial agreement attorneys today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-mpl-navy px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
          >
            Schedule Consultation
          </Link>
          <a
            href="tel:7262044044"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-mpl-navy transition-all"
          >
            Call (726) 204-4044
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-mpl-blue rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mpl-gold rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-4">
            Contact Our Postnuptial Agreement Attorneys
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-mpl-red mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-mpl-navy mb-2">Phone</h3>
            <a href="tel:7262044044" className="text-mpl-blue hover:underline">
              (726) 204-4044
            </a>
          </div>
          
          <div className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-mpl-red mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-mpl-navy mb-2">Office</h3>
            <p className="text-gray-600">
              45 NE Interstate 410 Loop<br />
              Suite 307<br />
              San Antonio, TX 78216
            </p>
          </div>
          
          <div className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-mpl-blue mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-mpl-navy mb-2">Email</h3>
            <a href="mailto:info@moralespadillalaw.com" className="text-mpl-blue hover:underline">
              info@moralespadillalaw.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeResourceSection = () => {
  return (
    <section className="py-16 bg-mpl-navy text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-mpl-red rounded-lg flex items-center justify-center text-white shadow-lg">
                <Download size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                Free Guide: "Postnup vs. Prenup - Which Is Right for You?"
              </h2>
            </div>
            <p className="text-gray-300 text-lg mb-0">
              Download Our Free Guide Here
            </p>
          </div>
          
          <div className="flex-1 w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Full Name *" 
                  className="w-full px-4 py-3 rounded-lg text-mpl-navy focus:outline-none focus:ring-2 focus:ring-mpl-gold"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email *" 
                  className="w-full px-4 py-3 rounded-lg text-mpl-navy focus:outline-none focus:ring-2 focus:ring-mpl-gold"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-mpl-gold text-mpl-navy px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors whitespace-nowrap"
              >
                DOWNLOAD NOW!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormSection = () => {
  return (
    <section className="py-24 bg-gray-50" id="consultation-form">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-mpl-navy p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    Get a Free Consultation
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Speak with an experienced attorney about your situation. We're here to help you move forward.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-mpl-gold" />
                      <span className="font-medium">(726) 204-4044</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-mpl-gold" />
                      <span className="font-medium">info@moralespadillalaw.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-mpl-gold" />
                      <span className="font-medium">San Antonio, TX</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-mpl-blue opacity-20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-mpl-gold opacity-10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              <div className="lg:col-span-3 p-10">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostnuptialAgreement;
