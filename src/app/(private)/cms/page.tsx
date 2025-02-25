import { getSession } from "@/actions/auth-action";
import CMS from "@/components/pages/private/CMS";
import FileManagerWrapper from "@/components/pages/private/CMS/FileManagerWrapper";
import ImageUploader from "@/components/pages/private/CMS/ImageUploader";
import LoadingFileManager from "@/components/pages/private/CMS/loading-file-manager";
import { hasPermission } from "@/lib/RBAC";
import { Roles } from "@/types";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export default async function CMSPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  if (
    !hasPermission(
      {
        id: session.user.id,
        email: session.user.email,
        picture: session.user.image || "",
        role: session.user.role as Roles,
      },
      "view:cms"
    )
  ) {
    redirect("/lobby");
  }

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
