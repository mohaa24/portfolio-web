import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useCallback } from "react";
import me from './../../me.svg'
const Me = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const options = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 0.1,
      },
      number: {
        limit: 0,
        value: 200,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.2,
          sync: false,
        },
        value: {
          min: 0.05,        
          max: 0.4,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.2)",
        lineWidth: 1,
      },
      enable: true,
      move: {
        radius: 10,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: 0.5,
      type: "inline",
      url: "https://particles.js.org/images/smalldeer.svg",
    },
    fullScreen: { enable: false }, // Disable fullscreen mode
  } as any;

  return (
    <div
    style={{ width: 300,
  height: 500,
  position: 'relative',
  overflow: 'hidden' /* Ensures particles stay inside the container */}}
    >
      <Particles
        style={{ width: "100%", height: "100%",position:'relative' }}
        id="tsparticles"
        options={options}
        init={particlesInit}
        width="300px"
        height="500px"
      />
    </div>
  );
}
export default Me;