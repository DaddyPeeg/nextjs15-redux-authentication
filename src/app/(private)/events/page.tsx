import { getSession } from "@/actions/auth-action";
import ComingSoon from "@/components/pages/Upcomming";
import { redirect } from "next/navigation";
import React from "react";

export default async function EventsPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return <ComingSoon />;
}
