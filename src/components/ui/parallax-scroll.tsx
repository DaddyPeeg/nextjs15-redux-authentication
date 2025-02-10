"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageWithLoader from "../ImageWithLoader";
import { useEffect, useRef, useState } from "react";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<[`${number}px start`, "end end"]>([
    "200px start",
    "end end",
  ]);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const distanceFromTop = rect.top + window.scrollY;
      setOffset([`${distanceFromTop}px start`, "end end"]);
    }
  }, []);

  console.log(offset);

  const { scrollYProgress } = useScroll({
    offset: offset,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("items-start overflow-y-visible w-full", className)}
      ref={containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-0 px-0 group">
        <div className="grid gap-10 ">
          {firstPart.map((el, idx) => {
            const shouldBlur = [1, 2].includes(idx);
            return (
              <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                <div
                  className={cn(
                    "h-80 w-full object-cover object-left-top rounded-lg overflow-hidden gap-10 !m-0 !p-0 transition duration-500 group-hover:blur-sm group-hover:hover:blur-none hover:scale-105",
                    { "blur-sm": shouldBlur }
                  )}
                >
                  <ImageWithLoader src={el} alt={`${el}1-${idx}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => {
            const shouldBlur = [0, 2, 3].includes(idx);
            return (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <div
                  className={cn(
                    "h-80 w-full object-cover object-left-top rounded-lg overflow-hidden gap-10 !m-0 !p-0 transition duration-500 group-hover:blur-sm group-hover:hover:blur-none hover:scale-105",
                    { "blur-sm": shouldBlur }
                  )}
                >
                  <ImageWithLoader src={el} alt={`${el}1-${idx}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => {
            const shouldBlur = [0, 1, 3].includes(idx);
            return (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <div
                  className={cn(
                    "h-80 w-full object-cover object-left-top rounded-lg overflow-hidden gap-10 !m-0 !p-0 transition duration-500 group-hover:blur-sm group-hover:hover:blur-none hover:scale-105",
                    { "blur-sm": shouldBlur }
                  )}
                >
                  <ImageWithLoader src={el} alt={`${el}1-${idx}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
