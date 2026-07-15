import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import {
  ArrowRight,
  CheckCircle,
  Scale,
  Shield,
  Users,
  BookOpen,
  Star,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import BookCoverImg from "../assets/divorcebook/1778273573694-9670c431-0cde-4839-8c05-98c928426015_1.png";

const PDF_PATH = "/Truth_Before_the_Split_Divorce_Playbook.pdf";
const PDF_FILENAME = "Truth_Before_the_Split_by_Trisha_Morales_Padia.pdf";

const BookDivorceGuide = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Highlights />
      <Contents />
      <Benefits />
      <CTA />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white border-b border-gray-100">
      <div className="container-custom py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <motion.div
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <BookOpen size={18} className="text-mpl-navy" />
              <span className="text-xs font-bold tracking-wider uppercase text-gray-500">
                Divorce Guide
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-serif font-bold text-mpl-navy leading-tight mb-6"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              Truth Before the Split
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The divorce playbook no one gave you. Navigate the complex process
              of divorce with trusted guidance and practical steps to protect
              your interests and your family's future.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-mpl-gold text-mpl-gold"
                  />
                ))}
              </span>
              <span className="text-sm font-semibold text-gray-700">
                By Trisha Morales Padia
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PDF_PATH}
                download={PDF_FILENAME}
                className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white hover:bg-mpl-blue px-8 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                <Download size={16} />
                Download Free PDF
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-mpl-navy hover:border-gray-400 px-8 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                View Highlights <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Book Cover */}
          <motion.div
            className="flex-1 flex justify-end"
          >
            <div className="w-full max-w-xs">
              <img
                src={BookCoverImg}
                alt="Truth Before the Split - Divorce Playbook by Trisha Morales Padia"
                className="w-full h-auto rounded-xl shadow-2xl"
               loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  const items = [
    "Step-by-step process guide",
    "Understanding your legal rights",
    "Financial planning and asset division",
    "Child custody and support information",
    "Real case examples",
    "Practical legal advice and tips",
  ];
  return (
    <section id="highlights" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-4">
            What You’ll Learn
          </h2>
          <p className="text-gray-700 mb-8">
            Clear steps to protect your interests and move forward confidently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((b, i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.35 }}
              className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <CheckCircle className="text-mpl-blue mt-1 shrink-0" size={20} />
              <span className="text-gray-700">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contents = () => {
  const chapters = [
    { n: "01", t: "Preparation", d: "Gather documents and define goals." },
    { n: "02", t: "Legal Rights", d: "Know your protections and obligations." },
    { n: "03", t: "Finance", d: "Plan assets, support, and budgeting." },
    { n: "04", t: "Children", d: "Prioritize custody and support." },
    { n: "05", t: "Resolution", d: "Choose paths that minimize conflict." },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl">
          <h3 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-8">
            Inside the Book
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
            >
              <div className="text-mpl-blue font-bold">{c.n}</div>
              <div className="mt-2 text-lg font-serif text-mpl-navy font-bold">
                {c.t}
              </div>
              <div className="mt-2 text-gray-600">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    {
      title: "Practical Legal Knowledge",
      icon: Scale,
      desc: "Experience-driven insights into divorce cases.",
    },
    {
      title: "Protect Your Rights",
      icon: Shield,
      desc: "Clear steps to safeguard interests throughout the process.",
    },
    {
      title: "Financial Guidance",
      icon: Users,
      desc: "Understand property division, alimony, and planning.",
    },
    {
      title: "Child-Focused Approach",
      icon: Users,
      desc: "Custody and support information prioritized for children.",
    },
    {
      title: "Save Time & Money",
      icon: Shield,
      desc: "Avoid common mistakes with practical frameworks.",
    },
    {
      title: "Community Support",
      icon: Users,
      desc: "Shared experiences and guidance for stability.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-mpl-navy text-white flex items-center justify-center mb-6">
                <it.icon size={22} />
              </div>
              <h4 className="text-xl font-serif text-mpl-navy font-bold mb-2">
                {it.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-mpl-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,#ffffff22,transparent_60%)]" />
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Get Your Free Copy Today
          </h4>
          <p className="text-white/80 mb-8">
            Download your copy now and take the first step toward a brighter
            future.
          </p>
          <a
            href={PDF_PATH}
            download={PDF_FILENAME}
            className="inline-flex items-center gap-2 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
          >
            <Download size={18} />
            Download Free Guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookDivorceGuide;
