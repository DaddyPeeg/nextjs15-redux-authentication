"use client";

import { useActionState } from "react";
import { FcGoogle } from "react-icons/fc";

import { authClient } from "@/lib/auth-client";
import { login } from "@/actions/user-actions";
import { ArrowLeft, Loader2, X } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [state, loginAction, isPending] = useActionState(login, null);

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/lobby",
      },
      {
        onError: (ctx: any) => {
          console.error(ctx.error.message ?? "Something went wrong.");
        },
      }
    );
  };

  if (state?.success) {
    redirect("/lobby");
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-tr from-neutral-300 via-neutral-50 to-neutral-50 isolate overflow-hidden">
      <div className="max-w-md w-full  sm:bg-white rounded-lg sm:shadow-md sm:relative overflow-hidden isolate p-4">
        <Link
          className="sm:float-right flex items-center text-sm bg-neutral-50 w-fit px-2 sm:px-1 py-1 rounded-full shadow-sm border"
          href={"/"}
        >
          <X className="size-4 hidden sm:block" />
          <ArrowLeft className="mr-2 sm:hidden block size-4 text-blue-600" />
          <p className="sm:hidden block text-blue-600">Back</p>
        </Link>
        <div className="absolute bg-transparent backdrop-blur-sm inset-0 z-[-1]" />
        <div className="absolute size-48 -top-12 -left-12 z-[-2]">
          <Image
            src="/icons/cfc-logo.png"
            className="size-full object-contain"
            priority
            fill
            alt="cfcIcon"
          />
        </div>
        <div className="absolute size-48 -bottom-12 -right-12 z-[-2]">
          <Image
            src="/icons/g12-logo.png"
            className="size-full object-contain"
            priority
            fill
            alt="cfcIcon"
          />
        </div>
        <div className="space-y-8 p-4">
          <div className="text-center">
            <h2 className="text-2xl text-black font-montserrat tracking-tighter font-bold">
              CFCG12 Account Sign in
            </h2>
          </div>
          <form className="mt-8 space-y-6" action={loginAction}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:text-neutral-500"
                  placeholder="Email address"
                  defaultValue={state?.prevData?.email as string}
                  disabled={isPending}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:text-neutral-500"
                  placeholder="Password"
                  defaultValue={state?.prevData?.password as string}
                  disabled={isPending}
                  minLength={3}
                />
              </div>
            </div>
            {state?.error?.message && (
              <span className="text-red-500 text-xs">
                {state.error.message}
              </span>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent items-center text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
                disabled={isPending}
              >
                Sign in
                {isPending && <Loader2 className="ml-2 animate-spin" />}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-500 sm:border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral-500 sm:bg-white rounded-full sm:text-gray-500 text-white">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
            </div>
            <p className="text-sm text-center mt-2 text-black ">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
            <Link href="/forgot-password">
              <p className="text-sm mt-4 text-blue-500 underline">
                Forgot your Password?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
