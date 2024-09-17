'use client';
import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

const MoonSky = () => {
  const { gl, scene } = useThree();
  const { bgColor } = useControls({
    bgColor: '#030c19',
  });

  useEffect(() => {
    // #01050b
    scene.background = new THREE.Color(bgColor);
  }, []);
  return null;

};

export default MoonSky;
