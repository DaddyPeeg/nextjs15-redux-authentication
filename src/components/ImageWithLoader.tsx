"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageWithLoader: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={cn("w-full h-full relative", className)}>
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
