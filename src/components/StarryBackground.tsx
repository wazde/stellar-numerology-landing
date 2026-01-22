import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-foreground';
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      
      container.appendChild(star);
    }

    // Create a few golden stars
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full';
      star.style.background = 'hsl(45 80% 55%)';
      
      const size = Math.random() * 3 + 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.boxShadow = '0 0 10px hsl(45 80% 55% / 0.5)';
      star.style.animation = `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ background: 'var(--gradient-cosmic)' }}
    />
  );
};

export default StarryBackground;
