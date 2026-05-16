import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../assets/mpl_logo.png";
import { teamMembers } from "../data/team";

function SocialIcon({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mpl-lightBlue/60 hover:bg-white/10"
    >
      {children}
    </a>
  );
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1;
      setIsScrolled(scrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/firm-overview",
      children: [
        { name: "Firm Overview", path: "/firm-overview" },
        // { name: "Credentials", path: "/partners" },
        { name: "Testimonials", path: "/testimonials" },
      ],
    },
    {
      name: "Team",
      path: "/about",
      children: (teamMembers || []).map((member) => ({
        name: member.name,
        path: `/team/${member.id}`,
      })),
    },
    {
      name: "Family Law",
      path: "/family-law",
      children: [
        { name: "Family Law Overview", path: "/family-law", isOverview: true },
        { name: "Adoption", path: "/adoption" },
        { name: "Alimony / Spousal Maintenance", path: "/spousal-maintenance" },
        { name: "Child Custody", path: "/child-custody" },
        { name: "Child Support", path: "/child-support" },
        {
          name: "Child Visitation & Possession",
          path: "/child-visitation-possession",
        },
        { name: "Contested Divorce", path: "/contested-divorce" },
        {
          name: "Custody & Support Modifications",
          path: "/modification-of-previous-order",
        },
        { name: "Emergency Custody Orders", path: "/emergency-custody-orders" },
        { name: "Enforcement of Court Orders", path: "/enforcement" },
        { name: "Flat Fee Divorce", path: "/flat-fee-divorce" },
        { name: "Grandparents' Rights", path: "/grandparents-rights" },
        {
          name: "Mediation & Collaborative Divorce",
          path: "/mediation-collaborative-divorce",
        },
        { name: "Name Change", path: "/name-change" },
        {
          name: "Paternity & Father's Rights",
          path: "/paternity-fathers-rights",
        },
        { name: "Postnuptial Agreements", path: "/postnuptial-agreement" },
        { name: "Prenuptial Agreements", path: "/prenuptial-agreement" },
        { name: "Property Division", path: "/property-division" },
        { name: "Protective Orders", path: "/protective-orders" },
        { name: "Uncontested Divorce", path: "/uncontested-divorce" },
      ],
    },
    {
      name: "Criminal Law",
      path: "/criminal-defense",
      children: [
        {
          name: "Criminal Defense Overview",
          path: "/criminal-defense",
          isOverview: true,
        },
        {
          name: "Assault & Family Violence Charges",
          path: "/assault-family-violence",
        },
        { name: "Domestic Violence Defense", path: "/domestic-violence" },
        { name: "Drug Charges", path: "/drug-charges" },
        { name: "DWI", path: "/dwi" },
        {
          name: "Expungement & Record Sealing",
          path: "/expungement-record-sealing",
        },
        { name: "Felony Charges Defense", path: "/felony-charges-defense" },
        { name: "Misdemeanor Defense", path: "/misdemeanor-defense" },
        { name: "Probation Violations", path: "/probation-violations" },
        { name: "Protective Orders", path: "/protective-orders" },
        { name: "Theft & Property Crimes", path: "/theft-property-crimes" },
        {
          name: "Under Investigation / Pre-Charge Defense",
          path: "/under-investigation",
        },
        { name: "Warrants & Arrest Defense", path: "/warrants-arrest" },
        { name: "Weapons Charges", path: "/weapons-charges" },
      ],
    },
    {
      name: "Estate Planning",
      path: "/estate-planning",
      children: [
        {
          name: "Estate Planning Overview",
          path: "/estate-planning",
          isOverview: true,
        },
        { name: "Advance Directives", path: "/advance-directives" },
        { name: "Asset Protection", path: "/asset-protection" },
        { name: "Estate Affidavits", path: "/estate-affidavits" },
        { name: "Power of Attorney", path: "/power-of-attorney" },
        { name: "Trust", path: "/trust" },
        { name: "Will", path: "/will" },
      ],
    },
    {
      name: "Probate Law",
      path: "/probate-law",
      children: [
        { name: "Probate Overview", path: "/probate-law", isOverview: true },
        { name: "Affidavit of Heirship", path: "/affidavit-of-heirship" },
        { name: "Do I Need Probate in Texas?", path: "/do-i-need-probate" },
        { name: "How to Start Probate", path: "/how-to-start-probate" },
        { name: "No Will? Probate Options", path: "/probate-without-will" },
        {
          name: "Probate Disputes & Litigation",
          path: "/probate-disputes-litigation",
        },
        { name: "Probating a Will", path: "/probating-a-will" },
        { name: "Small Estate Affidavit", path: "/small-estate-affidavit" },
        {
          name: "Transferring Property After Death",
          path: "/transferring-property-after-death",
        },
      ],
    },
    {
      name: "Resources",
      path: "/resources/books",
      children: [
        { name: "Books", path: "/resources/books" },
        { name: "Blog", path: "/resources/blog" },
        { name: "FAQ", path: "/resources/faq" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${
        isHome
          ? isScrolled
            ? "text-mpl-navy bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md"
            : "bg-transparent text-white"
          : "text-mpl-navy bg-white shadow-md"
      }`}
    >
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="tel:7262044044"
              className={`flex items-center text-md md:text-base font-semibold transition-colors ${
                isHome
                  ? isScrolled
                    ? "text-mpl-navy hover:text-mpl-blue"
                    : "text-white hover:text-white/80"
                  : "text-mpl-navy hover:text-mpl-blue"
              }`}
            >
              <Phone size={18} className="mr-2" />
              (726) 204-4044
            </a>
          </div>

          <Link
            to="/"
            className="flex items-center flex-shrink-0"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Morales Padia Law logo"
              width="705"
              height="418"
              className={`w-auto mx-auto transition-all duration-300 ${
                isHome
                  ? isScrolled
                    ? "h-14 md:h-16 lg:h-24"
                    : "h-20 md:h-24 lg:h-28 drop-shadow-[0_2px_8px_rgba(255,255,255,0.85)] brightness-145"
                  : "h-14 md:h-16 lg:h-24"
              }`}
            />
          </Link>

          <div
            className={`hidden md:flex items-center space-x-3 ${
              isHome
                ? isScrolled
                  ? "text-mpl-navy"
                  : "text-white"
                : "text-mpl-navy"
            }`}
          >
            <SocialIcon
              label="Facebook"
              href="https://www.facebook.com/MoralesPadiaLaw"
            >
              <FaFacebookF className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon
              label="Instagram"
              href="https://www.instagram.com/moralespadialaw/"
            >
              <FaInstagram className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon
              label="TikTok"
              href="https://www.tiktok.com/@moralespadialaw"
            >
              <FaTiktok className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon
              label="LinkedIn"
              href="https://www.linkedin.com/in/tmoralespapadia/"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon
              label="YouTube"
              href="https://www.youtube.com/@moralespadialaw"
            >
              <FaYoutube className="w-4 h-4" />
            </SocialIcon>
          </div>

          <button
            className={`md:hidden ml-4 ${
              isHome
                ? isScrolled
                  ? "text-mpl-navy"
                  : "text-white"
                : "text-mpl-navy"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`hidden xl:block ${
          isHome
            ? isScrolled
              ? "backdrop-blur supports-[backdrop-filter]:bg-white/70"
              : "border-t border-white/20 bg-transparent"
            : ""
        }`}
      >
        <div className="container-custom">
          <nav
            className="flex items-center justify-center space-x-6"
            role="navigation"
            aria-label="Primary"
          >
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={link.path}
                    className={`text-sm md:text-base font-medium py-3 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all ${
                      isHome
                        ? isScrolled
                          ? "after:bg-mpl-blue text-gray-700 hover:text-mpl-blue"
                          : "after:bg-white text-white/80 hover:text-white"
                        : "after:bg-mpl-blue text-mpl-navy hover:text-mpl-blue"
                    } ${
                      location.pathname === link.path && !link.children
                        ? isHome
                          ? isScrolled
                            ? "text-mpl-navy font-bold"
                            : "text-white"
                          : "text-mpl-navy font-bold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-colors ${
                        isHome
                          ? isScrolled
                            ? "text-gray-400 group-hover:text-mpl-blue"
                            : "text-white/60 group-hover:text-white"
                          : "text-gray-400 group-hover:text-mpl-blue"
                      }`}
                    />
                  )}
                </div>

                {link.children && (
                  <div
                    className={`absolute mt-0 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border border-gray-100 z-50 translate-y-2 group-hover:translate-y-0 ${
                      link.children.length > 4
                        ? "left-1/2 -translate-x-1/2 w-[900px] p-6"
                        : "left-1/2 -translate-x-1/2 w-56"
                    } ${link.children.length > 4 ? "" : "max-h-[70vh] overflow-y-auto"}`}
                  >
                    {link.children.length > 4 ? (
                      <div className="grid grid-cols-3 gap-6">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.path}
                            className={`block px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                              child.isOverview
                                ? "text-mpl-blue bg-mpl-blue/10 hover:bg-mpl-blue/20 hover:text-mpl-blue"
                                : "text-gray-700 hover:bg-mpl-blue/10 hover:text-mpl-navy"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="py-2">
                        {link.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.path}
                            className={`block px-4 py-2 text-sm rounded-md font-medium transition-colors ${
                              child.isOverview
                                ? "text-mpl-blue bg-mpl-blue/10 hover:bg-mpl-blue/20"
                                : "text-gray-700 hover:bg-mpl-gray hover:text-mpl-navy"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden absolute w-full shadow-lg max-h-[80vh] overflow-y-auto bg-white border-t border-gray-100">
          <div className="container-custom py-4 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <div key={index}>
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <Link
                    to={link.path}
                    className={`text-lg font-medium block w-full ${
                      location.pathname === link.path
                        ? "text-mpl-navy"
                        : "text-gray-700"
                    }`}
                    onClick={!link.children ? closeMenu : undefined}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }}
                      className="p-2 focus:outline-none text-gray-500"
                      aria-expanded={activeDropdown === index}
                      aria-controls={`submenu-${index}`}
                    >
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.children && activeDropdown === index && (
                  <div
                    id={`submenu-${index}`}
                    className="bg-gray-50 pl-4 py-2 space-y-2"
                  >
                    {link.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.path}
                        className={`block py-1 font-medium transition-colors ${
                          child.isOverview
                            ? "text-mpl-blue hover:text-mpl-blue"
                            : "text-gray-600 hover:text-mpl-navy"
                        }`}
                        onClick={closeMenu}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 pt-6 flex flex-col space-y-4 mt-4">
              <a
                href="tel:7262044044"
                className="flex items-center justify-center font-semibold text-lg text-mpl-navy"
              >
                <Phone size={20} className="mr-2" />
                (726) 204-4044
              </a>
              <div className="flex items-center justify-center space-x-3 text-mpl-navy">
                <SocialIcon
                  label="Facebook"
                  href="https://www.facebook.com/MoralesPadiaLaw"
                >
                  <FaFacebookF className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon
                  label="Instagram"
                  href="https://www.instagram.com/moralespadialaw/"
                >
                  <FaInstagram className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon
                  label="TikTok"
                  href="https://www.tiktok.com/@moralespadialaw"
                >
                  <FaTiktok className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/tmoralespapadia/"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon
                  label="YouTube"
                  href="https://www.youtube.com/@moralespadialaw"
                >
                  <FaYoutube className="w-4 h-4" />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
