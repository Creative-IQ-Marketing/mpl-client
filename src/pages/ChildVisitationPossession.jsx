import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  Calendar,
  Clock,
  Shield,
  CheckCircle2,
  Users,
  Briefcase,
  Phone,
  MapPin,
  Mail,
  Home,
  Heart,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const ChildVisitationPossession = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Child Visitation & Possession in San Antonio"
        subtitle="Fair parenting schedules that work for your family."
        opening="Time with your child matters. When schedules are unclear or disputed, it can create stress for everyone involved."
        infoTitle="What This Means"
        infoDescription="Visitation determines when and how each parent spends time with their child, often based on a structured schedule."
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
            Child Visitation & Possession <br />
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Time with your child matters. When schedules are unclear or
            disputed, it can create stress for everyone involved. We help you
            create or modify schedules that are practical, fair, and focused on
            your child's well-being.
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
      icon: Calendar,
      title: "Clear Parenting Schedules",
      desc: "We create detailed, practical parenting schedules that work in real life.",
    },
    {
      icon: Scale,
      title: "Fair Arrangements",
      desc: "We negotiate arrangements that are fair to both parents and beneficial for your child.",
    },
    {
      icon: Heart,
      title: "Child's Best Interest",
      desc: "Every arrangement we help create prioritizes your child's well-being and stability.",
    },
    {
      icon: Clock,
      title: "Holiday & Vacation Planning",
      desc: "We help address holiday schedules, summer arrangements, and special occasions.",
    },
    {
      icon: Shield,
      title: "Legal Documentation",
      desc: "All arrangements are properly documented and legally enforceable.",
    },
    {
      icon: Users,
      title: "Experienced Guidance",
      desc: "We guide you through creating arrangements that reduce conflict and support co-parenting.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Child Visitation & Possession Services?
          </h2>
          <p className="text-lg text-gray-600">
            We help parents create practical, fair parenting schedules that work
            for everyone.
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
      title: "Schedule Assessment",
      desc: "We review your current situation and discuss your goals for visitation and parenting time.",
    },
    {
      id: 2,
      title: "Schedule Development",
      desc: "We develop detailed parenting schedules based on your work, school, and family needs.",
    },
    {
      id: 3,
      title: "Holiday & Special Arrangements",
      desc: "We plan for holidays, vacations, school breaks, and other special occasions.",
    },
    {
      id: 4,
      title: "Documentation & Agreement",
      desc: "We draft comprehensive visitation agreements that address all scheduling details.",
    },
    {
      id: 5,
      title: "Negotiation or Court Filing",
      desc: "We work to reach agreement with the other parent or file in court if necessary.",
    },
    {
      id: 6,
      title: "Court Order & Implementation",
      desc: "We finalize the visitation schedule through court order and help implement it smoothly.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Creating Your Parenting Schedule
          </h2>
          <p className="text-lg text-gray-600">
            How we help develop fair and practical visitation arrangements.
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

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Clear Parenting Schedules",
      desc: "Specific schedules reduce confusion and conflict between parents.",
    },
    {
      icon: Home,
      title: "Reduced Conflict",
      desc: "Well-defined arrangements minimize disputes about when the child should be with each parent.",
    },
    {
      icon: CheckCircle2,
      title: "Child Stability",
      desc: "Consistent, predictable schedules help children feel secure and stable.",
    },
    {
      icon: Heart,
      title: "Better Co-Parenting",
      desc: "Clear arrangements foster cooperation and mutual respect between parents.",
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      desc: "Structured schedules help you maintain work commitments and family time.",
    },
    {
      icon: Shield,
      title: "Legal Protection",
      desc: "Court-ordered schedules provide legal protection and enforceability.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Benefits of Clear Visitation & Possession Orders
          </h2>
          <p className="text-lg text-gray-600">
            Why well-structured parenting schedules matter for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
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
        <div className="bg-mpl-blue rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-mpl-navy/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              Ready to Create Your Parenting Schedule?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's create a schedule that works for you and your child's best
              interest.
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
            Contact Our Child Visitation Attorneys
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

export default ChildVisitationPossession;
