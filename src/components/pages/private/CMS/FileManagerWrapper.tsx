import { getAllFilesAndFolders } from "@/actions/cms_action";
import React from "react";
import { FileManager } from "./file-manager";

const FileManagerWrapper = async () => {
  const files = await getAllFilesAndFolders();
  return <FileManager key={JSON.stringify(files)} files={files} />;
};

export default FileManagerWrapper;
