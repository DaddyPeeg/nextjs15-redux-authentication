"use client";

import { login } from "@/actions/auth-actions";
import React, { useActionState } from "react";
import SubmitBtn from "./submit-btn";

const Login = () => {
  const [state, loginAction] = useActionState(login, null);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {state?.errors?.general && (
          <p className="text-xs text-red-400">* {state.errors.general}</p>
        )}
        <form action={loginAction} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={state?.email as string}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.errors?.email && (
              <p className="text-xs text-red-400">* {state.errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={state?.password as string}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {state?.errors?.password && (
              <p className="text-xs text-red-400">* {state.errors.password}</p>
            )}
          </div>
          <div>
            <SubmitBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
