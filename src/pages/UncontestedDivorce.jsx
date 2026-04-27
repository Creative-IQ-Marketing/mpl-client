import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  Zap,
  DollarSign,
  Handshake,
  ClipboardCheck,
  ShieldCheck,
  Compass,
  Timer,
  Smile,
  Users,
  Lock,
  Target,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import CleanServiceHero from "../components/CleanServiceHero";
import ConsultationForm from "../components/ConsultationForm";

const UncontestedDivorce = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CleanServiceHero
        title="Uncontested Divorce in San Antonio"
        subtitle="Fast, Affordable Divorce When Both Parties Agree"
        opening={[
          "If you and your spouse agree on the major decisions, your divorce does not have to turn into a long and expensive process.",
          "An uncontested divorce allows you to move forward more quickly, with less stress and more control over the outcome.",
        ]}
        infoTitle="What This Means"
        infoDescription="An uncontested divorce means both parties agree on key issues like property division, child custody, and support. Instead of fighting in court, you work toward a resolution that reflects what is best for your family."
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

const WhyChooseSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Processing",
      desc: "Uncontested divorces can often be completed in 60-90 days, significantly faster than contested proceedings.",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      desc: "Lower legal fees compared to contested divorces, saving you thousands of dollars in attorney costs.",
    },
    {
      icon: Handshake,
      title: "Amicable Resolution",
      desc: "Maintains better relationships between spouses, especially important when children are involved.",
    },
    {
      icon: ClipboardCheck,
      title: "Complete Documentation",
      desc: "We handle all necessary paperwork and ensure compliance with Texas divorce laws.",
    },
    {
      icon: ShieldCheck,
      title: "Legal Protection",
      desc: "Even in uncontested divorces, having legal representation protects your rights and interests.",
    },
    {
      icon: Compass,
      title: "Trusted Guidance",
      desc: "Our experienced attorneys guide you through every step of the uncontested divorce process.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Why Choose Our Uncontested Divorce Services?
          </h2>
          <p className="text-lg text-gray-600">
            We are dedicated to making uncontested divorces as smooth and
            efficient as possible for San Antonio families.
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
      title: "Initial Consultation",
      desc: "We review your situation and confirm that your divorce qualifies as uncontested under Texas law.",
    },
    {
      id: 2,
      title: "Agreement Review",
      desc: "We review all agreements regarding property division, child custody, and support arrangements.",
    },
    {
      id: 3,
      title: "Document Preparation",
      desc: "We prepare all necessary legal documents including the divorce petition and settlement agreement.",
    },
    {
      id: 4,
      title: "Filing & Service",
      desc: "We file the divorce petition with the court and serve the other party according to Texas law.",
    },
    {
      id: 5,
      title: "Court Hearing",
      desc: "A brief court hearing where the judge reviews and approves your uncontested divorce agreement.",
    },
    {
      id: 6,
      title: "Final Decree",
      desc: "The court issues the final divorce decree, officially ending your marriage.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            The Uncontested Divorce Process
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the steps involved in an uncontested divorce in Texas.
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
      icon: Timer,
      title: "Faster Resolution",
      desc: "Uncontested divorces typically resolve in 60-90 days compared to 6-12 months for contested cases.",
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      desc: "Significantly reduced legal fees, court costs, and witness expenses compared to contested divorces.",
    },
    {
      icon: Smile,
      title: "Less Stress",
      desc: "Avoid the emotional toll of lengthy court battles and contentious legal proceedings.",
    },
    {
      icon: Users,
      title: "Better for Children",
      desc: "Reduced conflict benefits children and allows for better co-parenting relationships.",
    },
    {
      icon: Lock,
      title: "Privacy Protection",
      desc: "Keep personal matters private without extensive court proceedings and public records.",
    },
    {
      icon: Target,
      title: "Control Over Outcome",
      desc: "You and your spouse maintain control over the terms rather than leaving decisions to a judge.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy mb-6">
            Benefits of Uncontested Divorce
          </h2>
          <p className="text-lg text-gray-600">
            Why uncontested divorce is often the best choice for San Antonio
            couples.
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
              Ready to Start Your Uncontested Divorce?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Contact our experienced San Antonio uncontested divorce attorneys
              for a consultation today.
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
            Contact Our Uncontested Divorce Attorneys
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

export default UncontestedDivorce;
