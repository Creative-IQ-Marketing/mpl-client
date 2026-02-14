import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mpl-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Morales Padia Law</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Protecting your rights and achieving the best possible outcome for your case with compassionate, expert legal guidance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-mpl-lightBlue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-mpl-lightBlue transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-mpl-lightBlue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-mpl-lightBlue transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><a href="#consultation" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">Practice Areas</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Family Law</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Estate Planning</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Probate Law</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Criminal Defense</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-mpl-lightBlue" />
                <span className="text-gray-300">(726) 204-4044</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-mpl-lightBlue" />
                <span className="text-gray-300">info@moralespadialaw.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-mpl-lightBlue" />
                <span className="text-gray-300">San Antonio, Texas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Morales Padia Law. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
