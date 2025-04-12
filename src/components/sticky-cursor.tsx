"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function StickyCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const timeout = timeoutRef.current;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className={`relative size-6 rounded-full border-2 ${
          isHovering
            ? "border-primary bg-primary/20"
            : "border-gray-900 dark:border-white bg-transparent"
        }`}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-1 rounded-full ${
            isHovering ? "bg-primary" : "bg-gray-900 dark:bg-white"
          }`}
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
}
