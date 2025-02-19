import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({
  href,
  handleClick,
}: {
  href?: string;
  handleClick?: () => void;
}) => {
  return (
    <Link
      className="flex items-center gap-2 cursor-pointer"
      href={href ?? "/#explore"}
      onClick={handleClick}
    >
      <div className="relative size-10 lg:size-16 rounded-full">
        <Image
          src="/icons/cfc-logo.png"
          alt="g12-icon"
          fill
          priority
          className="size-full object-contain"
        />
      </div>
      <div className="relative size-10 lg:size-16">
        <Image
          src="/icons/g12-logo.png"
          alt="g12-icon"
          fill
          priority
          className="size-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
