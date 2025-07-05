'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Particle class
  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `hsl(${220 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`;
      this.life = Math.random() * 100 + 100;
      this.maxLife = this.life;
      this.mouseDistance = 0;
    }

    update(mouse) {
      // Calculate distance to mouse
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      this.mouseDistance = Math.sqrt(dx * dx + dy * dy);

      // Mouse interaction
      if (this.mouseDistance < 100) {
        const force = (100 - this.mouseDistance) / 100;
        const angle = Math.atan2(dy, dx);
        this.speedX -= Math.cos(angle) * force * 0.1;
        this.speedY -= Math.sin(angle) * force * 0.1;
      }

      // Update position
      this.x += this.speedX;
      this.y += this.speedY;

      // Boundary collision
      if (this.x <= 0 || this.x >= this.canvas.width) {
        this.speedX *= -0.8;
        this.x = Math.max(0, Math.min(this.canvas.width, this.x));
      }
      if (this.y <= 0 || this.y >= this.canvas.height) {
        this.speedY *= -0.8;
        this.y = Math.max(0, Math.min(this.canvas.height, this.y));
      }

      // Friction
      this.speedX *= 0.99;
      this.speedY *= 0.99;

      // Life cycle
      this.life -= 0.2;
      if (this.life <= 0) {
        this.reset();
      }
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.life = this.maxLife;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    draw(ctx) {
      const opacity = Math.min(this.life / this.maxLife, 1);
      const glowIntensity = this.mouseDistance < 150 ? (150 - this.mouseDistance) / 150 : 0;
      
      ctx.save();
      ctx.globalAlpha = opacity * 0.7;
      
      // Glow effect
      if (glowIntensity > 0) {
        ctx.shadowBlur = 20 * glowIntensity;
        ctx.shadowColor = this.color;
      }
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      
      ctx.restore();
    }
  }

  // Initialize particles
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100);
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push(new Particle(canvas));
    }

    setParticles(newParticles);
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(particle => {
      particle.update(mouseRef.current);
      particle.draw(ctx);
    });

    // Draw connections
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const opacity = (100 - distance) / 100 * 0.3;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [particles]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setDimensions({ width: canvas.width, height: canvas.height });
  }, []);

  // Setup
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleResize, handleMouseMove]);

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
    }
  }, [dimensions, initParticles]);

  // Start animation when particles are ready
  useEffect(() => {
    if (particles.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground; 