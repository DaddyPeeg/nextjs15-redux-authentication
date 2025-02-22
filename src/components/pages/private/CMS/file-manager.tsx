"use client";

import React, { useState } from "react";
import { FileList } from "./file-list";
import { NewItemForm } from "./new-item-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type FileItem = {
  id: string;
  name: string;
  type: "file" | "folder";
  parentId: string | null;
};

export function FileManager() {
  const [items, setItems] = useState<FileItem[]>([
    { id: "1", name: "Documents", type: "folder", parentId: null },
    { id: "2", name: "Images", type: "folder", parentId: null },
    { id: "3", name: "report.docx", type: "file", parentId: null },
    { id: "4", name: "Work", type: "folder", parentId: "1" },
    { id: "5", name: "Personal", type: "folder", parentId: "1" },
    { id: "6", name: "budget.xlsx", type: "file", parentId: "1" },
    { id: "7", name: "vacation.jpg", type: "file", parentId: "2" },
    { id: "8", name: "profile.png", type: "file", parentId: "2" },
    { id: "9", name: "project_plan.pdf", type: "file", parentId: "4" },
    { id: "10", name: "todo.txt", type: "file", parentId: "5" },
  ]);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [showNewItemForm, setShowNewItemForm] = useState(false);

  const addItem = (name: string, type: "file" | "folder") => {
    const newItem: FileItem = {
      id: Date.now().toString(),
      name,
      type,
      parentId: currentFolder,
    };
    setItems([...items, newItem]);
    setShowNewItemForm(false);
  };

  const renameItem = (id: string, newName: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

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
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">File Manager</h1>
        <Button onClick={() => setShowNewItemForm(true)}>New Item</Button>
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
      {showNewItemForm && (
        <NewItemForm
          onSubmit={addItem}
          onCancel={() => setShowNewItemForm(false)}
        />
      )}
      <FileList
        items={currentItems}
        onRename={renameItem}
        onDelete={deleteItem}
        onNavigate={navigateToFolder}
      />
    </div>
  );
}
