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
        { name: "Family Attorney", path: "/family-law" },
        { name: "Uncontested Divorce", path: "/uncontested-divorce" },
        { name: "Uncontested Flat Fee Divorce", path: "/uncontested-divorce" },
        { name: "Contested Divorce", path: "/contested-divorce" },
        { name: "Child Custody", path: "/child-custody" },
        { name: "Child Support", path: "/child-support" },
        { name: "Adoption", path: "/adoption" },
        { name: "Name Change", path: "/name-change" },
        {
          name: "Modification of Previous Order",
          path: "/modification-of-previous-order",
        },
        { name: "Enforcement", path: "/enforcement" },
        { name: "Property Division", path: "/property-division" },
        { name: "Spousal Maintenance", path: "/spousal-maintenance" },
        { name: "Prenuptial Agreement", path: "/prenuptial-agreement" },
        { name: "Postnuptial Agreement", path: "/postnuptial-agreement" },
      ],
    },
    {
      name: "Criminal Law",
      path: "/criminal-defense",
      children: [
        { name: "Criminal Defense Overview", path: "/criminal-defense" },
        { name: "DWI", path: "/dwi" },
        { name: "Domestic Violence", path: "/domestic-violence" },
        { name: "Protective Orders", path: "/protective-orders" },
        { name: "Theft & Property Crimes", path: "/theft-property-crimes" },
        { name: "Juvenile Defense", path: "/juvenile-defense" },
        {
          name: "Expungement & Record Sealing",
          path: "/expungement-record-sealing",
        },
        { name: "Drug Charges", path: "/drug-charges" },
      ],
    },
    {
      name: "Estate Planning",
      path: "/services#estate-planning",
      children: [
        { name: "Estate Planning Overview", path: "/services#estate-planning" },
        { name: "Power of Attorney", path: "/services#estate-planning" },
        { name: "Advance Directives", path: "/services#estate-planning" },
        { name: "Asset Protection", path: "/services#estate-planning" },
        { name: "Trust", path: "/services#estate-planning" },
        { name: "Will", path: "/services#estate-planning" },
      ],
    },
    {
      name: "Probate Law",
      path: "/services#probate-law",
      children: [
        { name: "Probate Overview", path: "/services#probate-law" },
        { name: "Heirship Proceedings", path: "/services#probate-law" },
        { name: "Muniment of Title", path: "/services#probate-law" },
        { name: "Probate Litigation", path: "/services#probate-law" },
        { name: "Estate Affidavits", path: "/services#probate-law" },
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
              className={`flex items-center text-sm md:text-base font-semibold transition-colors ${
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
              className={`w-auto mx-auto transition-all duration-300 ${
                isHome
                  ? isScrolled
                    ? "h-14 md:h-16 lg:h-24"
                    : "h-20 md:h-24 lg:h-28"
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
            <SocialIcon label="Facebook" href="https://facebook.com">
              <FaFacebookF className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon label="Instagram" href="https://instagram.com">
              <FaInstagram className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon label="TikTok" href="https://tiktok.com">
              <FaTiktok className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="https://linkedin.com">
              <FaLinkedinIn className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon label="YouTube" href="https://youtube.com">
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
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border border-gray-100 z-50 translate-y-2 group-hover:translate-y-0 max-h-[70vh] overflow-y-auto">
                    <div className="py-2">
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-mpl-gray hover:text-mpl-navy transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
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
                        className="block py-1 text-gray-600 hover:text-mpl-navy"
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
                <SocialIcon label="Facebook" href="https://facebook.com">
                  <FaFacebookF className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon label="Instagram" href="https://instagram.com">
                  <FaInstagram className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon label="TikTok" href="https://tiktok.com">
                  <FaTiktok className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon label="LinkedIn" href="https://linkedin.com">
                  <FaLinkedinIn className="w-4 h-4" />
                </SocialIcon>
                <SocialIcon label="YouTube" href="https://youtube.com">
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
