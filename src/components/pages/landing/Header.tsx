"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaCross, FaPrayingHands, FaSearch } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import SidebarSheet from "@/components/SidebarSheet";
import Logo from "@/components/Logo";
import { AuthSession } from "@/types";

export const navigation = [
  {
    label: "Explore",
    link: "#explore",
    icon: FaSearch,
  },
  {
    label: "Feature",
    link: "#feature",
    icon: FaPrayingHands,
  },
  {
    label: "Statement of Faith",
    link: "#statement_of_faith",
    icon: FaCross,
  },
  {
    label: "Testimonies",
    link: "#testimonies",
    icon: BsChatRightDotsFill,
  },
];

const Header = ({ session }: { session?: AuthSession }) => {
  const disableObserver = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-landing-sections]");
    const header = document.getElementById("header-comp");

    const controller = new AbortController();
    const location = window.location;
    if (location.hash === "" || !location.hash) {
      handleSelectNav("Explore", 0);
    } else {
      const newLocation = navigation.filter(
        (nav) => nav.link === location.hash
      )[0];

      if (newLocation) {
        if (typeof window !== "undefined" && window.location.hash) {
          const element = document.getElementById(
            window.location.hash.substring(1)
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }

        handleSelectNav(
          newLocation.label,
          navigation.findIndex((item) => item.label === newLocation.label)
        );
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (disableObserver.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            const navItem = navigation.find(
              (item) => item.link === `#${sectionId}`
            );
            if (navItem) {
              handleSelectNav(
                navItem.label,
                navigation.findIndex((item) => item.label === navItem.label)
              );
            }
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    let isClassAdded = false;

    const handleScroll = () => {
      const headerHeight = header?.offsetHeight || 0;
      const scrollY = window.scrollY + headerHeight;

      const headerScroll = () => {
        const viewPortHeight = window.innerHeight;
        const shouldAddClass = scrollY >= viewPortHeight;

        if (window.scrollY >= headerHeight) {
          header?.classList.add("backdrop-blur-sm");
        } else {
          header?.classList.remove("backdrop-blur-sm");
        }

        if (shouldAddClass && !isClassAdded) {
          header?.classList.add("bg-neutral-900");
          header?.classList.add("shadow-xl");
          isClassAdded = true;
        } else if (!shouldAddClass && isClassAdded) {
          header?.classList.remove("bg-neutral-900");
          header?.classList.remove("shadow-xl");
          isClassAdded = false;
        }
      };

      headerScroll();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
      if (sections) {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  const handleSelectNav = (str: string, itemNum?: number) => {
    const listItems = document.querySelectorAll("[data-list-item]");
    const selector = document.querySelector("[data-selector]");

    listItems.forEach((li) => {
      if (li.textContent?.includes(str)) {
        if (selector instanceof HTMLElement) {
          selector.style.transform = `translateX(calc(${itemNum}*160px))`;
        }
        li.classList.add("text-black");
      } else {
        li.classList.remove("text-black");
      }
    });
  };

  const selectNav = (str: string, itemNum?: number) => {
    if (!disableObserver.current) {
      disableObserver.current = true;
    }
    setTimeout(() => {
      disableObserver.current = false;
      handleSelectNav(str, itemNum);
    }, 800);
  };

  return (
    <section
      className="fixed z-30 top-0 w-full transition duration-500"
      id="header-comp"
    >
      <header className="flex items-center top-0 w-full py-4 px-4 text-white max-w-7xl mx-auto justify-between ">
        <Logo handleClick={() => selectNav("Explore", 0)} />
        <nav>
          <SidebarSheet session={session} />
          <ul className="hidden relative lg:flex">
            <div
              className="absolute bg-white top-0 left-0 h-full rounded-full -z-10 transition"
              style={{
                width: `calc(100%/${navigation.length})`,
              }}
              data-selector
            />
            {navigation.map((link, index) => {
              const Icon = link.icon;
              return (
                <li
                  className={cn(
                    "text-sm font-thin flex p-2 rounded-full min-w-[10rem] justify-center transition",
                    {
                      "text-black ": index === 0,
                    }
                  )}
                  data-list-item
                  key={`${link.label}-${index}`}
                >
                  <Link
                    className="flex items-center hover:underline"
                    key={`${link.label}-${index}`}
                    href={link.link}
                    onClick={() => selectNav(link.label, index)}
                  >
                    <Icon className="mr-2" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden lg:block">
          {!session ? (
            <>
              <Link href={"/login"} prefetch>
                <Button
                  variant={"ghost"}
                  className="hover:bg-transparent hover:text-white hover:underline"
                >
                  Login
                </Button>
              </Link>
              <Link href={"/signup"} prefetch>
                <Button className="text-white bg-transparent" variant="outline">
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
      </header>
    </section>
  );
};

export default Header;
