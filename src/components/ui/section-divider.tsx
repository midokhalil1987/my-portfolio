"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-visible" aria-hidden>
      {/* Base line */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      {/* Draw-in accent */}
      <motion.div
        className="absolute top-0 left-1/2 h-px w-full max-w-3xl -translate-x-1/2 origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--primary), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Soft glow pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] rounded-full blur-[2px]"
        style={{
          width: "min(40%, 20rem)",
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, var(--primary) 70%, transparent), transparent)",
        }}
        initial={{ opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: [0, 0.9, 0.45], scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />

      {/* Traveling shimmer */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="section-divider-shimmer h-full w-1/3" />
      </div>
    </div>
  );
}
