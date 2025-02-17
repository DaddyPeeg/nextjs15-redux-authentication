import { getSession } from "@/actions/auth-action";

import { redirect } from "next/navigation";
import React from "react";

export default async function LessonsPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return <h1 className="text-3xl m-4">Lessons</h1>;
}
