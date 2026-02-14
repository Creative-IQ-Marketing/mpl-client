import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-mpl-navy via-mpl-navy to-black overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-mpl-blue/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-mpl-lightBlue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-mpl-blue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid Lines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(68, 117, 181, 0.1) 25%, rgba(68, 117, 181, 0.1) 26%, transparent 27%, transparent 74%, rgba(68, 117, 181, 0.1) 75%, rgba(68, 117, 181, 0.1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-mpl-lightBlue mb-4">
                  Morales Padia Law
                </h3>
                <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                  Protecting your rights and achieving the best possible outcome
                  for your case with compassionate, expert legal guidance.
                </p>
              </div>

              {/* Social Links - Modern */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                  Follow
                </span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={idx}
                        href="#"
                        className="group relative w-10 h-10 rounded-lg bg-gradient-to-br from-mpl-blue/20 to-mpl-lightBlue/10 flex items-center justify-center border border-mpl-blue/30 hover:border-mpl-lightBlue/60 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-mpl-blue to-mpl-lightBlue opacity-0 group-hover:opacity-10 transition-opacity" />
                        <IconComponent
                          size={18}
                          className="text-mpl-lightBlue group-hover:text-white transition-colors relative z-10"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Services
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-mpl-blue to-mpl-lightBlue" />
              </h4>
              <ul className="space-y-4">
                {[
                  "Family Law",
                  "Estate Planning",
                  "Probate Law",
                  "Criminal Defense",
                ].map((area, idx) => (
                  <li key={idx}>
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-mpl-lightBlue transition-colors inline-flex items-center group"
                    >
                      {area}
                      <ArrowRight
                        size={14}
                        className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-mpl-blue to-mpl-lightBlue" />
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Careers", to: "#" },
                  { label: "Case Studies", to: "#" },
                  { label: "Blog", to: "#" },
                  { label: "Contact", to: "#consultation" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="text-gray-300 hover:text-mpl-lightBlue transition-colors inline-flex items-center group"
                    >
                      {item.label}
                      <ArrowRight
                        size={14}
                        className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Stay Updated */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Stay Updated
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-mpl-blue to-mpl-lightBlue" />
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-sm">
                Subscribe to our newsletter for legal insights and firm updates.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-stretch gap-3">
                <label htmlFor="newsletter" className="sr-only">Email address</label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-mpl-lightBlue"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-mpl-blue text-white font-semibold hover:bg-mpl-lightBlue transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-mpl-blue/30 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Morales Padia Law. All rights
              reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-400 hover:text-mpl-lightBlue transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-mpl-lightBlue transition-colors text-sm"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-mpl-lightBlue transition-colors text-sm"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Lines Accent */}
      <div className="absolute top-0 right-0 w-96 h-1 bg-gradient-to-r from-transparent via-mpl-lightBlue to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-mpl-blue to-transparent opacity-20" />
    </footer>
  );
};

export default Footer;
