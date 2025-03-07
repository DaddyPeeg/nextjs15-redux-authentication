"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageLoading: React.FC<ImageProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full h-full relative">
      {loading && (
        <div className="size-full bg-neutral-700 animate-pulse transition z-50" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover size-full brightness-75 bg-transparent"
        onLoad={() => {
          handleImageLoad();
        }}
        priority
      />
    </div>
  );
};

export default ImageLoading;
