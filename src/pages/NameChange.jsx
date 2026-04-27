import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  User,
  Users,
  Baby,
  FileText,
  Scale,
  ScrollText,
  RefreshCcw,
  UserCheck,
  Gem,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const NameChange = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Name Change Attorney in San Antonio"
        subtitle="Legal name changes made simple and efficient."
        opening="A name change can mark an important new chapter in your life."
        infoTitle="What This Means"
        infoDescription="The legal process ensures your name change is properly recognized."
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
            Legal Name Changes for Adults, Minors, and Families
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Name Change <br />
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A name change can mark an important new chapter in your life. The
            legal process ensures your name change is properly recognized. We
            guide you through each step so the process is smooth and efficient.
          </p>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're changing your name after marriage, divorce, or for
            personal reasons, our experienced San Antonio name change attorneys
            guide you through the legal process. We handle name changes for
            adults, minors, and entire families, ensuring all legal requirements
            are met efficiently.
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
      icon: User,
      title: "Adult Name Changes",
      desc: "We help adults legally change their names for personal, professional, or safety reasons with proper court procedures.",
    },
    {
      icon: Baby,
      title: "Minor Name Changes",
      desc: "We handle name changes for minors, ensuring all parental consent requirements and court procedures are followed.",
    },
    {
      icon: Users,
      title: "Family Name Changes",
      desc: "We assist entire families in changing their surnames, coordinating multiple petitions for efficiency.",
    },
    {
      icon: Gem,
      title: "Marriage Name Changes",
      desc: "We help couples navigate name changes after marriage, including hyphenated names and traditional changes.",
    },
    {
      icon: ScrollText,
      title: "Complete Documentation",
      desc: "We prepare all necessary legal documents and ensure compliance with Texas name change laws and procedures.",
    },
    {
      icon: Scale,
      title: "Court Representation",
      desc: "We represent you in court proceedings and ensure all legal requirements are met for name change approval.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Name Change Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide efficient and comprehensive name change representation
            for all types of name changes.
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
      title: "Initial Consultation",
      desc: "We review your name change request and determine the appropriate legal process for your situation.",
    },
    {
      id: 2,
      title: "Document Preparation",
      desc: "We prepare all necessary legal documents including petitions, affidavits, and supporting documentation.",
    },
    {
      id: 3,
      title: "Background Check",
      desc: "We ensure all required background checks are completed according to Texas name change requirements.",
    },
    {
      id: 4,
      title: "Filing Petition",
      desc: "We file the name change petition with the appropriate court and pay all required fees.",
    },
    {
      id: 5,
      title: "Court Hearing",
      desc: "We represent you in court and present your case for name change approval to the judge.",
    },
    {
      id: 6,
      title: "Final Order",
      desc: "We obtain the final name change order and help you update all necessary records and documents.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Name Change Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in legal name change proceedings in
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

const TypesSection = () => {
  const types = [
    {
      icon: UserCheck,
      title: "Personal Name Changes",
      desc: "Legal name changes for personal reasons, including safety concerns, professional branding, or personal preference.",
    },
    {
      icon: Gem,
      title: "Marriage Name Changes",
      desc: "Name changes after marriage, including taking spouse's name, hyphenated names, or creating new family names.",
    },
    {
      icon: Baby,
      title: "Minor Name Changes",
      desc: "Name changes for children, including adoption-related changes, parental name changes, or safety-related changes.",
    },
    {
      icon: Users,
      title: "Family Name Changes",
      desc: "Coordinated name changes for entire families, ensuring all members can change their names together.",
    },
    {
      icon: RefreshCcw,
      title: "Name Restoration",
      desc: "Restoring previous names after divorce, annulment, or other life changes that require name reversion.",
    },
    {
      icon: FileText,
      title: "Document Updates",
      desc: "Assistance with updating all legal documents, records, and identification after name change approval.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Types of Name Changes We Handle
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive name change representation for all types of name
            change situations.
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
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="bg-mpl-blue rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-mpl-navy/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Change Your Name?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let us help you navigate the legal name change process. Contact
              our experienced San Antonio name change attorneys today.
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
            Contact Our Name Change Attorneys
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

export default NameChange;
