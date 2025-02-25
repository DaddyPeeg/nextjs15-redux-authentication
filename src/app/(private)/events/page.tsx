import { isAuth } from "@/actions/util-action";
import ComingSoon from "@/components/pages/Upcomming";
import { redirect } from "next/navigation";
import React from "react";

export default async function EventsPage() {
  const { auth } = await isAuth();
  if (!auth) redirect("/login");
  return <ComingSoon />;
}
