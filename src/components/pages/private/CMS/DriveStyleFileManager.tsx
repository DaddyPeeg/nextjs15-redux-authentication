"use client";

import React, { useState } from "react";
import { FileList } from "./file-list";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FolderPlus } from "lucide-react";
import NewFileDialog from "./new-file-dialog";

type FileItem = {
  id: string;
  name: string;
  type: "file" | "folder";
  parentId: string | null;
} & ({ type: "file"; url: string } | { type: "folder"; url?: never });

export function FileManager() {
  const [items, setItems] = useState<FileItem[]>([
    { id: "1", name: "Documents", type: "folder", parentId: null },
    { id: "2", name: "Images", type: "folder", parentId: "4" },
    { id: "3", name: "report.docx", type: "file", parentId: null, url: "" },
    { id: "4", name: "Work", type: "folder", parentId: "1" },
    { id: "5", name: "Personal", type: "folder", parentId: "1" },
    { id: "6", name: "budget.xlsx", type: "file", parentId: "1", url: "" },
    { id: "7", name: "vacation.jpg", type: "file", parentId: "2", url: "" },
    { id: "8", name: "profile.png", type: "file", parentId: "2", url: "" },
    { id: "9", name: "project_plan.pdf", type: "file", parentId: "4", url: "" },
    { id: "10", name: "todo.txt", type: "file", parentId: "5", url: "" },
  ]);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  // TODO: Add Action
  const addItem = (name: string, type: "file" | "folder", url?: string) => {
    const newItem = {
      id: Date.now().toString(),
      name,
      type,
      parentId: currentFolder,
      ...(type === "file" ? { url } : {}),
    } as FileItem;
    setItems([...items, newItem]);
  };

  // TODO:Rename Action
  const renameItem = (id: string, newName: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  // TODO:Delete Action
  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id && item.parentId !== id));
  };

  const navigateToFolder = (folderId: string | null) => {
    setCurrentFolder(folderId);
  };

  const navigateBack = () => {
    const parentFolder = items.find((item) => item.id === currentFolder);
    setCurrentFolder(parentFolder ? parentFolder.parentId : null);
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

  const currentItems = items.filter((item) => item.parentId === currentFolder);
  const currentPath = getCurrentPath();

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 flex-col md:flex-row">
        <h1 className="text-xl font-bold self-start md:self-auto">
          File Manager
        </h1>
        <div className="flex items-center gap-2 self-start my-4 md:my-0 md:self-auto ">
          <NewFileDialog addItem={addItem} />
          <Button
            onClick={() => addItem("New Folder", "folder")}
            className="items-center"
          >
            New Folder <FolderPlus className="shrink-0 size-6" />
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
          {currentPath.map((folder, index) => (
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
        items={currentItems}
        onRename={renameItem}
        onDelete={deleteItem}
        onNavigate={navigateToFolder}
      />
    </div>
  );
}
