import ImageWithLoader from "@/components/ImageWithLoader";
import { ParallaxScrollDemo } from "@/components/ParallaxImage";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const images = [
  {
    image: "",
    x: -8,
    y: 0,
    width: `${30 * 16}px`,
    height: `${20 * 16}px`,
    zIndex: 1,
  },
  {
    image: "",
    x: -20,
    y: -10,
    width: `${20 * 16}px`,
    height: `${20 * 16}px`,
    zIndex: 2,
  },
  {
    image: "",
    x: -8,
    y: -25,
    width: `${38 * 16}px`,
    height: `${24 * 16}px`,
    zIndex: 1,
  },
  {
    image: "",
    x: -35,
    y: -26,
    width: `${25 * 16}px`,
    height: `${20 * 16}px`,
    zIndex: 1,
  },
  {
    image: "",
    x: -30,
    y: -5,
    width: `${20 * 16}px`,
    height: `${30 * 16}px`,
    zIndex: 1,
  },
];

const StatementOfFaith = () => {
  return (
    <section
      data-landing-sections
      id="statement_of_faith"
      className="w-full min-h-screen bg-neutral-100 scroll-mt-[6rem]"
    >
      <AuroraBackground>
        <div className="w-full py-24 max-w-[110rem] gap-16 flex px-4 mx-auto relative">
          <div className="bg-neutral-900/30 w-[60rem] h-full absolute blur-[10rem] rounded-full right-0" />
          <div className="w-full max-w-xl">
            <h1 className="text-6xl font-bold">Statement of Faith</h1>
            <h3 className="text-xl">Our Core Beliefs: A Foundation of Faith</h3>

            <div className="mt-4 isolate w-full rounded-3xl relative overflow-hidden ">
              {/* <div className="absolute h-full w-full -z-[1] top-0 left-0">
                <ImageWithLoader src="/stone-tablet.png" alt="stone-tablet" />
              </div> */}
              <p className="text-4xl font-bold leading-relaxed font-caveat ">
                We believe in{" "}
                <span className="text-neutral-500 font-bold">one God</span>,
                eternally existing in three persons:{" "}
                <span className="text-neutral-500 font-bold">
                  Father, Son, and Holy Spirit. Jesus Christ is God,
                </span>{" "}
                the eternal Son, who became man, lived a sinless life, was{" "}
                <span className="text-neutral-500 font-bold">
                  crucified, rose again, and will return in glory.
                </span>{" "}
                Salvation is by grace alone, through faith alone, in Christ
                alone—not by works but as a gift to those who{" "}
                <span className="text-neutral-500 font-bold">
                  repent and believe in Him as Lord and Savior.
                </span>{" "}
                The Holy Spirit indwells believers, empowering them to live holy
                lives. We affirm the{" "}
                <span className="text-neutral-500 font-bold">
                  resurrection of the dead, final judgment, and eternal life for
                  the saved.
                </span>{" "}
                As the body of Christ, we seek to glorify God through love,
                holiness, and obedience to His Word.
              </p>
            </div>
            <Button className="mt-8 flex text-lg py-8" size={"lg"}>
              Learn More
              <ArrowRight className="shrink-0 ml-1" />
            </Button>
          </div>
          <div className="flex-1 relative isolate">
            <ParallaxScrollDemo />
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default StatementOfFaith;
