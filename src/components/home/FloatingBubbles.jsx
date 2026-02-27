import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FloatingBubbles = () => {
  // Premium, subtle floating orbs
  const [bubbles] = useState(() =>
    Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 300 + Math.random() * 200, // Large, ambient
      color: i % 3 === 0 ? "bg-mpl-navy" : i % 3 === 1 ? "bg-mpl-blue" : "bg-mpl-lightBlue",
      duration: 20 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Background base */}
        <div className="absolute inset-0 bg-gray-50/30" />
        
        {bubbles.map((bubble, i) => (
            <Bubble 
                key={bubble.id} 
                {...bubble} 
                mouseX={mouseX} 
                mouseY={mouseY} 
                index={i}
            />
        ))}
        
        {/* Glass overlay for texture */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10" />
    </div>
  );
};

const Bubble = ({ left, top, size, color, duration, delay, mouseX, mouseY, index }) => {
    const depth = (index + 1) * 0.01; // Very subtle parallax
    
    // Smooth mouse follow
    const x = useTransform(mouseX, (value) => (value - window.innerWidth / 2) * depth);
    const y = useTransform(mouseY, (value) => (value - window.innerHeight / 2) * depth);
    
    const springConfig = { damping: 100, stiffness: 200, mass: 3 }; // Heavy, smooth feel
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    return (
        <motion.div
            className={`absolute rounded-full ${color} mix-blend-multiply filter blur-[80px] opacity-[0.08]`}
            style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                x: springX, // Parallax movement
                y: springY,
            }}
        >
             <motion.div 
                className="w-full h-full rounded-full"
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 30, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                }}
             />
        </motion.div>
    );
}

export default FloatingBubbles;
