import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HoliBackground = () => {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={{
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 0
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            size: { value: { min: 5, max: 20 } },
            move: { enable: true, speed: 3 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            color: {
              value: ["#ff4d6d", "#ff9e00", "#8338ec", "#3a86ff", "#06d6a0"]
            }
          }
        }}
      />
    </div>
  );
}

export default HoliBackground;