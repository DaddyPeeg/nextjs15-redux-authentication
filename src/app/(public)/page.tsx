import { getSession } from "@/actions/util-action";
import LandingPage from "@/components/pages/landing";

export default async function Landing() {
  const session = await getSession();

  return <LandingPage session={session} />;
}
