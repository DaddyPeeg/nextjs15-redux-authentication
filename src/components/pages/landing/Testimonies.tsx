import { AnimatedTestimonialsDemo } from "@/components/Testimonies";
import React from "react";

const Testimonies = () => {
  return (
    <section
      data-landing-sections
      id="testimonies"
      className="w-full text-white pt-6 pb-0 lg:pt-24 lg:pb-8 scroll-mt-[6rem] relative overflow-hidden "
    >
      <div className="absolute parallax size-full left-0 top-0 check" />
      <div className="absolute size-full left-0 top-0 bg-transparent backdrop-blur-sm " />
      <div className="w-full py-8 max-w-[110rem] flex px-4 mx-auto relative flex-col ">
        <h1 className="text-3xl lg:text-6xl font-bold text-center">
          Testimonies
        </h1>
        <h3 className="text-base lg:text-xl text-center">
          Stories of Faith, Love, and Transformation
        </h3>
        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};

export default Testimonies;
