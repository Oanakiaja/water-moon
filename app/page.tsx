"use client";
import { Leva } from "leva";
import Scene from "./Scene";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import { OpacityAtom } from "./store";

const App = () => {
  // const maskRef = useRef<HTMLDivElement>(null);
  const opacity = useAtomValue(OpacityAtom);

  return (
    <main className="w-screen h-screen">
      <div
        className={`
          fixed z-20 transition-opacity duration-300 ease-in-out opacity-10
          hover:opacity-100
          select-none
          `}
      >
        <span>海上升明月 - 祝福大家 中秋节快乐 </span>
      </div>

      <div
        className={`
                fixed z-10
          text-8xl
          lg:text-9xl
          select-none
        flex w-full h-full justify-around items-center
        text-[#ffffff] font-bold
        transition-opacity duration-300 ease-in-out
        `}
        style={{
          opacity: opacity === -1 ? 0 : opacity,
        }}
      >
        <div
          className="transform translate-y-60"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            opacity: 0.8,
          }}
        >
          大江東流
        </div>
        <div
          className="transform -translate-y-60"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            opacity: 0.8,
          }}
        >
          月明中秋
        </div>
      </div>
      <Canvas
        camera={{
          position: [0, 10, 1000],
          fov: 55,
          near: 1,
          far: 20000,
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Scene />
      </Canvas>
      <Leva hidden />
      <div
        className={`
          fixed top-1 right-1 z-20 transition-opacity duration-300 ease-in-out opacity-10
          hover:opacity-100
          select-none
          `}
      >
        <span>
          By Oanakiaja
          <a
            href={"https://twitter.com/oanakiaja"}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogoIcon className="inline-block ml-2" />
          </a>
          <a
            href={"https://github.com/oanakiaja"}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="inline-block ml-2" />
          </a>
        </span>
      </div>
    </main>
  );
};

export default App;
