"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { motion } from "framer-motion";

import { WeekScheduleComp } from "./Table";
import Video from "./Video";
import { AppleCardsCarouselDemo } from "./AppleCards";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Weekly Schedule",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <WeekScheduleComp />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Capture pictures with AI",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch our AI on YouTube",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 w-full">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 xl:border rounded-md ">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className={cn("h-full w-full", feature.className)}
            >
              {feature.skeleton}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const SkeletonThree = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, []);
  return (
    <div className="relative flex bg-neutral-900 text-white flex-col items-start h-full overflow-hidden">
      <Image
        src={"/feature3.webp"}
        alt="feature2-image"
        fill
        className="size-full object-cover brightness-[0.3] blur-sm"
      />
      <div className="p-2 lg:p-8 w-full z-20">
        <h1 className="text-xl lg:text-4xl font-bold">
          {"Workshops for Spiritual Growth & Empowerment"}
        </h1>
        <h3 className="text-xs lg:text-base">
          {"Equip, Empower, and Grow Through Our Transformative Workshops"}
        </h3>
      </div>
      <div className="p-2 lg:p-8 mt-2 md:mt-0 pt-0 w-full z-20">
        {isClient && (
          <Video src="https://youtu.be/gulSCjasW3g?si=si3U1xe-6NZj_0gT" />
        )}
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col bg-neutral-900 text-white items-start  min-h-[22rem] h-full overflow-hidden">
      <div className="absolute h-full w-32 pointer-events-none bg-gradient-to-r from-neutral-900 to-transparent left-0 z-10" />
      <div className="absolute h-full w-32 pointer-events-none bg-gradient-to-l from-neutral-900 to-transparent right-0 z-10" />
      <Image
        src={"/feature2.webp"}
        alt="feature2-image"
        fill
        className="size-full object-cover brightness-75 blur-sm"
      />
      <div className="z-20 p-2 lg:p-6">
        <h1 className="text-xl lg:text-4xl font-bold">
          {"Be a part of our Cell-Group"}
        </h1>
        <h3 className="text-xs lg:text-base">
          {
            "Meet Our Cell Group Leaders and Experience Life-Changing Faith and Fellowship"
          }
        </h3>
      </div>
      <div className="flex flex-col self-center items-center justify-center check">
        <div className="flex flex-row -ml-20">
          {images.map((image, idx) => {
            const shouldBlur = [0, 0.8, 0.3, 0.6, 0];
            return (
              <motion.div
                variants={imageVariants}
                key={"images-first" + idx}
                style={{
                  rotate: shouldBlur[idx] * 20 - 10,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 sm:h-28 sm:w-28 xl:h-40 xl:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-row">
          {images.map((image, idx) => {
            const shouldBlur = [0, 0.8, 0.3, 0.6, 0];
            return (
              <motion.div
                key={"images-second" + idx}
                style={{
                  rotate: shouldBlur[idx] * 20 - 10,
                }}
                variants={imageVariants}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 sm:h-28 sm:w-28 xl:h-40 xl:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex flex-col items-start h-full overflow-hidden">
      <div className="p-2 lg:p-8 z-20">
        <h1 className="text-xl lg:text-4xl font-bold">{"Upcoming Events"}</h1>
        <h3 className="text-xs lg:text-base">
          {
            "Look forward to impactful gatherings that connect and reach more people with God’s love."
          }
        </h3>
      </div>
      <AppleCardsCarouselDemo />
    </div>
  );
};
