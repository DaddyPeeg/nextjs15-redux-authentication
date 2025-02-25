import { isAuth } from "@/actions/util-action";
import AccountSettings from "@/components/pages/private/AccountSettings";
import { redirect } from "next/navigation";
import React from "react";

export default async function AccountSettingPage() {
  const { auth } = await isAuth();
  if (!auth) redirect("/login");
  return (
    <section className="flex-1 px-4 py-6">
      <div className="w-full max-w-7xl mx-auto">
        <h1>Account Settings Page</h1>
        <AccountSettings />
      </div>
    </section>
  );
}
