import React, { useEffect, useState } from 'react';

export const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate random petals
    const colors = ['#D4AF37', '#F59E0B', '#8B1E3F', '#F43F5E', '#FEF3C7'];
    const generatedPetals = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      size: Math.random() * 12 + 10, // px
      duration: Math.random() * 12 + 10, // seconds
      delay: Math.random() * 10, // seconds
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-80"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            backgroundColor: petal.color,
            borderRadius: '100% 0% 100% 0%',
            filter: 'blur(0.4px)',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            animation: `float-petal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
