import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";
import StatementOfFaith from "./StatementOfFaith";
import Testimonies from "./Testimonies";
import Feature from "./Feature";

type Props = {};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Feature />
        <StatementOfFaith />
        <Testimonies />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
