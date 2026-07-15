import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OverviewHero = ({
  category,
  heading,
  description,
  primaryButtonText = "Schedule Consultation",
  secondaryButtonText = "View Services",
}) => {
  return (
    <section className="relative bg-mpl-navy border-b border-white/5">
      <div className="container-custom relative">
        <div className="py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-px bg-white/30" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50">
                {category}
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight max-w-4xl break-words">
              {heading}
            </h1>

            <p className="mt-8 text-base text-white/60 leading-relaxed max-w-lg">
              {description}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-mpl-navy px-7 py-3.5 rounded-sm text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {primaryButtonText} <ArrowRight size={15} />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-sm text-sm font-semibold hover:border-white/50 transition-colors whitespace-nowrap"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHero;
