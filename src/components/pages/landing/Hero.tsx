"use client";

import ImageLoading from "@/components/Image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Sunday Worship Service",
    description:
      "Join us for a time of worship, prayer, and an inspiring message every Sunday.",
    image:
      "https://ik.imagekit.io/k4leido5/IMG_20241230_090303_027.jpg?updatedAt=1738818443496",
  },
  {
    title: "Bible Study Fellowship",
    description:
      "Deepen your faith through engaging discussions and biblical teachings every Wednesday.",
    image:
      "https://ik.imagekit.io/k4leido5/dji_fly_20250126_111056_37_1737862046642_photo_optimized.jpg?updatedAt=1738818445215",
  },
  {
    title: "Community Outreach",
    description:
      "Serve and bless the community through food drives, visitations, and outreach programs.",
    image:
      "https://ik.imagekit.io/k4leido5/DJI_0203.jpg?updatedAt=1738818445225",
  },
  {
    title: "Youth Ministry Night",
    description:
      "An exciting time of fellowship, games, and spiritual growth for young believers.",
    image:
      "https://ik.imagekit.io/k4leido5/IMG_20241109_134803_722.jpg?updatedAt=1738818443926",
  },
  {
    title: "Prayer Meeting",
    description:
      "A gathering to seek God's presence and intercede for our families, church, and community.",
    image:
      "https://ik.imagekit.io/k4leido5/IMG_20240725_105427_108.jpg?updatedAt=1738818442788",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value?.split("-");
    setCurrentSlide(parseInt(val[1]));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= slides.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prev) => {
  //     if (prev <= 0) {
  //       return slides.length - 1;
  //     }
  //     return prev - 1;
  //   });
  // };

  useEffect(() => {
    preloadImages(slides.map((slide) => slide.image));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="explore"
      data-landing-sections
      className="h-screen relative w-full shadow-lg"
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ filter: "brightness(0)" }}
          animate={{ filter: "brightness(0.75)" }}
          exit={{ filter: "brightness(0)" }}
          transition={{
            duration: 1,
          }}
          key={slide.title}
          className="relative h-full"
        >
          <ImageLoading key={slide.title} alt={slide.title} src={slide.image} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20">
        <div className="radio-input">
          {slides.map((items, index) => {
            return (
              <label key={`${items.title}-${index}`} style={{ flex: 1 }}>
                <input
                  value={`slide-${index}`}
                  name="value-radio"
                  type="radio"
                  onChange={handleChangeItem}
                  style={{ display: "none" }}
                />
              </label>
            );
          })}
          <span
            className={cn("selection")}
            style={{
              width: `calc((var(--container_width) - (var(--gap_size) * ${
                slides.length - 1
              })) / ${slides.length})`,
              transform: `translateX(calc(((var(--container_width) - (var(--gap_size) * ${
                slides.length - 1
              })) / ${slides.length} + var(--gap_size)) * ${currentSlide}))`,
            }}
          />
        </div>
      </div>
      <div className="absolute  text-white p-2 lg:p-14 top-[calc(50%+12rem)] -translate-y-1/2 rounded-r-xl rounded-br-xl">
        <div className=" rounded-xl p-4 md:p-8 lg:p-14">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                initial={{
                  translateY: 50,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                }}
                exit={{
                  translateY: 50,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="text-2xl sm:text-5xl lg:text-7xl tracking-tighter leading-tight text-nowrap font-bold specialtext font-montserrat"
                key={slide.title}
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                className="lg:text-lg w-full max-w-[25rem] lg:max-w-[40rem]"
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.5,
                  },
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                key={slide.title}
              >
                {slide.description.split(" ").map((word, index) => (
                  <motion.span
                    key={`des-${index}`}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 1.5 + 0.02 * index,
                    }}
                    className="inline-block "
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
