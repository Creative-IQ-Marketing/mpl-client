import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  Heart,
  Scale,
  Shield,
  CheckCircle2,
  Users,
  Briefcase,
  Phone,
  MapPin,
  Mail,
  FileText,
  Gavel,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const GrandparentsRights = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Grandparents' Rights in San Antonio"
        subtitle="Maintain your relationship with your grandchild."
        opening="Maintaining a relationship with your grandchild can be incredibly important."
        infoTitle="What This Means"
        infoDescription="Texas law allows grandparents to seek visitation or custody under certain conditions."
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
            Grandparents' Rights <br />
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Maintaining a relationship with your grandchildren can be incredibly
            important. Texas law allows grandparents to seek visitation or
            custody under certain conditions. If you're seeking to maintain your
            relationship with your grandchildren, our firm can help you
            understand your legal options and advocate for your rights.
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
      icon: Heart,
      title: "Protect Your Relationship",
      desc: "Secure your visitation or custody rights to maintain a meaningful relationship with your grandchildren.",
    },
    {
      icon: Scale,
      title: "Navigate Complex Law",
      desc: "Texas grandparents' rights laws are complex. We help you understand your options and eligibility.",
    },
    {
      icon: Shield,
      title: "Legal Expertise",
      desc: "Our attorneys specialize in grandparents' rights and understand the unique challenges these cases present.",
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      desc: "We handle all necessary paperwork and legal filings to present your case effectively.",
    },
    {
      icon: Gavel,
      title: "Court Representation",
      desc: "We provide experienced advocacy in court to help protect your rights and relationship with your grandchildren.",
    },
    {
      icon: Users,
      title: "Trusted Guidance",
      desc: "We guide you through the process with compassion and clarity, focusing on your family's best interests.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Grandparents' Rights Services?
          </h2>
          <p className="text-lg text-gray-600">
            We are dedicated to helping grandparents maintain meaningful
            relationships with their grandchildren through proper legal
            channels.
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
      desc: "We review your situation, assess your eligibility under Texas law, and discuss your goals for maintaining your relationship.",
    },
    {
      id: 2,
      title: "Eligibility Assessment",
      desc: "We evaluate whether you meet Texas requirements for grandparents' visitation or custody rights.",
    },
    {
      id: 3,
      title: "Case Development",
      desc: "We gather evidence and information showing that maintaining your relationship benefits the grandchildren.",
    },
    {
      id: 4,
      title: "Petition Filing",
      desc: "We file the appropriate legal petition with the court to seek visitation or custody rights.",
    },
    {
      id: 5,
      title: "Court Representation",
      desc: "We represent you in court proceedings, presenting your case and advocating for your relationship.",
    },
    {
      id: 6,
      title: "Final Order & Visitation",
      desc: "The court issues visitation or custody orders that allow you to maintain your relationship with your grandchildren.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Grandparents' Rights Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding how we help you pursue visitation or custody as a
            grandparent in Texas.
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
      icon: Heart,
      title: "Legal Visitation Rights",
      desc: "Secure court-ordered visitation time with your grandchildren even if parents restrict contact.",
    },
    {
      icon: Home,
      title: "Custody Opportunities",
      desc: "In some cases, grandparents can seek custody to provide stability and care for grandchildren.",
    },
    {
      icon: Shield,
      title: "Legal Protection",
      desc: "Court orders protect your rights and ensure parents cannot unilaterally deny you access.",
    },
    {
      icon: CheckCircle2,
      title: "Structured Arrangements",
      desc: "Clear visitation schedules and arrangements that benefit both you and your grandchildren.",
    },
    {
      icon: Briefcase,
      title: "Emergency Relief",
      desc: "In urgent situations, we can seek immediate court intervention to protect your grandchildren.",
    },
    {
      icon: Users,
      title: "Family Connection",
      desc: "Maintain the intergenerational bonds that are important for your family's well-being.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Benefits of Pursuing Grandparents' Rights
          </h2>
          <p className="text-lg text-gray-600">
            Why maintaining your relationship with your grandchildren matters
            legally and personally.
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
        <div className="bg-mpl-blue rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-mpl-navy/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
              Ready to Explore Your Grandparents' Rights Options?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Contact our attorneys to discuss your situation and learn how we
              can help you maintain your relationship with your grandchildren.
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
            Contact Our Grandparents' Rights Attorneys
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

export default GrandparentsRights;
