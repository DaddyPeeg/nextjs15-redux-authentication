import { ScrollArea } from "@/components/ui/scroll-area";
import { FileItem } from "./file-item";
import { Loader, Loader2 } from "lucide-react";
import React from "react";

type FileListProps = {
  items: Array<{
    id: string;
    name: string;
    type: "file" | "folder";
    url?: string;
  }>;
  onRename: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
  onNavigate: (id: string | null) => void;
};

export function FileList({
  items,
  onRename,
  onDelete,
  onNavigate,
}: FileListProps) {
  return (
    <div className="bg-neutral-50 rounded-md border shadow-md h-[30rem] overflow-hidden">
      <ScrollArea className="w-full h-full px-4 py-2 space-y-2">
        {items.map((item, key) => (
          <React.Fragment key={item.id}>
            <FileItem
              item={item}
              onRename={onRename}
              onDelete={onDelete}
              onNavigate={onNavigate}
            />
            {key + 1 < items.length && <hr />}
          </React.Fragment>
        ))}
      </ScrollArea>
    </div>
  );
}
