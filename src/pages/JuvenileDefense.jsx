import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Motion = motion;
import {
  ChevronDown,
  Phone,
  Shield,
  FileText,
  Gavel,
  Scale,
  Users,
  FileSearch,
  UserX,
  School,
  Home,
  Car,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const JuvenileDefense = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <OverviewSection />
      <DifferencesSection />
      <OffensesSection />
      <ProcessSection />
      <ProtectionSection />
      <ConsequencesSection />
      <CTA />
      <RelatedServices />
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

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

      <div className="container-custom relative z-10 text-left">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4 text-white drop-shadow-xl">
            Juvenile Defense
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            Protecting Young Lives and Future Opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
            The juvenile justice system requires a compassionate, strategic approach. We defend young people while safeguarding their rights, reputation, and future opportunities.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mpl-blue text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-mpl-lightBlue transition-all"
            >
              <Shield size={18} /> Get Help Now
            </Link>
            <a
              href="tel:7262044044"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> Call (726) 204-4044
            </a>
          </div>
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

const OverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
          <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-4">
            Understanding Juvenile Defense
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The juvenile defense system is a compassionate structure designed to help youth under 17 years old who are accused of criminal offenses. The focus is on rehabilitation and future opportunity, not punishment. We guide families through a unique legal process, protecting children’s rights and long‑term prospects while seeking second chances.
          </p>
        </div>
      </div>
    </section>
  );
};

