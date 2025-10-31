import React, { useEffect, useRef, useState } from 'react';

interface ParticleOrbitEffectProps {
  className?: string;
  style?: React.CSSProperties;
  particleCount?: number;
  radius?: number;
  particleSpeed?: number;
  radiusScale?: number;
  intensity?: number;
  fadeOpacity?: number;
  colorRange?: [number, number];
  disabled?: boolean;
  followMouse?: boolean;
  autoColors?: boolean;
  particleSize?: number;
}

interface Particle {
  angle: number;
  speed: number;
  orbitRadius: number;
  hue: number;
  size: number;
  sizeOffset: number;
}

export default function ParticleOrbitEffect({
  className = '',
  style = {},
  particleCount = 25,
  radius = 70,
  particleSpeed = 0.025,
  radiusScale = 1.5,
  intensity = 1,
  fadeOpacity = 0.05,
  colorRange = [0, 360],
  disabled = false,
  followMouse = true,
  autoColors = true,
  particleSize = 2,
}: ParticleOrbitEffectProps): JSX.Element | null {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const centerRef = useRef({ x: 0, y: 0 });
  const targetCenterRef = useRef({ x: 0, y: 0 });
  const currentRadiusScaleRef = useRef(1);
  const targetRadiusScaleRef = useRef(1);
  const animationFrameRef = useRef<number>();
  const [baseHue, setBaseHue] = useState(Math.random() * 360);

  if (disabled) return null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerRef.current = {
        x: canvas.width / 2,
        y: canvas.height / 2,
      };
      targetCenterRef.current = { ...centerRef.current };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        angle: Math.random() * Math.PI * 2,
        speed: particleSpeed * (0.5 + Math.random()),
        orbitRadius: radius * (0.5 + Math.random() * 0.5),
        hue: baseHue + (Math.random() - 0.5) * 60,
        size: particleSize * (0.5 + Math.random()),
        sizeOffset: Math.random() * Math.PI * 2,
      }));
    };

    initParticles();

    // Auto-randomize colors
    let colorInterval: NodeJS.Timeout | undefined;
    if (autoColors) {
      colorInterval = setInterval(() => {
        const newBaseHue = Math.random() * (colorRange[1] - colorRange[0]) + colorRange[0];
        setBaseHue(newBaseHue);
        particlesRef.current.forEach((particle) => {
          particle.hue = newBaseHue + (Math.random() - 0.5) * 60;
        });
      }, 2000);
    }

    // Mouse/touch event handlers
    const handleMove = (x: number, y: number) => {
      if (followMouse) {
        targetCenterRef.current = { x, y };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseDown = () => {
      targetRadiusScaleRef.current = radiusScale;
    };

    const handleMouseUp = () => {
      targetRadiusScaleRef.current = 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleMouseDown);
    window.addEventListener('touchend', handleMouseUp);

    // Animation loop
    const animate = () => {
      // Apply fade effect for trails
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth center transition
      centerRef.current.x += (targetCenterRef.current.x - centerRef.current.x) * 0.1;
      centerRef.current.y += (targetCenterRef.current.y - centerRef.current.y) * 0.1;

      // Smooth radius scale transition
      currentRadiusScaleRef.current += 
        (targetRadiusScaleRef.current - currentRadiusScaleRef.current) * 0.1;

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        // Update angle
        particle.angle += particle.speed * intensity;
        particle.sizeOffset += 0.05;

        // Calculate position
        const effectiveRadius = 
          particle.orbitRadius * currentRadiusScaleRef.current;
        const x = centerRef.current.x + Math.cos(particle.angle) * effectiveRadius;
        const y = centerRef.current.y + Math.sin(particle.angle) * effectiveRadius;

        // Animated size
        const animatedSize = 
          particle.size + Math.sin(particle.sizeOffset) * (particle.size * 0.3);

        // Draw particle
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, animatedSize);
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, 1)`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, 0.6)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, animatedSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      if (colorInterval) clearInterval(colorInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    particleCount,
    radius,
    particleSpeed,
    radiusScale,
    intensity,
    fadeOpacity,
    colorRange,
    followMouse,
    autoColors,
    particleSize,
    baseHue,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
    />
  );
}
