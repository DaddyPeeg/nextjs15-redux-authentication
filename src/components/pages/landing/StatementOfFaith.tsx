import { ParallaxScrollDemo } from "@/components/ParallaxImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

// const images = [
//   {
//     image: "",
//     x: -8,
//     y: 0,
//     width: `${30 * 16}px`,
//     height: `${20 * 16}px`,
//     zIndex: 1,
//   },
//   {
//     image: "",
//     x: -20,
//     y: -10,
//     width: `${20 * 16}px`,
//     height: `${20 * 16}px`,
//     zIndex: 2,
//   },
//   {
//     image: "",
//     x: -8,
//     y: -25,
//     width: `${38 * 16}px`,
//     height: `${24 * 16}px`,
//     zIndex: 1,
//   },
//   {
//     image: "",
//     x: -35,
//     y: -26,
//     width: `${25 * 16}px`,
//     height: `${20 * 16}px`,
//     zIndex: 1,
//   },
//   {
//     image: "",
//     x: -30,
//     y: -5,
//     width: `${20 * 16}px`,
//     height: `${30 * 16}px`,
//     zIndex: 1,
//   },
// ];

const StatementOfFaith = () => {
  return (
    <section
      data-landing-sections
      id="statement_of_faith"
      className="w-full min-h-screen bg-neutral-100 scroll-mt-[4rem] lg:scroll-mt-[8rem]"
    >
      {/* <AuroraBackground> */}
      <div className="w-full py-8 max-w-7xl gap-2 lg:gap-16 flex px-4 lg:flex-row flex-col mx-auto relative isolate overflow-hidden">
        <div className="h-full absolute w-64 bg-gradient-to-r from-transparent via-neutral-100/50  to-neutral-100 top-0 right-0 z-10 pointer-events-none lg:block hidden " />
        <div className="h-64 absolute  w-[calc(50%+5rem)] bg-gradient-to-b from-transparent to-neutral-100 bottom-0 right-0 z-10 pointer-events-none lg:block hidden " />

        <div className="w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-start">
          <h1 className="text-2xl lg:text-6xl font-bold">Statement of Faith</h1>
          <h3 className="text-base lg:text-xl">
            Our Core Beliefs: A Foundation of Faith
          </h3>
          <div className="mt-4 isolate w-full rounded-3xl relative overflow-hidden ">
            <p className="text-2xl lg:text-4xl font-bold leading-relaxed lg:leading-normal font-caveat ">
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
          <Button
            className="mt-4 mx-auto lg:mx-0 lg:mt-8 flex text-xs lg:text-lg lg:py-8 lg:px-8"
            size={"sm"}
          >
            Learn More
            <ArrowRight className="shrink-0 ml-1" />
          </Button>
        </div>
        <div className="flex-1 absolute isolate -z-[1] lg:block hidden w-full h-full left-1/2 -translate-x-[calc(50%-30rem)]  top-1/2 -translate-y-1/2">
          <ParallaxScrollDemo />
        </div>
      </div>
      {/* </AuroraBackground> */}
      <div className="w-full max-w-7xl mx-auto py-8 lg:py-24 flex flex-col">
        <h1 className="text-center font-bold text-2xl lg:text-5xl bg-black tracking-tighter font-montserrat text-white px-4 py-2 mx-auto">
          {"what's next?"}
        </h1>
        <h3 className="text-center text-lg lg:text-2xl px-8">
          Know more about who Jesus is and tell others about Him.
        </h3>
        <div className="gap-4 flex lg:flex-row flex-col mt-8 px-24">
          <div className="flex-1 flex-col">
            <Button
              className="w-full text-xs lg:text-lg border-primary border-2 bg-transparent"
              variant={"outline"}
            >
              GROW
            </Button>
            <p className="text-center text-xs lg:text-base mt-4 w-full max-w-80 mx-auto">
              Know more about God by accessing helpful materials designed to
              answer your questions and give you a broader sense of who He is.
            </p>
          </div>
          <div className="flex-1 flex-col">
            <Button
              className="w-full text-xs lg:text-lg border-primary border-2 bg-transparent"
              variant={"outline"}
            >
              JOIN A COMMUNITY
            </Button>
            <p className="text-center mt-4 text-xs lg:text w-full max-w-80 mx-auto">
              Join the community and enjoy the fellowship and growth that comes
              with being with other Christ-committed followers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementOfFaith;
