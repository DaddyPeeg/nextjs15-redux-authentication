import { AnimatedTestimonialsDemo } from "@/components/Testimonies";
import React from "react";

const Testimonies = () => {
  return (
    <section
      data-landing-sections
      id="testimonies"
      className="w-full bg-neutral-100 scroll-mt-[6rem]"
    >
      <AnimatedTestimonialsDemo />
    </section>
  );
};

export default Testimonies;
