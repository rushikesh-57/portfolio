import React, { useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

export default function ParticlesBackground({
  maxParticles = 120,     // base particle count
  particleSize = 2.2,     // base particle radius
  density = 9000,         // lower = more particles relative to area
  lineDistance = 120,     // distance to draw connecting lines
}) {
  const theme = useTheme();
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouse = useRef({ x: null, y: null, down: false });
  const particlesRef = useRef([]);

  // Pull theme colors
  const colors = [
    theme.palette.primary.main,    // bright blue
    theme.palette.secondary.main,  // teal-green
    "#ffffff"                      // subtle white accent
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const resize = () => {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const particleCount = () => {
      const areaFactor = Math.max(1, (width * height) / density);
      const base = Math.min(maxParticles, Math.floor(areaFactor));
      return isTouch ? Math.max(20, Math.floor(base * 0.35)) : base;
    };

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createParticle() {
      return {
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.4, 0.4),
        vy: rand(-0.4, 0.4),
        radius: rand(
          Math.max(0.8, particleSize * 0.6),
          Math.max(1.2, particleSize * 1.6)
        ),
        opacity: rand(0.25, 0.9),
        color: colors[Math.floor(Math.random() * colors.length)], // pick random theme color
        life: rand(200, 600),
        maxLife: rand(200, 600),
      };
    }

    function initParticles() {
      particlesRef.current = [];
      const count = particleCount();
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(createParticle());
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleTouch = (e) => {
      if (!e.touches?.[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.touches[0].clientX - rect.left;
      mouse.current.y = e.touches[0].clientY - rect.top;
    };

    const clearMouse = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      const parts = particlesRef.current;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        // cursor attraction
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxAttract = 120;
          if (dist < maxAttract && dist > 2) {
            const force = (1 - dist / maxAttract) * 0.9;
            p.vx += (dx / dist) * 0.05 * force;
            p.vy += (dy / dist) * 0.05 * force;
          }
        }

        // movement
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;

        // wrapping edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // lifecycle reset
        p.life--;
        if (p.life <= 0) {
          p.x = mouse.current.x ?? rand(0, width);
          p.y = mouse.current.y ?? rand(0, height);
          p.vx = rand(-0.4, 0.4);
          p.vy = rand(-0.4, 0.4);
          p.life = p.maxLife;
          p.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // draw connecting lines
      ctx.globalAlpha = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const p1 = parts[i];
          const p2 = parts[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = dx * dx + dy * dy;
          const maxDist = lineDistance * lineDistance;
          if (dist < maxDist) {
            const alpha = 0.12 * (1 - dist / maxDist);
            ctx.beginPath();
            ctx.strokeStyle = theme.palette.primary.main; // always link in primary color
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(update);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", clearMouse);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchend", clearMouse, { passive: true });

    animRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", clearMouse);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", clearMouse);
    };
  }, [theme, maxParticles, particleSize, density, lineDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: theme.palette.background.default, // use theme background
        pointerEvents: "none",
      }}
    />
  );
}
