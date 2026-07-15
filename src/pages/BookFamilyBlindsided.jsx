import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  BookOpen,
  Star,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

const PDF_PATH = "/Family_Blindsided_.pdf";
const PDF_FILENAME = "Family_Blindsided_by_Trisha_Morales_Padia.pdf";

const BookFamilyBlindsided = () => {
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
        <motion.div
          transition={{ duration: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <BookOpen size={18} className="text-mpl-navy" />
            <span className="text-xs font-bold tracking-wider uppercase text-gray-500">
              Family Blindsided
            </span>
          </div>
          <h1
            className="text-3xl md:text-3xl font-serif font-bold text-mpl-navy leading-tight mb-6"
            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            Helping families stay connected, not conflicted
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Practical guidance to reduce stress and avoid costly mistakes during
            life's most challenging moments.
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
      </div>
    </section>
  );
};

const Highlights = () => {
  const items = [
    "Practical steps to reduce family stress",
    "Proactive planning insights",
    "Avoiding legal and financial hurdles",
    "Adapting to life changes",
    "Clarity and peace of mind",
  ];
  return (
    <section id="highlights" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy mb-4">
            What You'll Learn
          </h2>
          <p className="text-gray-700 mb-8">
            A clear framework to protect your loved ones and plan confidently
            during transitions.
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
    {
      n: "01",
      t: "Foundations",
      d: "Core principles for family stability and clarity.",
    },
    {
      n: "02",
      t: "Planning Ahead",
      d: "Proactive steps that reduce stress later.",
    },
    {
      n: "03",
      t: "Legal Basics",
      d: "Understand processes and avoid pitfalls.",
    },
    {
      n: "04",
      t: "Financial Readiness",
      d: "Prepare smartly for changing circumstances.",
    },
    {
      n: "05",
      t: "Support Systems",
      d: "Protect loved ones and strengthen bonds.",
    },
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
      title: "Clarity & Peace of Mind",
      icon: Shield,
      desc: "Simple structure and guidance to reduce confusion.",
    },
    {
      title: "Proactive Planning",
      icon: BookOpen,
      desc: "Practical steps to get ahead of potential issues.",
    },
    {
      title: "Adaptable Framework",
      icon: Users,
      desc: "Built for real families facing real changes.",
    },
    {
      title: "Protect Loved Ones",
      icon: Shield,
      desc: "Reduce risk of conflict and financial strain.",
    },
    {
      title: "Reliable Terms",
      icon: BookOpen,
      desc: "Clear language and useful examples.",
    },
    {
      title: "Trusted Guidance",
      icon: Users,
      desc: "Created by an experienced family law team.",
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
                <it.icon size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-mpl-navy mb-2">
                {it.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-mpl-navy text-white">
      <div className="container-custom text-center">
        <motion.div
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Get the Book — Free
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Download your copy now and get practical, clear guidance for
            navigating family transitions with confidence and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PDF_PATH}
              download={PDF_FILENAME}
              className="inline-flex items-center justify-center gap-2 bg-white text-mpl-navy hover:bg-mpl-gold px-10 py-4 rounded-lg font-bold transition-colors text-base"
            >
              <Download size={18} />
              Download Free PDF
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:border-white px-10 py-4 rounded-lg font-semibold transition-colors text-base"
            >
              Questions? Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookFamilyBlindsided;
