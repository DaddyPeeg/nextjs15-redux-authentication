import { FeaturesSectionDemo } from "@/components/Features";
import React from "react";

const Feature = () => {
  return (
    <section
      data-landing-sections
      id="feature"
      className="bg-neutral-100 w-full scroll-mt-[6rem]"
    >
      <h1 className="w-full max-w-7xl mx-auto text-center text-2xl lg:text-4xl leading-snug py-6 lg:py-12 font-montserrat tracking-tight px-3">
        Whoever you are, wherever life has taken you, <br />
        you belong here.
      </h1>
      <div className="w-full max-w-[110rem] flex px-4 mx-auto relative ">
        <FeaturesSectionDemo />
      </div>
      <h1 className="text-center w-full max-w-6xl mx-auto text-4xl lg:text-6xl leading-normal font-caveat py-4 lg:py-24 tracking-tight lg:leading-normal">
        Come as you are. Find hope, love, and purpose in
        <br />
        <span className="bg-black text-white px-4">Christ.</span>
      </h1>
    </section>
  );
};

export default Feature;
