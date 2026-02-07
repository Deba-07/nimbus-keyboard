import { FC } from "react";
import clsx from "clsx";
import { FadeIn } from "@/components/common/FadeIn";

type BentoItem = {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  description: string;
  size: "Small" | "Medium" | "Large";
};

type BentoBoxProps = {
  heading: string;
  items: BentoItem[];
};

type BentoBoxItemProps = {
  item: BentoItem;
};

function BentoBoxItem({ item }: BentoBoxItemProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        item.size === "Small" && "md:col-span-2",
        item.size === "Medium" && "md:col-span-3",
        item.size === "Large" && "md:col-span-4",
      )}
    >
      <img
        src={item.image.src}
        alt={item.image.alt ?? ""}
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-black" />

      {/* text */}
      <div
        className="absolute bottom-0 left-0 max-w-xl p-6 text-white"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
      >
        <p className="text-2xl leading-snug font-semibold">{item.title}</p>
        <p className="text-lg mt-1 opacity-90">{item.description}</p>
      </div>
    </div>
  );
}

const BentoBox: FC<BentoBoxProps> = ({ heading, items }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <FadeIn>
        <h2
          id="features"
          className="font-bold-slanted mb-8 text-6xl uppercase md:text-8xl"
        >
          {heading}
        </h2>
      </FadeIn>

      <FadeIn
        targetChildren
        className="grid auto-rows-[360px] grid-cols-1 gap-4 md:grid-cols-6"
      >
        {items.map((item, index) => (
          <BentoBoxItem key={index} item={item} />
        ))}
      </FadeIn>
    </section>
  );
};

export default BentoBox;
