"use client";

import { ReactNode, useState } from "react";
import { File, Folder, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type FileItemProps = {
  item: {
    id: string;
    name: string;
    type: "file" | "folder";
    url?: string;
  };
  onRename: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
  onNavigate: (id: string | null) => void;
};

export function FileItem({
  item,
  onRename,
  onDelete,
  onNavigate,
}: FileItemProps) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(item.name);

  const handleRename = () => {
    onRename(item.id, newName);
    setIsRenaming(false);
  };

  const handleItemClick = () => {
    if (item.type === "folder") {
      onNavigate(item.id);
    }
  };

  return (
    <OpenFileLink type={item.type} url={item.url}>
      <div
        className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
        onClick={handleItemClick}
      >
        <div className="flex items-center space-x-2">
          {item.type === "file" ? <File size={20} /> : <Folder size={20} />}
          {isRenaming ? (
            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleRename}
              onKeyPress={(e) => e.key === "Enter" && handleRename()}
              autoFocus
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <span>{item.name}</span>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setIsRenaming(true);
              }}
            >
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </OpenFileLink>
  );
}

const OpenFileLink = ({
  type,
  url,
  children,
}: {
  type: "file" | "folder";
  url?: string;
  children: ReactNode;
}) => {
  if (type === "file" && url)
    return (
      <a target="_blank" rel="noopener noreferrer" href={url}>
        {children}
      </a>
    );

  return <>{children}</>;
};
