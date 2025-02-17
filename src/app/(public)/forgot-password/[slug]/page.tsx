import { forgotPassword } from "@/actions/user-actions";
import React from "react";

export default async function ForgotPasswordPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  try {
    const decodedEmail = decodeURIComponent(slug) + ".com";
    console.log("Processing reset for email:", decodedEmail);

    if (!decodedEmail.includes("@")) {
      throw new Error("Invalid email format");
    }

    await forgotPassword(decodedEmail);
    return (
      <div className="p-4 text-center">
        <h1>Password Reset Email Sent</h1>
        <p>Please check your email for further instructions.</p>
      </div>
    );
  } catch (error) {
    console.error("Password reset error:", error);
    return (
      <div className="p-4 text-center text-red-500">
        <h1>Error</h1>
        <p>Invalid or expired password reset link.</p>
      </div>
    );
  }
}
