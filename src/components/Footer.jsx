import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mpl-navy text-white pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-serif font-medium tracking-tight mb-4 text-white">
              MORALES PADIA LAW
            </h2>
            <p className="text-gray-400 text-xs leading-5 mb-6 max-w-[200px]">
              Strategic legal excellence customized to your needs.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Firm
            </h3>
            <ul className="space-y-2">
              {["About", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {[
                "Family Law",
                "Criminal Defense",
                "Estate Planning",
                "Probate",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Compact */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              San Antonio Office
            </h3>
            <div className="space-y-1 text-gray-300">
              <p>123 Legal Avenue, Suite 100</p>
              <p>San Antonio, TX 78205</p>
              <p className="mt-4 block hover:text-white transition-colors font-medium">
                (210) 555-0123
              </p>
              <p className="hover:text-white transition-colors">
                hello@moralespadialaw.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Morales Padia Law PLLC.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
