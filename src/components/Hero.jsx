import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const MotionDiv = motion.div;
import {
  FaAward,
  FaArrowRight,
  FaStar,
  FaShield,
  FaPlay,
  FaPause,
} from "react-icons/fa6";
import hero1 from "../assets/hero/alvaro-serrano-hjwKMkehBco-unsplash.jpg";
import hero2 from "../assets/hero/daiga-ellaby-7edWO30e32k-unsplash.jpg";
import hero3 from "../assets/hero/liv-bruce-odIhQypCuUk-unsplash.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);

  const images = [
    { src: hero1, alt: "Client consultation" },
    { src: hero2, alt: "Legal team collaboration" },
    { src: hero3, alt: "Community support" },
  ];

  const stats = [
    { icon: FaAward, text: "Top Family Law Lawyer", year: "2017" },
    { icon: FaStar, text: "Best S.A Female Lawyers", year: "2021" },
    { icon: FaShield, text: "Top DUI/DWI Lawyer", year: "2023" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      clearTimeout(timer);
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const floatingParticleStyle = (index) => ({
    transform: `translate(${mousePosition.x * (10 + index * 5)}px, ${mousePosition.y * (10 + index * 5)}px)`,
    transition: "transform 0.5s ease-out",
  });

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      ref={heroRef}
    >
      {/* Slideshow Background with Ken Burns Effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-mpl-navy/80 via-mpl-navy/60 to-transparent z-10" />
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover ${
                currentSlide === index ? "animate-ken-burns" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + ((i * 13) % 60)}%`,
              animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              ...floatingParticleStyle(i),
            }}
          />
        ))}
      </div>

      {/* Glass Cloud Container */}
      <div className="relative z-20 min-h-screen flex items-center pt-32 md:pt-20">
        <div className="max-w-[95rem] mx-auto px-6 lg:px-12 w-full">
          {/* Main Glass Cloud */}
          <MotionDiv
            className="glass-cloud-subtle p-8 md:p-12 lg:p-16 xl:p-20"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            {/* Cursor Spotlight */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] pointer-events-none"
              style={{
                background: `radial-gradient(100rem 100rem at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.10), transparent 60%)`,
                transition: "background-position 0.2s ease-out",
              }}
            />
            {/* Badge and Controls */}
            <div className="hidden flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? (
                    <FaPlay className="w-3 h-3" />
                  ) : (
                    <FaPause className="w-3 h-3" />
                  )}
                </button>
                <div className="flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-8 bg-white"
                          : "w-1 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Left: Main Text */}
              <div className="space-y-6 md:space-y-8">
                {motion.h1 && (
                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 18 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif font-bold leading-[1.02] text-white drop-shadow-2xl"
                  >
                    Protecting
                    <span className="block bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent mt-3">
                      Your Future
                    </span>
                  </motion.h1>
                )}

                {motion.p && (
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
                    transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 18 }}
                    className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
                  >
                    Award-winning, women-led, bilingual legal team delivering compassionate expert guidance in family law, estate planning, probate, and criminal defense.
                  </motion.p>
                )}

                {/* CTA Buttons */}
                {motion.div && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
                    transition={{ delay: 0.55, type: "spring", stiffness: 120, damping: 18 }}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <a
                      href="#consultation"
                      className="group relative px-8 py-4 bg-white text-mpl-navy rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-transform shadow-2xl"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Schedule a Call
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="absolute -left-10 top-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform rotate-12 translate-x-0 group-hover:translate-x-[180%] transition-transform duration-700" />
                      </span>
                    </a>
                    <a
                      href="#services"
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                    >
                      Our Services
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Right: Bento Grid Stats */}
              <div
                className={`grid grid-cols-2 gap-4 ${
                  isVisible
                    ? "animate-fade-in-up animation-delay-800"
                    : "opacity-0"
                }`}
              >
                {/* Large Featured Stat */}
                <div className="col-span-2 glass-bento-card p-6 md:p-8 group">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                        15+
                      </div>
                      <p className="text-white/80 text-lg font-medium">
                        Years of Excellence
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <FaAward className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Smaller Stats */}
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className={`glass-bento-card p-5 group ${
                        i === 1 ? "col-span-2 sm:col-span-1" : ""
                      }`}
                      style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                    >
                      <div className="flex flex-col gap-3 h-full">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white mb-1">
                            {stat.year}
                          </div>
                          <p className="text-sm text-white/70 font-medium">
                            {stat.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Additional Info Card */}
                <div className="col-span-2 glass-bento-card p-6 group">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-mpl-blue border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-mpl-lightBlue border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-mpl-navy border-2 border-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">
                        Bilingual Support
                      </p>
                      <p className="text-white/70 text-sm">
                        English & Spanish speaking attorneys
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-mpl-blue/20 rounded-full blur-3xl animate-float-slow pointer-events-none"
        style={floatingParticleStyle(0)}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-mpl-lightBlue/20 rounded-full blur-3xl animate-float pointer-events-none"
        style={floatingParticleStyle(1)}
      />
    </section>
  );
};

export default Hero;
