"use client";

import React, { useEffect, useRef } from "react";

export default function Canvas3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // 3D Particles array
    const particleCount = 75;
    const particles = [];
    const colors = ["#16f2b3", "#8b5cf6", "#ec4899", "#38bdf8", "#a855f7"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 800 - 400,
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        baseX: (Math.random() - 0.5) * width * 1.2,
        baseY: (Math.random() - 0.5) * height * 1.2,
      });
    }

    // 3D Geometric Ring vertices
    const ringRadius = Math.min(width, height) * 0.32;
    const ringPoints = 28;
    const ring = [];
    for (let i = 0; i < ringPoints; i++) {
      const angle = (i / ringPoints) * Math.PI * 2;
      ring.push({
        x: Math.cos(angle) * ringRadius,
        y: Math.sin(angle) * ringRadius,
        z: 0,
        origX: Math.cos(angle) * ringRadius,
        origY: Math.sin(angle) * ringRadius,
      });
    }

    let rotX = 0.4;
    let rotY = 0.3;
    let rotZ = 0;
    const fov = 450;

    // Render loop
    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      rotY += 0.003 + (mouse.x - width / 2) * 0.00001;
      rotX += 0.002 + (mouse.y - height / 2) * 0.00001;
      rotZ += 0.001;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle background radial glow
      const bgGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.6
      );
      bgGlow.addColorStop(0, "rgba(22, 242, 179, 0.07)");
      bgGlow.addColorStop(0.3, "rgba(139, 92, 246, 0.05)");
      bgGlow.addColorStop(0.7, "rgba(236, 72, 153, 0.02)");
      bgGlow.addColorStop(1, "rgba(13, 18, 36, 0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Project 3D points to 2D
      const project = (p) => {
        // Rotation around Y
        let cosY = Math.cos(rotY);
        let sinY = Math.sin(rotY);
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotation around X
        let cosX = Math.cos(rotX);
        let sinX = Math.sin(rotX);
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Perspective division
        const scale = fov / (fov + z2 + 500);
        return {
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          scale: Math.max(0.1, scale),
          z: z2,
        };
      };

      // 1. Draw 3D Orbiting Rings & Geometric Core
      const projectedRing = ring.map((pt) => {
        // Modulate slightly with time for organic ripple
        const d = Math.sin(Date.now() * 0.002 + pt.origX) * 12;
        return project({
          x: pt.origX + (pt.origX / ringRadius) * d,
          y: pt.origY + (pt.origY / ringRadius) * d,
          z: Math.sin(pt.origX * 0.05) * 40,
        });
      });

      // Draw wireframe connecting ring
      ctx.beginPath();
      for (let i = 0; i < projectedRing.length; i++) {
        const next = projectedRing[(i + 1) % projectedRing.length];
        if (i === 0) ctx.moveTo(projectedRing[i].x, projectedRing[i].y);
        else ctx.lineTo(projectedRing[i].x, projectedRing[i].y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(22, 242, 179, 0.25)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Cross diagonals for holographic sphere effect
      ctx.beginPath();
      for (let i = 0; i < projectedRing.length; i += 2) {
        const opp = projectedRing[(i + Math.floor(ringPoints / 2)) % ringPoints];
        ctx.moveTo(projectedRing[i].x, projectedRing[i].y);
        ctx.lineTo(opp.x, opp.y);
      }
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.stroke();

      // 2. Draw 3D Floating Particles & Mesh
      const projectedParticles = particles.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.x > width) p.x = -width;
        if (p.x < -width) p.x = width;
        if (p.y > height) p.y = -height;
        if (p.y < -height) p.y = height;
        if (p.z > 400) p.z = -400;
        if (p.z < -400) p.z = 400;

        // Mouse attraction when hovered
        if (mouse.isHovered) {
          const dx = (mouse.x - centerX) - p.x;
          const dy = (mouse.y - centerY) - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220 && dist > 1) {
            p.x += (dx / dist) * 0.8;
            p.y += (dy / dist) * 0.8;
          }
        }

        const proj = project(p);
        return {
          ...proj,
          radius: p.radius * proj.scale,
          color: p.color,
        };
      });

      // Sort by Z depth for realistic 3D layering
      projectedParticles.sort((a, b) => b.z - a.z);

      // Draw constellation connection lines
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.28 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw glowing particle nodes
      projectedParticles.forEach((p) => {
        if (p.scale <= 0) return;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * p.scale;
        ctx.globalAlpha = Math.min(1, Math.max(0.2, p.scale * 1.1));
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-auto overflow-hidden -z-10 select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 transition-opacity duration-1000"
      />
    </div>
  );
}
