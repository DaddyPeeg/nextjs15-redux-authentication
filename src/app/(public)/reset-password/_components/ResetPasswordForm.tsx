"use client";
import { resetPassword } from "@/actions/user-actions";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useActionState } from "react";

interface ForgotPasswordFormProps {
  token: string;
}

const ForgotPasswordForm = ({ token }: ForgotPasswordFormProps) => {
  const [state, resetPasswordAction, isPending] = useActionState(
    resetPassword,
    null
  );

  if (state?.success) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Forgot Password</h2>
        </div>
        <form action={resetPasswordAction} className="space-y-4">
          <input
            type="text"
            defaultValue={token || (state?.prevData?.token as string)}
            name="token"
            hidden
          />
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
              defaultValue={state?.prevData?.password as string}
              required
              minLength={6}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border rounded-md"
              defaultValue={state?.prevData?.confirmPassword as string}
              required
              minLength={6}
            />
          </div>

          {state?.error?.message && (
            <div className="text-red-500 text-sm flex flex-col gap-y-1">
              {Array.isArray(state.error.message) ? (
                state.error.message.map((mes, mesKey) =>
                  mes.errors.map((error: string, errKey: number) => (
                    <p key={`error-key-${mesKey}-${errKey}`}>{error}</p>
                  ))
                )
              ) : (
                <p>{state.error.message}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-400 disabled:hover:bg-blue-400"
            disabled={isPending}
          >
            Reset Password
            {isPending && (
              <Loader2 className="animate-spin shrink-0 ml-2 size-6" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
