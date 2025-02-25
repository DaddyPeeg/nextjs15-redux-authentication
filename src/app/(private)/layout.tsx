import { getSession } from "@/actions/util-action";
import Topnav from "@/components/Topnav";
import { CurrentAuthUserState, Roles } from "@/types";
import ReduxProvider from "@/providers/redux-provider-client";
import Footer from "@/components/pages/landing/Footer";

const PrivateRoutesLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getSession();
  const user: CurrentAuthUserState = {
    id: session?.user.id as string,
    email: session?.user.email as string,
    picture: session?.user.image as string,
    role: session?.user.role as Roles,
  };

  return (
    <ReduxProvider user={session ? user : undefined}>
      <main className="flex flex-col min-h-screen">
        <Topnav />
        {children}
        <Footer />
      </main>
    </ReduxProvider>
  );
};

export default PrivateRoutesLayout;
