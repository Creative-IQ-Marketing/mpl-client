import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import { ArrowRight, CheckCircle, Shield, Users, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="relative isolate overflow-hidden bg-mpl-navy">
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-mpl-navy via-mpl-navy to-black/30" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/arches.png')]" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
              <BookOpen size={14} />
              Family Blindsided
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-serif !text-white font-bold leading-tight">
              Helping families stay connected, not conflicted
            </h1>
            <p className="mt-4 !text-white/75 text-lg leading-relaxed max-w-2xl">
              Practical guidance to reduce stress and avoid costly mistakes during life’s most challenging moments.
            </p>
            <div className="mt-6 flex items-center gap-3 text-white/80">
              <span className="inline-flex items-center gap-1">
                <Star size={16} className="text-mpl-gold" />
                <Star size={16} className="text-mpl-gold" />
                <Star size={16} className="text-mpl-gold" />
                <Star size={16} className="text-mpl-gold" />
                <Star size={16} className="text-mpl-gold" />
              </span>
              <span className="text-sm font-semibold !text-white">By Trisha Morales Padia</span>
              <span className="text-sm !text-white">•</span>
              <span className="text-sm !text-white">Edition 1</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#highlights"
                className="inline-flex items-center justify-center gap-2 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-7 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                View Highlights <ArrowRight size={18} />
              </a>
              <Link
                to="/contact?book=Family%20Blindsided"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 px-7 py-4 rounded-full font-bold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-8 bg-mpl-lightBlue/25 blur-3xl rounded-full" />
              <div className="relative h-[380px] md:h-[420px]">
                <div className="absolute left-10 top-10 w-[240px] md:w-[260px] h-[320px] md:h-[350px] rounded-2xl bg-white/10 border border-white/20 shadow-2xl [transform:perspective(900px)_rotateY(-14deg)_rotateZ(-2deg)]">
                  <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-b from-mpl-blue to-mpl-lightBlue rounded-l-2xl" />
                  <div className="p-8">
                    <div className="text-xs font-bold tracking-wider uppercase text-white/75">Family</div>
                    <div className="mt-4 text-xl md:text-2xl font-serif font-bold text-white leading-tight">
                      Family Blindsided
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-white/75 text-sm font-semibold">
                      <Users size={16} />
                      Guidance
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-white/5 border-t border-white/10 rounded-b-2xl" />
                </div>
                <div className="absolute left-0 right-0 bottom-1 h-[2px] bg-white/15" />
                <div className="absolute left-0 right-0 bottom-0 h-4 bg-gradient-to-b from-black/0 to-black/25" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
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
            What You’ll Learn
          </h2>
          <p className="text-gray-700 mb-8">
            A clear framework to protect your loved ones and plan confidently during transitions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <CheckCircle className="text-mpl-blue mt-1 flex-shrink-0" size={20} />
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
    { n: "01", t: "Foundations", d: "Core principles for family stability and clarity." },
    { n: "02", t: "Planning Ahead", d: "Proactive steps that reduce stress later." },
    { n: "03", t: "Legal Basics", d: "Understand processes and avoid pitfalls." },
    { n: "04", t: "Financial Readiness", d: "Prepare smartly for changing circumstances." },
    { n: "05", t: "Support Systems", d: "Protect loved ones and strengthen bonds." },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl">
          <h3 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-8">Inside the Book</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
            >
              <div className="text-mpl-blue font-bold">{c.n}</div>
              <div className="mt-2 text-lg font-serif text-mpl-navy font-bold">{c.t}</div>
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
    { title: "Clarity & Peace of Mind", icon: Shield, desc: "Simple structure and guidance to reduce confusion." },
    { title: "Proactive Planning", icon: BookOpen, desc: "Practical steps to get ahead of potential issues." },
    { title: "Adaptable Framework", icon: Users, desc: "Built for real families facing real changes." },
    { title: "Protect Loved Ones", icon: Shield, desc: "Reduce risk of conflict and financial strain." },
    { title: "Reliable Terms", icon: BookOpen, desc: "Clear language and useful examples." },
    { title: "Expert Guidance", icon: Users, desc: "Created by an experienced family law team." },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-mpl-navy text-white flex items-center justify-center mb-6">
                <it.icon size={22} />
              </div>
              <h4 className="text-xl font-serif text-mpl-navy font-bold mb-2">{it.title}</h4>
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
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_#ffffff22,_transparent_60%)]" />
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4 !text-white">Get Access Today</h4>
          <p className="!text-white/80 mb-8">
            Join families who have reduced stress and avoided costly mistakes using this guide.
          </p>
          <Link
            to="/contact?book=Family%20Blindsided"
            className="inline-flex items-center gap-2 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
          >
            Get Access Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookFamilyBlindsided;
