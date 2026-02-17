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
      path: "/about",
      children: [
        { name: "Firm Overview", path: "/about" },
        { name: "Our Team", path: "/about#team" },
        { name: "Mission", path: "/about#mission" },
      ],
    },
    {
      name: "Team",
      path: "/about",
      children: [
        { name: "Trisha Morales Padia", path: "/about" },
        { name: "Aiden Gamble", path: "/about" },
      ],
    },
    {
      name: "Family Law",
      path: "/services",
      children: [
        { name: "Divorce", path: "/services#family-law" },
        { name: "Child Custody", path: "/services#family-law" },
        { name: "Adoption", path: "/services#family-law" },
      ],
    },
    {
      name: "Criminal Law",
      path: "/services",
      children: [
        { name: "DWI/DUI", path: "/services#criminal-law" },
        { name: "Drug Charges", path: "/services#criminal-law" },
        { name: "Domestic Violence", path: "/services#criminal-law" },
      ],
    },
    {
      name: "Estate Planning",
      path: "/services",
      children: [
        { name: "Wills & Trusts", path: "/services#estate-planning" },
        { name: "Probate", path: "/services#estate-planning" },
      ],
    },
    {
      name: "Probate Law",
      path: "/services",
      children: [
        { name: "Administration", path: "/services#probate-law" },
        { name: "Litigation", path: "/services#probate-law" },
      ],
    },
    {
      name: "Resources",
      path: "#", // Placeholder
      children: [
        { name: "Blog", path: "#" },
        { name: "FAQs", path: "#" },
        { name: "Forms", path: "#" },
      ],
    },
    { name: "Contact", path: "#consultation" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "text-mpl-navy bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="tel:7262044044"
              className={`flex items-center text-sm md:text-base font-semibold transition-colors ${
                isScrolled
                  ? "text-mpl-navy hover:text-mpl-blue"
                  : "text-white hover:text-white/80"
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
                isScrolled ? "h-12 md:h-10 lg:h-20" : "h-20 md:h-16 lg:h-24"
              }`}
            />
          </Link>

          <div
            className={`hidden md:flex items-center space-x-3 ${
              isScrolled ? "text-mpl-navy" : "text-white"
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
              isScrolled ? "text-mpl-navy" : "text-white"
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
          isScrolled
            ? "backdrop-blur supports-[backdrop-filter]:bg-white/70"
            : "border-t border-white/20 bg-transparent"
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
                      isScrolled
                        ? "after:bg-mpl-blue text-gray-700 hover:text-mpl-blue"
                        : "after:bg-white text-white/80 hover:text-white"
                    } ${
                      location.pathname === link.path && !link.children
                        ? isScrolled
                          ? "text-mpl-navy font-bold"
                          : "text-white"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-colors ${
                        isScrolled
                          ? "text-gray-400 group-hover:text-mpl-blue"
                          : "text-white/60 group-hover:text-white"
                      }`}
                    />
                  )}
                </div>

                {link.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border border-gray-100 z-50 translate-y-2 group-hover:translate-y-0">
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
