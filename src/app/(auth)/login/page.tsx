import { isAuthenticated } from "@/lib/auth";
import Login from "./_component/login";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const isAuth = await isAuthenticated();
  if (isAuth) redirect("/dashboard");
  return <Login />;
}
