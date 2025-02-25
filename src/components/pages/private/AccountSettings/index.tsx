"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const user = useSelector((state: RootState) => state.currentUser.data);
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <pre className="break-words text-wrap">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
};

export default AccountSettings;
