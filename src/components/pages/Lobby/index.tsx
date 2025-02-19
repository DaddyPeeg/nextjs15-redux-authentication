import React from "react";

const Lobby = () => {
  return (
    <section className="flex-1">
      <div className="px-4 max-w-7xl mx-auto h-[200rem]">
        <h1 className="font-montserrat mt-16 tracking-tighter font-bold lg:text-7xl text-4xl text-center text-neutral-600">
          Welcome to <br />
          <span className="text-neutral-800">Christian Fellowship Church</span>
        </h1>
        <p className="text-center mt-4 text-base lg:text-lg leading-tight">
          We{"’"}re so glad you{"’"}re here! May this be a place of peace,
          faith, and fellowship. <br /> Join us in worship and community as we
          grow together in Christ.
        </p>
        <p className="text-center italic mt-4 text-sm lg:text-base">
          "For where two or three gather in my name, there am I with them."{" "}
          {"–"} Matthew 18:20
        </p>
      </div>
    </section>
  );
};

export default Lobby;
