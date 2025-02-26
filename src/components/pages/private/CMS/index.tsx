"use client";

import Image from "next/image";
import React, { JSX, useState } from "react";

function CMS({
  fileManager,
  imageUploader,
}: {
  fileManager: JSX.Element;
  imageUploader: JSX.Element;
}) {
  const [activeTab, setActiveTab] = useState<"files" | "slider">("files");

  return (
    <div className="bg-gray-100">
      <div className="w-full p-4 relative isolate">
        <Image
          src={"/cms-hero.webp"}
          alt="cms-hero-image"
          fill
          priority
          className="size-full object-cover -z-[1]"
        />
        <div
          className="bg-gradient-to-l
from-[#fb7185]
via-[#a21caf]
to-[#6366f1] opacity-70 mix-blend-color-burn backdrop-blur-md absolute inset-0 -z-[1]"
        />
        <div className="max-w-7xl mx-auto py-12 z-[10]">
          <h1 className="text-3xl font-bold text-white">CMS Dashboard</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 mb-2">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("files")}
                className={`${
                  activeTab === "files"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                File Manager
              </button>
              <button
                onClick={() => setActiveTab("slider")}
                className={`${
                  activeTab === "slider"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Bulletin Manager
              </button>
            </nav>
          </div>
          {activeTab === "files" ? fileManager : imageUploader}
        </div>
      </div>
    </div>
  );
}

export default CMS;
