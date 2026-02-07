"use client";

import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { Switch, SOUND_MAP } from "@/components/common/Switch";
import gsap from "gsap";
import clsx from "clsx";
import { LuVolume2 } from "react-icons/lu";

type Props = {
  colorName: "red" | "brown" | "blue" | "black";
  displayName: string;
  hexColor: string;
};

const bgColorMap = {
  blue: "bg-sky-950",
  red: "bg-red-950",
  brown: "bg-amber-950",
  black: "bg-gray-900",
};

export default function SharedCanvas({
  colorName,
  displayName,
  hexColor,
}: Props) {
  const handleSound = () => {
    const selectedSound = gsap.utils.random(SOUND_MAP[colorName]);
    const audio = new Audio(selectedSound);
    audio.volume = 0.6;
    audio.play();
  };

  return (
    <div className="group relative min-h-105 overflow-hidden rounded-3xl select-none">
      {/* button */}
      <button
        onClick={handleSound}
        className="font-bold-slanted absolute bottom-0 left-0 z-10 flex items-center gap-3 p-6 text-4xl text-white uppercase"
      >
        {displayName} <LuVolume2 />
      </button>

      {/* 3D */}
      <Canvas camera={{ position: [1.5, 2, 0], fov: 7 }}>
        <Stage adjustCamera intensity={0.5} shadows={"contact"} environment="city">
          <Switch
            rotation={[0, Math.PI / 4, 0]}
            color={colorName}
            hexColor={hexColor}
          />
        </Stage>
      </Canvas>

      {/* background typography */}
      <div
        className={clsx(
          "absolute inset-0 -z-10 grid place-items-center text-8xl uppercase font-black-slanted",
          bgColorMap[colorName]
        )}
      >
        <svg className="pointer-events-none h-auto w-full" viewBox="0 0 75 100">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={18}
            className="fill-white/30 mix-blend-overlay group-hover:fill-white transition-all duration-700"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <tspan key={i} x={`${(i + 1) * 10}%`} dy={i === 0 ? -40 : 14}>
                {colorName}
                {colorName}
                {colorName}
              </tspan>
            ))}
          </text>
        </svg>
      </div>
    </div>
  );
}
