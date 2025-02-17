"use server";

import { auth } from "@/lib/auth";
import { loginSchema, passwordSchema, signupSchema } from "@/types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    const validatedFields = loginSchema.safeParse(data);
    if (!validatedFields.success) {
      return {
        success: false,
        error: {
          message: "Invalid Fields",
        },
        prevData: {
          email: data.email,
          password: data.password,
        },
      };
    }

    await auth.api.signInEmail({
      body: {
        email: data.email as string,
        password: data.password as string,
      },
    });

    return {
      success: true,
    };
  } catch (error: any) {
    return {
      success: false,
      error: { message: error.message },
      prevData: {
        email: data.email,
        password: data.password,
      },
    };
  }
};

export const signup = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    const validatedFields = signupSchema.safeParse(data);
    if (!validatedFields.success) {
      return {
        success: false,
        error: {
          message: "Invalid Fields",
        },
        prevData: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      };
    }

    await auth.api.signUpEmail({
      body: {
        email: data.email as string,
        password: data.password as string,
        name: data.name as string,
      },
    });
  } catch (error: any) {
    return {
      success: false,
      error: { message: error.message },
      prevData: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    };
  }
};

export const forgotPassword = async (email: string) => {
  if (!email) {
    return {};
  }
  await auth.api.forgetPassword({
    body: {
      email,
      redirectTo: "/reset-password",
    },
  });
};

export const resetPassword = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    const validatedFields = passwordSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        success: false,
        error: {
          message: Object.entries(
            validatedFields.error?.flatten().fieldErrors
          ).map(([field, errors]) => ({ field, errors })),
        },
        prevData: {
          token: data.token,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
      };
    }
    await auth.api.resetPassword({
      body: {
        token: validatedFields.data.token,
        newPassword: validatedFields.data.password,
      },
    });
    return {
      success: true,
    };
  } catch (error: any) {
    return {
      success: false,
      error: { message: error.message },
      prevData: {
        token: data.token,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
    };
  }
  // if (!token) {
  //   return {};
  // }
  // await auth.api.resetPassword({
  //   body: {
  //     newPassword: password,
  //     token,
  //   },
  // });
};
