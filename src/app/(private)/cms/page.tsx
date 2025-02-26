import { getSession } from "@/actions/util-action";
import CMS from "@/components/pages/private/CMS";
import FileManagerWrapper from "@/components/pages/private/CMS/FileManager/FileManagerWrapper";
import ImageUploader from "@/components/pages/private/CMS/BulletinManager/ImageUploader";
import LoadingFileManager from "@/components/pages/private/CMS/FileManager/loading-file-manager";
import { Roles } from "@/types";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export default async function CMSPage() {
  const session = await getSession();
  if (!session || session.user.role !== "admin") redirect("/login");
  return (
    <CMS
      fileManager={
        <Suspense fallback={<LoadingFileManager />}>
          <FileManagerWrapper role={session.user.role as Roles} />
        </Suspense>
      }
      imageUploader={<ImageUploader />}
    />
  );
}
