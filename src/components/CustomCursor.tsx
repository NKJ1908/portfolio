import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  // Positions tracked via refs for 60fps animation without React re-render lags
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop mouse/trackpad)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setMounted(true);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!visible) setVisible(true);

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest(
            'a, button, input, textarea, select, [role="button"], .project-card, [data-interactive]',
          ),
        );
        setIsHovered(interactive);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth Lerp animation loop for the outer ring
    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        if (prefersReducedMotion) {
          ringPos.current.x = mousePos.current.x;
          ringPos.current.y = mousePos.current.y;
        } else {
          // Smooth trailing interpolation
          ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
          ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;
        }
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [visible]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? isDark
              ? "size-10 border-white/40 bg-white/5"
              : "size-10 border-slate-900/35 bg-slate-900/5"
            : isDark
              ? "size-6 border-white/25 bg-transparent"
              : "size-6 border-slate-900/25 bg-transparent"
        }`}
      />

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,opacity] duration-150 will-change-transform ${
          isHovered ? "size-1 opacity-40" : "size-1.5 opacity-90"
        } ${isDark ? "bg-white" : "bg-slate-950"}`}
      />
    </div>
  );
}
