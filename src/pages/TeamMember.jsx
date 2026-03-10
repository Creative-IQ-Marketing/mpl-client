import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
const Motion = motion;
import {
  ChevronRight,
  Quote,
  Award,
  BookOpen,
  Users,
  Scale,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";
import { teamMembers } from "../data/team";
import ConsultationForm from "../components/ConsultationForm";

const TeamMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find((m) => m.id === id);

  useEffect(() => {
    if (!member) {
      // If member not found, redirect to firm overview or show 404
      // For now, let's just redirect to firm overview
      // navigate("/firm-overview");
    }
    window.scrollTo(0, 0);
  }, [member, navigate]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mpl-neutral-light">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-mpl-navy mb-4">
            Team member not found
          </h2>
          <Link to="/firm-overview" className="text-mpl-blue hover:underline">
            Return to Firm Overview
          </Link>
        </div>
      </div>
    );
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-mpl-neutral-light min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-mpl-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-mpl-blue/20 to-transparent"></div>

        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-mpl-blue/20 transform translate-x-4 translate-y-4 rounded-lg"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-white/10"
                />

                {/* Contact Card Overlay (Desktop) */}
                <div className="hidden lg:block absolute -bottom-10 -right-10 bg-white text-mpl-navy p-6 rounded-lg shadow-xl max-w-xs">
                  <h3 className="font-serif text-xl mb-3 border-b border-mpl-gold/30 pb-2">
                    Get in Touch
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@moralespadialaw.com"
                      className="flex items-center gap-3 text-sm hover:text-mpl-blue transition-colors"
                    >
                      <div className="bg-mpl-neutral-light p-2 rounded-full">
                        <Mail size={16} className="text-mpl-blue" />
                      </div>
                      <span>info@moralespadialaw.com</span>
                    </a>
                    <a
                      href="tel:7262044044"
                      className="flex items-center gap-3 text-sm hover:text-mpl-blue transition-colors"
                    >
                      <div className="bg-mpl-neutral-light p-2 rounded-full">
                        <Phone size={16} className="text-mpl-blue" />
                      </div>
                      <span>(726) 204-4044</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1 bg-mpl-gold/20 text-mpl-gold border border-mpl-gold/30 rounded-full text-sm font-semibold tracking-wider mb-4">
                {member.role.toUpperCase()}
              </div>
              <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                {member.name}
              </h1>

              {member.headline && (
                <p className="text-xl md:text-2xl text-mpl-neutral-light/90 font-light italic mb-8 border-l-4 border-mpl-gold pl-6">
                  "{member.headline}"
                </p>
              )}

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-transparent border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => {
              const bioSection = document.getElementById("bio");
              if (bioSection) {
                bioSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-white/70 text-sm mb-2 font-light tracking-widest uppercase">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="text-mpl-gold w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section id="bio" className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar (Left) */}
            <motion.div
              className="lg:col-span-4 space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Quote Box */}
              {member.quote && (
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-8 rounded-lg shadow-md border-t-4 border-mpl-blue"
                >
                  <Quote className="text-mpl-gold w-10 h-10 mb-4 opacity-50" />
                  <p className="font-serif text-lg text-mpl-navy italic leading-relaxed mb-4">
                    "{member.quote}"
                  </p>
                  {member.quoteAuthor && (
                    <p className="text-right text-sm text-gray-500 font-semibold uppercase tracking-wider">
                      — {member.quoteAuthor}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Achievements/Titles */}
              {member.footerTitles && member.footerTitles.length > 0 && (
                <motion.div
                  variants={fadeIn}
                  className="bg-mpl-navy text-white p-8 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                    <Award className="text-mpl-gold" />
                    <span>Areas of Focus</span>
                  </h3>
                  <ul className="space-y-3">
                    {member.footerTitles.map((title, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <ChevronRight className="w-5 h-5 text-mpl-gold shrink-0 mt-0.5" />
                        <span>{title}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Contact (Mobile Only) */}
              <div className="lg:hidden bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl mb-4 text-mpl-navy">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@moralespadialaw.com"
                    className="flex items-center gap-3 text-mpl-navy/70 hover:text-mpl-blue"
                  >
                    <Mail size={18} />
                    <span>info@moralespadialaw.com</span>
                  </a>
                  <a
                    href="tel:7262044044"
                    className="flex items-center gap-3 text-mpl-navy/70 hover:text-mpl-blue"
                  >
                    <Phone size={18} />
                    <span>(726) 204-4044</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Main Bio (Right) */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                <h2 className="text-3xl font-serif text-mpl-navy mb-8 flex items-center gap-3">
                  <BookOpen className="text-mpl-blue w-8 h-8" />
                  <span>Brief</span>
                </h2>

                <div className="prose prose-lg text-mpl-navy/80 max-w-none">
                  {member.bio &&
                    member.bio.map((paragraph, idx) => (
                      <p key={idx} className="mb-6 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                </div>

                {member.achievements && member.achievements.length > 0 && (
                  <div className="mt-12 pt-12 border-t border-gray-100">
                    <h3 className="text-2xl font-serif text-mpl-navy mb-6 flex items-center gap-3">
                      <Award className="text-mpl-blue w-6 h-6" />
                      <span>Accolades & Recognition</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {member.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 bg-mpl-neutral-light rounded-lg"
                        >
                          <div className="w-2 h-2 mt-2 rounded-full bg-mpl-gold shrink-0"></div>
                          <p className="text-mpl-navy/80">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {member.affiliations && <div className="hidden"></div>}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-mpl-blue font-bold tracking-wider uppercase text-sm">
                Legal Assistance
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy mt-2 mb-4">
                Discuss Your Case With {member.name.split(" ")[0]}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Schedule a consultation to discuss your legal needs and explore
                your options.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMember;
