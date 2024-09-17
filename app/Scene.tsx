"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Ocean from "@/components/ocean";
import Sky from "@/components/sky";
import Moon from "@/components/moon";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
import { getDefaultStore } from "jotai";
import { OpacityAtom } from "./store";
// import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const { luminanceThreshold, radius } = useControls({
    luminanceThreshold: 0,
    radius: 0.75,
  });

  useFrame(() => {
    const opacity = getDefaultStore().get(OpacityAtom);
    if (opacity === -1) {
      getDefaultStore().set(OpacityAtom, 100);
    }
    if (opacity === 0) {
      return;
    }
    setTimeout(() => {
      getDefaultStore().set(OpacityAtom, 0);
    }, 2000);
  });

  return (
    <>
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
    </>
  );
};

export default Scene;
