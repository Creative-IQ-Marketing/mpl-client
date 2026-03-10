import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <FAQList />
      <ReadyCTA />
      <RelatedServices />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,117,181,0.10),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(35,67,116,0.08),transparent_50%),radial-gradient(circle_at_30%_90%,rgba(99,155,227,0.08),transparent_60%)]" />
      <div className="container-custom relative">
        <div className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-mpl-navy leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Get answers to common questions about estate planning, family law, and legal services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQList = () => {
  const items = [
    {
      q: "What is a Will?",
      a: "A will is a legal document that states how your property should be distributed after your death and who should manage your estate.",
    },
    {
      q: "What is an Estate Plan?",
      a: "An estate plan is a set of documents and decisions that help protect your assets, clarify your wishes, and support your loved ones during life events and after death.",
    },
    {
      q: "Do I Need More Than a Will?",
      a: "Depending on your assets and goals, you may benefit from additional tools like powers of attorney, medical directives, beneficiary designations, or a trust.",
    },
    {
      q: "What if You Pass Away Without a Will?",
      a: "If you die without a will, Texas intestacy rules determine who inherits your assets, which can create delays, added expense, and outcomes you may not have wanted.",
    },
    {
      q: "What is Probate?",
      a: "Probate is the court-supervised process of validating a will (if one exists), paying debts, and distributing assets to heirs or beneficiaries.",
    },
    {
      q: "What is a Living Will?",
      a: "A living will (advance directive) communicates your preferences about medical care if you become unable to make decisions for yourself.",
    },
    {
      q: "Should I Name My Children as Beneficiaries of My Life Insurance Policy?",
      a: "Naming minors directly can create complications. Many families use a trust or guardian/administration structure to ensure funds are managed appropriately.",
    },
    {
      q: "Should I Avoid Probate?",
      a: "Some families choose planning tools that reduce probate complexity. The best approach depends on your assets, goals, and the level of control you want.",
    },
    {
      q: "How Long Does the Process Take?",
      a: "Timelines vary by situation. A straightforward estate plan can often be completed quickly, while probate timelines depend on the court and estate complexity.",
    },
    {
      q: "How Much Does an Estate Plan Cost?",
      a: "Cost depends on what you need. We’ll review your goals and provide a clear scope before moving forward.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="py-14 md:py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, duration: 0.35 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-mpl-navy font-serif font-bold text-lg">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-mpl-blue/20 bg-mpl-blue/10 text-mpl-blue flex items-center justify-center flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ReadyCTA = () => {
  return (
    <section className="py-14 md:py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-sm p-10 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have more questions about estate planning, family law, or our legal services? Our experienced attorneys are here to provide personal and guided comprehensive legal solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white px-8 py-4 rounded-full font-bold hover:bg-mpl-blue transition-colors"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-mpl-navy px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const RelatedServices = () => {
  const items = [
    { label: "Estate Planning Overview", to: "/services#estate-planning" },
    { label: "Will Services", to: "/services#estate-planning" },
    { label: "Trust Services", to: "/services#estate-planning" },
    { label: "Probate Law", to: "/services#probate-law" },
    { label: "Family Law Services", to: "/family-law" },
    { label: "Criminal Defense", to: "/criminal-defense" },
    { label: "Meet Our Attorneys", to: "/firm-overview" },
    { label: "About Our Firm", to: "/firm-overview" },
  ];

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-sm font-bold tracking-wider uppercase text-gray-500">
              Related Legal Services
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {items.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-mpl-navy hover:bg-gray-50 transition-colors"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

