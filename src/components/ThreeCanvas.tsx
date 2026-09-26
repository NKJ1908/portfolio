import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color definitions based on theme
    const isDark = theme === "dark";
    const primaryColor = isDark ? 0xffffff : 0x020917;
    const accentColor = isDark ? 0x38bdf8 : 0x2563eb;
    const wireframeOpacity = isDark ? 0.18 : 0.14;
    const nodeOpacity = isDark ? 0.75 : 0.65;

    // Group for the 3D System
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // 1. Inner Geometric Icosahedron Frame
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreLineMaterial = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: wireframeOpacity,
    });
    const coreMesh = new THREE.LineSegments(coreWireframe, coreLineMaterial);
    systemGroup.add(coreMesh);

    // 2. Vertex Nodes on the Geometry
    const nodePositions: number[] = [];
    const posAttr = coreGeometry.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      nodePositions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
    }
    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodesMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.055,
      transparent: true,
      opacity: nodeOpacity,
    });
    const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
    systemGroup.add(nodes);

    // 3. Ambient Floating System Nodes (Outer Constellation)
    const particleCount = 45;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 1.6 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: accentColor,
      size: 0.04,
      transparent: true,
      opacity: isDark ? 0.6 : 0.45,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    systemGroup.add(particles);

    // Mouse movement interaction (gentle damping)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.6;
      mouseY = (y / rect.height) * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const delta = clock.getDelta();

        // Slow, elegant continuous rotation
        systemGroup.rotation.y += delta * 0.15;
        systemGroup.rotation.x += delta * 0.08;

        // Damped mouse follow
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        systemGroup.rotation.y += targetX * 0.02;
        systemGroup.rotation.x += targetY * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      coreGeometry.dispose();
      coreWireframe.dispose();
      coreLineMaterial.dispose();
      nodesGeometry.dispose();
      nodesMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="relative size-full min-h-[320px] sm:min-h-[400px] flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    />
  );
}
