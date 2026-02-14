import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const PracticeAreaCard = ({ title, description, icon, link = "/services" }) => {
  const IconEl = React.createElement(icon, {
    size: 32,
    className:
      "text-mpl-navy group-hover:text-white transition-colors duration-300",
  });
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      whileFocus={{ y: -3 }}
      className="relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 group overflow-hidden border border-gray-100"
    >
      <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-mpl-blue to-mpl-lightBlue"></span>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-mpl-lightBlue/10 blur-2xl"></div>
      <div className="bg-mpl-gray w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-mpl-navy transition-colors duration-300">
        {IconEl}
      </div>
      <h3 className="text-2xl font-serif font-bold mb-4 text-mpl-navy">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-mpl-blue font-semibold hover:text-mpl-navy transition-colors"
      >
        Learn More <ArrowRight size={16} className="ml-2" />
      </Link>
    </MotionDiv>
  );
};

export default PracticeAreaCard;
