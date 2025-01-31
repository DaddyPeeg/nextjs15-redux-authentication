import { z } from "zod";

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export type LoginReturnType = {
  errors?: {
    email?: string[] | undefined;
    password?: string[] | undefined;
    general?: string[] | undefined;
  };
  email?: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
};

export type CurrentAuthUserState = {
  id: string;
  email: string;
  profilePicUrl: string;
  firstName: string;
  lastName: string;
};

export type UserProviderState = {
  data: CurrentAuthUserState | null;
};

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});
