import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";
import StatementOfFaith from "./StatementOfFaith";

type Props = {};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <StatementOfFaith />
        <section
          data-landing-sections
          id="testimonies"
          className="h-screen w-full bg-red-500"
        ></section>
        <section
          data-landing-sections
          id="prayer_request"
          className="h-screen w-full bg-green-500"
        ></section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
