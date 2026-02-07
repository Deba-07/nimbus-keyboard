"use client";

import { FC, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader } from "@/components/common/Loader";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function LoaderWrapper() {
  const { active } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (active) setIsLoading(true);
    else {
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <div
      className={clsx(
        "motion-safe:transition-opacity motion-safe:duration-700",
        isLoading ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <Loader />
    </div>
  );
}

type HeroProps = {
  heading: string[];
  subHeading: string;
  body: string;
  ctaText: string;
};

const Hero: FC<HeroProps> = ({ heading, body, ctaText, subHeading }) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const split = SplitText.create(".hero-heading", {
        type: "chars,lines",
        mask: "lines",
      });

      const tl = gsap.timeline({ delay: 4.2 });

      tl.from(split.chars, {
        opacity: 0,
        y: -120,
        ease: "back",
        duration: 0.4,
        stagger: 0.07,
      }).to(".hero-body", {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.fromTo(
        ".hero-scene",
        {
          background:
            "linear-gradient(to bottom, #000000, #0f172a, #062f4a, #7fa0b9)",
        },
        {
          background: "#ffffff",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "50% bottom",
            scrub: 1,
          },
        },
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".hero-heading, .hero-body", { opacity: 1 });
    });
  });

  return (
    <section className="hero relative h-dvh text-white motion-safe:h-[300vh]">
      <div className="hero-scene pointer-events-none sticky top-0 h-dvh w-full">
        <Canvas shadows="soft">
          <Scene />
        </Canvas>
      </div>

      <LoaderWrapper />

      <div className="hero-content absolute inset-x-0 top-0 h-dvh px-6">
        <h1 className="font-black-slanted absolute top-30 left-10 text-6xl uppercase sm:text-7xl lg:text-8xl">
          {heading.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="hero-body absolute right-10 bottom-26 mt-6 max-w-md opacity-0">
          <h2 className="font-bold-slanted mb-2 text-4xl uppercase lg:text-6xl">
            {subHeading}
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-white/90 font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.75)]">{body}</p>

          <button className="font-bold-slanted group flex w-fit items-center gap-1 rounded bg-[#01A7E1] px-4 py-2 text-2xl uppercase transition">
            {ctaText}
            <span className="transition group-hover:translate-x-1">{">"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
