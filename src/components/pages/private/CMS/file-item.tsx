"use client";

import {
  AnchorHTMLAttributes,
  ReactNode,
  useOptimistic,
  useState,
  useTransition,
} from "react";
import { File, Folder, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileItem as FileItemType } from "./file-manager";
import { cn } from "@/lib/utils";
import { Files_Folders } from "@/types";

type FileItemProps = {
  confirm: () => Promise<unknown>;
  item: FileItemType;
  isCreating: boolean;
  onRename: (id: number, newName: string) => void;
  onDelete: (id: number) => void;
  onNavigate: (id: number | null) => void;
};

export function FileItem({
  confirm,
  item,
  isCreating,
  onRename,
  onDelete,
  onNavigate,
}: FileItemProps) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [isDeletingRenaming, startDeletingRenaming] = useTransition();

  const handleRename = () => {
    startDeletingRenaming(async () => {
      onRename(item.id, newName);
      setNewName("");
    });
    setIsRenaming(false);
  };

  const handleDelete = async (id: number) => {
    const ok = await confirm();
    if (!ok) return;
    startDeletingRenaming(async () => {
      onDelete(id);
    });
  };

  const handleItemClick = () => {
    if (item.type === "folder") {
      onNavigate(item.id);
    }
  };

  const isLoading = isCreating || isDeletingRenaming;

  return (
    <OpenFileLink
      isDeletingRenaming={isLoading}
      type={item.type}
      url={item.url ?? undefined}
    >
      <div
        className={cn(
          "flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer pointer-events-auto",
          { "text-neutral-400 pointer-events-none": isLoading }
        )}
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
            <span>{newName || item.name}</span>
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
                setNewName(item.name);
              }}
            >
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(item.id);
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
  isDeletingRenaming,
  ...props
}: {
  type: "file" | "folder";
  url?: string;
  isDeletingRenaming: boolean;
  children: ReactNode;
}) => {
  if (type === "file" && url)
    return (
      <a
        className={cn("", {
          "pointer-events-none": isDeletingRenaming,
        })}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {children}
      </a>
    );

  return <>{children}</>;
};
