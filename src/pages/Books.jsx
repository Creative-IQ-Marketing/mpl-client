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
    <section className="relative bg-white mt-10 border-b border-gray-100">
      <div className="container-custom relative">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-gray-400" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400">
                  Resources
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-mpl-navy leading-[1.05] tracking-tight">
                Books
              </h1>
              <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-md">
                Practical guides written to help families make confident legal
                decisions.
              </p>
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
      desc: "Helping families stay connected, not conflicted. A comprehensive guide to estate planning that ensures your family avoids unnecessary legal and financial hurdles during challenging times.",
      number: "01",
    },
    {
      title: "Truth Before the Split",
      category: "Family Law",
      slug: "/resources/books/divorce-guide",
      desc: "The divorce playbook no one gave you. Navigate the complex process of divorce with trusted guidance and practical steps to protect your interests and your family's future.",
      number: "02",
    },
  ];

  return (
    <section id="books" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400">
                Available Books
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-sm font-extra-bold text-gray-400 tabular-nums">
                    {item.number}
                  </span>
                </div>

                {/* Category + Title */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={12} className="text-gray-400" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-gray-400">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-mpl-navy leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description + CTA */}
                <div className="md:col-span-7 flex flex-col justify-between gap-8">
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-md">
                    {item.desc}
                  </p>
                  <Link
                    to={item.slug}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-mpl-navy group-hover:text-mpl-blue transition-colors self-start"
                  >
                    Read More
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
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
