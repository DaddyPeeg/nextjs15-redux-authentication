"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

import { links } from "./Topnav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ProfilePic } from "./Avatar";
import { hasPermission } from "@/lib/RBAC";

const SidebarPrivateSheet = () => {
  const pathname = usePathname();
  const session = useSelector((state: RootState) => state.currentUser.data);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = () => {
    setIsOpen(false);
  };

  const handleOpenChange = (e: boolean) => {
    setIsOpen(e);
  };
  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger className="lg:hidden block">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="w-full sm:w-[32rem] z-50 h-full bg-neutral-950 border-none text-white flex flex-col"
      >
        <SheetHeader className="">
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col gap-2">
            {links.map((navitem, key) => {
              if (
                !navitem.admin ||
                (navitem.label === "Lessons" &&
                  hasPermission(session!, "view:lessons")) ||
                (navitem.label === "CMS" && hasPermission(session!, "view:cms"))
              )
                return (
                  <Link href={navitem.href} key={`navitem-${key}`}>
                    <li
                      className={cn(
                        "text-neutral-500 text-sm flex p-2 bg-neutral-900 rounded-md items-center",
                        {
                          "text-neutral-50 bg-neutral-700 cursor-pointer":
                            pathname === navitem.href,
                        }
                      )}
                      onClick={handleSelect}
                    >
                      {navitem.label}
                    </li>
                  </Link>
                );
            })}
            <div className="mt-8 ml-auto flex items-center">
              <div className="flex flex-col pr-3 mr-2 border-r">
                <p className="text-xs">{session?.email}</p>
                <p className="text-sm self-end capitalize text-neutral-400">
                  {session?.role}
                </p>
              </div>

              <ProfilePic
                closeNavOnSelect={handleSelect}
                name={session?.id || "test-profile"}
                src={
                  session?.picture || "https://avatar.iran.liara.run/public/6"
                }
              />
            </div>
          </ul>
        </nav>
        <SheetDescription className="text-neutral-600 mt-auto">
          Navigate through our church community with ease. Explore our beliefs,
          ministries, and events, join our worship services, and stay connected
          with faith-filled resources.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarPrivateSheet;
