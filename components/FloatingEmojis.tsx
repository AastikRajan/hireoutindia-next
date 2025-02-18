"use client";

import React from "react";

// Use modern, abstract shape types
const shapeTypes = ["blob", "hexagon", "spiral", "cog", "star"];

const FloatingShapes = () => {
  // Generate 6 floating elements
  const count = 6;
  const items = Array.from({ length: count }).map((_, index) => {
    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    return { type, key: index };
  });

  return (
    <div className="floating-container">
      {items.map(({ type, key }) => {
        // Randomize position, delay, size, rotation, and z-index
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 3;
        const size = 20 + Math.random() * 30; // between 20px and 50px
        const randomRotation = Math.random() * 360;
        const zIndexOptions = [-3, -2, -1];
        const zIndex =
          zIndexOptions[Math.floor(Math.random() * zIndexOptions.length)];
        const outerStyle: React.CSSProperties = {
          top: `${top}vh`,
          left: `${left}vw`,
          width: `${size}px`,
          height: `${size}px`,
          zIndex,
          position: "absolute",
          transform: `rotate(${randomRotation}deg)`,
        };

        const innerDelayStyle: React.CSSProperties = {
          animationDelay: `${delay}s`,
        };

        let content;
        switch (type) {
          case "blob":
            content = (
              <svg
                className="floating-shape blob"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50,5 C70,10 90,30 85,55 C80,80 60,95 40,95 C20,95 5,80 5,55 C5,30 25,10 50,5Z" />
              </svg>
            );
            break;
          case "hexagon":
            content = (
              <svg
                className="floating-shape hexagon"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
              </svg>
            );
            break;
          case "spiral":
            content = (
              <svg
                className="floating-shape spiral"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M50,50 C65,20 80,80 50,80 C20,80 35,20 50,50" />
              </svg>
            );
            break;
          case "cog":
            content = (
              <svg
                className="floating-shape cog"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M487.4 315.7l-42.1-24.3c2.8-14.8 2.8-30.3 0-45.1l42.1-24.3c11.2-6.5 15.1-20.3 9.7-31.7l-45.3-78.4c-5.4-11.4-18.5-15.5-29.7-10.1l-42.1 24.3c-23.5-19.5-50.8-35.5-80.3-46.7V24.2C309.6 13.6 300 4 288.4 4h-90.9c-11.6 0-21.2 9.6-21.2 21.2v48.6c-29.5 11.2-56.8 27.2-80.3 46.7L42.8 88.2c-11.2-5.4-24.3-.3-29.7 10.1L-22.2 176.7c-5.4 11.4-.5 25.2 9.7 31.7l42.1 24.3c-2.8 14.8-2.8 30.3 0 45.1l-42.1 24.3c-11.2 6.5-15.1 20.3-9.7 31.7l45.3 78.4c5.4 11.4 18.5 15.5 29.7 10.1l42.1-24.3c23.5 19.5 50.8 35.5 80.3 46.7v48.6c0 11.6 9.6 21.2 21.2 21.2h90.9c11.6 0 21.2-9.6 21.2-21.2v-48.6c29.5-11.2 56.8-27.2 80.3-46.7l42.1 24.3c11.2 5.4 24.3.3 29.7-10.1l45.3-78.4c5.4-11.4.5-25.2-9.7-31.7zM256 336c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
              </svg>
            );
            break;
          case "star":
            content = (
              <svg
                className="floating-shape star"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            );
            break;
          default:
            content = (
              <svg
                className="floating-shape star"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            );
        }

        return (
          <div key={key} className="floating-element" style={outerStyle}>
            <div className="floating-float" style={innerDelayStyle}>
              <div className="floating-spin">{content}</div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .floating-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
        }
        .floating-element {
          position: absolute;
        }
        /* Float animation */
        .floating-float {
          width: 100%;
          height: 100%;
          animation: float 6s ease-in-out infinite;
        }
        /* Spin animation */
        .floating-spin {
          width: 100%;
          height: 100%;
          animation: spin 15s linear infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .floating-shape {
          width: 100%;
          height: 100%;
        }
        /* Blob styling */
        .floating-shape.blob {
          color: rgba(79, 70, 229, 0.3);
        }
        /* Hexagon styling */
        .floating-shape.hexagon {
          color: rgba(124, 58, 237, 0.3);
        }
        /* Spiral styling */
        .floating-shape.spiral {
          stroke: rgba(79, 70, 229, 0.3);
        }
        /* Cog styling */
        .floating-shape.cog {
          color: rgba(124, 58, 237, 0.3);
        }
        /* Star styling */
        .floating-shape.star {
          color: rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </div>
  );
};

export default FloatingShapes;
