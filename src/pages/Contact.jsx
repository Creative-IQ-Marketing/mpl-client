import React from "react";
import { motion } from "framer-motion";
const Motion = motion;
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ConsultationForm from "../components/ConsultationForm";

const Contact = () => {
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
      action: "https://maps.google.com/?q=San+Antonio,Texas",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9am - 5pm", "Sat-Sun: Closed"],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-mpl-navy text-white -mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mpl-navy/50 to-mpl-navy"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
              We're here to help. Reach out to schedule a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-mpl-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every situation is different. Tell us about yours, and we’ll help you understand your options and create a clear path forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-mpl-blue/10 rounded-full flex items-center justify-center text-mpl-blue mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-mpl-navy mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {item.action ? (
                        <a
                          href={item.action}
                          className="hover:text-mpl-blue transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.964259737563!2d-98.49514102377855!3d29.42412194883584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66138158f!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:mt-12"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
