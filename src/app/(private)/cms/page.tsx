import { isAuth } from "@/actions/auth-action";
import CMS from "@/components/pages/private/CMS";
import FileManagerWrapper from "@/components/pages/private/CMS/FileManagerWrapper";
import ImageUploader from "@/components/pages/private/CMS/ImageUploader";
import LoadingFileManager from "@/components/pages/private/CMS/loading-file-manager";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export default async function CMSPage() {
  const { admin } = await isAuth();
  if (!admin) redirect("/login");
  return (
    <CMS
      fileManager={
        <Suspense fallback={<LoadingFileManager />}>
          <FileManagerWrapper />
        </Suspense>
      }
      imageUploader={<ImageUploader />}
    />
  );
}
