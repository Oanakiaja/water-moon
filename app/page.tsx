"use client";
import { Leva } from "leva";
import Scene from "./Scene";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const App = () => {
  return (
    <main className="w-screen h-screen">
      <div
        className={`
          fixed z-10 transition-opacity duration-300 ease-in-out opacity-10
          hover:opacity-100
          select-none
          `}
      >
        <span>海上升明月 - 祝福大家 中秋节快乐 </span>
      </div>
      <Scene />
      <Leva hidden />
      <div
        className={`
          fixed top-1 right-1 z-10 transition-opacity duration-300 ease-in-out opacity-10
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
