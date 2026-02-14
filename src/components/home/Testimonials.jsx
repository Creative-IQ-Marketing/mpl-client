import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adolph O.",
      quote:
        "The team was incredibly supportive and knowledgeable throughout my entire case. Highly recommended.",
      rating: 5,
    },
    {
      name: "Ned Boyd",
      quote:
        "Professional, compassionate, and effective. They fought for my rights and won.",
      rating: 5,
    },
    {
      name: "Emily Espinoza",
      quote:
        "I felt heard and understood. They made a difficult process much easier to handle.",
      rating: 5,
    },
    {
      name: "Kristi Krumbholz",
      quote:
        "Excellent communication and results. I am forever grateful for their help.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-mpl-navy via-mpl-navy to-mpl-blue overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-mpl-lightBlue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            What Clients Say
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            Real stories from clients who trusted us with their legal matters
          </p>
        </div>

        {/* Testimonials Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-max">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative ${
                index === 1 || index === 2 ? "lg:mt-8" : ""
              } ${index === 3 ? "lg:mt-16" : ""}`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl" />

              {/* Glassmorphic Border */}
              <div className="absolute inset-0 bg-white/[0.05] rounded-3xl border border-white/20 backdrop-blur-lg group-hover:border-white/40 transition-all duration-500" />

              {/* Hover Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-mpl-lightBlue/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

              {/* Content */}
              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-mpl-lightBlue fill-current"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-white/30 mb-4" />

                {/* Quote Text */}
                <p className="text-white/90 text-base lg:text-lg leading-relaxed flex-grow mb-6 font-light">
                  "{testimonial.quote}"
                </p>

                {/* Divider Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-mpl-lightBlue to-transparent rounded-full mb-4 group-hover:w-16 transition-all duration-500" />

                {/* Client Name */}
                <p className="font-serif font-bold text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="text-blue-200 text-sm">Verified Client</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-24 text-center">
          <p className="text-blue-100 text-lg mb-6">
            Ready to experience our legal excellence?
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center px-8 py-4 bg-white text-mpl-navy font-serif font-bold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Your Consultation
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
