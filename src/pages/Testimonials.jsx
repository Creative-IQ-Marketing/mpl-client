import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import TrishaImg from "../assets/team/optimized/UF9A2215-Edit-Edit.webp";
import TestimonialsComponent from "../components/home/Testimonials";
import ConsultationForm from "../components/ConsultationForm";

const Testimonials = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-mpl-blue/10 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src={TrishaImg}
                alt="Attorney Trisha Morales Padia"
                className="relative z-10 rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl lg:text-3xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
                Real people. Real situations. Real outcomes.
              </h1>
              <div className="space-y-6 text-mpl-blue text-lg leading-relaxed">
                <p>
                  Every client comes to us at a different moment in life, often
                  during stress, change, or uncertainty.
                </p>
                <p>
                  These testimonials show what it is like to move through that
                  process with clear guidance and a legal team that stays with
                  you at every step.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Banner */}
      <section className="bg-mpl-navy py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">
            See what it’s like to have the right team guiding your next
            decision.
          </h2>
        </motion.div>
      </section>

      {/* Testimonials Component */}
      <section className="bg-white py-12">
        <div className="container-custom max-w-5xl space-y-6">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <p className="text-base text-gray-700 leading-relaxed">
              “I had an excellent experience with this divorce lawyer firm. From
              the very beginning, they were professional, responsive, and
              genuinely attentive to my situation. They explained every step of
              the process clearly and made sure I understood my options, which
              helped reduce a lot of the stress. What stood out most was their
              dedication and compassion. They handled my case efficiently while
              still taking the time to address my concerns and keep me informed.
              I always felt like my case mattered and that I was in capable
              hands. Thanks to their hard work, everything was resolved smoothly
              and fairly.”
            </p>
            <p className="mt-3 text-sm font-semibold text-mpl-navy">
              Ron "Bishop" Samurovic
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <p className="text-base text-gray-700 leading-relaxed">
              “It is difficult enough to go through the divorce process. The
              overwhelming decision to decide on a firm that is right for you is
              another decision that may add to the stress. However, Morales
              Padia Law has been exceptional and I would recommend to anyone in
              San Antonio who is seeking legal counsel regarding family matters.
              Their support, understanding, communication, and professionalism
              throughout this ongoing process have been top notch.”
            </p>
            <p className="mt-3 text-sm font-semibold text-mpl-navy">Heather</p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <TestimonialsComponent />
      </div>

      {/* Contact Section */}
      <section className="relative py-24 bg-mpl-navy text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-mpl-navy via-mpl-navy to-mpl-blue opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-mpl-blue rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-mpl-lightBlue rounded-full blur-[120px]"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-widest uppercase mb-6"
            >
              Get in Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
            >
              Need legal support?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              Don't navigate the legal system alone. Contact us today for a
              free, confidential case review.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto transform hover:-translate-y-2 transition-transform duration-500"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
