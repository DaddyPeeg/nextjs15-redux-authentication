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
  picture: string;
};

export type AuthUserState = {
  data: CurrentAuthUserState | null;
};

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export const passwordSchema = z
  .object({
    token: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  name: z.string().min(3, {
    message: "Name must be provided",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});
