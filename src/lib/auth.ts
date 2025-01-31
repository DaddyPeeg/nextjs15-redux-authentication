"use server";

import { cookies } from "next/headers";
import { decrypt } from "./session";

export const isAuthenticated = async (): Promise<Boolean> => {
  try {
    const sessionToken = (await cookies()).get("auth-session")?.value;

    const payload = await decrypt(sessionToken);

    if (!payload) {
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const currentAuthUserId = async (): Promise<string> => {
  try {
    const sessionToken = (await cookies()).get("auth-session")?.value;

    const payload = await decrypt(sessionToken);

    if (!payload) throw Error("JWT Error");
    return payload.userId as string;
  } catch (e) {
    throw Error("Something went wrong!");
  }
};
