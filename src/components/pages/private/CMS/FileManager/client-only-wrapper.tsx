"use client";

import React, { useEffect, useState } from "react";
import LoadingFileManager from "./loading-file-manager";
import { FileManager } from "./file-manager";
import { Files_Folders } from "@/types";

const ClientOnlyWrapper = ({ files }: { files: Files_Folders }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, []);

  if (!isMounted) return <LoadingFileManager />;
  return <FileManager files={files} />;
};

export default ClientOnlyWrapper;
