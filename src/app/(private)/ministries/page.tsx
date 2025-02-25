import { isAuth } from "@/actions/auth-action";
import ComingSoon from "@/components/pages/Upcomming";
import { redirect } from "next/navigation";
import React from "react";

export default async function MinistriesPage() {
  const { auth } = await isAuth();
  if (!auth) redirect("/login");
  return <ComingSoon />;
}
