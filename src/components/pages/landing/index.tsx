import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";
import StatementOfFaith from "./StatementOfFaith";
import Testimonies from "./Testimonies";
import Feature from "./Feature";
import { AuthSession } from "@/types";

type Props = {
  session?: AuthSession;
};

const LandingPage = ({ session }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header session={session} />
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
