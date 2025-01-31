import { isAuthenticated } from "@/lib/auth";

import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const isAuth = await isAuthenticated();
  if (!isAuth) redirect("/login");
  return <h1 className="text-3xl m-4">Dashboard</h1>;
}
