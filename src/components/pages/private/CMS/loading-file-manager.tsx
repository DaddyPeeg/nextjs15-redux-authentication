import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingFileManager = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 flex-col md:flex-row">
        <Skeleton className="h-[28px] w-[121px] bg-neutral-200 self-start" />
        <div className="flex items-center gap-2 self-start my-4 md:my-0 md:self-auto ">
          <Skeleton className="h-[40px] w-28 bg-neutral-200" />
          <Skeleton className="h-[40px] w-28 bg-neutral-200" />
          <Skeleton className="size-[40px] bg-neutral-200" />
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Skeleton className="h-[35px] w-[76px] bg-neutral-200" />
        <Skeleton className="h-[14px] w-16 bg-neutral-200" />
        <Skeleton className="h-[14px] w-16 bg-neutral-200" />
      </div>
      <Skeleton className="w-full h-[30rem] bg-neutral-200" />
    </>
  );
};

export default LoadingFileManager;
