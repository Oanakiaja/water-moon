import React, { useRef, useEffect } from "react";
import { useThree, useFrame, extend, useLoader } from "@react-three/fiber";
import { TextureLoader, Fog, Vector3, Vector2, Color } from "three";
import { EffectComposer, RenderPass, UnrealBloomPass } from "three-stdlib";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const Moon = () => {
  const moonTexture = useLoader(TextureLoader, "/moon.png");
  const { scene, gl, camera } = useThree();
  const composer = useRef<any>();

  // useEffect(() => {
  //   // 添加边缘雾
  //   scene.fog = new Fog(0x000000, 1500, 2000);
  // }, [scene, camera]);

  // useFrame(() => {
  //   composer.current.render();
  // }, 1);

  return (
    <>
      <ambientLight intensity={Math.PI / 2} color={0xf8f8c5} />
      <mesh position={[0, 500, -2000]}>
        <sphereGeometry args={[200, 32, 32]} />
        <meshStandardMaterial
          map={moonTexture}
          emissive={0xf8f8c5}
          emissiveIntensity={0.8}
        />
      </mesh>

      <effectComposer ref={composer} args={[gl]}>
        <renderPass
          //  attachArray="passes"
          scene={scene}
          camera={camera}
        />
        <unrealBloomPass
          // attachArray="passes"
          args={[
            new Vector2(window.innerWidth, window.innerHeight),
            1.5,
            0.4,
            0.85,
          ]}
        />
      </effectComposer>
    </>
  );
};

export default Moon;
