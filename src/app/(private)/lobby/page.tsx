import { isAuth } from "@/actions/auth-action";
import Lobby from "@/components/pages/private/Lobby";
import { redirect } from "next/navigation";

export default async function LobbyPage() {
  const { auth } = await isAuth();
  if (!auth) redirect("/login");
  return <Lobby />;
}
