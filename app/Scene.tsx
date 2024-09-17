"use client";
import { Canvas } from "@react-three/fiber";
import Ocean from "@/components/ocean";
import Sky from "@/components/sky";
import Moon from "@/components/moon";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
// import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const { luminanceThreshold, radius } = useControls({
    luminanceThreshold: 0,
    radius: 0.75,
  });

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
      <Moon />
      <Ocean />
      <Sky />
      {/* <OrbitControls makeDefault /> */}
      <ambientLight intensity={Math.PI / 2} color={0xf8f8c5} />
      <directionalLight position={[0, 1, 2]} color="white" />

      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={luminanceThreshold}
          radius={radius}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
