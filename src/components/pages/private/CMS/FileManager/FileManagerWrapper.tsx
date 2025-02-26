import { getAllFilesAndFolders } from "@/actions/cms_action";
import React from "react";
import { Roles } from "@/types";
import ClientOnlyWrapper from "./client-only-wrapper";

const FileManagerWrapper = async ({ role }: { role: Roles }) => {
  const files = await getAllFilesAndFolders(role);
  return <ClientOnlyWrapper key={JSON.stringify(files)} files={files} />;
};

export default FileManagerWrapper;
