import React from "react";

/**
 * Ambient background blobs — pure CSS animations.
 * Previously used Framer Motion with mouse-tracking springs (useTransform +
 * useSpring on every mousemove = JS firing at 60 fps).  Replaced with CSS
 * keyframes so all animation work happens on the compositor / GPU thread
 * with zero ongoing JS overhead — a direct INP fix.
 *
 * Also removed backdrop-blur-[1px] overlay which forced a full-viewport
 * GPU compositing layer on every repaint.
 */
const FloatingBubbles = () => (
  <>
    <style>{`
      @keyframes mpl-blob-1 {
        0%,100% { transform: translate(0px,   0px) scale(1);    }
        33%      { transform: translate(52px, -44px) scale(1.07); }
        66%      { transform: translate(-32px, 28px) scale(0.95); }
      }
      @keyframes mpl-blob-2 {
        0%,100% { transform: translate(0px,   0px) scale(1);    }
        33%      { transform: translate(-48px, 38px) scale(0.93); }
        66%      { transform: translate(36px, -26px) scale(1.05); }
      }
      @keyframes mpl-blob-3 {
        0%,100% { transform: translate(0px,  0px) scale(1);    }
        50%      { transform: translate(28px, 48px) scale(1.04); }
      }
      @media (prefers-reduced-motion: reduce) {
        .mpl-blob { animation: none !important; }
      }
    `}</style>

    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gray-50/30" />

      {/* Blob 1 — navy */}
      <div
        className="mpl-blob absolute rounded-full bg-mpl-navy mix-blend-multiply blur-[80px] opacity-[0.07]"
        style={{
          left: "8%",
          top: "18%",
          width: 480,
          height: 480,
          animation: "mpl-blob-1 28s ease-in-out infinite",
        }}
      />

      {/* Blob 2 — blue */}
      <div
        className="mpl-blob absolute rounded-full bg-mpl-blue mix-blend-multiply blur-[80px] opacity-[0.07]"
        style={{
          right: "12%",
          top: "38%",
          width: 440,
          height: 440,
          animation: "mpl-blob-2 34s ease-in-out infinite",
        }}
      />

      {/* Blob 3 — light blue */}
      <div
        className="mpl-blob absolute rounded-full bg-mpl-lightBlue mix-blend-multiply blur-[80px] opacity-[0.05]"
        style={{
          left: "38%",
          bottom: "12%",
          width: 400,
          height: 400,
          animation: "mpl-blob-3 26s ease-in-out infinite",
        }}
      />

      {/* Subtle tint overlay — plain opacity, no backdrop-blur */}
      <div className="absolute inset-0 bg-white/10" />
    </div>
  </>
);

export default FloatingBubbles;
