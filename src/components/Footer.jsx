import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-mpl-navy text-white pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-medium tracking-tight mb-4 text-white">
              MORALES PADIA LAW
            </h3>
            <p className="text-gray-400 text-xs leading-5 mb-6 max-w-[200px]">
              Strategic legal excellence customized to your needs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@moralespadialaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morales Padia Law on TikTok"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@moralespadialaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morales Padia Law on YouTube"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/MoralesPadiaLaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morales Padia Law on Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/moralespadialaw/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morales Padia Law on Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tmoralespapadia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Morales Padia Law on LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Firm
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About", to: "/firm-overview" },
                { label: "Team", to: "/firm-overview" },
                // { label: "Credentials", to: "/partners" },
                { label: "Contact", to: "/contact" },
                { label: "Testimonials", to: "/testimonials" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              How We Help You
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Family Law", to: "/family-law" },
                { label: "Criminal Defense", to: "/criminal-defense" },
                { label: "Estate Planning", to: "/estate-planning" },
                { label: "Probate", to: "/probate-law" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Compact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              San Antonio Office
            </h3>
            <div className="space-y-1 text-gray-300">
              <p>45 NE LOOP 410 ste 307</p>
              <p>San Antonio, TX 78216</p>
              <a
                href="tel:7262044044"
                className="mt-4 block hover:text-white transition-colors font-medium"
              >
                (726) 204-4044
              </a>
              <a
                href="mailto:info@moralespadialaw.com"
                className="block hover:text-white transition-colors"
              >
                info@moralespadialaw.com
              </a>
            </div>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="border-t border-white/10 pt-8 pb-8 mb-8">
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-5">
            Areas We Serve
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Bexar County",
              "Comal County",
              "Kendall County",
              "Atascosa County",
              "Wilson County",
              "Medina County",
            ].map((county) => (
              <Link
                key={county}
                to="/service-area"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/15 text-xs font-semibold transition-colors"
              >
                {county}
              </Link>
            ))}
          </div>
          <Link
            to="/service-area"
            className="block mt-5 text-mpl-gold text-xs font-bold hover:text-white transition-colors"
          >
            View All Service Areas →
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
          <p>&copy; {new Date().getFullYear()} Morales Padia Law PLLC.</p>
          <a
            href="https://creativeiq.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 tracking-widest uppercase hover:text-white transition-colors duration-300"
          >
            Powered by{" "}
            <span className="font-semibold text-gray-400 hover:text-white">
              Creative IQ
            </span>
          </a>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/newsletter/unsubscribe"
              className="hover:text-white transition-colors"
            >
              Unsubscribe
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
