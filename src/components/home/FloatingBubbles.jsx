import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Scale, Gavel } from "lucide-react";

const FloatingBubbles = () => {
  const bubbleCount = 12;

  const [bubbles] = useState(() =>
    Array.from({ length: bubbleCount }).map((_, index) => ({
      id: index,
      top: 5 + Math.random() * 90,
      left: 5 + Math.random() * 90,
      size: 26 + Math.random() * 18,
      icon: index % 2 === 0 ? "scale" : "gavel",
      duration: 6 + Math.random() * 4,
    })),
  );

  const [offsets, setOffsets] = useState(() =>
    Array.from({ length: bubbleCount }).map(() => ({ dx: 0, dy: 0 })),
  );

  useEffect(() => {
    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const threshold = 140;
      const maxPush = 40;

      setOffsets(
        bubbles.map((bubble) => {
          const bubbleX = (bubble.left / 100) * innerWidth;
          const bubbleY = (bubble.top / 100) * innerHeight;
          const dx = bubbleX - mouseX;
          const dy = bubbleY - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy) || 0.001;

          if (distance > threshold) {
            return { dx: 0, dy: 0 };
          }

          const force = ((threshold - distance) / threshold) * maxPush;
          const nx = dx / distance;
          const ny = dy / distance;

          return { dx: nx * force, dy: ny * force };
        }),
      );
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [bubbles]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bubbles.map((bubble, index) => {
        const offset = offsets[index] || { dx: 0, dy: 0 };
        const Icon = bubble.icon === "scale" ? Scale : Gavel;

        return (
          <div
            key={bubble.id}
            style={{
              position: "absolute",
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              transform: `translate(-50%, -50%) translate(${offset.dx}px, ${offset.dy}px)`,
            }}
          >
            <Motion.div
              className="rounded-full bg-mpl-navy/5 border border-mpl-navy/20 flex items-center justify-center text-mpl-navy/70 shadow-sm"
              style={{
                width: bubble.size,
                height: bubble.size,
              }}
              initial={{
                rotate: 0,
                scale: 1,
              }}
              animate={{
                rotate: [0, 25, -25, 10, -10, 0],
                scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-3 h-3" />
            </Motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingBubbles;
