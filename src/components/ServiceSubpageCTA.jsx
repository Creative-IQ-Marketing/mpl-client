import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceSubpageCTA = ({
  heading = "Need Legal Help?",
  description = "Get clear guidance for your legal matter.",
  relatedTitle = "Related Services",
  relatedLinks = [],
  primaryCtaLabel = "Get Started",
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-mpl-navy">
          {heading}
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/contact#consultation"
            className="inline-flex items-center justify-center rounded-full bg-mpl-navy text-white px-8 py-3 font-bold hover:bg-mpl-blue transition-colors"
          >
            {primaryCtaLabel}
          </Link>
          <a
            href="tel:7262044044"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-mpl-navy text-mpl-navy px-8 py-3 font-bold hover:bg-gray-50 transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {relatedLinks.length > 0 && (
          <div className="mt-10">
            <p className="text-mpl-navy font-serif text-xl">{relatedTitle}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="px-4 py-2 border border-mpl-blue/20 rounded text-sm text-mpl-navy hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSubpageCTA;
