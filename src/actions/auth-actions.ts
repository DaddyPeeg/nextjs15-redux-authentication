"use server";

import { testUser } from "@/constants";
import { createSession } from "@/lib/session";
import { LoginReturnType, loginSchema } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  prevState: any,
  formData: FormData
): Promise<LoginReturnType> {
  const formObject = Object.fromEntries(formData);
  const result = loginSchema.safeParse(formObject);
  if (!result.success) {
    console.error("Failed to Login");
    return {
      errors: result.error.flatten().fieldErrors,
      email: formObject?.email,
      password: formObject?.password,
    };
  }

  // TODO: Database query.
  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    console.error("Failed to Login");
    return {
      errors: {
        general: ["Email or Password didn't match!"],
      },
      email: email,
      password: password,
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}

export async function logout() {
  try {
    (await cookies()).delete("auth-session");
    redirect("/login");
  } catch (e: any) {
    console.error(e.message);
    return {
      message: "Something went wrong",
    };
  }
}
