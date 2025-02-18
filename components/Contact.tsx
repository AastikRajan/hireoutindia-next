"use client";

import React, { useEffect, useState } from "react";

const FloatingShapes = () => {
  // Prevent SSR hydration mismatches by only rendering on the client
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  // Generate random stars for the background
  const starCount = 20;
  const stars = Array.from({ length: starCount }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = 2 + Math.random() * 3; // between 2px and 5px
    const delay = Math.random() * 5;
    const opacity = 0.5 + Math.random() * 0.5;
    return { key: i, top, left, size, delay, opacity };
  });

  // Generate a few comets
  const cometCount = 3;
  const comets = Array.from({ length: cometCount }).map((_, i) => {
    const startTop = 50 + Math.random() * 30;
    const delay = Math.random() * 5;
    return { key: i, startTop, delay };
  });

  // Predefined orbiting planets
  const planets = [
    {
      key: 0,
      orbitSize: 250,
      size: 40,
      color: "radial-gradient(circle, #7c3aed, #4f46e5)",
      duration: 25,
    },
    {
      key: 1,
      orbitSize: 320,
      size: 50,
      color: "radial-gradient(circle, #4f46e5, #7c3aed)",
      duration: 35,
    },
    {
      key: 2,
      orbitSize: 400,
      size: 35,
      color: "radial-gradient(circle, #a78bfa, #818cf8)",
      duration: 30,
    },
  ];

  // Predefined nebulas for atmospheric depth
  const nebulas = [
    {
      key: 0,
      top: 70,
      left: 20,
      size: 250,
      color: "rgba(124, 58, 237, 0.4)",
      blur: "12px",
      duration: 45,
    },
    {
      key: 1,
      top: 20,
      left: 80,
      size: 300,
      color: "rgba(79, 70, 229, 0.4)",
      blur: "14px",
      duration: 55,
    },
  ];

  return (
    <div className="floating-container">
      {/* Glowing Sun */}
      <div className="sun" />

      {/* Orbiting Planets */}
      {planets.map((planet) => (
        <div
          key={planet.key}
          className="orbit"
          style={{
            width: `${planet.orbitSize}px`,
            height: `${planet.orbitSize}px`,
            animationDuration: `${planet.duration}s`,
          }}
        >
          <div
            className="planet"
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              background: planet.color,
            }}
          />
        </div>
      ))}

      {/* Nebulas */}
      {nebulas.map((nebula) => (
        <div
          key={nebula.key}
          className="nebula"
          style={{
            top: `${nebula.top}vh`,
            left: `${nebula.left}vw`,
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            background: nebula.color,
            filter: `blur(${nebula.blur})`,
            animationDuration: `${nebula.duration}s`,
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.key}
          className="star"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Comets */}
      {comets.map((comet) => (
        <div
          key={comet.key}
          className="comet"
          style={{
            top: `${comet.startTop}vh`,
            animationDelay: `${comet.delay}s`,
          }}
        >
          <div className="comet-tail" />
        </div>
      ))}

      <style jsx>{`
        .floating-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: -1;
          background: #0a0a0d; /* Dark background to simulate space */
        }
        /* Sun: a radiant, glowing orb */
        .sun {
          position: absolute;
          top: 10vh;
          left: 10vw;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #ffcc33, #f56b90);
          border-radius: 50%;
          box-shadow: 0 0 80px 30px rgba(255, 204, 51, 0.6);
          z-index: -1;
        }
        /* Orbit container: rotates around the sun */
        .orbit {
          position: absolute;
          top: 10vh;
          left: 10vw;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          pointer-events: none;
          animation: orbitRotate linear infinite;
        }
        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        /* Planet: positioned on the left edge of the orbit */
        .planet {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
        /* Nebula: drifting, pulsating clouds */
        .nebula {
          position: absolute;
          border-radius: 50%;
          animation: nebulaFloat 20s ease-in-out infinite alternate;
        }
        @keyframes nebulaFloat {
          from {
            transform: scale(0.9);
            opacity: 0.6;
          }
          to {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        /* Star: tiny, twinkling dots */
        .star {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        /* Comet: a streak with a fading tail */
        .comet {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 50%;
          animation: cometMove 8s linear infinite;
        }
        @keyframes cometMove {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(-60vh);
            opacity: 0;
          }
        }
        .comet-tail {
          position: absolute;
          top: 50%;
          left: 100%;
          width: 150px;
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default FloatingShapes;
