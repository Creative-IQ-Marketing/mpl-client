import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Users,
  Building2,
  Heart,
  FileText,
  ShieldCheck,
  Scale,
  Baby,
  UserPlus,
  UsersRound,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const Adoption = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Adoption Attorney in San Antonio"
        subtitle="Guiding families through the adoption process."
        opening="Adoption is one of the most meaningful ways to grow your family."
        infoTitle="What This Means"
        infoDescription="The adoption process involves legal steps to establish parental rights and responsibilities."
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
        <Motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-6 uppercase border border-mpl-blue/20">
            Building Families Through Legal Adoption
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Adoption <br />
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Adoption is one of the most meaningful ways to grow your family. The
            adoption process involves legal steps to establish parental rights
            and responsibilities. We guide you through the process so everything
            is handled smoothly and correctly.
          </p>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Adoption is one of the most rewarding legal processes, creating new
            families and providing children with loving homes. Our experienced
            San Antonio adoption attorneys guide families through all types of
            adoptions, ensuring the process is completed correctly and
            efficiently while protecting everyone's rights.
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
        </Motion.div>
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
      icon: Users,
      title: "Step-Parent Adoptions",
      desc: "We help step-parents legally adopt their step-children, creating stronger family bonds and legal relationships.",
    },
    {
      icon: Building2,
      title: "Agency Adoptions",
      desc: "We work with adoption agencies to ensure all legal requirements are met for agency-facilitated adoptions.",
    },
    {
      icon: Heart,
      title: "Private Adoptions",
      desc: "We handle private adoption arrangements between birth parents and adoptive parents, ensuring legal compliance.",
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      desc: "We prepare all necessary legal documents and ensure compliance with Texas adoption laws and procedures.",
    },
    {
      icon: ShieldCheck,
      title: "Rights Protection",
      desc: "We protect the rights of all parties involved, including birth parents, adoptive parents, and children.",
    },
    {
      icon: Scale,
      title: "Court Representation",
      desc: "We represent you in court proceedings and ensure all legal requirements are met for final adoption orders.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Adoption Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide compassionate and comprehensive adoption representation
            for all types of adoptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
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
            </Motion.div>
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
      desc: "We review your adoption situation and determine the best approach for your specific type of adoption.",
    },
    {
      id: 2,
      title: "Documentation Preparation",
      desc: "We prepare all necessary legal documents including petitions, consents, and supporting documentation.",
    },
    {
      id: 3,
      title: "Background Checks",
      desc: "We ensure all required background checks and home studies are completed according to Texas law.",
    },
    {
      id: 4,
      title: "Filing Petition",
      desc: "We file the adoption petition with the appropriate court and serve all required parties.",
    },
    {
      id: 5,
      title: "Court Proceedings",
      desc: "We represent you in court hearings and ensure all legal requirements are met for the adoption.",
    },
    {
      id: 6,
      title: "Final Decree",
      desc: "We obtain the final adoption decree, legally establishing the parent-child relationship.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Adoption Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in adoption proceedings in Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 1, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0 }}
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
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TypesSection = () => {
  const types = [
    {
      icon: Users,
      title: "Step-Parent Adoption",
      desc: "Legal adoption of step-children by step-parents, creating permanent legal relationships and family bonds.",
    },
    {
      icon: Building2,
      title: "Agency Adoption",
      desc: "Adoptions facilitated through licensed adoption agencies, ensuring compliance with all agency and legal requirements.",
    },
    {
      icon: Heart,
      title: "Private Adoption",
      desc: "Direct adoptions between birth parents and adoptive parents, handled with careful attention to legal requirements.",
    },
    {
      icon: Baby,
      title: "Infant Adoption",
      desc: "Adoption of newborns and infants, ensuring all legal requirements are met for the protection of all parties.",
    },
    {
      icon: UserPlus,
      title: "Older Child Adoption",
      desc: "Adoption of older children, including those in foster care, with special attention to their unique needs and circumstances.",
    },
    {
      icon: UsersRound,
      title: "Relative Adoption",
      desc: "Adoption by relatives, including grandparents, aunts, uncles, and other family members, ensuring legal family relationships.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Types of Adoptions We Handle
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive adoption representation for all types of adoption
            situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
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
            </Motion.div>
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
              Ready to Start Your Adoption Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let us help you build your family through legal adoption. Contact
              our experienced San Antonio adoption attorneys today.
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
            Contact Our Adoption Attorneys
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

export default Adoption;
