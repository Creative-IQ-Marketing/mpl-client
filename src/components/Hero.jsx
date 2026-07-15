import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;
import { Link } from "react-router-dom";

import slide2Jpg from "../assets/hero/optimized/slide-2.jpg";
import slide2Webp960 from "../assets/hero/optimized/slide-2-960.webp";
import slide2Webp1280 from "../assets/hero/optimized/slide-2-1280.webp";
import slide3Jpg from "../assets/hero/optimized/slide-3.jpg";
import slide3Webp960 from "../assets/hero/optimized/slide-3-960.webp";
import slide3Webp1280 from "../assets/hero/optimized/slide-3-1280.webp";

const HERO0_WEBP_SRCSET =
  "/hero/hero-640.webp 640w, /hero/hero-960.webp 960w, /hero/hero-1280.webp 1280w, /hero/hero-1600.webp 1600w";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, _setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mountExtraSlides, setMountExtraSlides] = useState(false);
  const heroRef = useRef(null);

  const images = [
    {
      alt: "Client consultation",
      // Slide 0 uses public /hero/* paths in <picture>
      isLcp: true,
    },
    {
      alt: "Legal team collaboration",
      jpg: slide2Jpg,
      webpSrcSet: `${slide2Webp960} 960w, ${slide2Webp1280} 1280w`,
    },
    {
      alt: "Community support",
      jpg: slide3Jpg,
      webpSrcSet: `${slide3Webp960} 960w, ${slide3Webp1280} 1280w`,
    },
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

  // Defer mounting non-LCP slides until idle or user advances the carousel
  useEffect(() => {
    if (currentSlide > 0) {
      setMountExtraSlides(true);
    }
  }, [currentSlide]);

  useEffect(() => {
    let idleId;
    let timeoutId;

    const mount = () => setMountExtraSlides(true);

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(mount, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(mount, 1500);
    }

    return () => {
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
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
        {images.map((image, index) => {
          if (index > 0 && !mountExtraSlides) return null;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity ${
                isMobile ? "duration-700" : "duration-1000"
              } ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 z-10" />
              <picture>
                {image.isLcp ? (
                  <source
                    type="image/webp"
                    srcSet={HERO0_WEBP_SRCSET}
                    sizes="100vw"
                  />
                ) : (
                  <source
                    type="image/webp"
                    srcSet={image.webpSrcSet}
                    sizes="100vw"
                  />
                )}
                <img
                  src={image.isLcp ? "/hero-main.jpg" : image.jpg}
                  alt={image.alt}
                  width="1920"
                  height="1080"
                  sizes="100vw"
                  decoding={index === 0 ? "sync" : "async"}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  className={`w-full h-full object-cover ${
                    !isMobile && currentSlide === index
                      ? "animate-ken-burns"
                      : ""
                  }`}
                />
              </picture>
            </div>
          );
        })}
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
              <h1 className="sr-only">
                San Antonio Family Law, Estate Planning &amp; Criminal Defense
                Attorneys | Morales Padia Law
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex flex-col items-center justify-center leading-none text-white drop-shadow-xl"
              >
                <span className="font-serif italic text-6xl md:text-8xl lg:text-9xl tracking-wide font-light mb-4 md:mb-6">
                  Protecting
                </span>
                <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-widest uppercase">
                  Your Future
                </span>
              </motion.p>

              {/* Summary Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl md:max-w-3xl mx-auto text-white/90 font-light leading-relaxed drop-shadow-md pb-8"
              >
                Trusted guidance in Family Law, Estate Planning, Probate, and
                Criminal Defense, helping individuals and families move forward
                with clarity, protection, and confidence.
              </motion.p>
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
