"use server";

import { testUser } from "@/constants";
import { currentAuthUserId } from "@/lib/auth";
import { CurrentAuthUserState } from "@/types";

export const getCurrentUser =
  async (): Promise<CurrentAuthUserState | null> => {
    try {
      const currentUserId = await currentAuthUserId();

      if (!currentUserId) throw Error("User not Authenticated");

      // TODO: QUERY FROM DB BY USERID
      return testUser;
    } catch (e) {
      return null;
    }
  };
