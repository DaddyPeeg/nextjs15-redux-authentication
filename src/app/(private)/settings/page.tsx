import { isAuthenticated } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function SettingsPage() {
  const isAuth = await isAuthenticated();
  if (!isAuth) return redirect("/login");
  return <h1 className="text-3xl m-4">Settings</h1>;
}
