import { IconBrandGmail } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-300 text-black  text-center">
      <div className="bg-neutral-100 py-12 flex justify-center items-center gap-24">
        <h1 className="text-3xl leading-none font-black ">
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
            <p>@cfc-himamaylan</p>
          </div>
        </a>
        <a href={"mailto:cfc.himamaylan@gmail.com"}>
          <div className="flex items-center">
            <IconBrandGmail className="text-black mr-2 shrink-0 size-6" />
            <p>cfc@gmail</p>
          </div>
        </a>
      </div>
      <div className=" flex items-center justify-center p-4 gap-4">
        <p className="text-sm">Christian Fellowship Church. &copy; 2025</p>
        <Link className="text-sm ml-8" href={"#"}>
          Terms and Conditions
        </Link>
        {"|"}
        <Link className="text-sm" href={"#"}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
