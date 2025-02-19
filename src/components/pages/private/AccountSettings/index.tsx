"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const user = useSelector((state: RootState) => state.currentUser.data);
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default AccountSettings;
