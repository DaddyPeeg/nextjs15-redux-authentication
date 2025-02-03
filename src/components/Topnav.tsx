"use client";

import React, { useEffect } from "react";
import { ProfilePic } from "./Avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "@/redux/reducers/user-reducers";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { RootState } from "@/redux/store";
import { ExtendedKindeUser } from "@/types";

const links = [
  {
    label: "Lobby",
    href: "/lobby",
  },
  {
    label: "Lessons",
    href: "/lessons",
  },
  {
    label: "CMS",
    href: "/cms",
    admin: true,
  },
];

const Topnav = ({
  user,
  isAdmin,
}: {
  user?: ExtendedKindeUser | undefined;
  isAdmin?: boolean;
}) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(loadUser(user));
  }, []);

  return (
    <div className="w-full py-2 border-b px-4 flex justify-between items-center">
      <span className="font-bold text-2xl leading-5">
        <p>CFC G12</p>
      </span>

      <nav className="flex items-center gap-4">
        {links.map((link, linkKey) => {
          if (!link.admin || (isAdmin && link.admin)) {
            return (
              <Link
                className={cn({
                  "font-bold": pathname === link.href,
                })}
                key={`${link.label}-${linkKey}`}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          }
          return null;
        })}
      </nav>
      <div className="">
        <ProfilePic
          name={user?.id || "test-profile"}
          src={user?.picture || "https://avatar.iran.liara.run/public/6"}
        />
      </div>
    </div>
  );
};

export default Topnav;
