"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const ImageWithLoader: React.FC<ImageProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full h-full relative">
      {loading && <div className="size-full loader-div" />}
      <Image
        src={src}
        alt={alt}
        style={{
          opacity: loading ? 0 : 1,
        }}
        fill
        className="object-cover size-full brightness-75 bg-transparent transition-opacity"
        onLoad={() => {
          handleImageLoad();
        }}
        priority
      />
    </div>
  );
};

export default ImageWithLoader;
