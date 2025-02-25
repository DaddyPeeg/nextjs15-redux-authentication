"use client";

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
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            CMS Dashboard
          </h1>
          <div className="border-b border-gray-200">
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
                Slider Images
              </button>
            </nav>
          </div>
        </div>
        {activeTab === "files" ? fileManager : imageUploader}
      </div>
    </div>
  );
}

export default CMS;
