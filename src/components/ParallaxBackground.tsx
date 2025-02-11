"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ParallaxBackground = ({ src }: { src?: string }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Image
      src={src || "/testimonial.webp"}
      alt="testimonial-bg"
      fill
      quality={80}
      className="w-full h-screen object-cover translate-y-0 will-change-transform grayscale brightness-[0.4] antialiased"
      style={{ transform: `translateY(${offsetY}px)` }}
    />
  );
};

export default ParallaxBackground;
