import React from "react";
import { motion } from "framer-motion";
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
import LazyImage from "../components/LazyImage";

import TrishaImg from "../assets/team/UF9A2215-Edit-Edit.jpg";
import DorothyImg from "../assets/team/Dorothy1 UF9A2316-Edit-2.jpg";
import PaulaPerezImg from "../assets/team/PaulaPerezHeadshot.jpg";
import AllysonImg from "../assets/team/Allyson1 UF9A2325-Edit-2.jpg";
import VeronicaImg from "../assets/team/veronica.jpeg";
import ElenaImg from "../assets/team/Elena1 UF9A2289-Edit-2.jpg";
import AlexandraImg from "../assets/team/Alexandra1 UF9A2272-Edit-2.jpg";
import LaritzaImg from "../assets/team/Laritza (1).png";
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
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] pt-20 md:pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(68,117,181,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(0,26,77,0.07),transparent_28%)]" />
        <Motion.svg
          viewBox="0 0 1200 420"
          className="absolute inset-x-0 top-0 mx-auto h-72 w-full max-w-7xl text-mpl-blue/10"
          fill="none"
          aria-hidden="true"
          animate={{ opacity: [0.42, 0.68, 0.42] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M36 235C160 142 260 118 372 149C473 177 572 258 682 245C807 230 896 147 1162 75"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M66 300C175 239 304 214 430 235C547 255 629 316 745 308C873 299 980 232 1148 170"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </Motion.svg>
      </div>

      <div className="container-custom relative z-10 pb-16 md:pb-24">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center"
        >
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-mpl-blue/15 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-mpl-blue shadow-sm backdrop-blur">
              Morales Padia Law
            </div>
            <h1 className="sr-only">
              San Antonio Law Firm | Morales Padia Law
            </h1>
            <p className="mt-6 text-5xl font-serif font-bold leading-[1.02] text-mpl-navy md:text-6xl lg:text-7xl">
              Legal guidance built for real life.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 md:text-xl">
              We help clients move through family, estate, probate, and defense
              matters with clarity, strategy, and a calm sense of direction.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#who-we-are"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-mpl-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-mpl-blue"
              >
                Explore Our Approach
              </a>
              <a
                href="/contact#consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-mpl-blue/20 bg-white px-6 py-3 text-sm font-semibold text-mpl-navy transition-colors hover:border-mpl-blue/40 hover:text-mpl-blue"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 top-6 h-[92%] w-full rounded-[36px] border border-mpl-blue/10 bg-white/50" />
            <div className="relative overflow-hidden rounded-[36px] bg-white p-3 shadow-[0_24px_80px_rgba(0,26,77,0.10)]">
              <div className="relative overflow-hidden rounded-[28px] bg-[#e8edf6] aspect-4/5">
                <img
                  src={TrishaImg}
                  alt="Trisha Morales Padia"
                  className="absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto max-w-full object-contain"
                />
                <div className="absolute inset-y-5 left-5 w-[calc(100%-2.5rem)] rounded-[999px] border border-white/55" />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-mpl-navy/12 to-transparent h-40" />
              </div>
              <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-5">
                <div>
                  <p className="text-xl font-serif font-semibold text-mpl-navy">
                    Trisha Morales Padia
                  </p>
                  <p className="mt-1 text-sm text-mpl-blue/80">
                    Founder, attorney, and educator
                  </p>
                </div>
                <div className="hidden rounded-full bg-[#f5f8fd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-mpl-blue md:block">
                  Counsel for every chapter
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mpl-blue/70">
              Who We Are
            </p>
            <h2 className="mt-4 text-4xl font-serif font-bold leading-tight text-mpl-navy md:text-5xl lg:text-6xl">
              The firm you turn to when the decision matters.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We provide continuous legal guidance so your family, future, and
              everything you have built stays protected as life changes.
            </p>
            <div className="mt-8 overflow-hidden rounded-[32px] bg-[#f4f7fb] p-3 shadow-[0_18px_60px_rgba(0,26,77,0.08)]">
              <div className="overflow-hidden rounded-[24px] aspect-4/3">
                <img
                  src={LadyJusticeImg}
                  alt="Courtroom and legal setting"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-gray-100 bg-[#fbfcfe] p-7 shadow-sm md:p-10">
            <h3 className="text-3xl font-serif font-bold leading-tight text-mpl-navy md:text-4xl">
              Our mission and commitment
            </h3>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600 md:text-lg">
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
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4475b5_1px,transparent_1px)] bg-size-[16px_16px]" />

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

              <p className="text-gray-600 leading-relaxed mb-8 grow">
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
      name: "Alexandra Johnson",
      role: "Client Services Director",
      img: AlexandraImg,
    },
    {
      name: "Laritza Downs",
      role: "Assistant",
      img: LaritzaImg,
    },
  ];

  return (
    <section className="py-20 bg-white md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mpl-blue/70">
            Meet Our Team
          </p>
          <h2 className="mt-4 text-4xl font-serif font-bold text-mpl-navy md:text-5xl">
            A legal team designed to feel personal.
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
            Clear communication, strong execution, and people you can trust to
            stay present through every stage of the process.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group rounded-[24px] border border-gray-100 bg-[#fafbfd] p-3 shadow-sm"
            >
              <div className="overflow-hidden rounded-[18px] aspect-4/5 bg-[#edf2f8]">
                <LazyImage
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-2 pt-4 text-center">
                <h3 className="text-sm font-serif font-semibold leading-5 text-mpl-navy md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-mpl-blue/80 md:text-sm">
                  {member.role}
                </p>
              </div>
            </motion.div>
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
