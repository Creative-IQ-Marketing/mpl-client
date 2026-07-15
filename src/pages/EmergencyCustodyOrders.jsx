import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  AlertTriangle,
  Zap,
  Shield,
  CheckCircle2,
  Users,
  Clock,
  Phone,
  MapPin,
  Mail,
  Gavel,
  Lock,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const EmergencyCustodyOrders = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Emergency Custody Orders in San Antonio"
        subtitle="Immediate action when your child's safety is at risk."
        opening="When your child's safety is at risk, immediate action may be necessary."
        infoTitle="What This Means"
        infoDescription="Emergency custody orders provide temporary protection in urgent situations."
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
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.div
          transition={{ duration: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Emergency Custody Orders <br />
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            When your child's safety is at risk, immediate action may be
            necessary. Emergency custody orders provide temporary protection in
            urgent situations. If this is urgent, do not wait—contact us
            immediately for emergency assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-mpl-navy text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-mpl-blue transition-all transform hover:-translate-y-1 text-lg"
            >
              Emergency Consultation
            </Link>
            <a
              href="tel:7262044044"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all text-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now (726) 204-4044
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
      icon: Zap,
      title: "Immediate Action",
      desc: "We act quickly to secure emergency court orders to protect your child.",
    },
    {
      icon: Shield,
      title: "Child Protection",
      desc: "Emergency custody orders provide immediate legal protection for children in danger.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "We understand emergencies don't wait for business hours. We're available when you need us.",
    },
    {
      icon: Gavel,
      title: "Expert Court Advocacy",
      desc: "Our experienced attorneys know how to present urgent situations effectively to the court.",
    },
    {
      icon: CheckCircle2,
      title: "Temporary & Permanent Solutions",
      desc: "We secure immediate temporary orders and help establish permanent custody arrangements.",
    },
    {
      icon: Users,
      title: "Compassionate Support",
      desc: "During stressful situations, we provide guidance with understanding and clarity.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Emergency Custody Services?
          </h2>
          <p className="text-lg text-gray-600">
            We provide immediate, expert assistance when your child's safety is
            at risk.
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
      title: "Immediate Contact",
      desc: "Call us right away with details of the emergency and your concerns about your child's safety.",
    },
    {
      id: 2,
      title: "Urgent Assessment",
      desc: "We quickly evaluate the situation and determine the appropriate emergency legal action.",
    },
    {
      id: 3,
      title: "Emergency Filing",
      desc: "We immediately file for emergency custody orders with the court.",
    },
    {
      id: 4,
      title: "Temporary Order Hearing",
      desc: "We appear in court to present your emergency custody request to the judge.",
    },
    {
      id: 5,
      title: "Temporary Custody Order",
      desc: "The court issues a temporary emergency custody order to protect your child.",
    },
    {
      id: 6,
      title: "Follow-Up & Permanent Orders",
      desc: "We help establish permanent custody arrangements following the temporary emergency order.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Emergency Custody Process
          </h2>
          <p className="text-lg text-gray-600">
            How we secure immediate protection for your child in emergency
            situations.
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

const BenefitsSection = () => {
  const benefits = [
    {
      icon: AlertTriangle,
      title: "Immediate Protection",
      desc: "Emergency orders can be issued quickly to protect children in dangerous situations.",
    },
    {
      icon: Lock,
      title: "Legal Authority",
      desc: "Court orders give you legal authority to protect your child and enforce custody.",
    },
    {
      icon: Shield,
      title: "Safety First",
      desc: "Emergency custody orders prioritize your child's safety and well-being above all else.",
    },
    {
      icon: Heart,
      title: "Temporary Relief",
      desc: "Temporary orders provide immediate relief while permanent custody is determined.",
    },
    {
      icon: CheckCircle2,
      title: "Legal Foundation",
      desc: "Emergency orders establish legal grounds for longer-term custody arrangements.",
    },
    {
      icon: Clock,
      title: "Around-the-Clock Help",
      desc: "We understand emergencies happen any time. We're here to help when you need us most.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Emergency Custody Orders Matter
          </h2>
          <p className="text-lg text-gray-600">
            When your child's safety is at risk, immediate legal action is
            critical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              transition={{ delay: 0 }}
              className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mpl-blue shadow-sm">
                  <benefit.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-mpl-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.desc}
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
        <div className="bg-red-600 rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-red-800/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle size={32} />
              <span className="text-lg font-bold">URGENT HELP AVAILABLE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              If You Need Emergency Help, Do Not Wait
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Call us immediately if your child's safety is at risk. We provide
              emergency legal assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7262044044"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Emergency (726) 204-4044
              </a>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Contact Us Now
              </Link>
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
      title: "Emergency Phone",
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
            Emergency Contact Information
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
              To schedule an urgent consultation with our team!
            </p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default EmergencyCustodyOrders;
