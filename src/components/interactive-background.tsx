"use client";

import { useEffect, useRef } from "react";

const GAP = 28;
const RADIUS = 1.4;
const GLOW_RADIUS = 140;
const MAX_SCALE = 2.2;

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let needsDraw = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      needsDraw = true;
    };

    const paintFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const { x: mx, y: my, active } = mouseRef.current;

      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.hypot(dx, dy);
          const t = active ? Math.max(0, 1 - dist / GLOW_RADIUS) : 0;
          const ease = t * t * (3 - 2 * t);

          const size = RADIUS + ease * (MAX_SCALE - RADIUS);
          const alpha = isDark
            ? 0.05 + ease * 0.85
            : 0.04 + ease * 0.7;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);

          if (ease > 0.05) {
            const g = Math.round(180 + ease * 40);
            const r = Math.round(20 + ease * 30);
            const b = Math.round(100 + ease * 40);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

            if (ease > 0.35) {
              ctx.shadowColor = `rgba(45, 212, 140, ${ease * 0.55})`;
              ctx.shadowBlur = 8 + ease * 14;
            } else {
              ctx.shadowBlur = 0;
            }
          } else {
            ctx.fillStyle = isDark
              ? `rgba(255,255,255,${alpha})`
              : `rgba(0,0,0,${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
      needsDraw = true;
    };

    const onLeave = () => {
      mouseRef.current.active = false;
      needsDraw = true;
    };

    const loop = () => {
      if (needsDraw) {
        needsDraw = false;
        paintFrame();
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    paintFrame();

    if (prefersReduced || isTouch) {
      const onResizeStatic = () => {
        resize();
        paintFrame();
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
