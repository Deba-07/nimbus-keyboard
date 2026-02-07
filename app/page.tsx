import BentoBox from "@/components/sections/bento-box/BentoBox";
import ColorChanger from "@/components/sections/color-changer/ColorChanger";
import Hero from "@/components/sections/hero/Hero";
import Marquee from "@/components/sections/marquee/Marquee";
import PurchaseButton from "@/components/sections/purchase-button/PurchaseButton";
import SwitchPlayground from "@/components/sections/switch-palyground/SwitchPlayground";

const page = () => {
  return (
    <>
      <Hero
        heading={["Built for", "the bold"]}
        subHeading="Typing reinvented"
        body="Fall in love with the craft thanks to our professional grade keycaps and switches."
        ctaText="Buy vapor75"
      />

      <BentoBox
        heading="VAPOR75 FEATURES"
        items={[
          {
            image: { src: "/images/render_6.png" },
            title: "Full aluminum case.",
            description:
              "Premium materials for satisfying heft and durability.",
            size: "Large",
          },
          {
            image: { src: "/images/render_5.png" },
            title: "Interchangeable knob system.",
            description:
              "Customize your control dial to click, scroll, or press.",
            size: "Small",
          },
          {
            image: { src: "/images/render_2.png" },
            title: "Cross Platform.",
            description:
              "Mac, Windows, or Linux. Nimbus adapts to your workflow.",
            size: "Medium",
          },
          {
            image: { src: "/images/render_9.png" },
            title: "Hot-Swappable Switches.",
            description: "Change your feel without any soldering.",
            size: "Medium",
          },
          {
            image: { src: "/images/render_11.png" },
            title: "Custom Nimbus Keycap Profile.",
            description: "Designed for long coding sessions.",
            size: "Small",
          },
          {
            image: { src: "/images/render_3.png" },
            title: "E-Ink Display Screen.",
            description: "Show battery, status, or a custom design.",
            size: "Large",
          },
        ]}
      />

      <Marquee
        phrases={[
          "QUALITY MATERIALS",
          "PRECICION CRAFTING",
          "JOYFUL EXPERIENCE",
        ]}
        direction="left"
      />

      <SwitchPlayground />

      <Marquee
        phrases={[
          "QUALITY MATERIALS",
          "PRECICION CRAFTING",
          "JOYFUL EXPERIENCE",
        ]}
        direction="left"
      />

      <ColorChanger
        heading="Custom Keycaps"
        description="Choose from different keycap materials and see how they transform your keyboard's appearance in real-time."
      />

      <Marquee
        phrases={[
          "QUALITY MATERIALS",
          "PRECICION CRAFTING",
          "JOYFUL EXPERIENCE",
        ]}
        direction="left"
      />

      <PurchaseButton />
    </>
  );
};

export default page;
