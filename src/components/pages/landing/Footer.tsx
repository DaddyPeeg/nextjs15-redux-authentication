import { IconBrandGmail } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-300 text-black  text-center">
      <div className="bg-neutral-100 py-6 lg:py-12 flex justify-center items-center gap-4 lg:gap-24 flex-col lg:flex-row">
        <h1 className="text-xl lg:text-3xl leading-none font-black ">
          stay
          <br />
          updated
        </h1>
        <a
          href={"https://web.facebook.com/ChristianFellowshipChurchBinalbagan"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center">
            <FaFacebook className="text-black mr-2 shrink-0 size-6" />
            <p className="text-xs lg:text-base">@cfc-himamaylan</p>
          </div>
        </a>
        <a href={"mailto:cfc.himamaylan@gmail.com"}>
          <div className="flex items-center">
            <IconBrandGmail className="text-black mr-2 shrink-0 size-6" />
            <p className="text-xs lg:text-base">cfc@gmail</p>
          </div>
        </a>
      </div>
      <div className=" flex lg:flex-row flex-col items-center  justify-center p-4 gap-2 lg:gap-4">
        <p className="text-xs lg:text-sm">
          Christian Fellowship Church. &copy; {new Date().getFullYear()}
        </p>
        <div className="flex justify-between items-center gap-2  lg:mt-0">
          <Link className="text-xs lg:text-sm ml-2 lg:ml-8" href={"#"}>
            Terms and Conditions
          </Link>
          {"|"}
          <Link className="text-xs lg:text-sm" href={"#"}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