const DifferencesSection = () => {
  const rows = [
    { label: "Primary Goal", juvenile: "Rehabilitation & Treatment", adult: "Punishment & Deterrence" },
    { label: "Proceedings", juvenile: "Generally Confidential", adult: "Public Record" },
    { label: "Terminology", juvenile: "Adjudication, Disposition", adult: "Trial, Sentencing" },
    { label: "Jury Trial", juvenile: "No Jury in Most Cases", adult: "Right to Jury Trial" },
    { label: "Consequences", juvenile: "Probation, Treatment, Diversion", adult: "Fines, Prison, Probation" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold mb-6 text-center">
          Juvenile vs. Adult Court
        </h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <div className="bg-mpl-navy text-white p-6 text-center font-serif font-bold">
            Key Differences Between Systems
          </div>
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 border-b border-r font-serif font-semibold text-mpl-navy">Aspect</div>
            <div className="p-4 border-b border-r font-serif font-semibold text-mpl-navy">Juvenile Court</div>
            <div className="p-4 border-b font-serif font-semibold text-mpl-navy">Adult Court</div>
            {rows.map((r, i) => (
              <React.Fragment key={i}>
                <div className="p-4 border-t border-r bg-gray-50">{r.label}</div>
                <div className="p-4 border-t border-r">{r.juvenile}</div>
                <div className="p-4 border-t">{r.adult}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OffensesSection = () => {
  const cards = [
    {
      title: "Status Offenses",
      icon: Shield,
      desc: "Non‑criminal offenses due to age (truancy, curfew violations, etc.).",
      bullets: ["Truancy", "Curfew violations", "Running away", "Smoking/possession"],
    },
    {
      title: "Property Crimes",
      icon: Home,
      desc: "Offenses involving theft, damage, or unauthorized use of property.",
      bullets: ["Theft", "Burglary", "Vandalism", "Trespassing"],
    },
    {
      title: "Drug Offenses",
      icon: FileSearch,
      desc: "Possession or distribution of controlled substances and paraphernalia.",
      bullets: ["Simple possession", "Marijuana possession", "Paraphernalia", "Distribution"],
    },
    {
      title: "Violent Offenses",
      icon: Gavel,
      desc: "Assaultive conduct, fights, and weapon‑related charges.",
      bullets: ["Fighting at school", "Assault", "Robbery", "Weapon charges"],
    },
    {
      title: "School‑Related Offenses",
      icon: School,
      desc: "Discipline violations occurring on campus or at school functions.",
      bullets: ["Classroom disruptions", "Bullying", "Trespassing on campus", "Vandalism"],
    },
    {
      title: "Traffic & Vehicle Offenses",
      icon: Car,
      desc: "Driving violations and unauthorized vehicle use.",
      bullets: ["Unauthorized use", "Reckless driving", "No insurance", "License issues"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-8 text-center">
          Common Juvenile Offenses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-12 h-12 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-6">
                <c.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-mpl-navy font-bold mb-2">{c.title}</h3>
              <p className="text-gray-600 mb-4">{c.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {c.bullets.map((b, idx) => (
                  <div key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="text-mpl-gold mr-2 text-xs">●</span> {b}
                  </div>
                ))}
              </div>
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
      title: "Referral & Intake",
      icon: Users,
      desc: "Initial referral to intake; parents and youth meet the system. We clarify rights and next steps.",
      bullets: ["Confidential assessment", "Rights overview", "Process guidance", "Strategy planning"],
    },
    {
      id: 2,
      title: "Detention Hearing",
      icon: Shield,
      desc: "Determine custody status; we advocate for release and community‑based supervision.",
      bullets: ["Release advocacy", "Risk assessment", "Supervision planning", "Family involvement"],
    },
    {
      id: 3,
      title: "Petition Filing",
      icon: FileText,
      desc: "Petition is filed; we challenge allegations and pursue dismissals or diversions.",
      bullets: ["Evidence review", "Dismissal motions", "Diversion requests", "Negotiation"],
    },
    {
      id: 4,
      title: "Adjudication Hearing",
      icon: Gavel,
      desc: "Fact‑finding hearing; we present evidence, cross‑examine witnesses, and protect rights.",
      bullets: ["Witness prep", "Cross‑examination", "Evidence challenges", "Legal arguments"],
    },
    {
      id: 5,
      title: "Disposition Hearing",
      icon: Scale,
      desc: "Disposition focused on rehabilitation; we advocate alternatives to detention.",
      bullets: ["Treatment plans", "Probation terms", "Community programs", "Educational support"],
    },
    {
      id: 6,
      title: "Supervision & Follow‑up",
      icon: School,
      desc: "Ongoing support including compliance monitoring to ensure best possible outcomes.",
      bullets: ["Compliance guidance", "Record sealing planning", "Education liaison", "Family updates"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-mpl-blue/10 text-mpl-blue rounded-full text-sm font-bold tracking-wider mb-4 uppercase">
            The Juvenile Justice Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-mpl-navy font-bold mb-4">
            The Juvenile Justice Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Understanding the steps involved in Texas juvenile proceedings.
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

const ProtectionSection = () => {
  const items = [
    { title: "Rights Protection", icon: Shield, desc: "Safeguarding constitutional rights during questioning, hearings, and proceedings." },
    { title: "Family Involvement", icon: Users, desc: "Engaging families at every stage for support and informed decisions." },
    { title: "Educational Advocacy", icon: School, desc: "Protecting school records and advocating for appropriate services." },
    { title: "Treatment Focus", icon: Scale, desc: "Prioritizing counseling, treatment, and diversion over detention." },
    { title: "Record Protection", icon: FileText, desc: "Planning and pursuing record sealing to protect future opportunities." },
    { title: "Alternative Dispositions", icon: Gavel, desc: "Seeking community‑based programs and tailored probation terms." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-mpl-navy font-bold mb-8 text-center">
          How We Protect Young Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8"
            >
              <div className="w-10 h-10 rounded-full bg-mpl-navy text-white flex items-center justify-center mb-4">
                <it.icon size={18} />
              </div>
              <h3 className="text-lg font-serif text-mpl-navy font-bold mb-2">{it.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsequencesSection = () => {
  const items = [
    { title: "Educational Impact", desc: "School disciplinary actions, suspensions, or expulsion can affect grades and graduation." },
    { title: "Driving Privileges", desc: "Certain charges may affect licensing or lead to special restrictions." },
    { title: "College Applications", desc: "Records may impact college admissions and scholarship eligibility." },
    { title: "Employment Background", desc: "Juvenile records may appear in some checks and affect job prospects." },
    { title: "Military Service", desc: "Recruiting decisions may consider juvenile history." },
    { title: "Professional Licensing", desc: "State licensing boards can be affected by juvenile adjudications." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 flex-shrink-0" size={22} />
            <div>
              <h3 className="text-mpl-navy font-serif font-bold text-lg">Future Impact</h3>
              <p className="text-gray-600 text-sm">
                Juvenile adjudications are generally confidential, but consequences can still affect a young person’s life. Protect your child’s future by seeking experienced legal help.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {items.map((r, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="text-mpl-navy font-serif font-semibold">{r.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{r.desc}</p>
              </div>
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
              Protect Your Child’s Future
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              When your child faces juvenile charges, their future is at stake. Contact our experienced defense team today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-mpl-navy hover:bg-mpl-gold hover:text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg text-lg transform hover:-translate-y-1"
            >
              <Shield size={20} />
              <span>Get Help Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const RelatedServices = () => {
  const links = [
    { label: "Criminal Defense", to: "/criminal-defense" },
    { label: "DWI Defense", to: "/dwi" },
    { label: "Domestic Violence", to: "/domestic-violence" },
    { label: "Protective Orders", to: "/protective-orders" },
    { label: "Drug Charges", to: "/drug-charges" },
    { label: "Contact Us", to: "/contact" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif text-mpl-navy font-bold">Related Criminal Defense Services</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              className="px-5 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-mpl-navy font-semibold shadow-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JuvenileDefense;
