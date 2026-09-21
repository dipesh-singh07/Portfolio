import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function MouseSpotlight() {
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  });
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 30, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
