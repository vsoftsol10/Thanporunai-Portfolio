import { useState, useEffect } from 'react';

const DustParticlesBackground = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate falling leaves
    const generateLeaves = () => {
      const leafElements = [];
      for (let i = 0; i < 15; i++) {
        leafElements.push({
          id: `leaf-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 120 - 20, // Spread leaves throughout viewport
          size: Math.random() * 12 + 8,
          opacity: Math.random() * 0.6 + 0.2,
          animationDelay: Math.random() * 20,
          duration: Math.random() * 10 + 15, // 15-25 seconds (faster)
          rotationSpeed: Math.random() * 4 + 2,
          swayAmount: Math.random() * 30 + 20,
          leafType: Math.floor(Math.random() * 4), // Different leaf shapes
          color: Math.floor(Math.random() * 5) // Different autumn colors
        });
      }
      setLeaves(leafElements);
    };

    generateLeaves();
  }, []);

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes gentleFall {
        0% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
          opacity: var(--leaf-opacity);
        }
        100% {
          transform: translateY(calc(100vh + 50px)) translateX(var(--sway-amount)) rotate(var(--rotation-end));
          opacity: 0;
        }
      }

      @keyframes leafSway {
        0%, 100% {
          transform: translateX(0px);
        }
        25% {
          transform: translateX(calc(var(--sway-amount) * 0.3));
        }
        50% {
          transform: translateX(calc(var(--sway-amount) * -0.2));
        }
        75% {
          transform: translateX(calc(var(--sway-amount) * 0.4));
        }
      }

      @keyframes leafRotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes gentleBreeze {
        0%, 100% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(5px);
        }
      }

      .leaf-background {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: -5;
        overflow: hidden;
        background: linear-gradient(135deg, 
          rgba(248, 250, 252, 0.3) 0%, 
          rgba(254, 249, 240, 0.2) 30%,
          rgba(248, 250, 252, 0.3) 100%);
      }

      .falling-leaf {
        position: absolute;
        pointer-events: none;
        animation: gentleFall linear infinite;
        transform-origin: center center;
      }

      .leaf-sway {
        animation: leafSway ease-in-out infinite;
      }

      .leaf-rotate {
        animation: leafRotate linear infinite;
      }

      /* Leaf shapes using CSS */
      .leaf-maple {
        clip-path: polygon(50% 0%, 25% 35%, 0% 35%, 35% 60%, 15% 100%, 50% 75%, 85% 100%, 65% 60%, 100% 35%, 75% 35%);
      }

      .leaf-oak {
        clip-path: polygon(50% 0%, 65% 15%, 85% 20%, 90% 40%, 75% 55%, 85% 75%, 70% 90%, 50% 85%, 30% 90%, 15% 75%, 25% 55%, 10% 40%, 15% 20%, 35% 15%);
      }

      .leaf-birch {
        clip-path: ellipse(35% 50% at 50% 50%);
      }

      .leaf-simple {
        clip-path: polygon(50% 0%, 80% 30%, 100% 60%, 70% 100%, 30% 100%, 0% 60%, 20% 30%);
      }

      /* Subtle background elements */
      .leaf-background::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.02) 0%, transparent 50%),
                    radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.02) 0%, transparent 50%);
        animation: gentleBreeze 25s ease-in-out infinite;
      }

      /* Soft ground fog effect */
      .leaf-background::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(to top, 
          rgba(248, 250, 252, 0.1) 0%, 
          rgba(248, 250, 252, 0.05) 50%,
          transparent 100%);
        pointer-events: none;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const getLeafColor = (colorIndex) => {
    const colors = [
      'rgba(34, 197, 94, 0.7)',   // Fresh Green (Leafy)
      'rgba(101, 163, 13, 0.6)',  // Olive Green (Mature Leaf)
      'rgba(190, 138, 40, 0.6)',  // Dry Leaf Yellow
      'rgba(133, 77, 14, 0.6)',   // Earthy Brown (Fallen Leaf)
      'rgba(22, 101, 52, 0.6)',   // Deep Forest Green (Thick Leaf)
      'rgba(235, 169, 81, 0.5)',  // Faded Golden (Autumn Leaf)
    ];
    return colors[colorIndex];
  };

  const getLeafShape = (typeIndex) => {
    const shapes = ['leaf-maple', 'leaf-oak', 'leaf-birch', 'leaf-simple'];
    return shapes[typeIndex];
  };

  return (
    <div className="leaf-background">
      {/* Falling leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`falling-leaf ${getLeafShape(leaf.leafType)}`}
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            background: getLeafColor(leaf.color),
            animationDelay: `${leaf.animationDelay}s`,
            animationDuration: `${leaf.duration}s`,
            '--leaf-opacity': leaf.opacity,
            '--sway-amount': `${leaf.swayAmount}px`,
            '--rotation-end': `${leaf.rotationSpeed * 360}deg`,
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
          }}
        >
          {/* Add subtle sway animation */}
          <div
            className="leaf-sway"
            style={{
              width: '100%',
              height: '100%',
              animationDuration: `${leaf.duration * 0.3}s`,
              animationDelay: `${leaf.animationDelay * 0.5}s`
            }}
          >
            {/* Add gentle rotation */}
            <div
              className="leaf-rotate"
              style={{
                width: '100%',
                height: '100%',
                background: 'inherit',
                clipPath: 'inherit',
                animationDuration: `${leaf.rotationSpeed}s`,
                animationDelay: `${leaf.animationDelay * 0.7}s`
              }}
            />
          </div>
        </div>
      ))}

      {/* Gentle floating particles for atmosphere */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '3px',
            height: '3px',
            background: 'rgba(251, 191, 36, 0.2)',
            borderRadius: '50%',
            animation: `gentleFall ${Math.random() * 30 + 40}s linear infinite`,
            animationDelay: `${Math.random() * 25}s`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default DustParticlesBackground;