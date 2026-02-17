import { useRef, useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Adolph O.",
      quote:
        "The team was incredibly supportive and knowledgeable throughout my entire case.",
      role: "Family Law",
    },
    {
      name: "Ned Boyd",
      quote:
        "Professional, compassionate, and effective. They fought for my rights and won.",
      role: "Criminal Defense",
    },
    {
      name: "Emily Espinoza",
      quote:
        "I felt heard and understood. They made a difficult process much easier to handle.",
      role: "Probate Law",
    },
    {
      name: "Kristi Krumbholz",
      quote:
        "Excellent communication and results. I am forever grateful for their help.",
      role: "Estate Planning",
    },
    {
      name: "Sarah Jenkins",
      quote:
        "Morales Padia Law gave me my life back. Their dedication is unmatched in San Antonio.",
      role: "Divorce Law",
    },
    {
      name: "Michael R.",
      quote:
        "Navigating the legal system is scary, but they made it understandable and less intimidating.",
      role: "DWI Defense",
    },
  ];

  const nextParams = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevParams = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-24 bg-mpl-navy text-white relative overflow-hidden">
      {/* Subtle Background noise to break flat color */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-mpl-lightBlue">
              <Quote className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif">Client Stories</h2>
          </motion.div>

          <div className="w-full relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <p className="text-2xl md:text-4xl font-serif font-thin leading-snug mb-10 text-white/90">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-px w-12 bg-mpl-lightBlue mb-2"></div>
                  <p className="text-xl font-medium text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-mpl-lightBlue text-sm uppercase tracking-widest">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-8 mt-16">
            <button
              onClick={prevParams}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-mpl-navy transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-mpl-lightBlue" : "w-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>

            <button
              onClick={nextParams}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-mpl-navy transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
