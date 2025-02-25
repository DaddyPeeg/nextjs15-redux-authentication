import { ScrollArea } from "@/components/ui/scroll-area";
import { FileItem } from "./file-item";
import React from "react";
import { Files_Folders } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

type FileListProps = {
  confirm: () => Promise<unknown>;
  isCreating: boolean;
  isRefreshing: boolean;
  items: Files_Folders;
  onRename: (id: number, newName: string) => void;
  onDelete: (id: number) => void;
  onNavigate: (id: number | null) => void;
};

export function FileList({
  confirm,
  isCreating,
  isRefreshing,
  items,
  onRename,
  onDelete,
  onNavigate,
}: FileListProps) {
  return (
    <div className="bg-neutral-50 rounded-md border shadow-md h-[30rem] overflow-hidden">
      <ScrollArea className="w-full h-full px-4 py-2 space-y-2">
        {!isRefreshing
          ? items.map((item, key) => (
              <React.Fragment key={item.id}>
                <FileItem
                  confirm={confirm}
                  isCreating={isCreating}
                  item={item}
                  onRename={onRename}
                  onDelete={onDelete}
                  onNavigate={onNavigate}
                />
                {key + 1 < items.length && <hr />}
              </React.Fragment>
            ))
          : Array.from({ length: 6 }).map((_, key) => (
              <Skeleton
                className="flex justify-between items-center p-2 bg-neutral-100 h-[52px] w-full"
                style={{
                  marginTop: key > 0 ? "0.2rem" : "0px",
                }}
                key={`loading-item-${key}`}
              >
                <div className="flex items-center ">
                  <Skeleton className="size-6 rounded-full mr-2 bg-neutral-200" />
                  <Skeleton className="h-[16px] w-32 bg-neutral-200" />
                </div>
                <Skeleton className="size-6 mr-2 rounded-full bg-neutral-200" />
              </Skeleton>
            ))}
      </ScrollArea>
    </div>
  );
}

{
  /* <React.Fragment key={`skeleton-${key}`}>
<Skeleton className="w-full h-24 bg-neutral-100" />
{key + 1 < items.length && <hr />}
</React.Fragment> */
}
