"use client";

import React from "react";
import { ProfilePic } from "./Avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { hasPermission } from "@/lib/RBAC";
import Logo from "./Logo";
import { Menu } from "lucide-react";

const links = [
  {
    label: "Lobby",
    href: "/lobby",
  },
  {
    label: "Ministries",
    href: "/ministries",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Lessons",
    href: "/lessons",
    admin: true,
  },
  {
    label: "CMS",
    href: "/cms",
    admin: true,
  },
];

const Topnav = () => {
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.currentUser.data);

  return (
    <section className="w-full p-4 bg-neutral-900 sticky z-30 top-0">
      <div className="flex justify-between items-center mx-auto w-full max-w-7xl">
        <Logo href={"/lobby"} />
        <Menu className="text-white block lg:hidden" />
        <div className="items-center gap-12 hidden lg:flex">
          <nav className="flex items-center text-white gap-8">
            {links.map((link, linkKey) => {
              if (
                !link.admin ||
                (link.label === "CMS" && hasPermission(user!, "view:cms")) ||
                (link.label === "Lessons" &&
                  (hasPermission(user!, "view:cms") ||
                    hasPermission(user!, "view:lessons")))
              ) {
                return (
                  <Link
                    className={cn("text-neutral-500 hover:underline", {
                      "text-neutral-50 hover:no-underline":
                        pathname === link.href,
                    })}
                    prefetch
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
      </div>
    </section>
  );
};

export default Topnav;
