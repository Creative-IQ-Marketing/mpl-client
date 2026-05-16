import React, { useState } from "react";
import { motion } from "framer-motion";
const Motion = motion;
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "../components/ConsultationForm";
import SEO from "../components/SEO";
import {
  subscribeContactToNewsletter,
  unsubscribeEmailFromNewsletter,
} from "../services/ghl";

const YOUTUBE_EMBED_BASE = "https://www.youtube.com/embed";
const BLOG_ORIGIN = "https://blog.moralespadialaw.com";
const BLOG_FRESH_WINDOW_MS = 2 * 60 * 1000;

const getFreshBlogUrl = () => {
  const freshnessBucket = Math.floor(Date.now() / BLOG_FRESH_WINDOW_MS);
  return `${BLOG_ORIGIN}?v=${freshnessBucket}`;
};

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Blog | Morales Padia Law - Legal Insights & Resources"
        description="Stay informed with practical estate planning and probate insights, including wills, trusts, and advance directives."
        keywords="San Antonio legal blog, estate planning blog, probate blog, wills and trusts, power of attorney, advance directives, legal resources San Antonio"
        canonical={window.location.origin + "/resources/blog"}
        pageType="blog"
      />
      <Hero />
      <LatestPosts />
      <FeaturedVideo />
      <MediaSection />
      <SubscribeBar />
      <ContactSection />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white border-b border-gray-100">
      <div className="container-custom relative mt-6 md:mt-8">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-gray-400" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400">
                  Insights
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-mpl-navy leading-[1.05] tracking-tight">
                Planning for the future
              </h1>
              <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-md">
                Clear, practical insights from our team—built for families who
                want confidence, not confusion.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#latest"
                  className="inline-flex items-center justify-center gap-2 bg-mpl-navy text-white px-7 py-3.5 rounded-sm text-sm font-semibold hover:bg-mpl-blue transition-colors"
                >
                  View Posts <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-mpl-navy px-7 py-3.5 rounded-sm text-sm font-semibold hover:border-gray-400 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedVideo = () => {
  const estatePlanningVideoId = "lewEf66tJfY";

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-sm border border-gray-100 shadow-sm"
          >
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`${YOUTUBE_EMBED_BASE}/${estatePlanningVideoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=1`}
                title="Estate planning video"
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

