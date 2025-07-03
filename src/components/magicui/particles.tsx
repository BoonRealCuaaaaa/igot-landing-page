"use client";

import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  color: string;
}

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Particle[]>([]);
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });
  const mouseMoved = useRef(false);
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [color]);

  useEffect(() => {
    onMouseMove();
  }, [staticity, ease]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onMouseMove = () => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      const handleMouseMove = (e: MouseEvent) => {
        mousePosition.current.x = e.clientX - rect.left;
        mousePosition.current.y = e.clientY - rect.top;
        mouseMoved.current = true;
      };
      const handleMouseLeave = () => {
        mouseMoved.current = false;
      };
      canvasContainerRef.current.addEventListener("mousemove", handleMouseMove);
      canvasContainerRef.current.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
      return () => {
        if (canvasContainerRef.current) {
          canvasContainerRef.current.removeEventListener(
            "mousemove",
            handleMouseMove
          );
          canvasContainerRef.current.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      };
    }
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      const container = canvasContainerRef.current;
      canvasRef.current.width = container.offsetWidth * dpr;
      canvasRef.current.height = container.offsetHeight * dpr;
      canvasRef.current.style.width = `${container.offsetWidth}px`;
      canvasRef.current.style.height = `${container.offsetHeight}px`;
      context.current.scale(dpr, dpr);
      setCanvasSize({
        w: container.offsetWidth,
        h: container.offsetHeight,
      });
    }
  };

  const circleParams = (): Particle => {
    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 0.1;
    const alpha = 0.5;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;

    return {
      id: Math.random(),
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
      color,
    };
  };

  const drawCircle = (circle: Particle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.w, canvasSize.h);
    }
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle: Particle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha -= 0.02;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX +=
        (mouseMoved.current ? mousePosition.current.x - circle.x : 0) /
        (staticity / circle.magnetism);
      circle.translateY +=
        (mouseMoved.current ? mousePosition.current.y - circle.y : 0) /
        (staticity / circle.magnetism);

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX * ease,
            translateY: circle.translateY * ease,
            alpha: circle.alpha,
          } as Particle,
          true
        );
      }
    });
    requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
