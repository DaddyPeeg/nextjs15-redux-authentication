import { getSession } from "@/actions/auth-action";
import ComingSoon from "@/components/pages/Upcomming";
import { hasPermission } from "@/lib/RBAC";
import { Roles } from "@/types";

import { redirect } from "next/navigation";
import React from "react";

export default async function LessonsPage() {
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
      "view:lessons"
    )
  ) {
    redirect("/lobby");
  }
  return <ComingSoon />;
}
