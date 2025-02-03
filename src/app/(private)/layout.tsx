import Topnav from "@/components/Topnav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { jwtDecode } from "jwt-decode";

const PrivateRoutesLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();
  const role = await getPermission("create:content");

  return (
    <main>
      <Topnav
        user={
          user
            ? {
                ...user,
                perm: {
                  permissionName: "create:content",
                  grant: role,
                },
              }
            : undefined
        }
        isAdmin={role?.isGranted}
      />
      {children}
    </main>
  );
};

export default PrivateRoutesLayout;
