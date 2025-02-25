"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSession = async () =>
  await auth.api.getSession({
    headers: await headers(),
  });

export const isAuth = async () => {
  const session = await getSession();
  return {
    auth: () => Boolean(session),
    member: () => session?.user.role === "member",
    admin: () => session?.user.role === "admin",
  };
};
