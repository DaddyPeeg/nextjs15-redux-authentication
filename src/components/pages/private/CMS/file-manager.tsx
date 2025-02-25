"use client";

import React, { useState, useTransition } from "react";
import { FileList } from "./file-list";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FolderPlus, RefreshCw } from "lucide-react";
import NewFileDialog from "./new-file-dialog";
import { Files_Folders } from "@/types";
import {
  createNewFileFolder,
  deleteFileFolder,
  refreshGetAllFilesAndFolders,
  renameFileFolder,
} from "@/actions/cms_action";
import { cn } from "@/lib/utils";
import { useConfirm } from "@/hooks/use-confirm";

export type FileItem = {
  id: number;
  name: string;
  type: "file" | "folder";
  parentId: number | null;
  url: string | null;
  createdAt: Date;
};

export function FileManager({ files }: { files: Files_Folders }) {
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure",
    "Deleting this item will also remove its children. Proceed?"
  );
  const [items, setItems] = useState<Files_Folders>(() => files);
  const [currentFolder, setCurrentFolder] = useState<number | null>(() => {
    const storedFolder = localStorage.getItem("currentFolder");
    const parsedFolder =
      storedFolder !== null && !isNaN(Number(storedFolder))
        ? Number(storedFolder)
        : null;
    return parsedFolder;
  });
  const [isRefreshing, startRefreshing] = useTransition();
  const [isCreating, startCreating] = useTransition();

  const addItem = async (
    name: string,
    type: "file" | "folder",
    url?: string
  ) => {
    startCreating(async () => {
      try {
        const newItem = {
          name,
          type,
          parentId: currentFolder ? Number(currentFolder) : null,
          url: type === "file" ? url || null : null,
        };
        await createNewFileFolder(newItem);
      } catch (e) {
        console.error(e);
      }
    });
  };

  const renameItem = async (id: number, newName: string) => {
    try {
      await renameFileFolder(id, newName);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      const children = items.filter((files) => files.parentId === id);
      if (children.length > 0) {
        await deleteFileFolder(id, children);
        return;
      }
      await deleteFileFolder(id);
    } catch (e) {
      console.error(e);
    }
  };

  const navigateToFolder = (folderId: number | null) => {
    localStorage.setItem("currentFolder", `${folderId}`);
    setCurrentFolder(folderId);
  };

  const navigateBack = () => {
    const parentFolder = items.find((item) => item.id === currentFolder);
    localStorage.setItem(
      "currentFolder",
      `${parentFolder ? parentFolder.parentId : null}`
    );
    setCurrentFolder(parentFolder ? parentFolder.parentId : null);
  };

  const handleRefresh = async () => {
    startRefreshing(async () => {
      try {
        const data = await refreshGetAllFilesAndFolders();
        setItems(data);
      } catch (e) {
        console.log(e);
      }
    });
  };

  const getCurrentPath = () => {
    const path: FileItem[] = [];
    let currentId = currentFolder;

    while (currentId) {
      const folder = items.find((item) => item.id === currentId);
      if (folder) {
        path.unshift(folder);
        currentId = folder.parentId;
      } else {
        break;
      }
    }

    return path;
  };

  const currentItems = items
    .filter((item) => item.parentId === currentFolder)
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "folder" ? -1 : 1;
      }

      return a.name.localeCompare(b.name);
    });
  const currentPath = getCurrentPath();

  const isLoadingData = isRefreshing || isCreating;

  return (
    <>
      <div className="flex justify-between items-center mb-4 flex-col md:flex-row">
        <h1 className="text-xl font-bold self-start md:self-auto">
          File Manager
        </h1>
        <div className="flex items-center gap-2 self-start my-4 md:my-0 md:self-auto ">
          <NewFileDialog isCreating={isLoadingData} addItem={addItem} />
          <Button
            onClick={() => addItem("New Folder", "folder")}
            className="items-center"
            disabled={isLoadingData}
          >
            New Folder <FolderPlus className="shrink-0 size-6" />
          </Button>
          <Button
            disabled={isLoadingData}
            onClick={handleRefresh}
            variant="ghost"
            size={"icon"}
          >
            <RefreshCw
              className={cn("shrink-0 size-6 transition-transform", {
                "animate-spin": isRefreshing,
              })}
            />
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={navigateBack}
          disabled={!currentFolder}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToFolder(null)}
          >
            Root
          </Button>
          {currentPath.map((folder) => (
            <React.Fragment key={folder.id}>
              <span>/</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateToFolder(folder.id)}
              >
                {folder.name}
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>
      <FileList
        confirm={confirm}
        isCreating={isCreating}
        isRefreshing={isRefreshing}
        items={currentItems}
        onRename={renameItem}
        onDelete={deleteItem}
        onNavigate={navigateToFolder}
      />
      <ConfirmDialog />
    </>
  );
}
