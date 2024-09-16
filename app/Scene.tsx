"use client";
import { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Ocean from "@/components/ocean";
import Sky from "@/components/sky";
import HtmlContent from "./html";
import Moon from "@/components/moon";

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 10, 1000],
        fov: 55,
        near: 1,
        far: 20000,
      }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <HtmlContent />
      <Moon />
      <Ocean />
      <Sky />
      {/* <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} /> */}
      {/* <OrbitControls makeDefault /> */}
      <ambientLight intensity={0.3} />
      {/* <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        /> */}
    </Canvas>
  );
};

export default Scene;
