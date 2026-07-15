import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ron "Bishop" Samurovic',
      quote:
        "I had an excellent experience with this divorce lawyer firm. From the very beginning, they were professional, responsive, and genuinely attentive to my situation. They explained every step of the process clearly and made sure I understood my options, which helped reduce a lot of the stress. What stood out most was their dedication and compassion. They handled my case efficiently while still taking the time to address my concerns and keep me informed. I always felt like my case mattered and that I was in capable hands. Thanks to their hard work, everything was resolved smoothly and fairly.",
    },
    {
      name: "Heather",
      quote:
        "It is difficult enough to go through the divorce process. The overwhelming decision to decide on a firm that is right for you is another decision that may add to the stress. However, Morales Padia Law has been exceptional and I would recommend to anyone in San Antonio who is seeking legal counsel regarding family matters. Their support, understanding, communication, and professionalism throughout this ongoing process have been top notch.",
    },
    {
      name: "Emily Espinoza",
      quote:
        "They helped me through one of the hardest times in my life. I never felt like just another case. I felt supported, informed, and confident in every decision we made together.",
    },
    {
      name: "Kristi Krumbholz",
      quote:
        "Communication was excellent from start to finish. I always knew where my case stood and what was next, which took away so much stress and uncertainty.",
    },
    {
      name: "Sarah Jenkins",
      quote:
        "What stood out most was how much they cared about both the legal result and my peace of mind. They were steady, compassionate, and incredibly effective.",
    },
    {
      name: "Michael R.",
      quote:
        "The legal process can be intimidating, but this team made it clear and practical. They gave me real guidance, strong advocacy, and the confidence to move forward.",
    },
    {
      name: "James Quintana",
      quote:
        "As a Financial Advisor, it is important for me to stay current on estate planning concepts and to maintain relationships with professionals who are knowledgeable and collaborative when clients seek additional guidance. I recently attended Trisha's estate planning workshop and found it to be well-structured, informative, and professionally delivered. She did an excellent job breaking down key distinctions between trusts and wills, and the discussion around guardianship of minors highlighted considerations that are now firmly on my radar when working with families. The workshop provided practical insights that enhanced my ability to ask better questions and better prepare clients for informed conversations around estate planning. I appreciate Trisha's professionalism, clarity, and the value she brings through education.",
    },
    {
      name: "Tracy Lopes",
      quote:
        "I don't have a lot of experience with attorneys but I hired this amazing team and they helped me through a criminal investigation and one trial resulting in a mistrial. Then we went to trial again and it resulted in a not guilty verdict by a jury after around thirty minutes of deliberation. After almost four years of court proceedings I walked away proven innocent. This is by far the best law firm and group of people that I have ever met. They always made me feel as I was a priority and they never gave up on me. I would give 100 stars if I could. Thank you for everything Trisha!!!!!!! You're the greatest ever!!!!!!",
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
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy leading-tight">
              Real people.
              <span className="block">Real situations.</span>
              <span className="block">Real outcomes.</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
              Every client comes to us during a different life moment, often
              with uncertainty. These stories reflect what it feels like to have
              the right legal team guiding you step by step.
            </p>
          </Motion.div>

          <div className="md:pl-12 md:border-l md:border-mpl-navy/10">
            <AnimatePresence mode="wait">
              <Motion.div
                key={currentIndex}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <Quote className="w-8 h-8 text-mpl-navy" />
                <p className="text-base md:text-lg leading-relaxed text-gray-800">
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <p className="mt-4 text-sm tracking-[0.22em] uppercase text-mpl-navy">
                    {testimonials[currentIndex].name}
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
