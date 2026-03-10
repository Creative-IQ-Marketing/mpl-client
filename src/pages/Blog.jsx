import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "../components/ConsultationForm";

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <SubscribeBar />
      <FeaturedVideo />
      <Highlights />
      <LatestPosts />
      <ContactSection />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,117,181,0.10),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(35,67,116,0.08),transparent_50%),radial-gradient(circle_at_30%_90%,rgba(99,155,227,0.08),transparent_60%)]" />
      <div className="container-custom relative mt-6 md:mt-8">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <div className="text-xs font-bold tracking-wider uppercase text-gray-500">
                San Antonio Legal Blog – Divorce, Estate, Probate & More
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-mpl-navy leading-tight">
                Planning for the future
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl">
                Clear, practical insights from our team—built for families who want confidence, not confusion.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#latest"
                  className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white px-7 py-4 rounded-full font-bold shadow-sm hover:bg-mpl-blue transition-colors"
                >
                  View Posts <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-mpl-navy px-7 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#subscribe"
                  className="inline-flex items-center justify-center gap-2 bg-mpl-blue text-white px-7 py-4 rounded-full font-bold shadow-sm hover:bg-mpl-navy transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
                <div className="text-sm font-semibold text-mpl-navy">Topics</div>
                <div className="mt-4 space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mpl-blue" />
                    <span>Divorce, custody, and family transitions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mpl-blue" />
                    <span>Wills, trusts, and planning ahead</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mpl-blue" />
                    <span>Probate basics and common pitfalls</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to="/resources/books"
                    className="inline-flex items-center gap-2 font-bold text-mpl-blue hover:text-mpl-navy transition-colors"
                  >
                    Browse Books <ArrowRight size={18} />
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

