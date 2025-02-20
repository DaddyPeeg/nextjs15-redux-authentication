"use client";

import { forgotPassword } from "@/actions/user-actions";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useActionState, useState, useEffect } from "react";

export default function ForgotPasswordPage() {
  const [state, forgotPasswordAction, isPending] = useActionState(
    forgotPassword,
    null
  );
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (state?.success) {
      setTimer(60); // Set timer to 60 seconds
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state?.success]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <form
          action={forgotPasswordAction}
          className="w-full max-w-md space-y-2"
        >
          <h1 className="text-2xl font-bold text-center mb-6">
            Forgot Password
          </h1>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              defaultValue={state?.prevData?.email as string}
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded disabled:bg-neutral-100"
              required
              disabled={timer > 0 || isPending}
            />
          </div>
          {state?.error?.message && (
            <p className="text-sm text-red-500">{state?.error?.message}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex justify-center items-center disabled:bg-blue-400"
            disabled={isPending || timer > 0}
          >
            {timer > 0 ? `Try again in ${timer}s` : "Reset Password"}
            {isPending && (
              <Loader2 className="ml-2 animate-spin shrink-0 size-6" />
            )}
          </button>
          {state?.success && (
            <div className="bg-green-500/10 border-green-500 border px-4">
              <p className="text-sm text-green-600">{state?.message}</p>
            </div>
          )}
        </form>
        <div className="flex justify-between mt-4">
          <Link className="text-sm  text-blue-500 underline" href={"/login"}>
            Login
          </Link>
          <Link className="text-sm text-blue-500 underline" href={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
