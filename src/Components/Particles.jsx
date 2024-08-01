// src/Components/Particles.js
import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function ParticlesComponent() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    background: {
      color: {
        value: "#0d47a1",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    particles: {
      number: {
        value: 80,
      },
      color: {
        value: "#ffffff",
      },
      size: {
        value: { min: 1, max: 10 },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 3,
          decay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      shape: {
        type: "circle",
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: 0,
      },
      shadow: {
        enable: false,
        color: "#000000",
        blur: 0,
        offset: {
          x: 0,
          y: 0,
        },
      },
      collisions: {
        enable: false,
      },
    },
    zLayers: 100,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}

export default ParticlesComponent;
