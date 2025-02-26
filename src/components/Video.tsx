"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface VideoProps {
  src: string;
  thumbnailQuality?:
    | "default"
    | "hqdefault"
    | "mqdefault"
    | "sddefault"
    | "maxresdefault";
  className?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  thumbnailQuality = "sddefault",
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const getVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(src);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`
    : "";

  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0&mute=1&playlist=${videoId}&enablejsapi=1`
    : "";

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(false);
        }
      },
      { threshold: 0.1 }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-900/50 place-content-center",
        className
      )}
    >
      {!thumbnailUrl && isLoading && (
        <Loader2 className="size-16 mx-auto text-white animate-spin" />
      )}
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt="Video thumbnail"
          fill
          className="object-cover size-full "
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div
        className={cn(
          "absolute top-0 left-0 transition-opacity w-full h-full opacity-0",
          {
            "opacity-100": !isLoading,
          }
        )}
      >
        <iframe
          ref={videoRef}
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ transition: "opacity 0.3s ease-in-out" }}
          className="size-full"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default Video;
