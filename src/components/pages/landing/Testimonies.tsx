import { AnimatedTestimonialsDemo } from "@/components/Testimonies";
import React from "react";

const Testimonies = () => {
  return (
    <section
      data-landing-sections
      id="testimonies"
      className="w-full bg-neutral-100 scroll-mt-[6rem]"
    >
      <div className="w-full py-24 max-w-[110rem] flex px-4 mx-auto relative flex-col ">
        <h1 className="text-6xl font-bold text-center">Testimonies</h1>
        <h3 className="text-xl text-center">
          Stories of Faith, Love, and Transformation
        </h3>
        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};

export default Testimonies;
