import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance

import * as auth_schema from "@/db/schema/auth-schema";
import { nextCookies } from "better-auth/next-js";
import { sendEmail } from "@/actions/email";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: auth_schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to_name: user.name,
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