const MediaSection = () => {
  const items = [
    {
      title: "Discussion with Trisha Morales",
      youtubeId: "4Y8nCUwCLBQ",
      type: "youtube",
    },
    {
      title: "Streaming Audio Interview",
      videoUrl:
        "https://res.cloudinary.com/dlznleshe/video/upload/v1778965555/MPLaw_SALiv0906f_ibiij6.mp4",
      type: "cloudinary",
    },
    {
      title: "Discussion & Topic Meeting",
      videoUrl:
        "https://res.cloudinary.com/dlznleshe/video/upload/v1778965554/MPLaw_DTM0906f_p0unka.mp4",
      type: "cloudinary",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400">
                Media
              </span>
              <h2 className="mt-3 text-3xl font-serif font-bold text-mpl-navy tracking-tight">
                Videos
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) =>
              item.type === "youtube" ? (
                <a
                  key={item.youtubeId}
                  href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-sm border border-gray-200 bg-white hover:border-gray-400 transition-colors"
                >
                  <div className="aspect-video bg-black overflow-hidden">
                    <img
                      src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-serif text-mpl-navy text-base font-semibold">
                      {item.title}
                    </div>
                    <div className="mt-1.5 text-xs text-gray-400 tracking-wide uppercase flex items-center gap-1.5">
                      Watch on YouTube <ArrowRight size={11} />
                    </div>
                  </div>
                </a>
              ) : (
                <a
                  key={item.videoUrl}
                  href={item.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-sm border border-gray-200 bg-white hover:border-gray-400 transition-colors"
                >
                  <div className="aspect-video bg-black overflow-hidden">
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-serif text-mpl-navy text-base font-semibold">
                      {item.title}
                    </div>
                    <div className="mt-1.5 text-xs text-gray-400 tracking-wide uppercase flex items-center gap-1.5">
                      Watch Video <ArrowRight size={11} />
                    </div>
                  </div>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsletterSignup = ({ source = "blog_newsletter_subscribe" }) => {
  const [email, setEmail] = useState("");
  const [unsubscribeEmail, setUnsubscribeEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUnsubmitting, setIsUnsubmitting] = useState(false);
  const [unsubscribeError, setUnsubscribeError] = useState("");
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!email.trim()) {
      setSubmitError("Please enter a valid email.");
      return;
    }
    setIsSubmitting(true);
    try {
      await subscribeContactToNewsletter(email, {
        source,
        pagePath: window.location.pathname,
      });
      setIsSubmitted(true);
      setEmail("");
    } catch {
      setSubmitError(
        "Could not subscribe right now. Please try again shortly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    setUnsubscribeError("");
    if (!unsubscribeEmail.trim()) {
      setUnsubscribeError("Please enter a valid email.");
      return;
    }
    setIsUnsubmitting(true);
    try {
      await unsubscribeEmailFromNewsletter(unsubscribeEmail, {
        source: source.replace("subscribe", "unsubscribe"),
        pagePath: window.location.pathname,
      });
      setIsUnsubscribed(true);
      setUnsubscribeEmail("");
    } catch {
      setUnsubscribeError(
        "Could not unsubscribe right now. Please try again shortly.",
      );
    } finally {
      setIsUnsubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (submitError) setSubmitError("");
            if (isSubmitted) setIsSubmitted(false);
          }}
          placeholder="Your email"
          className="h-11 flex-1 rounded-sm border border-gray-200 px-4 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-mpl-navy focus:border-mpl-navy"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-11 px-5 rounded-sm bg-mpl-navy text-white text-sm font-semibold hover:bg-mpl-blue transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </button>
      </form>

      {(isSubmitted || submitError) && (
        <p
          className={`mt-2 text-xs ${isSubmitted ? "text-green-600" : "text-red-500"}`}
          role={submitError ? "alert" : "status"}
        >
          {isSubmitted ? "You're subscribed. Thank you." : submitError}
        </p>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 mb-2">
          Prefer not to receive emails?
        </p>
        <form onSubmit={handleUnsubscribe} className="flex gap-2">
          <input
            type="email"
            value={unsubscribeEmail}
            onChange={(e) => {
              setUnsubscribeEmail(e.target.value);
              if (unsubscribeError) setUnsubscribeError("");
              if (isUnsubscribed) setIsUnsubscribed(false);
            }}
            placeholder="Email to unsubscribe"
            className="h-9 flex-1 rounded-sm border border-gray-200 px-3 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-mpl-navy focus:border-mpl-navy"
          />
          <button
            type="submit"
            disabled={isUnsubmitting}
            className="h-9 px-4 rounded-sm border border-gray-200 text-xs font-semibold text-gray-500 hover:border-gray-400 hover:text-mpl-navy transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {isUnsubmitting ? "..." : "Unsubscribe"}
          </button>
        </form>
        {(isUnsubscribed || unsubscribeError) && (
          <p
            className={`mt-2 text-xs ${isUnsubscribed ? "text-green-600" : "text-red-500"}`}
          >
            {isUnsubscribed ? "You've been unsubscribed." : unsubscribeError}
          </p>
        )}
      </div>
    </div>
  );
};

const SubscribeBar = () => {
  return (
    <section id="subscribe" className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <div className="shrink-0 max-w-xs">
              <h3 className="text-xl font-serif font-bold text-mpl-navy">
                Subscribe for new posts
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Occasional insights. No spam.
              </p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterSignup source="blog_subscribe_bar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestPosts = () => {
  const blogCategories = [
    {
      id: "estate-planning",
      label: "Blog",
      url: getFreshBlogUrl(),
      description: "Wills, trusts & planning",
    },
  ];

  const currentBlog = blogCategories[0];

  return (
    <section id="latest" className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400">
                Latest
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-mpl-navy tracking-tight">
                Blog Posts
              </h2>
              <p className="mt-3 text-sm text-gray-500 max-w-sm leading-relaxed">
                Insights on estate planning, probate, wills, and trusts from our
                team.
              </p>
            </div>
            <Link
              to="/resources/books"
              className="inline-flex items-center gap-2 text-sm font-semibold text-mpl-navy hover:text-mpl-blue transition-colors group"
            >
              Explore Books{" "}
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            key={currentBlog?.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-sm border border-gray-200 bg-white overflow-hidden shadow-sm"
          >
            <iframe
              src={currentBlog?.url}
              className="w-full h-[1400px] min-h-[900px] border-0"
              title={`${currentBlog?.label} - Morales & Padia Law Blog`}
              loading="lazy"
            />
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={currentBlog?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-mpl-navy text-white px-7 py-3.5 rounded-sm text-sm font-semibold hover:bg-mpl-blue transition-colors w-full sm:w-auto justify-center"
            >
              View Full Blog <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-mpl-navy px-7 py-3.5 rounded-sm text-sm font-semibold hover:border-gray-400 transition-colors w-full sm:w-auto justify-center"
            >
              Ask a Question
            </a>
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
      details: ["info@moralespadialaw.com"],
      action: "mailto:info@moralespadialaw.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["San Antonio, Texas"],
      action: "https://maps.google.com/?q=29.52137717375601,-98.48965712995692",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white border-t border-gray-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400">
              Get in touch
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-mpl-navy tracking-tight">
              Contact Us
            </h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Have a question from something you saw here? Send a message and
              our team will follow up.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-gray-100 rounded-sm flex items-center justify-center text-gray-400 shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-wide uppercase text-gray-400 mb-1">
                      {item.title}
                    </div>
                    {item.details.map((detail) => (
                      <a
                        key={detail}
                        href={item.action}
                        className="block text-sm text-mpl-navy hover:text-mpl-blue transition-colors font-medium"
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8"
          >
            <div className="border border-gray-100 rounded-sm bg-white p-8 md:p-10 shadow-sm">
              <ConsultationForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
