import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";

const Consultation = () => {
  return (
    <section className="relative bg-gray-50 py-24" id="consultation">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text & Contact Info */}
          <div className="pt-4">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-6 leading-tight">
                Let's start the conversation.
              </h2>
              <p className="text-lg text-gray-600 font-light mb-10 max-w-md leading-relaxed">
                Reach out today for a confidential consultation. We are here to
                listen and help you move forward.
              </p>
            </Motion.div>

            <div className="space-y-6">
              {[
                { label: "Phone", value: "(210) 555-0123", icon: Phone },
                {
                  label: "Email",
                  value: "hello@moralespadialaw.com",
                  icon: Mail,
                },
                { label: "Office", value: "San Antonio, Texas", icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-mpl-navy transition-colors group-hover:bg-mpl-navy group-hover:text-white shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">
                      {item.label}
                    </p>
                    <p className="text-xl text-mpl-navy font-serif group-hover:text-mpl-blue transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h3 className="text-2xl font-serif text-mpl-navy mb-8">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-mpl-navy focus:outline-none focus:border-mpl-blue focus:ring-1 focus:ring-mpl-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-mpl-navy focus:outline-none focus:border-mpl-blue focus:ring-1 focus:ring-mpl-blue transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-mpl-navy focus:outline-none focus:border-mpl-blue focus:ring-1 focus:ring-mpl-blue transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">
                  Practice Area
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-mpl-navy focus:outline-none focus:border-mpl-blue focus:ring-1 focus:ring-mpl-blue transition-all appearance-none cursor-pointer">
                  <option>Select Option</option>
                  <option>Family Law</option>
                  <option>Criminal Defense</option>
                  <option>Estate Planning</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-mpl-navy focus:outline-none focus:border-mpl-blue focus:ring-1 focus:ring-mpl-blue transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-mpl-navy text-white text-base py-4 rounded-lg font-medium hover:bg-mpl-blue transition-colors duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-mpl-navy/20">
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
