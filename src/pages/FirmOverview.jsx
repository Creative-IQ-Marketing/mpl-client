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
            Compassionate counsel. Aggressive representation. We protect what
            matters most to you.
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
            At Morales Padia Law, we are committed to providing compassionate,
            skilled, and comprehensive legal services to individuals and
            families across San Antonio, Texas.
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
                Our team has extensive experience in{" "}
                <span className="font-bold text-mpl-blue">
                  family law, estate planning
                </span>
                , and{" "}
                <span className="font-bold text-mpl-blue">probate law</span>,
                helping clients navigate complex legal matters with confidence
                and clarity.
              </p>
              <p>
                Founded with a dedication to delivering personalized and
                effective legal solutions, our firm is known for its
                client-first approach. Whether you're going through a divorce,
                facing child custody issues, seeking to establish a will or
                trust, or managing the estate of a loved one, we understand the
                emotional and financial challenges you face and offer guidance
                every step of the way.
              </p>
              <p>
                Our{" "}
                <span className="font-bold text-mpl-blue">
                  award-winning team
                </span>{" "}
                is dedicated to protecting your rights and achieving the best
                possible outcome for your case. We serve the diverse community
                of San Antonio with understanding, experience, and unwavering
                commitment to justice.
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
      desc: "Comprehensive family law services including divorce, child custody, support, adoption, and more. Our compassionate approach ensures your family's well-being comes first.",
      link: "/services#family-law",
    },
    {
      title: "Criminal Law",
      icon: Gavel,
      desc: "Skilled criminal defense representation for DWI, domestic violence, protective orders, and other criminal charges. We protect your rights and fight for the best outcome.",
      link: "/services#criminal-law",
    },
    {
      title: "Estate Planning",
      icon: FileText,
      desc: "Comprehensive estate planning including wills, trusts, powers of attorney, and healthcare directives. Secure your legacy and protect your family's future.",
      link: "/services#estate-planning",
    },
    {
      title: "Probate Law",
      icon: Scale,
      desc: "Trusted guidance through probate processes, will disputes, and estate administration. We ensure smooth, legally sound resolution of estate matters.",
      link: "/services#probate-law",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4475b5_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold">
            Our Practice Areas
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
      title: "Client-Centric",
      desc: "We prioritize understanding your unique needs and providing tailored solutions.",
    },
    {
      title: "Transparent",
      desc: "We believe in clear, open communication throughout the legal process.",
    },
    {
      title: "Skilled",
      desc: "Effective negotiation is often the key to achieving favorable outcomes.",
    },
    {
      title: "Aggressive",
      desc: "We leave no stone unturned to build a compelling case on your behalf.",
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
    { name: "Trisha Morales Padia", role: "Managing Attorney", img: TrishaImg },
    { name: "Dorothy Dominguez", role: "Paralegal", img: DorothyImg },
    { name: "Allyson Gilmore", role: "Accounting Manager", img: AllysonImg },
    {
      name: "Veronica Ruvalcaba",
      role: "Outreach Coordinator",
      img: VeronicaImg,
    },
    { name: "Elena Galaviz", role: "Family Law Paralegal", img: ElenaImg },
    { name: "Cameron Ozuna", role: "Paralegal", img: CameronImg },
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
                <p className="text-mpl-blue text-sm">{member.role}</p>
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
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Contact us today to schedule a consultation. Let us help you protect
          what matters most.
        </p>
        <button className="bg-mpl-navy text-white px-10 py-4 rounded-full hover:bg-mpl-blue transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Schedule Consultation
        </button>
      </div>
    </section>
  );
};

export default FirmOverview;
