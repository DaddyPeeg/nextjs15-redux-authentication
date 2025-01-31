"use server";

import { getCurrentUser } from "@/actions/user-actions";
import Topnav from "@/components/Topnav";

const PrivateRoutesLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getCurrentUser();
  console.log("wewew");
  return (
    <main>
      <Topnav user={user || undefined} />
      {children}
    </main>
  );
};

export default PrivateRoutesLayout;
