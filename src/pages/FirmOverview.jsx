import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Motion = motion;
import {
  ArrowRight,
  Scale,
  Users,
  Heart,
  Shield,
  Gavel,
  FileText,
  ChevronDown,
} from "lucide-react";

import TrishaImg from "../assets/team/UF9A2215-Edit-Edit.jpg";
import DorothyImg from "../assets/team/Dorothy1 UF9A2316-Edit-2.jpg";
import PaulaPerezImg from "../assets/team/PaulaPerezHeadshot.jpg";
import AllysonImg from "../assets/team/Allyson1 UF9A2325-Edit-2.jpg";
import CameronImg from "../assets/team/Cameron1 UF9A2310-Edit-2.jpg";
import VeronicaImg from "../assets/team/veronica.jpeg";
import ElenaImg from "../assets/team/Elena1 UF9A2289-Edit-2.jpg";
import AlexandraImg from "../assets/team/Alexandra1 UF9A2272-Edit-2.jpg";
import LadyJusticeImg from "../assets/hero/alvaro-serrano-hjwKMkehBco-unsplash.jpg";

const FirmOverview = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <PracticeAreas />
      <CoreValues />
      <MeetOurTeam />
      <CTA />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      {/* Animated Background Blobs */}
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
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-mpl-lightBlue/20 rounded-full blur-[120px] mix-blend-screen"
      />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 text-white drop-shadow-xl">
            Justice <br />
            <span className="italic text-mpl-lightBlue relative inline-block">
              Redefined.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-2 left-0 h-1 bg-white/30"
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-lg font-light leading-relaxed drop-shadow-md">
            Because life changes. Your legal team shouldn't.
          </p>
        </motion.div>

        <motion.div style={{ y: y2 }} className="hidden lg:block relative">
          {/* Decorative elements for desktop */}
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-mpl-lightBlue/20 rounded-full" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
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

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-mpl-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mpl-lightBlue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-mpl-navy mb-8 font-bold tracking-tight">
            Who We Are
          </h2>
          <p className="text-xl md:text-2xl text-mpl-blue font-medium leading-relaxed max-w-3xl mx-auto">
            We provide continuous legal guidance for every stage of life, so
            your family, your future, and everything you've built stays
            protected, no matter what comes next.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text */}
          <div className="space-y-8">
            <h3 className="text-4xl font-serif text-mpl-navy font-bold leading-tight">
              Our Mission & <br />
              Commitment
            </h3>

            <div className="text-lg text-mpl-blue/80 leading-relaxed space-y-6 font-medium">
              <p>
                At Morales Padia Law, we don't just handle cases, we guide
                people through some of the most important transitions of their
                lives.
              </p>
              <p>
                Whether you're navigating a divorce, working through custody
                decisions, planning for your family's future, or handling the
                loss of a loved one, these moments are deeply personal. They're
                not just legal issues, they're life decisions.
              </p>
              <p>
                That's why our mission is simple: to be your lawyer for life.
                We're here not just for the immediate challenge in front of you,
                but for what comes next, and everything after that.
              </p>
              <p>
                Our approach is hands-on, thoughtful, and tailored to you. Some
                clients need strong advocacy in the courtroom. Others need
                guidance, structure, and a path toward resolution without
                unnecessary conflict.
              </p>
              <p>
                Serving San Antonio and surrounding communities means more to us
                than providing legal services. It means building relationships,
                earning trust, and being a steady presence during uncertain
                times.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-mpl-blue/5 rounded-3xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img
                src={LadyJusticeImg}
                alt="Lady Justice Statue"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-mpl-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const practices = [
    {
      title: "Family Law",
      icon: Users,
      desc: "Guiding you through divorce, custody, and life-changing decisions with clarity, strategy, and your family's future in mind.",
      link: "/family-law",
    },
    {
      title: "Criminal Law",
      icon: Gavel,
      desc: "When your future is on the line, we provide strong, strategic defense you can rely on.",
      link: "/criminal-defense",
    },
    {
      title: "Estate Planning",
      icon: FileText,
      desc: "Helping you create a clear plan so your family is protected and your wishes are honored.",
      link: "/estate-planning",
    },
    {
      title: "Probate Law",
      icon: Scale,
      desc: "Supporting you through the legal process after a loss with clarity and steady guidance.",
      link: "/probate-law",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4475b5_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold">
            How We Help You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="bg-mpl-blue/5 p-4 rounded-full mb-6 group-hover:bg-mpl-blue/10 transition-colors">
                <practice.icon className="w-10 h-10 text-mpl-blue" />
              </div>

              <h3 className="text-2xl font-serif text-mpl-navy mb-4 font-semibold">
                {practice.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {practice.desc}
              </p>

              <a
                href={practice.link}
                className="inline-flex items-center text-mpl-blue font-semibold hover:text-mpl-navy transition-colors mt-auto"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      title: "Listened.",
      desc: "We take the time to understand your story so we can guide you through what comes next.",
    },
    {
      title: "Informed.",
      desc: "You will always know where your case stands and what your next step should be.",
    },
    {
      title: "Focused.",
      desc: "Every decision we make is focused on protecting your future, not just solving today's problem.",
    },
    {
      title: "Supported.",
      desc: "We are here to help you through this moment and to be the team you rely on moving forward.",
    },
  ];

  return (
    <section className="py-24 bg-mpl-navy text-white overflow-hidden">
      <div className="container-custom">
        <h2 className="text-4xl font-serif mb-16 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl font-serif text-white/5 absolute -top-10 -left-4 font-bold select-none">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-serif mb-4 relative z-10">
                {value.title}
              </h3>
              <p className="text-gray-300 relative z-10 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MeetOurTeam = () => {
  const team = [
    { name: "Trisha Morales Padia", role: "Founder/Educator", img: TrishaImg },
    { name: "Dorothy Dominguez", role: "Paralegal", img: DorothyImg },
    { name: "Paula Perez", role: "Attorney", img: PaulaPerezImg },
    { name: "Allyson Gilmore", role: "Operations Director", img: AllysonImg },
    {
      name: "Veronica Ruvalcaba",
      role: "Outreach Coordinator",
      img: VeronicaImg,
    },
    { name: "Elena Galaviz", role: "Family Law Paralegal", img: ElenaImg },
    {
      name: "Cameron Ozuna",
      role: "Paralegal/Marketing Coordinator",
      img: CameronImg,
    },
    {
      name: "Alexandra Johnson",
      role: "Client Services Director",
      img: AlexandraImg,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-serif text-mpl-navy mb-16 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[3/4] bg-gray-100"
            >
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-mpl-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-xl font-serif text-white">{member.name}</h3>
                <p className="text-white/90 text-sm">{member.role}</p>
              </div>

              {/* Always visible label for mobile or if hover is missed */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur md:hidden">
                <h3 className="text-lg font-serif text-mpl-navy">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-gray-50 flex items-center justify-center">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy mb-8">
          Let's talk about your next step
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          You do not have to make these decisions alone. We will help you
          understand your options and choose the path that is right for you.
        </p>
        <a
          href="/contact#consultation"
          className="inline-flex bg-mpl-navy text-white px-10 py-4 rounded-full hover:bg-mpl-blue transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default FirmOverview;
