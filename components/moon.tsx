import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Moon = () => {
  const moonTexture = useLoader(TextureLoader, "/moon.png");

  return (
    <mesh position={[0, 500, -2000]}>
      <sphereGeometry args={[200, 32, 32]} />
      <meshStandardMaterial
        map={moonTexture}
        emissive={0xf8f8c5}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
};

export default Moon;
