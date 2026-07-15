import React from "react";
import { motion } from "framer-motion";
import {
  Baby,
  Scale,
  FileText,
  ShieldCheck,
  Search,
  Handshake,
  Users,
  User,
  CalendarDays,
  RefreshCcw,
  Ban,
  ClipboardList,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const ChildCustody = () => {
  return (
    <div className="bg-white min-h-screen">
      <CleanServiceHero
        title="Child Custody Attorney in San Antonio"
        subtitle="Protecting your parental rights and children's best interests."
        opening="Nothing matters more than your children. When custody decisions are involved, the stakes feel higher and the uncertainty can be overwhelming."
        infoTitle="What This Means"
        infoDescription="Child custody determines where your child lives, how decisions are made, and how time is shared between parents."
      />
      <WhyChooseSection />
      <ProcessSection />
      <CustodyTypesSection />
      <CTABanner />
      <ContactInfoSection />
      <FormSection />
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Baby,
      title: "Child-Focused Approach",
      desc: "We prioritize the best interests of your children while protecting your parental rights and relationship with your child.",
    },
    {
      icon: Scale,
      title: "Texas Family Law Experience",
      desc: "Our attorneys have extensive knowledge of Texas child custody laws, including joint custody, sole custody, and visitation rights.",
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      desc: "We prepare detailed parenting plans, custody agreements, and visitation schedules that protect your interests.",
    },
    {
      icon: ShieldCheck,
      title: "Aggressive Advocacy",
      desc: "We fight aggressively for your parental rights in court while maintaining professionalism and focus on your children's welfare.",
    },
    {
      icon: Search,
      title: "Thorough Investigation",
      desc: "We investigate all relevant factors including parental fitness, child's preferences, and home environment to build a strong case.",
    },
    {
      icon: Handshake,
      title: "Mediation Services",
      desc: "We work to resolve custody disputes through mediation when possible, reducing conflict and protecting children from court battles.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Child Custody Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide compassionate yet aggressive representation for child
            custody matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              transition={{ delay: 0 }}
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
      title: "Initial Consultation",
      desc: "We review your custody situation and develop a strategy to protect your parental rights and your child's best interests.",
    },
    {
      id: 2,
      title: "Case Evaluation",
      desc: "We assess all factors including parental fitness, child's needs, and current living arrangements to build your case.",
    },
    {
      id: 3,
      title: "Filing Petition",
      desc: "We file the appropriate custody petition with the court and serve the other parent according to Texas law.",
    },
    {
      id: 4,
      title: "Discovery Phase",
      desc: "We gather evidence through depositions, document requests, and investigations to support your custody case.",
    },
    {
      id: 5,
      title: "Mediation Attempts",
      desc: "We attempt mediation to reach a custody agreement without the need for a contentious trial, if possible.",
    },
    {
      id: 6,
      title: "Court Proceedings",
      desc: "If mediation fails, we present your case in court, advocating aggressively for your custody rights.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Child Custody Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in child custody proceedings in
            Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              transition={{ delay: 0 }}
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

const CustodyTypesSection = () => {
  const types = [
    {
      icon: Users,
      title: "Joint Custody",
      desc: "Shared decision-making and parenting time arrangements that allow both parents to maintain meaningful relationships with their children.",
    },
    {
      icon: User,
      title: "Sole Custody",
      desc: "When one parent is granted primary custody due to concerns about the other parent's fitness or ability to care for the child.",
    },
    {
      icon: CalendarDays,
      title: "Visitation Rights",
      desc: "Establishing fair and appropriate visitation schedules that serve the child's best interests while protecting parental rights.",
    },
    {
      icon: RefreshCcw,
      title: "Custody Modifications",
      desc: "Modifying existing custody orders when circumstances change or when the current arrangement no longer serves the child's best interests.",
    },
    {
      icon: Ban,
      title: "Supervised Visitation",
      desc: "When safety concerns exist, we help establish supervised visitation arrangements that protect the child while maintaining parental contact.",
    },
    {
      icon: ClipboardList,
      title: "Parenting Plans",
      desc: "Creating detailed parenting plans that address all aspects of child rearing, including education, healthcare, and extracurricular activities.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Types of Child Custody We Handle
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive child custody representation for all types of custody
            arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={index}
              transition={{ delay: 0 }}
              className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="shrink-0">
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              Protect Your Parental Rights
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Don't let custody disputes jeopardize your relationship with your
              child. Contact our experienced San Antonio child custody attorneys
              today.
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
            Contact Our Child Custody Attorneys
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

export default ChildCustody;
