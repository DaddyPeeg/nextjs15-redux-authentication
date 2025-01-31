"use client";

import React, { useEffect } from "react";
import { ProfilePic } from "./Avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { logout } from "@/actions/auth-actions";
import { CurrentAuthUserState } from "@/types";
import { useDispatch } from "react-redux";
import { loadUser } from "@/redux/reducers/user-reducers";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Settings",
    href: "/settings",
  },
];

const Topnav = ({ user }: { user: CurrentAuthUserState | undefined }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(loadUser(null));
  };

  useEffect(() => {
    if (user) dispatch(loadUser(user));
  }, []);

  return (
    <div className="w-full py-2 border-b px-4 flex justify-between items-center">
      <ProfilePic
        name={user?.id || "test-profile"}
        src={user?.profilePicUrl || "https://avatar.iran.liara.run/public/6"}
      />
      <nav className="flex items-center gap-4">
        {links.map((link, linkKey) => (
          <Link
            className={cn({
              "font-bold": pathname === link.href,
            })}
            key={`${link.label}-${linkKey}`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Button onClick={handleLogout} size={"sm"} variant={"destructive"}>
          Logout
        </Button>
      </nav>
    </div>
  );
};

export default Topnav;
