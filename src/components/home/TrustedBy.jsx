import { motion as Motion } from "framer-motion";
import { Scale } from "lucide-react";

import logo1 from "../../assets/trusted by/imgi_19_68c5c0aa0ae38203f0bfc6b5.jpg";
import logo2 from "../../assets/trusted by/imgi_20_68c5c0aa0ae3827cb5bfc6b6.png";
import logo3 from "../../assets/trusted by/imgi_21_68c5c0aaccedb2a876083bbf.jpg";
import logo4 from "../../assets/trusted by/imgi_22_68c5c0aa657c0d677b792074.png";
import logo5 from "../../assets/trusted by/imgi_23_68c5c0aa657c0d047a792075.jpg";
import logo6 from "../../assets/trusted by/imgi_24_68c5c0aaccedb24320083bbe.webp";

const TrustedBy = () => {
  const logos = [
    { src: logo1, alt: "Client 1" },
    { src: logo2, alt: "Client 2" },
    { src: logo3, alt: "Client 3" },
    { src: logo4, alt: "Client 4" },
    { src: logo5, alt: "Client 5" },
    { src: logo6, alt: "Client 6", featured: true },
  ];

  const duplicated = [...logos, ...logos];

  return (
    <section className="relative py-24 md:py-28 bg-white overflow-hidden">
      {/* Floating law-inspired bubble */}
      <Motion.div
        className="pointer-events-none absolute -top-20 right-4 md:right-20 w-40 h-40 md:w-52 md:h-52 rounded-full bg-mpl-navy/5 border border-mpl-navy/10 flex items-center justify-center"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-mpl-navy/10 flex items-center justify-center">
          <Scale className="w-10 h-10 text-mpl-navy/70" />
        </div>
      </Motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-mpl-navy mb-4 leading-tight">
            Trusted by San Antonio
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Families, professionals, and community partners across San Antonio
            choose Morales Padia Law when it matters most.
          </p>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden">
            <Motion.div
              className="flex gap-6 md:gap-8"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicated.map((logo, index) => (
                <Motion.div
                  key={`${logo.alt}-${index}`}
                  className={`group min-w-[200px] md:min-w-[230px] rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm px-6 py-4 flex items-center justify-center transition-all duration-300 ${
                    logo.featured
                      ? "hover:-translate-y-2 hover:shadow-2xl hover:border-mpl-blue/60"
                      : "hover:-translate-y-1 hover:shadow-xl hover:border-mpl-blue/40"
                  }`}
                  whileHover={
                    logo.featured
                      ? {
                          scale: 1.05,
                          rotate: [-1.5, 0, 1.5, 0],
                        }
                      : { scale: 1.03 }
                  }
                >
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-14 md:max-h-16 w-auto object-contain"
                    />
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
