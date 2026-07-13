import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  Phone,
  Scale,
  Users,
  Home,
  Shield,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const counties = [
  {
    name: "Bexar County",
    tagline: "Our home base — the heart of San Antonio.",
    description:
      "As San Antonio's local law firm, we handle the full spectrum of legal matters for Bexar County residents — from contested divorces in the 45th District Court to estate plans protecting multi-generational family wealth.",
    services: [
      "Family Law",
      "Divorce",
      "Criminal Defense",
      "Estate Planning",
      "Probate",
    ],
    cities: [
      "San Antonio",
      "Alamo Heights",
      "Balcones Heights",
      "Castle Hills",
      "Converse",
      "Fair Oaks Ranch",
      "Helotes",
      "Hill Country Village",
      "Hollywood Park",
      "Kirby",
      "Leon Valley",
      "Live Oak",
      "Olmos Park",
      "Sandy Oaks",
      "Schertz",
      "Selma",
      "Shavano Park",
      "Somerset",
      "St. Hedwig",
      "Terrell Hills",
      "Universal City",
      "Windcrest",
    ],
    highlight: "bg-mpl-navy",
  },
  {
    name: "Comal County",
    tagline: "New Braunfels, Canyon Lake & the Texas Hill Country.",
    description:
      "One of the fastest-growing counties in Texas, Comal County clients come to us for estate planning to protect property passed down through generations, family law matters, and criminal defense representation.",
    services: ["Estate Planning", "Probate", "Family Law", "Criminal Defense"],
    cities: ["New Braunfels", "Canyon Lake", "Fair Oaks Ranch"],
    highlight: "bg-mpl-blue",
  },
  {
    name: "Kendall County",
    tagline: "Boerne & the scenic Hill Country corridor.",
    description:
      "Kendall County residents and business owners trust Morales Padia Law for comprehensive estate plans, asset protection strategies, and family law matters. We understand the unique needs of Hill Country communities.",
    services: [
      "Estate Planning",
      "Wills & Trusts",
      "Asset Protection",
      "Family Law",
    ],
    cities: ["Boerne", "Fair Oaks Ranch"],
    highlight: "bg-mpl-blue",
  },
  {
    name: "Atascosa County",
    tagline: "Pleasanton, Lytle & South Texas.",
    description:
      "We serve Atascosa County clients with estate planning, probate administration, and family law matters. Whether you're in Pleasanton or Lytle, our attorneys travel to ensure you receive the representation you deserve.",
    services: ["Estate Planning", "Probate", "Family Law"],
    cities: ["Pleasanton", "Lytle"],
    highlight: "bg-mpl-blue",
  },
  {
    name: "Wilson County",
    tagline: "Floresville, La Vernia & the eastern corridor.",
    description:
      "Wilson County clients rely on us for estate planning, wills, trusts, and family law matters. Floresville and La Vernia families deserve the same quality legal representation as those in the San Antonio metro.",
    services: ["Estate Planning", "Wills", "Probate", "Family Law"],
    cities: ["Floresville", "La Vernia"],
    highlight: "bg-mpl-blue",
  },
  {
    name: "Medina County",
    tagline: "Castroville, Lytle & western Bexar region.",
    description:
      "We assist Medina County clients with estate planning, probate matters, and family law. Our Castroville-area clients benefit from the same award-winning service that has made us one of San Antonio's top-rated firms.",
    services: ["Estate Planning", "Probate", "Family Law"],
    cities: ["Castroville", "Lytle"],
    highlight: "bg-mpl-blue",
  },
];

const practiceHighlights = [
  {
    icon: Users,
    title: "Family Law",
    blurb:
      "Divorce, child custody, and family matters handled with care across all six counties — from Alamo Heights to Floresville.",
    link: "/family-law",
  },
  {
    icon: Home,
    title: "Estate Planning",
    blurb:
      "Wills, trusts, and legacy planning for Hill Country ranches, Boerne estates, suburban families, and everything in between.",
    link: "/estate-planning",
  },
  {
    icon: Scale,
    title: "Probate Law",
    blurb:
      "Guiding families through Bexar, Comal, Kendall, Wilson, Atascosa, and Medina County estates with clarity and efficiency.",
    link: "/probate-law",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    blurb:
      "Protecting the rights of clients in San Antonio, Converse, Live Oak, Universal City, Schertz, and all surrounding communities.",
    link: "/criminal-defense",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

const ServiceArea = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <PracticeHighlights />
      <CountiesSection />
      {/* <PrioritySuburbs /> */}
      <ReadyCTA />
    </div>
  );
};

