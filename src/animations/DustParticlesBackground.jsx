import { useState, useEffect } from 'react';

const DustParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 50;
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1, // 1-5px
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
          animationDelay: Math.random() * 20,
          animationDuration: Math.random() * 20 + 15, // 15-35s
          direction: Math.random() > 0.5 ? 1 : -1,
          color: Math.floor(Math.random() * 3) // 0, 1, or 2 for different colors
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const getParticleColor = (colorIndex) => {
   const colors = [
  'rgba(34, 197, 94, 0.85)',   // Emerald Green (Tailwind: green-500)
  'rgba(16, 185, 129, 0.73)',  // Teal Green (Tailwind: emerald-500)
  'rgba(131, 204, 22, 0.75)'   // Lime Green (Tailwind: lime-500)
];
    return colors[colorIndex];
  };

  // CSS styles as JavaScript objects
  const styles = {
    container: {
      position: 'fixed',
      inset: '0',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: -10
    },
    gradientOverlay: {
      position: 'absolute',
      inset: '0',
      background: 'linear-gradient(to bottom right, rgba(248, 250, 252, 0.3), transparent, rgba(239, 246, 255, 0.2))'
    },
    particle: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(0.5px)',
      animation: 'particleFloat linear infinite, particleTwinkle 3s ease-in-out infinite'
    },
    microParticle: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      background: 'rgba(16, 185, 129, 0.4)',
      borderRadius: '50%',
      animation: 'microFloat linear infinite'
    },
    floatingOrb: {
      position: 'absolute',
      width: '14px',
      height: '14px',
      background: 'radial-gradient(circle, rgba(132, 204, 22, 0.4) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'orbFloat ease-in-out infinite',
      filter: 'blur(1px)'
    }
  };

  // Create CSS keyframes
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes particleFloat {
        0% {
          transform: translateY(100vh) translateX(0px) rotate(0deg);
        }
        25% {
          transform: translateY(75vh) translateX(20px) rotate(90deg);
        }
        50% {
          transform: translateY(50vh) translateX(-15px) rotate(180deg);
        }
        75% {
          transform: translateY(25vh) translateX(25px) rotate(270deg);
        }
        100% {
          transform: translateY(-5vh) translateX(0px) rotate(360deg);
        }
      }

      @keyframes microFloat {
        0% {
          transform: translateY(100vh) translateX(0px);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-5vh) translateX(10px);
          opacity: 0;
        }
      }

      @keyframes orbFloat {
        0%, 100% {
          transform: translateY(0px) translateX(0px) scale(1);
          opacity: 0.3;
        }
        25% {
          transform: translateY(-20px) translateX(15px) scale(1.1);
          opacity: 0.6;
        }
        50% {
          transform: translateY(-10px) translateX(-10px) scale(0.9);
          opacity: 0.4;
        }
        75% {
          transform: translateY(-30px) translateX(20px) scale(1.2);
          opacity: 0.7;
        }
      }

      @keyframes particleTwinkle {
        0%, 100% {
          opacity: 0.2;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.2);
        }
      }

      @keyframes particlePulse {
        0%, 100% {
          filter: blur(0.5px) brightness(1);
        }
        50% {
          filter: blur(1px) brightness(1.3);
        }
      }

      @media (max-width: 768px) {
        .dust-particle {
          animation-duration: 25s !important;
        }
        
        .dust-orb {
          width: 15px !important;
          height: 15px !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Subtle gradient overlay */}
      <div style={styles.gradientOverlay}></div>
      
      {/* Main dust particles */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="dust-particle"
          style={{
            ...styles.particle,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: getParticleColor(particle.color),
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            opacity: particle.opacity,
            transform: `rotate(${particle.direction * 45}deg)`,
            animation: index % 3 === 0 ? 
              'particleFloat linear infinite, particlePulse 4s ease-in-out infinite' : 
              'particleFloat linear infinite, particleTwinkle 3s ease-in-out infinite'
          }}
        />
      ))}

      {/* Micro particles for depth */}
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={`micro-${i}`}
          style={{
            ...styles.microParticle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 30}s`,
            animationDuration: `${Math.random() * 25 + 20}s`
          }}
        />
      ))}

      {/* Floating orbs for ambient effect */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`orb-${i}`}
          className="dust-orb"
          style={{
            ...styles.floatingOrb,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 15 + 20}s`
          }}
        />
      ))}
    </div>
  );
};

export default DustParticlesBackground;