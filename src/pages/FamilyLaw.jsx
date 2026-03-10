import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Motion = motion;
import {
  Gavel,
  Users,
  Scale,
  DollarSign,
  Heart,
  FileText,
  Shield,
  Home,
  CreditCard,
  FileSignature,
  FileCheck,
  ChevronRight,
  ChevronDown,
  Phone,
  Briefcase,
  MessagesSquare,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const FamilyLaw = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ImmediateHelpBanner />
      <ProcessSection />
      <CTA />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632152862899-798838332156?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-mpl-blue/30 rounded-full blur-[100px] mix-blend-screen"
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold tracking-wider mb-6">
            COMPASSIONATE & EXPERIENCED
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 text-white drop-shadow-xl">
            Family Law <br />
            <span className="italic text-mpl-lightBlue relative inline-block">
              Excellence.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-2 left-0 h-1 bg-white/30"
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Guiding you through life's most challenging transitions with
            strength, empathy, and strategic legal advocacy.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-sm font-light tracking-widest uppercase text-white/80">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Uncontested Divorce",
      icon: Gavel,
      desc: "Streamlined divorce process for couples who agree on all major issues, providing efficient and cost-effective legal solutions.",
      bullets: [
        "Mutual Agreement Divorces",
        "Simplified Process",
        "Reduced Court Time",
        "Cost-Effective Solutions",
      ],
    },
    {
      title: "Uncontested Flat Fee Divorce",
      icon: Briefcase,
      desc: "A predictable, low-cost option for couples with no contested issues, offering a fixed price for complete legal handling.",
      bullets: [
        "Fixed Legal Fees",
        "No Hidden Costs",
        "Fast Resolution",
        "Attorney Review",
      ],
    },
    {
      title: "Contested Divorce",
      icon: Scale,
      desc: "Expert representation in complex divorce cases involving disputes over assets, custody, or support arrangements.",
      bullets: [
        "Asset Division Disputes",
        "Custody Battles",
        "Attorney Negotiations",
        "Court Representation",
      ],
    },
    {
      title: "Child Custody",
      icon: Users,
      desc: "Protecting your parental rights and ensuring the best interests of your children in custody arrangements.",
      bullets: [
        "Custody Evaluations",
        "Parenting Plans",
        "Visitation Rights",
        "Joint Custody Agreements",
      ],
    },
    {
      title: "Child Support",
      icon: DollarSign,
      desc: "Ensuring fair child support arrangements that prioritize your children's needs and financial security.",
      bullets: [
        "Support Calculations",
        "Modification Requests",
        "Enforcement Actions",
        "Payment Arrangements",
      ],
    },
    {
      title: "Adoption",
      icon: Heart,
      desc: "Guiding families through the legal adoption process with care, ensuring all requirements are met.",
      bullets: [
        "Private Adoptions",
        "Stepparent Adoptions",
        "Agency Adoptions",
        "Legal Documentation",
      ],
    },
    {
      title: "Name Change",
      icon: FileText,
      desc: "Legal name change services for adults and children, handling all necessary paperwork and court proceedings.",
      bullets: [
        "Adult Name Changes",
        "Minor Name Changes",
        "Court Petitions",
        "Documentation Updates",
      ],
    },
    {
      title: "Modification of Previous Order",
      icon: FileSignature,
      desc: "Helping you modify existing court orders when circumstances change, ensuring they remain fair and current.",
      bullets: [
        "Custody Modifications",
        "Support Adjustments",
        "Visitation Changes",
        "Court Petitions",
      ],
    },
    {
      title: "Enforcement",
      icon: Gavel,
      desc: "Enforcing existing court orders when the other party fails to comply with custody, support, or visitation agreements.",
      bullets: [
        "Contempt Proceedings",
        "Support Enforcement",
        "Custody Enforcement",
        "Wage Garnishment",
      ],
    },
    {
      title: "Property Division",
      icon: Home,
      desc: "Fair and equitable division of marital property, assets, and debts during divorce proceedings.",
      bullets: [
        "Asset Valuation",
        "Property Appraisals",
        "Debt Division",
        "Settlement Negotiations",
      ],
    },
    {
      title: "Spousal Maintenance",
      icon: CreditCard,
      desc: "Determining fair spousal support arrangements and maintenance orders based on financial circumstances and legal requirements.",
      bullets: [
        "Alimony Calculations",
        "Support Duration",
        "Modification Requests",
        "Enforcement Actions",
      ],
    },
    {
      title: "Prenuptial Agreement",
      icon: FileCheck,
      desc: "Protecting your assets and clarifying financial responsibilities with comprehensive prenuptial agreements before marriage.",
      bullets: [
        "Asset Protection",
        "Financial Planning",
        "Debt Allocation",
        "Future Planning",
      ],
    },
    {
      title: "Postnuptial Agreement",
      icon: FileSignature,
      desc: "Creating postnuptial agreements after marriage to address changing circumstances and protect both parties' interests.",
      bullets: [
        "Post-Marriage Protection",
        "Financial Restructuring",
        "Asset Clarification",
        "Legal Documentation",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-mpl-blue/10 rounded-full text-mpl-blue font-semibold uppercase tracking-wider text-sm border border-mpl-blue/20 mb-8">
            Our Family Law Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            Comprehensive Family Legal Support
          </h2>
          <div className="w-24 h-1 bg-mpl-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col group h-full"
            >
              <div className="bg-mpl-navy text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-mpl-blue transition-colors">
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-4 group-hover:text-mpl-blue transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <ul className="space-y-2 mb-8">
                {service.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs text-gray-500 font-medium"
                  >
                    <span className="text-mpl-blue mr-2">✓</span> {bullet}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center text-mpl-blue font-bold text-sm hover:translate-x-1 transition-transform mt-auto"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImmediateHelpBanner = () => {
  return (
    <section className="bg-mpl-blue py-16 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-mpl-navy/50 to-transparent"></div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-white font-bold mb-3">
            Need Immediate Family Law Help?
          </h2>
          <p className="text-white/80 max-w-2xl text-lg">
            Our experienced family law team is here to provide the guidance and
            representation you need during this challenging time.
          </p>
        </div>

        <Link
          to="/contact"
          className="bg-white text-mpl-blue hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap"
        >
          <Phone size={20} className="fill-current" />
          <span>Case Evaluation</span>
        </Link>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      icon: Users,
      desc: "We begin with a comprehensive consultation to understand your situation, discuss your goals, and explain your legal options.",
      bullets: [
        "1 hour consultation",
        "Case evaluation and strategy discussion",
        "Clear explanation of legal process",
        "Transparent fee structure",
      ],
    },
    {
      id: 2,
      title: "Case Preparation",
      icon: FileText,
      desc: "We gather all necessary documentation, evidence, and information to build a strong foundation for your case.",
      bullets: [
        "Document collection and review",
        "Evidence gathering and analysis",
        "Financial record compilation",
        "Witness identification",
      ],
    },
    {
      id: 3,
      title: "Legal Strategy Development",
      icon: Scale,
      desc: "We develop a customized legal strategy tailored to your specific needs and circumstances.",
      bullets: [
        "Personalized case strategy",
        "Risk assessment and mitigation",
        "Timeline and milestone planning",
        "Alternative dispute resolution options",
      ],
    },
    {
      id: 4,
      title: "Negotiation & Mediation",
      icon: MessagesSquare,
      desc: "We work to resolve your case through negotiation and mediation when possible, seeking fair outcomes while minimizing conflict.",
      bullets: [
        "Skilled negotiation representation",
        "Mediation facilitation",
        "Settlement agreement drafting",
        "Court filing preparation",
      ],
    },
    {
      id: 5,
      title: "Court Representation",
      icon: Gavel,
      desc: "If litigation is necessary, we provide aggressive court representation to protect your rights and achieve the best possible outcome.",
      bullets: [
        "Comprehensive trial preparation",
        "Expert witness coordination",
        "Courtroom advocacy",
        "Post-judgment support",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            How We Handle Your Family Law Case
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our structured approach ensures every aspect of your family law
            matter is handled with care, expertise, and attention to detail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row gap-8 group"
              >
                {/* Step Number Bubble */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-mpl-blue text-mpl-blue flex items-center justify-center font-serif font-bold text-2xl shadow-lg group-hover:bg-mpl-blue group-hover:text-white transition-colors duration-300">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-white rounded-2xl border border-gray-100 shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-mpl-blue/10 p-3 rounded-lg text-mpl-blue">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-serif text-mpl-navy font-bold mt-1">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <span className="text-mpl-gold mr-2 text-xs">●</span>{" "}
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-mpl-navy rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-mpl-blue/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Ready to Begin Your Family Law Case?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Our experienced family law team is ready to guide you through
              every step of the process. Contact us today for your consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg transform hover:-translate-y-1"
            >
              <FileSignature size={20} />
              <span>Schedule Your Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyLaw;
