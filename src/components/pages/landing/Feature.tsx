import { FeaturesSectionDemo } from "@/components/Features";
import React from "react";

const Feature = () => {
  return (
    <section
      data-landing-sections
      id="feature"
      className="bg-neutral-100 w-full scroll-mt-[6rem]"
    >
      <div className="w-full py-24 max-w-[110rem] flex px-4 mx-auto relative ">
        <FeaturesSectionDemo />
      </div>
    </section>
  );
};

export default Feature;
