import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;

const TestimonialCard = ({ name, quote, rating = 5 }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      whileHover={{ y: -4 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-mpl-lightBlue/10 blur-2xl"></div>
      <Quote
        size={40}
        className="text-mpl-gray absolute top-6 right-6 opacity-50"
      />
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">"{quote}"</p>
      <div className="mt-auto">
        <p className="font-bold text-mpl-navy font-serif">{name}</p>
        <p className="text-sm text-gray-500">Client</p>
      </div>
    </MotionDiv>
  );
};

export default TestimonialCard;
