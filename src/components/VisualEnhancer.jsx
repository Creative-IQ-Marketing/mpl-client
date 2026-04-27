import React, { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
const Motion = motion;
import { useLocation } from "react-router-dom";

const VisualEnhancer = ({ scopeSelector = "main" }) => {
  const location = useLocation();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 180, damping: 35, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 180, damping: 35, mass: 0.2 });

  const css = useMemo(
    () => `
      @keyframes veRise {
        0% { opacity: 0; transform: translate3d(0, 16px, 0); filter: blur(6px); }
        65% { opacity: 1; filter: blur(0px); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0px); }
      }
      @keyframes veShimmer {
        0% { transform: translate3d(-45%, 0, 0); opacity: 0; }
        25% { opacity: 0.75; }
        100% { transform: translate3d(45%, 0, 0); opacity: 0; }
      }
      @keyframes veUnderline {
        0% { transform: scaleX(0); opacity: 0; }
        100% { transform: scaleX(1); opacity: 1; }
      }
      .ve-h1 {
        position: relative;
        transform: translateZ(0);
        will-change: transform, opacity;
      }
      .ve-h1 .ve-ch {
        display: inline-block;
        opacity: 0;
        transform: translate3d(0, 16px, 0);
        filter: blur(6px);
        will-change: transform, opacity, filter;
      }
      .ve-h1.ve-in .ve-ch {
        animation: veRise 720ms cubic-bezier(.2,.9,.2,1) forwards;
        animation-delay: var(--d, 0ms);
      }
      .ve-h1.ve-in::after {
        content: "";
        position: absolute;
        left: -10%;
        right: -10%;
        top: 15%;
        bottom: 15%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
        filter: blur(0px);
        mix-blend-mode: soft-light;
        animation: veShimmer 1100ms cubic-bezier(.2,.8,.2,1) 220ms forwards;
        pointer-events: none;
      }
      .ve-h1.ve-in::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.18em;
        height: 2px;
        width: 100%;
        transform-origin: left;
        background: linear-gradient(90deg, rgba(68,117,181,.0), rgba(68,117,181,.55), rgba(35,67,116,.0));
        opacity: 0;
        animation: veUnderline 700ms cubic-bezier(.2,.8,.2,1) 420ms forwards;
        pointer-events: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .ve-h1 .ve-ch { opacity: 1; transform: none; filter: none; }
        .ve-h1.ve-in::after, .ve-h1.ve-in::before { display: none; }
      }
    `,
    [],
  );

  useEffect(() => {
    const scroll = () => {
      const hash = location.hash || "";
      const id = hash.startsWith("#") ? hash.slice(1) : "";

      if (id) {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "auto" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    let r1 = 0;
    let r2 = 0;

    r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(scroll);
    });

    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const mm = window.matchMedia?.("(pointer: fine)");
    if (!mm?.matches) return;

    let raf = 0;
    const handle = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        x.set(e.clientX - 240);
        y.set(e.clientY - 240);
      });
    };

    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handle);
    };
  }, [x, y]);

  useEffect(() => {
    const root = document.querySelector(scopeSelector);
    if (!root) return;

    const h1s = Array.from(root.querySelectorAll("h1"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ve-in");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.35 },
    );

    h1s.forEach((h1) => {
      if (location.pathname === "/" && h1.closest("#hero-section")) {
        return;
      }

      if (h1.dataset.veProcessed === "1") {
        io.observe(h1);
        return;
      }

      h1.dataset.veProcessed = "1";
      h1.classList.add("ve-h1");

      if (h1.children.length > 0) {
        io.observe(h1);
        return;
      }

      const raw = (h1.textContent || "").trimEnd();
      if (!raw) {
        io.observe(h1);
        return;
      }

      const fragment = document.createDocumentFragment();
      const chars = Array.from(raw);
      chars.forEach((ch, i) => {
        const span = document.createElement("span");
        span.className = "ve-ch";
        span.style.setProperty("--d", `${i * 18}ms`);
        span.textContent = ch === " " ? "\u00A0" : ch;
        fragment.appendChild(span);
      });

      h1.textContent = "";
      h1.appendChild(fragment);
      io.observe(h1);
    });

    return () => io.disconnect();
  }, [location.pathname, scopeSelector]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(68,117,181,0.20),transparent_52%),radial-gradient(circle_at_90%_10%,rgba(35,67,116,0.18),transparent_55%),radial-gradient(circle_at_35%_95%,rgba(99,155,227,0.16),transparent_58%)]" />

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-60 -left-60 h-[660px] w-[660px] rounded-full bg-mpl-blue/30 blur-[90px]"
        />
        <Motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 40, 90, 0],
            opacity: [0.22, 0.34, 0.20, 0.22],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-48 h-[640px] w-[640px] rounded-full bg-mpl-navy/26 blur-[110px]"
        />
        <Motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 70, -30, 0],
            opacity: [0.14, 0.22, 0.14, 0.14],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-72 left-1/4 h-[760px] w-[760px] rounded-full bg-mpl-gold/14 blur-[120px]"
        />

        <Motion.div
          style={{ x: sx, y: sy }}
          className="absolute h-[560px] w-[560px] rounded-full bg-white/14 blur-[90px] mix-blend-overlay opacity-55"
        />

        <Motion.svg
          width="900"
          height="900"
          viewBox="0 0 900 900"
          className="absolute right-[-260px] top-[-260px] opacity-55 mix-blend-soft-light"
          animate={{ rotate: [0, 6, -4, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <radialGradient id="veRing" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
              <stop offset="55%" stopColor="rgba(68,117,181,0.22)" />
              <stop offset="80%" stopColor="rgba(35,67,116,0.10)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
            </radialGradient>
          </defs>
          <circle cx="450" cy="450" r="250" fill="none" stroke="url(#veRing)" strokeWidth="2" />
          <circle cx="450" cy="450" r="330" fill="none" stroke="url(#veRing)" strokeWidth="1.5" opacity="0.7" />
          <circle cx="450" cy="450" r="400" fill="none" stroke="url(#veRing)" strokeWidth="1.2" opacity="0.55" />
        </Motion.svg>

        <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
        <div className="absolute inset-0 opacity-[0.20] mix-blend-overlay [mask-image:radial-gradient(circle_at_30%_10%,black,transparent_60%)] bg-[radial-gradient(rgba(35,67,116,0.20)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>
    </>
  );
};

export default VisualEnhancer;
