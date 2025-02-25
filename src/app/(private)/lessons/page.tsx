import { isAuth } from "@/actions/util-action";
import ComingSoon from "@/components/pages/Upcomming";

import { redirect } from "next/navigation";
import React from "react";

export default async function LessonsPage() {
  const { member } = await isAuth();
  if (!member) redirect("/lobby");
  return <ComingSoon />;
}
