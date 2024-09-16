import { useRef, useMemo } from "react";
import { useFrame, useLoader, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three-stdlib";

extend({ Water });

function Ocean() {
  const ref = useRef<any>();

  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 256,
      textureHeight: 256,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor:  0xffffff,
      waterColor: 0x0b1d1d,
      distortionScale: 3.7,
      fog: true,
      // format: gl
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

export default Ocean;
