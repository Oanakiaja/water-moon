import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useControls } from "leva";

const Moon = () => {
  const moonTexture = useLoader(TextureLoader, "/moon.png");
  const { intensity } = useControls({
    intensity: 0.4,
  });
  const materialRef = useRef<any>();

  useFrame((_, delta) => {
    if (materialRef.current.emissiveIntensity >= 0.75) {
      return;
    }
    materialRef.current.emissiveIntensity += delta * 0.2;
  });

  return (
    <mesh position={[0, 500, -2000]}>
      <sphereGeometry args={[200, 32, 32]} />
      <meshStandardMaterial
        ref={materialRef}
        map={moonTexture}
        emissive={0xf8f8c5}
        emissiveIntensity={intensity}
      />
    </mesh>
  );
};

export default Moon;
