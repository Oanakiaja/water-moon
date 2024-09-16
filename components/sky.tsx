import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const MoonSky = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 0.5;
    scene.background = new THREE.Color(0x0b141d);
  }, []);
  return (
    <>
      {/* <Sky
        scale={10000}
        turbidity={20}
        rayleigh={0}
        mieCoefficient={0.001}
        mieDirectionalG={0.63}
        azimuth={180}
        sunPosition={[0, 0.1, -1]}
      /> */}
    </>
  );
};

export default MoonSky;
