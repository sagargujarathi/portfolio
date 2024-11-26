"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      className="text-[48px] font-extrabold text-design2-background-light flex flex-nowrap whitespace-nowrap"
      style={{ x }}
    >
      <span className="block">{children} </span>
      <span className="block">{children} </span>
      <span className="block">{children} </span>
      <span className="block">{children} </span>
      <span className="block">{children} </span>
      <span className="block">{children} </span>
    </motion.div>
  );
}

const MarqueeSection = () => {
  return (
    <section
      about="parallax"
      className="flex flex-nowrap overflow-hidden whitespace-nowrap py-12 rotate-[-2deg]"
    >
      <ParallaxText baseVelocity={1}>
        DESIGNER FRONT-END DEVELOPER DISCORD BOT DEVELOPER
      </ParallaxText>
    </section>
  );
};

export default MarqueeSection;
