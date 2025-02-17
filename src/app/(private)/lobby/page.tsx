import { getSession } from "@/actions/auth-action";
import Lobby from "@/components/pages/Lobby";
import { redirect } from "next/navigation";

export default async function LobbyPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return <Lobby />;
}
