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
import { ArrowRight, Menu } from "lucide-react";
import { navigation } from "./pages/landing/Header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { AuthSession } from "@/types";

const SidebarSheet = ({ session }: { session?: AuthSession }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      return window.location.hash;
    }
    return "#explore";
  });

  const handleSelect = (text: string) => {
    setCurrent(text);
    setIsOpen(false);
  };

  const handleOpenChange = (e: boolean) => {
    setIsOpen(e);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger className="lg:hidden block">
        <Menu />
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
            {navigation.map((navitem, key) => {
              const Icon = navitem.icon;
              return (
                <Link href={navitem.link} key={`navitem-${key}`}>
                  <li
                    className={cn(
                      "text-neutral-500 text-sm flex p-2 bg-neutral-900 rounded-md items-center",
                      {
                        "text-neutral-50 bg-neutral-700 cursor-pointer":
                          current === navitem.link,
                      }
                    )}
                    onClick={() => handleSelect(navitem.link)}
                  >
                    <Icon className="mr-2" />
                    {navitem.label}
                  </li>
                </Link>
              );
            })}
            <div className="flex items-center gap-2 mt-8 justify-end">
              {!session ? (
                <>
                  <Link href={"/login"}>
                    <Button variant={"secondary"} className="min-w-32 max-w-40">
                      Login
                    </Button>
                  </Link>
                  <Link href={"/signup"}>
                    <Button
                      variant={"outline"}
                      className="min-w-32 bg-transparent max-w-40"
                    >
                      Be a member
                    </Button>
                  </Link>
                </>
              ) : (
                <Link href={"/lobby"} prefetch>
                  <Button variant={"outline"} className="bg-transparent ">
                    Go to Lobby
                    <ArrowRight className="ml-2 shrink-0 size-4" />
                  </Button>
                </Link>
              )}
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

export default SidebarSheet;
