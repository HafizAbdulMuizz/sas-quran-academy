"use client";

import { useCallback } from "react";

import Particles from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: 25,
          },

          color: {
            value: "#B8860B",
          },

          opacity: {
            value: 0.25,
          },

          size: {
            value: 3,
          },

          move: {
            enable: true,
            speed: 0.5,
          },
        },
      }}
      className="absolute inset-0"
    />
  );
}