// ─── Hero ──────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative overflow-hidden bg-white mt-20">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,117,181,0.10),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(35,67,116,0.08),transparent_50%)]" />
    <div className="container-custom relative py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 text-xs font-bold text-mpl-blue uppercase tracking-widest mb-4 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
          <MapPin size={12} />
          <span>Service Area</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-mpl-navy leading-tight">
          Serving San Antonio &amp; Surrounding Texas Communities
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
          Morales Padia Law proudly serves clients across{" "}
          <strong className="text-mpl-navy">six Texas counties</strong> — Bexar,
          Comal, Kendall, Atascosa, Wilson, and Medina — with the same
          award-winning commitment to excellence at every location.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white px-7 py-4 rounded-full font-bold hover:bg-mpl-blue transition-colors"
          >
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
          <a
            href="tel:7262044044"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-mpl-navy px-7 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
          >
            <Phone size={16} /> (726) 204-4044
          </a>
        </div>
      </motion.div>

      {/* County badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-10 flex flex-wrap gap-2"
      >
        {[
          "Bexar County",
          "Comal County",
          "Kendall County",
          "Atascosa County",
          "Wilson County",
          "Medina County",
        ].map((county) => (
          <span
            key={county}
            className="px-4 py-1.5 rounded-full bg-mpl-navy/8 border border-mpl-navy/15 text-mpl-navy text-sm font-semibold"
          >
            {county}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Practice Highlights ───────────────────────────────────────────────────────

const PracticeHighlights = () => (
  <section className="py-14 md:py-16 bg-white border-t border-gray-100">
    <div className="container-custom">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
        What We Handle Across the Region
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {practiceHighlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-mpl-navy/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-mpl-navy" />
              </div>
              <h3 className="font-serif font-bold text-mpl-navy text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.blurb}
              </p>
              <Link
                to={item.link}
                className="text-mpl-blue text-xs font-bold inline-flex items-center gap-1 hover:text-mpl-navy transition-colors"
              >
                Learn More <ArrowRight size={12} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── Counties Section ──────────────────────────────────────────────────────────

const CountiesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy leading-tight">
          Six Counties. One Trusted Firm.
        </h2>
        <p className="mt-4 text-gray-500 leading-relaxed">
          No matter where you are in South-Central Texas, Morales Padia Law is
          ready to help. Below is a breakdown of every community we serve —
          organized by county.
        </p>
      </motion.div>

      <div className="space-y-8">
        {counties.map((county, idx) => (
          <motion.div
            key={county.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left panel */}
              <div className={`${county.highlight} p-8 text-white`}>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={18} className="text-white/70 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {county.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-0.5">
                      {county.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mt-4">
                  {county.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {county.services.map((svc) => (
                    <span
                      key={svc}
                      className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-semibold"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right panel — city list */}
              <div className="col-span-2 p-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
                  Cities &amp; Communities Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {county.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-mpl-navy text-sm font-medium hover:bg-mpl-navy hover:text-white transition-colors cursor-default"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-mpl-blue text-sm font-bold hover:text-mpl-navy transition-colors"
                  >
                    Schedule a Consultation for {county.name}{" "}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA ───────────────────────────────────────────────────────────────────────

const ReadyCTA = () => (
  <section className="py-14 md:py-16 bg-gray-50">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto rounded-3xl bg-mpl-navy p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
          Wherever You Are, We're Here to Help
        </h2>
        <p className="mt-4 text-white/70 leading-relaxed max-w-2xl mx-auto">
          Morales Padia Law is just a call away, no matter where you live in
          South-Central Texas. Schedule your consultation today and speak with
          an attorney who knows your community.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-mpl-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation <ArrowRight size={18} />
          </Link>
          <a
            href="tel:7262044044"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
          >
            <Phone size={16} /> (726) 204-4044
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
