import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Subtle, sparse architectural nodes
    const isMobile = width < 768;
    const nodeCount = isMobile ? 12 : 22;
    const maxDistance = isMobile ? 140 : 200;

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Extremely slow drift
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() > 0.7 ? 1.5 : 1,
      });
    }

    const isDark = theme === "dark";
    // Exact colors: Dark mode uses slate-400 with very low opacity; Light mode uses navy slate
    const nodeColor = isDark ? "rgba(226, 232, 240, 0.22)" : "rgba(2, 9, 23, 0.15)";
    const lineBaseRgb = isDark ? "226, 232, 240" : "2, 9, 23";

    let animationFrameId: number;
    let isVisible = true;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting structural lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Very low opacity: maximum 0.05
            const alpha = (1 - dist / maxDistance) * 0.045;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineBaseRgb}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 2. Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Position update (if motion allowed and tab visible)
        if (!prefersReducedMotion && isVisible) {
          node.x += node.vx;
          node.y += node.vy;

          // Gentle wrap-around at edges
          if (node.x < -10) node.x = width + 10;
          else if (node.x > width + 10) node.x = -10;

          if (node.y < -10) node.y = height + 10;
          else if (node.y > height + 10) node.y = -10;
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (prefersReducedMotion) draw();
    };

    // Pause when tab not visible to preserve resources
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
      aria-hidden="true"
    />
  );
}
