import React from "react";
import ForgotPasswordForm from "./_components/ResetPasswordForm";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { token } = await searchParams;

  return (
    <div>
      <ForgotPasswordForm token={token as string} />
    </div>
  );
}