const FeaturedVideo = () => {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lewEf66tJfY?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=1"
                title="TRISHA MORALES PADIA Video Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SubscribeBar = () => {
  return (
    <section id="subscribe" className="py-6 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="text-lg md:text-xl font-serif font-bold text-mpl-navy">
                Subscribe for new posts
              </div>
              <div className="mt-1 text-gray-600">
                Get premium insights delivered occasionally. No spam.
              </div>
            </div>
            <div className="w-full md:w-auto flex items-stretch gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:w-80 h-12 rounded-full border border-gray-300 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-mpl-blue focus:border-mpl-blue"
              />
              <Link
                to="/contact?topic=blog-subscribe"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-mpl-navy text-white font-bold hover:bg-mpl-blue transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  const items = [
    {
      title: "Clarity-first guidance",
      desc: "No fluff—just actionable steps and straightforward explanations.",
    },
    {
      title: "Family-centered perspective",
      desc: "Built around real-life decisions, timelines, and outcomes.",
    },
    {
      title: "Planning that reduces risk",
      desc: "Strategies that help you avoid common legal and financial mistakes.",
    },
  ];

  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-3xl border border-gray-200 bg-white shadow-sm p-7"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-mpl-navy text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <div className="text-lg font-serif font-bold text-mpl-navy">{it.title}</div>
                    <div className="mt-2 text-gray-600 leading-relaxed">{it.desc}</div>
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

const LatestPosts = () => {
  const images = {
    estate:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    planning:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    probate:
      "https://images.unsplash.com/photo-1528747045269-390fe33c19a2?auto=format&fit=crop&w=1600&q=80",
    family:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1600&q=80",
    notes:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    office:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  };

  const posts = [
    {
      title: "Estate Planning Basics: What to Do First",
      category: "Estate Planning",
      date: "Mar 2026",
      readTime: "5 min read",
      img: images.estate,
    },
    {
      title: "Divorce Preparation: Documents and Next Steps",
      category: "Family Law",
      date: "Mar 2026",
      readTime: "6 min read",
      img: images.family,
    },
    {
      title: "Probate 101: Common Questions Answered",
      category: "Probate",
      date: "Mar 2026",
      readTime: "4 min read",
      img: images.probate,
    },
    {
      title: "Parenting Plans: Building Stability for Children",
      category: "Family Law",
      date: "Mar 2026",
      readTime: "7 min read",
      img: images.office,
    },
    {
      title: "Wills vs. Trusts: A Practical Comparison",
      category: "Estate Planning",
      date: "Mar 2026",
      readTime: "5 min read",
      img: images.planning,
    },
    {
      title: "Avoiding Costly Mistakes During Life Transitions",
      category: "Planning",
      date: "Mar 2026",
      readTime: "8 min read",
      img: images.notes,
    },
  ];

  return (
    <section id="latest" className="py-14 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-gray-500">
                Latest
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
                Posts
              </h2>
            </div>
            <Link
              to="/resources/books"
              className="hidden sm:inline-flex items-center gap-2 font-bold text-mpl-blue hover:text-mpl-navy transition-colors"
            >
              Explore Books <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            {["All", "Family Law", "Estate Planning", "Probate", "Planning"].map((c) => (
              <span
                key={c}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${c === "All" ? "bg-mpl-navy text-white border-mpl-navy" : "border-gray-300 text-gray-600 hover:bg-gray-100"} cursor-default`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mb-8 rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative">
                  <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                    <img src={posts[0].img} alt={posts[0].title} className="w-full h-full object-cover" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                      Featured • {posts[0].category}
                    </div>
                    <div className="mt-4 text-2xl md:text-4xl font-serif font-bold text-white leading-tight">
                      {posts[0].title}
                    </div>
                    <div className="mt-3 text-white/80 text-sm font-semibold">
                      {posts[0].date} • {posts[0].readTime}
                    </div>
                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-white text-mpl-navy px-6 py-3 rounded-full font-bold hover:bg-mpl-gold hover:text-white transition-colors"
                      >
                        Ask a Question <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                {posts.slice(1).map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                      <div className="sm:col-span-4">
                        <div className="aspect-[16/10] sm:aspect-auto sm:h-full bg-gray-200 overflow-hidden">
                          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="sm:col-span-8 p-7 md:p-8 flex items-center">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-wider uppercase text-gray-500">
                            <span>{p.category}</span>
                            <span className="text-gray-300">•</span>
                            <span>{p.date}</span>
                            <span className="text-gray-300">•</span>
                            <span>{p.readTime}</span>
                          </div>
                          <div className="mt-3 text-2xl font-serif font-bold text-mpl-navy leading-snug">
                            {p.title}
                          </div>
                          <div className="mt-3 text-gray-600 leading-relaxed">
                            Coming soon.
                          </div>
                          <div className="mt-5">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 font-bold text-mpl-blue hover:text-mpl-navy transition-colors"
                            >
                              Ask a Question <ArrowRight size={18} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="p-7">
                    <div className="text-lg font-serif font-bold text-mpl-navy">
                      Newsletter
                    </div>
                    <div className="mt-2 text-gray-600">
                      Occasional premium updates. No spam.
                    </div>
                    <div className="mt-6 flex items-stretch gap-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-12 rounded-full border border-gray-300 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-mpl-blue focus:border-mpl-blue"
                      />
                      <a
                        href="#subscribe"
                        className="inline-flex items-center justify-center h-12 px-5 rounded-full bg-mpl-navy text-white font-bold hover:bg-mpl-blue transition-colors"
                      >
                        Join
                      </a>
                    </div>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="px-7 py-5 text-sm text-gray-500">
                    Prefer a direct question?{" "}
                    <a href="#contact" className="font-bold text-mpl-blue hover:text-mpl-navy transition-colors">
                      Contact us
                    </a>
                    .
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-7">
                  <div className="text-lg font-serif font-bold text-mpl-navy">
                    Popular topics
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Custody", "Wills", "Trusts", "Probate", "Divorce", "Planning"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-7">
                  <div className="text-lg font-serif font-bold text-mpl-navy">
                    Featured resources
                  </div>
                  <div className="mt-3 text-gray-600">
                    Explore our free guides for families navigating change.
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/resources/books"
                      className="inline-flex items-center gap-2 font-bold text-mpl-blue hover:text-mpl-navy transition-colors"
                    >
                      Browse Books <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(726) 204-4044"],
      action: "tel:7262044044",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@moralespadialaw.com"],
      action: "mailto:hello@moralespadialaw.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["San Antonio, Texas"],
      action: "https://maps.google.com/?q=San+Antonio,Texas",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Have a question from something you saw here? Send a message and our team will follow up.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
                >
                  <div className="w-12 h-12 bg-mpl-blue/10 rounded-full flex items-center justify-center text-mpl-blue mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-serif font-bold text-mpl-navy">
                    {item.title}
                  </div>
                  <div className="mt-2">
                    {item.details.map((detail) => (
                      <a
                        key={detail}
                        href={item.action}
                        className="block text-gray-600 hover:text-mpl-blue transition-colors"
                      >
                        {detail}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
              <ConsultationForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
