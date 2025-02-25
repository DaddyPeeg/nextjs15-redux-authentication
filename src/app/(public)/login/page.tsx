import React from "react";
import Login from "./_components/login";
import { getSession } from "@/actions/util-action";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await getSession();
  if (user) redirect("/lobby");
  return <Login />;
}
