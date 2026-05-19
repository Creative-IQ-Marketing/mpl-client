import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;
import { Link } from "react-router-dom";
import hero1 from "../assets/hero/alvaro-serrano-hjwKMkehBco-unsplash.jpg";
import hero2 from "../assets/hero/daiga-ellaby-7edWO30e32k-unsplash.jpg";
import hero3 from "../assets/hero/liv-bruce-odIhQypCuUk-unsplash.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, _setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroRef = useRef(null);

  const images = [
    { src: hero1, alt: "Client consultation" },
    { src: hero2, alt: "Legal team collaboration" },
    { src: hero3, alt: "Community support" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(
      () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      },
      isMobile ? 6000 : 5000,
    );

    return () => clearInterval(interval);
  }, [isPaused, images.length, isMobile]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full overflow-hidden -mt-20"
      ref={heroRef}
    >
      {/* Slideshow Background with Ken Burns Effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ${
              isMobile ? "duration-700" : "duration-1000"
            } ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {/* Darker overlay for better text contrast without the card */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 z-10" />
            <img
              src={image.src}
              alt={image.alt}
              width="1920"
              height="1080"
              decoding={index === 0 ? "async" : "async"}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              className={`w-full h-full object-cover ${
                !isMobile && currentSlide === index ? "animate-ken-burns" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center pt-20">
        <div className="w-full max-w-360 mx-auto px-6 flex justify-center">
          <MotionDiv
            className="relative text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Main Typography - Location-specific H1 for SEO */}
            <div className="space-y-4 mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex flex-col items-center justify-center leading-none text-white drop-shadow-xl"
              >
                <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-3 md:mb-4">
                  San Antonio Family Law,
                </span>
                <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-3 md:mb-4">
                  Criminal Defense &
                </span>
                <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-widest uppercase">
                  & Estate Planning Attorney
                </span>
              </motion.h1>

              {/* Summary Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl md:max-w-3xl mx-auto text-white/90 font-light leading-relaxed drop-shadow-md pb-4"
              >
                Trusted guidance in Family Law, Estate Planning, Probate, and
                Criminal Defense, helping individuals and families move forward
                with clarity, protection, and confidence.
              </motion.p>

              {/* Trust Signal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="text-sm md:text-base text-white/75 font-light drop-shadow-md"
              >
                30+ Years of Experience | Board Certified Specialist | Serving
                Bexar County & Beyond
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <Link
                to="/contact"
                className="px-10 py-4 border border-white text-white text-lg tracking-widest hover:bg-white hover:text-black transition-all duration-300 min-w-50 uppercase font-light"
              >
                Book Now
              </Link>
              <a
                href="#services"
                className="px-10 py-4 bg-white text-black text-lg tracking-widest hover:bg-gray-200 transition-all duration-300 min-w-50 uppercase font-light"
              >
                See All Services
              </a>
            </motion.div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
