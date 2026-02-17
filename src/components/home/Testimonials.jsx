import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

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
    <section className="py-24  text-mpl-navy">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy leading-tight">
              Here&apos;s what our
              <span className="block">clients have to say</span>
              <span className="block">about us.</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
              As the trusted choice for families across San Antonio, our
              clients&apos; experiences and outcomes speak louder than any
              promise we could make.
            </p>
          </Motion.div>

          <div className="md:pl-12 md:border-l md:border-mpl-navy/10">
            <AnimatePresence mode="wait">
              <Motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <Quote className="w-8 h-8 text-mpl-navy" />
                <p className="text-base md:text-lg leading-relaxed text-gray-800">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="mt-4 text-sm tracking-[0.22em] uppercase text-mpl-navy">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs tracking-[0.22em] uppercase text-gray-500 mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-1 text-mpl-navy">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevParams}
                      className="w-10 h-10 rounded-full border border-mpl-navy flex items-center justify-center hover:bg-mpl-navy hover:text-white transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextParams}
                      className="w-10 h-10 rounded-full border border-mpl-navy flex items-center justify-center hover:bg-mpl-navy hover:text-white transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
