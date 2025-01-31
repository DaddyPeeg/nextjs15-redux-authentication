"use client";

import { Loader2, LogInIcon } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center gap-2 disabled:bg-indigo-400 items-center"
    >
      Login
      {pending ? (
        <Loader2 className="animate-spin size-6 shrink-0" />
      ) : (
        <LogInIcon className="shrink-0 size-6" />
      )}
    </button>
  );
};

export default SubmitBtn;
