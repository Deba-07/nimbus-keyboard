"use client";

import { FC, Fragment } from "react";
import clsx from "clsx";
import { LogoMark } from "@/components/common/LogoMark";

type MarqueeProps = {
  phrases: string[];
  direction?: "left" | "right";
};

const Marquee: FC<MarqueeProps> = ({ phrases, direction = "left" }) => {
  const MarqueeContent = () => (
    <div className="flex items-center bg-gray-200 py-10 whitespace-nowrap">
      {phrases.map((text, i) => (
        <Fragment key={i}>
          <div className="font-bold-slanted px-14 text-[140px] leading-none text-gray-400/80 uppercase md:text-[220px]">
            {text}
          </div>

          {/* logo between words */}
          <LogoMark className="size-28 md:size-36 shrink-0 text-gray-400/80" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <section>
      <div className="relative flex w-full items-center overflow-hidden select-none">
        <div className="relative flex items-center whitespace-nowrap">
          <div
            className={clsx(
              "marquee-track flex animate-marquee",
              direction === "right" && "[animation-direction:reverse]"
            )}
          >
            {/* duplicated content for infinite scroll */}
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
