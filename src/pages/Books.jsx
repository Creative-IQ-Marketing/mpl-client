import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Catalog />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,117,181,0.12),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(35,67,116,0.10),transparent_50%),radial-gradient(circle_at_30%_90%,rgba(99,155,227,0.10),transparent_60%)]" />
      <div className="container-custom relative">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-gray-500">
                <BookOpen size={14} />
                Resources
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-mpl-navy leading-tight">
                Books
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl">
                Premium, practical guides built to reduce uncertainty and help you move forward with clarity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
                <div className="text-sm font-semibold text-mpl-navy">What you’ll find</div>
                <div className="mt-4 space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mpl-blue" />
                    <span>Guides focused on real decisions and real outcomes.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mpl-blue" />
                    <span>Clean structure, quick takeaways, and actionable steps.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mpl-blue" />
                    <span>Built to support families through stressful transitions.</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#books"
                    className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white px-7 py-4 rounded-full font-bold shadow-sm hover:bg-mpl-blue transition-colors"
                  >
                    Browse Titles <ArrowRight size={18} />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-gray-300 text-mpl-navy px-7 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Catalog = () => {
  const items = [
    {
      title: "Family Blindsided",
      category: "Estate Planning",
      slug: "/resources/books/family-blindsided",
      desc:
        "Helping families stay connected, not conflicted. A comprehensive guide to estate planning that ensures your family avoids unnecessary legal and financial hurdles during challenging times.",
    },
    {
      title: "Divorce Guide",
      category: "Family Law",
      slug: "/resources/books/divorce-guide",
      desc:
        "What to do next when facing divorce. Navigate the complex process of divorce with expert guidance and practical steps to protect your interests and your family's future.",
    },
  ];
  return (
    <section id="books" className="py-14 md:py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-gray-500">
                Available Titles
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
                Browse Our Books
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-gray-500">
                        <BookOpen size={14} />
                        {item.category}
                      </div>
                      <h3 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-mpl-navy leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="hidden sm:block h-14 w-10 rounded-xl border border-gray-200 bg-[linear-gradient(135deg,rgba(35,67,116,0.10),rgba(99,155,227,0.10))]" />
                  </div>

                  <p className="mt-5 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <Link
                      to={item.slug}
                      className="inline-flex items-center gap-2 font-bold text-mpl-blue hover:text-mpl-navy transition-colors"
                    >
                      Read More <ArrowRight size={18} />
                    </Link>
                    <Link
                      to="/contact"
                      className="text-sm font-semibold text-gray-500 hover:text-mpl-navy transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="px-8 py-5 text-sm text-gray-500 flex items-center justify-between">
                  <span>Free resource</span>
                  <span className="font-semibold text-mpl-navy/80">Edition 1</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
