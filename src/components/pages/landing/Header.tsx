"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCross, FaPrayingHands, FaSearch } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { cn, debounce } from "@/lib/utils";
import Image from "next/image";

const navigation = [
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

const Header = () => {
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
    };
  }, []);

  const handleSelectNav = (str: string, itemNum?: number) => {
    const listItems = document.querySelectorAll("[data-list-item]");
    const selector = document.querySelector("[data-selector]");

    listItems.forEach((li) => {
      if (li.textContent?.includes(str)) {
        if (selector instanceof HTMLElement) {
          selector.style.transform = `translateX(calc(${itemNum}*192px))`;
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
      className="fixed z-[999] left-1/2 backdrop-blur-sm -translate-x-1/2 top-0 w-full transition-colors duration-500"
      id="header-comp"
    >
      <header className=" flex items-center top-0 w-full py-6 px-4 z-10 text-white max-w-[110rem] mx-auto justify-between ">
        <Link
          className="flex items-center gap-2 cursor-pointer"
          href={"/#explore"}
          onClick={() => selectNav("Explore", 0)}
        >
          <div className="relative size-16 rounded-full">
            <Image
              src="/icons/cfc-logo.png"
              alt="g12-icon"
              fill
              priority
              className="size-full object-contain"
            />
          </div>
          <div className="relative size-16">
            <Image
              src="/icons/g12-logo.png"
              alt="g12-icon"
              fill
              priority
              className="size-full object-contain"
            />
          </div>
        </Link>
        <nav>
          <ul className="flex relative">
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
                    "text-lg font-thin flex p-2 rounded-full min-w-[12rem] justify-center transition",
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
        <div>
          <Button
            size={"lg"}
            variant={"ghost"}
            className="hover:bg-transparent hover:text-white hover:underline"
          >
            Login
          </Button>
          <Button
            className="text-white bg-transparent"
            size="lg"
            variant="outline"
          >
            Be a member
          </Button>
        </div>
      </header>
    </section>
  );
};

export default Header;
