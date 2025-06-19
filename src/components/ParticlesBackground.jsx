'use client';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 50 },
          color: { value: '#00BFFF' },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
