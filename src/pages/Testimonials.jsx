import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import TrishaImg from "../assets/team/UF9A2215-Edit-Edit.jpg";
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
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-mpl-navy mb-8 leading-tight">
                Client Success Stories: Real Results, Real People
              </h1>
              <div className="space-y-6 text-mpl-blue text-lg leading-relaxed">
                <p>
                  At Morales Padia Law, we take pride in the lasting
                  relationships we build with our clients and the exceptional
                  results we achieve. Our clients' stories reflect our
                  commitment to fighting for justice and delivering personalized
                  legal solutions.
                </p>
                <p>
                  Read their testimonials to learn how we've made a difference
                  in their lives—one case at a time. Their experiences highlight
                  our dedication, professionalism, and unwavering support
                  throughout every legal journey.
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
            See What Our Clients Have to Say!
          </h2>
        </motion.div>
      </section>

      {/* Testimonials Component */}
      <div className="bg-gray-50">
        <TestimonialsComponent />
      </div>

      {/* Contact Section */}
      <section className="relative py-24 bg-mpl-navy text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-mpl-navy via-[#1a2b4b] to-mpl-blue opacity-90"></div>
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
