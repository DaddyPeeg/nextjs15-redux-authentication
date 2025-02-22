import { getSession } from "@/actions/auth-action";
import ComingSoon from "@/components/pages/Upcomming";
import { hasPermission } from "@/lib/RBAC";
import { CurrentAuthUserState, Roles } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

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
  return <ComingSoon />;
}
