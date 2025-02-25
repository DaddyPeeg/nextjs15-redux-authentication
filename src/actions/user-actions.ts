"use server";

import { db } from "@/db";
import { auth } from "@/lib/auth";
import { loginSchema, passwordSchema, signupSchema } from "@/types";
import { account, user } from "@/db/schema/auth-schema";
import { and, eq } from "drizzle-orm";

export const login = async (prevState: unknown, formData: FormData) => {
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

    const users = await db
      .select({
        id: user.id,
        email: user.email,
        emailVerfied: user.emailVerified,
        password: account.password,
      })
      .from(user)
      .where(eq(user.email, validatedFields.data.email))
      .leftJoin(
        account,
        and(eq(user.id, account.userId), eq(account.providerId, "credential"))
      )
      .then((res) => res[0]);

    if (!users) {
      return {
        success: false,
        error: {
          message: "Invalid Email or Password",
        },
        prevData: {
          email: data.email,
          password: data.password,
        },
      };
    }

    if (!users.password) {
      await auth.api.forgetPassword({
        body: {
          email: validatedFields.data.email,
          redirectTo: "/reset-password",
        },
      });
      return {
        success: false,
        error: {
          message:
            "Account exists without a credential provider. Check your email to set a password.",
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
  } catch (error: unknown) {
    const err = error as { message: string; cause: { message: string } };
    return {
      success: false,
      error: { message: err.cause.message ?? err.message },
      prevData: {
        email: data.email,
        password: data.password,
      },
    };
  }
};

export const signup = async (prevState: unknown, formData: FormData) => {
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
  } catch (error: unknown) {
    const err = error as { message: string; cause: { message: string } };
    return {
      success: false,
      error: { message: err.cause.message ?? err.message },
      prevData: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    };
  }
};

export const forgotPassword = async (
  prevState: unknown,
  formData: FormData
) => {
  const data = Object.fromEntries(formData);
  try {
    const validatedFields = loginSchema.pick({ email: true }).safeParse(data);

    if (!validatedFields.success) {
      return {
        success: false,
        error: {
          message: "Invalid Fields",
        },
        prevData: {
          email: data.email,
        },
      };
    }

    const users = await db
      .select({
        email: user.email,
      })
      .from(user)
      .where(eq(user.email, validatedFields.data.email))
      .then((res) => res[0]);

    if (!users) {
      return {
        success: false,
        error: {
          message: "Invalid Email",
        },
        prevData: {
          email: data.email,
        },
      };
    }

    await auth.api.forgetPassword({
      body: {
        email: validatedFields.data.email,
        redirectTo: "/reset-password",
      },
    });
    return {
      success: true,
      message: "Please check your email for a password reset instruction.",
    };
  } catch (error: unknown) {
    const err = error as { message: string; cause: { message: string } };
    return {
      success: false,
      error: { message: err.cause.message ?? err.message },
      prevData: {
        email: data.email,
      },
    };
  }
};

export const resetPassword = async (prevState: unknown, formData: FormData) => {
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
  } catch (error: unknown) {
    const err = error as { message: string; cause: { message: string } };
    return {
      success: false,
      error: { message: err.cause.message ?? err.message },
      prevData: {
        token: data.token,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
    };
  }
};
