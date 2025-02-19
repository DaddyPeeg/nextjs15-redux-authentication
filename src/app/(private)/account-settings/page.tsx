import { getSession } from "@/actions/auth-action";
import AccountSettings from "@/components/pages/private/AccountSettings";
import { redirect } from "next/navigation";
import React from "react";

export default async function AccountSettingPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <section className="flex-1 p-4">
      <div className="w-full max-w-7xl mx-auto">
        <h1>Account Settings Page</h1>
        <AccountSettings />
      </div>
    </section>
  );
}
