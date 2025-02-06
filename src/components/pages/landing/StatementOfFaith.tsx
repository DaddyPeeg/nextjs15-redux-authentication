import ImageWithLoader from "@/components/ImageWithLoader";
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
      className="w-full py-24 "
    >
      <div className="w-full max-w-[120rem] gap-16 flex px-4 mx-auto relative">
        <div className="w-full max-w-xl">
          <h1 className="text-6xl font-bold">Statement of Faith</h1>
          <p className="text-3xl leading-relaxed mt-4">
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
              resurrection of the dead, final judgment, and eternal life for the
              saved.
            </span>{" "}
            As the body of Christ, we seek to glorify God through love,
            holiness, and obedience to His Word.
          </p>
          <Button className="mt-8 flex text-lg py-8" size={"lg"}>
            Learn More
            <ArrowRight className="shrink-0 ml-1" />
          </Button>
        </div>
        <div className="flex-1 relative isolate">
          <div className="-z-[1] bg-neutral-500 h-[30rem] w-[30rem] left-1/2 -translate-x-[calc(50%+10rem)] top-1/2 -translate-y-1/2 absolute blur-[10rem]" />
          {images.map((img, index) => {
            return (
              <div
                key={`image-${index}`}
                className="rounded-lg shadow-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden blured-image"
                style={{
                  width: img.width,
                  height: img.height,
                  transform: `translateX(${img.x}rem) translateY(${img.y}rem)`,
                  zIndex: `${img.zIndex}`,
                }}
              >
                <ImageWithLoader
                  src={
                    img.image ||
                    `https://picsum.photos/seed/picsum/${parseFloat(
                      img.width.replace("px", "")
                    )}/${parseFloat(
                      img.height.replace("px", "")
                    )}?random=${index}`
                  }
                  alt={img.image ?? `hello-image-${index}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatementOfFaith;
