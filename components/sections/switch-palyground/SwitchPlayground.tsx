"use client";

import { FC } from "react";
import { FadeIn } from "@/components/common/FadeIn";
import SharedCanvas from "./SharedCanvas";

const switches = [
  { id: "blue", name: "Blue", hex: "#3b82f6" },
  { id: "red", name: "Red", hex: "#ff3b3b" },
  { id: "brown", name: "Brown", hex: "#7a4a2a" },
  { id: "black", name: "Black", hex: "#111111" },
];

const SwitchPlayground: FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <FadeIn>
        <h2
          id="switch-playground"
          className="font-bold-slanted scroll-pt-6 text-6xl uppercase md:text-8xl"
        >
          Craft Your Click
        </h2>

        <p className="mb-10 max-w-4xl text-xl text-black/80">
          The Vapor75 can be customized with one of four premium switch types.
        </p>

        <FadeIn
          targetChildren
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {switches.map((sw) => (
            <SharedCanvas
              key={sw.id}
              colorName={sw.id as any}
              displayName={sw.name}
              hexColor={sw.hex}
            />
          ))}
        </FadeIn>
      </FadeIn>
    </section>
  );
};

export default SwitchPlayground;
